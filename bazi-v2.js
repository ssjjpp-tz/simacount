/**
 * 潇龙霞八字黄历 v2.0
 * 增加黄历宜忌和日运分析
 */

// ==================== 基础数据 ====================
const TIAN_GAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const DI_ZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const WU_XING = ['木', '木', '火', '火', '土', '土', '金', '金', '水', '水'];
const ZHI_WU_XING = ['水', '土', '木', '木', '土', '火', '火', '土', '金', '金', '土', '水'];
const GAN_COLORS = ['mu', 'mu', 'huo', 'huo', 'tu', 'tu', 'jin', 'jin', 'shui', 'shui'];
const SHI_SHEN = ['比肩', '劫财', '食神', '伤官', '偏财', '正财', '七杀', '正官', '偏印', '正印'];
const NAYIN = [
    '海中金', '炉中火', '大林木', '路旁土', '剑锋金', '山头火',
    '涧下水', '城头土', '白蜡金', '杨柳木', '泉中水', '屋上土',
    '霹雳火', '松柏木', '长流水', '砂中金', '山下火', '平地木',
    '壁上土', '金箔金', '覆灯火', '天河水', '大驿土', '钗钏金',
    '桑柘木', '大溪水', '沙中土', '天上火', '石榴木', '大海水'
];

// 黄历宜忌数据
const YI_JI_DATA = {
    // 十二建星对应宜忌
    jianXing: {
        '建': { yi: ['出行', '上任', '求职'], ji: ['嫁娶', '安葬'] },
        '除': { yi: ['清洁', '治病', '除旧'], ji: ['上任', '签约'] },
        '满': { yi: ['祭祀', '祈福'], ji: ['嫁娶', '求财'] },
        '平': { yi: ['修造', '动土'], ji: ['出行', '求医'] },
        '定': { yi: ['嫁娶', '签约', '交易'], ji: ['出行', '变动'] },
        '执': { yi: ['捕捉', '狩猎'], ji: ['嫁娶', '开业'] },
        '破': { yi: ['治病', '拆毁'], ji: ['嫁娶', '签约', '开业'] },
        '危': { yi: ['祭祀', '祈福'], ji: ['出行', '嫁娶'] },
        '成': { yi: ['开业', '签约', '嫁娶', '出行'], ji: ['诉讼'] },
        '收': { yi: ['收获', '纳财'], ji: ['出行', '安葬'] },
        '开': { yi: ['开业', '出行', '嫁娶'], ji: ['安葬'] },
        '闭': { yi: ['收藏', '修补'], ji: ['开业', '出行', '嫁娶'] }
    },
    
    // 二十八宿对应宜忌
    xiu: {
        '角': { yi: ['嫁娶', '出行', '修造'], ji: ['安葬'] },
        '亢': { yi: ['嫁娶', '祭祀'], ji: ['出行', '掘井'] },
        '氐': { yi: ['嫁娶', '出行', '开市'], ji: ['安葬'] },
        '房': { yi: ['嫁娶', '祭祀', '出行'], ji: ['掘井'] },
        '心': { yi: ['祭祀', '祈福'], ji: ['嫁娶', '安葬'] },
        '尾': { yi: ['祭祀', '求财'], ji: ['嫁娶', '出行'] },
        '箕': { yi: ['祭祀', '祈福'], ji: ['安葬', '嫁娶'] },
        '斗': { yi: ['祭祀', '求医'], ji: ['嫁娶', '出行'] },
        '牛': { yi: ['祭祀', '祈福'], ji: ['嫁娶', '安葬'] },
        '女': { yi: ['祭祀', '裁衣'], ji: ['嫁娶', '动土'] },
        '虚': { yi: ['祭祀', '祈福'], ji: ['嫁娶', '出行'] },
        '危': { yi: ['祭祀', '祈福'], ji: ['嫁娶', '出行'] },
        '室': { yi: ['嫁娶', '祭祀', '修造'], ji: ['出行'] },
        '壁': { yi: ['嫁娶', '祭祀'], ji: ['掘井'] },
        '奎': { yi: ['嫁娶', '祭祀'], ji: ['安葬'] },
        '娄': { yi: ['嫁娶', '祭祀'], ji: ['安葬'] },
        '胃': { yi: ['嫁娶', '祭祀'], ji: ['安葬'] },
        '昴': { yi: ['祭祀', '祈福'], ji: ['嫁娶', '安葬'] },
        '毕': { yi: ['嫁娶', '祭祀'], ji: ['出行'] },
        '觜': { yi: ['祭祀', '祈福'], ji: ['嫁娶', '安葬'] },
        '参': { yi: ['嫁娶', '祭祀'], ji: ['安葬'] },
        '井': { yi: ['祭祀', '祈福'], ji: ['嫁娶', '安葬'] },
        '鬼': { yi: ['祭祀', '祈福'], ji: ['嫁娶', '出行'] },
        '柳': { yi: ['祭祀', '祈福'], ji: ['嫁娶', '安葬'] },
        '星': { yi: ['祭祀', '祈福'], ji: ['嫁娶', '安葬'] },
        '张': { yi: ['嫁娶', '祭祀'], ji: ['安葬'] },
        '翼': { yi: ['祭祀', '祈福'], ji: ['嫁娶', '安葬'] },
        '轸': { yi: ['嫁娶', '出行'], ji: ['安葬'] }
    }
};

// ==================== 初始化 ====================
function initSelectors() {
    const now = new Date();
    
    // 出生日期选择器
    initDateSelect('birthYear', 'birthMonth', 'birthDay', 1900, 2100, now.getFullYear(), now.getMonth() + 1, now.getDate());
    initTimeSelect('birthHour', 'birthMinute');
    
    // 测算日期选择器（默认今天）
    initDateSelect('targetYear', 'targetMonth', 'targetDay', 1900, 2100, now.getFullYear(), now.getMonth() + 1, now.getDate());
    
    // 性别选择样式
    document.querySelectorAll('.gender-option').forEach(opt => {
        opt.addEventListener('click', function() {
            document.querySelectorAll('.gender-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
            this.querySelector('input').checked = true;
        });
    });
}

function initDateSelect(yearId, monthId, dayId, startYear, endYear, defaultYear, defaultMonth, defaultDay) {
    const yearSelect = document.getElementById(yearId);
    const monthSelect = document.getElementById(monthId);
    const daySelect = document.getElementById(dayId);
    
    for (let y = startYear; y <= endYear; y++) {
        const opt = document.createElement('option');
        opt.value = y;
        opt.textContent = y + '年';
        if (y === defaultYear) opt.selected = true;
        yearSelect.appendChild(opt);
    }
    
    for (let m = 1; m <= 12; m++) {
        const opt = document.createElement('option');
        opt.value = m;
        opt.textContent = m + '月';
        if (m === defaultMonth) opt.selected = true;
        monthSelect.appendChild(opt);
    }
    
    const updateDays = () => {
        const y = parseInt(yearSelect.value);
        const m = parseInt(monthSelect.value);
        const daysInMonth = new Date(y, m, 0).getDate();
        const currentDay = daySelect.value;
        daySelect.innerHTML = '<option value="">日</option>';
        for (let d = 1; d <= daysInMonth; d++) {
            const opt = document.createElement('option');
            opt.value = d;
            opt.textContent = d + '日';
            if (d === defaultDay) opt.selected = true;
            daySelect.appendChild(opt);
        }
    };
    
    yearSelect.addEventListener('change', updateDays);
    monthSelect.addEventListener('change', updateDays);
    updateDays();
}

function initTimeSelect(hourId, minuteId) {
    const hourSelect = document.getElementById(hourId);
    const minuteSelect = document.getElementById(minuteId);
    const now = new Date();
    
    for (let h = 0; h <= 23; h++) {
        const opt = document.createElement('option');
        opt.value = h;
        opt.textContent = h + '时';
        if (h === now.getHours()) opt.selected = true;
        hourSelect.appendChild(opt);
    }
    
    for (let m = 0; m < 60; m += 5) {
        const opt = document.createElement('option');
        opt.value = m;
        opt.textContent = m + '分';
        minuteSelect.appendChild(opt);
    }
}

// ==================== 八字计算核心 ====================
function getYearPillar(year) {
    const ganIndex = (year - 4) % 10;
    const zhiIndex = (year - 4) % 12;
    return { gan: TIAN_GAN[ganIndex], zhi: DI_ZHI[zhiIndex], ganIndex, zhiIndex };
}

function getMonthPillar(year, month, yearGanIndex) {
    const zhiIndex = (month + 1) % 12;
    const yearGan = yearGanIndex % 5;
    let startGan;
    switch(yearGan) {
        case 0: case 5: startGan = 2; break;
        case 1: case 6: startGan = 4; break;
        case 2: case 7: startGan = 6; break;
        case 3: case 8: startGan = 8; break;
        case 4: case 9: startGan = 0; break;
        default: startGan = 2;
    }
    const ganIndex = (startGan + month - 1) % 10;
    return { gan: TIAN_GAN[ganIndex], zhi: DI_ZHI[zhiIndex], ganIndex, zhiIndex };
}

function getDayPillar(year, month, day) {
    const baseDate = new Date(1900, 0, 1);
    const targetDate = new Date(year, month - 1, day);
    const diffDays = Math.floor((targetDate - baseDate) / (1000 * 60 * 60 * 24));
    const ganIndex = ((diffDays % 10) + 10) % 10;
    const zhiIndex = ((diffDays % 12) + 12) % 12;
    return { gan: TIAN_GAN[ganIndex], zhi: DI_ZHI[zhiIndex], ganIndex, zhiIndex };
}

function getHourPillar(hour, dayGanIndex) {
    let zhiIndex;
    if (hour >= 23 || hour < 1) zhiIndex = 0;
    else if (hour >= 1 && hour < 3) zhiIndex = 1;
    else if (hour >= 3 && hour < 5) zhiIndex = 2;
    else if (hour >= 5 && hour < 7) zhiIndex = 3;
    else if (hour >= 7 && hour < 9) zhiIndex = 4;
    else if (hour >= 9 && hour < 11) zhiIndex = 5;
    else if (hour >= 11 && hour < 13) zhiIndex = 6;
    else if (hour >= 13 && hour < 15) zhiIndex = 7;
    else if (hour >= 15 && hour < 17) zhiIndex = 8;
    else if (hour >= 17 && hour < 19) zhiIndex = 9;
    else if (hour >= 19 && hour < 21) zhiIndex = 10;
    else zhiIndex = 11;
    
    const dayGan = dayGanIndex % 5;
    let startGan;
    switch(dayGan) {
        case 0: case 5: startGan = 0; break;
        case 1: case 6: startGan = 2; break;
        case 2: case 7: startGan = 4; break;
        case 3: case 8: startGan = 6; break;
        case 4: case 9: startGan = 8; break;
        default: startGan = 0;
    }
    const ganIndex = (startGan + zhiIndex) % 10;
    return { gan: TIAN_GAN[ganIndex], zhi: DI_ZHI[zhiIndex], ganIndex, zhiIndex };
}

function getShiShen(dayGanIndex, targetGanIndex) {
    const diff = (targetGanIndex - dayGanIndex + 10) % 10;
    return SHI_SHEN[diff];
}

function getWuXing(ganIndex, zhiIndex) {
    return { gan: WU_XING[ganIndex], zhi: ZHI_WU_XING[zhiIndex] };
}

function getNaYin(ganIndex, zhiIndex) {
    const gz = (ganIndex % 2 === zhiIndex % 2) ? 
        (ganIndex + zhiIndex) / 2 : 
        Math.floor((ganIndex + zhiIndex) / 2);
    return NAYIN[(gz + 1) % 30];
}

function getZhiColor(zhiIndex) {
    const colors = ['shui', 'tu', 'mu', 'mu', 'tu', 'huo', 'huo', 'tu', 'jin', 'jin', 'tu', 'shui'];
    return colors[zhiIndex];
}

// ==================== 黄历计算 ====================
function getJianXing(year, month, day) {
    // 十二建星：以月令地支为基准
    const monthZhi = (month + 1) % 12;
    const dayZhi = getDayPillar(year, month, day).zhiIndex;
    const jianXingList = ['建', '除', '满', '平', '定', '执', '破', '危', '成', '收', '开', '闭'];
    const offset = (dayZhi - monthZhi + 12) % 12;
    return jianXingList[offset];
}

function getXiu(year, month, day) {
    // 二十八宿简化算法
    const baseDate = new Date(2024, 0, 1); // 角宿
    const targetDate = new Date(year, month - 1, day);
    const diffDays = Math.floor((targetDate - baseDate) / (1000 * 60 * 60 * 24));
    const xiuList = ['角', '亢', '氐', '房', '心', '尾', '箕', '斗', '牛', '女', '虚', '危', '室', '壁', 
                     '奎', '娄', '胃', '昴', '毕', '觜', '参', '井', '鬼', '柳', '星', '张', '翼', '轸'];
    return xiuList[((diffDays % 28) + 28) % 28];
}

function getYiJi(year, month, day) {
    const jianXing = getJianXing(year, month, day);
    const xiu = getXiu(year, month, day);
    
    let yi = [...YI_JI_DATA.jianXing[jianXing].yi];
    let ji = [...YI_JI_DATA.jianXing[jianXing].ji];
    
    // 根据二十八宿补充宜忌
    const xiuYi = YI_JI_DATA.xiu[xiu].yi;
    const xiuJi = YI_JI_DATA.xiu[xiu].ji;
    
    yi = [...new Set([...yi, ...xiuYi])];
    ji = [...new Set([...ji, ...xiuJi])];
    
    return { jianXing, xiu, yi, ji };
}

// ==================== 日运分析 ====================
function getDayun(birthSiZhu, targetDayPillar, dayGanIndex) {
    const advice = [];
    const score = { overall: 0, career: 0, wealth: 0, love: 0, health: 0 };
    
    // 1. 日干与当日天干的关系
    const targetGan = targetDayPillar.gan;
    const targetGanIndex = targetDayPillar.ganIndex;
    const relation = getShiShen(dayGanIndex, targetGanIndex);
    
    switch(relation) {
        case '比肩':
            advice.push('今日适合与同事、朋友合作，但竞争激烈，需注意分寸。');
            score.overall += 70;
            score.career += 75;
            break;
        case '劫财':
            advice.push('今日财运波动，避免大额支出，注意保管财物。');
            score.overall += 60;
            score.wealth += 50;
            break;
        case '食神':
            advice.push('今日心情愉快，适合享受美食、娱乐休闲。');
            score.overall += 85;
            score.health += 80;
            break;
        case '伤官':
            advice.push('今日思维活跃，创意十足，但言语需谨慎，避免得罪人。');
            score.overall += 75;
            score.career += 80;
            break;
        case '偏财':
            advice.push('今日偏财运佳，可能有意外收获，适合投资理财。');
            score.overall += 90;
            score.wealth += 95;
            break;
        case '正财':
            advice.push('今日正财运稳，适合努力工作，踏实赚钱。');
            score.overall += 85;
            score.wealth += 90;
            break;
        case '七杀':
            advice.push('今日压力较大，需冷静应对挑战，避免冲动决策。');
            score.overall += 65;
            score.career += 70;
            break;
        case '正官':
            advice.push('今日贵人运佳，适合与领导、长辈沟通，可得提携。');
            score.overall += 90;
            score.career += 95;
            break;
        case '偏印':
            advice.push('今日适合学习新知识，独处思考，但需注意休息。');
            score.overall += 75;
            score.health += 70;
            break;
        case '正印':
            advice.push('今日有贵人相助，适合求学、考试、获取证书。');
            score.overall += 90;
            score.career += 85;
            break;
    }
    
    // 2. 五行分析
    const birthWuxing = countWuxing(birthSiZhu);
    const targetWuxing = WU_XING[targetGanIndex];
    
    // 简单的五行生克分析
    const wuxingSheng = { '木': '火', '火': '土', '土': '金', '金': '水', '水': '木' };
    const wuxingKe = { '木': '土', '土': '水', '水': '火', '火': '金', '金': '木' };
    
    if (wuxingSheng[birthWuxing.dayMaster] === targetWuxing) {
        advice.push('今日五行相生，精力充沛，适合主动出击。');
        score.overall += 10;
    } else if (wuxingKe[birthWuxing.dayMaster] === targetWuxing) {
        advice.push('今日五行相克，易感疲劳，宜低调行事，注意休息。');
        score.overall -= 5;
    }
    
    // 3. 综合建议
    if (score.overall >= 85) {
        advice.unshift('⭐⭐⭐⭐⭐ 今日运势极佳，把握机会，大胆前行！');
    } else if (score.overall >= 75) {
        advice.unshift('⭐⭐⭐⭐ 今日运势良好，按部就班即可。');
    } else if (score.overall >= 65) {
        advice.unshift('⭐⭐⭐ 今日运势平平，稳扎稳打，不宜冒险。');
    } else {
        advice.unshift('⭐⭐ 今日运势较弱，宜静不宜动，多休息少折腾。');
    }
    
    return { relation, advice, score };
}

function countWuxing(sizhu) {
    const count = { jin: 0, mu: 0, shui: 0, huo: 0, tu: 0 };
    const map = { '金': 'jin', '木': 'mu', '水': 'shui', '火': 'huo', '土': 'tu' };
    let dayMaster = '';
    
    sizhu.forEach((pillar, index) => {
        const wx = getWuXing(pillar.ganIndex, pillar.zhiIndex);
        count[map[wx.gan]]++;
        count[map[wx.zhi]]++;
        if (index === 2) dayMaster = wx.gan; // 日主
    });
    
    return { ...count, dayMaster };
}

// ==================== 主计算函数 ====================
function calculateAll() {
    // 获取出生信息
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const birthMonth = parseInt(document.getElementById('birthMonth').value);
    const birthDay = parseInt(document.getElementById('birthDay').value);
    const birthHour = parseInt(document.getElementById('birthHour').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    // 获取测算日期
    const targetYear = parseInt(document.getElementById('targetYear').value);
    const targetMonth = parseInt(document.getElementById('targetMonth').value);
    const targetDay = parseInt(document.getElementById('targetDay').value);
    
    if (!birthYear || !birthMonth || !birthDay || isNaN(birthHour)) {
        alert('请填写完整的出生信息');
        return;
    }
    if (!targetYear || !targetMonth || !targetDay) {
        alert('请填写测算日期');
        return;
    }
    
    // 计算出生八字
    const yearPillar = getYearPillar(birthYear);
    const monthPillar = getMonthPillar(birthYear, birthMonth, yearPillar.ganIndex);
    const dayPillar = getDayPillar(birthYear, birthMonth, birthDay);
    const hourPillar = getHourPillar(birthHour, dayPillar.ganIndex);
    const birthSiZhu = [yearPillar, monthPillar, dayPillar, hourPillar];
    
    // 计算测算日期八字
    const targetYearPillar = getYearPillar(targetYear);
    const targetMonthPillar = getMonthPillar(targetYear, targetMonth, targetYearPillar.ganIndex);
    const targetDayPillar = getDayPillar(targetYear, targetMonth, targetDay);
    
    // 显示结果
    displayResults(birthSiZhu, targetYearPillar, targetMonthPillar, targetDayPillar, dayPillar.ganIndex, targetYear, targetMonth, targetDay);
}

function displayResults(birthSiZhu, targetYearPillar, targetMonthPillar, targetDayPillar, dayGanIndex, year, month, day) {
    const resultSection = document.getElementById('result');
    resultSection.style.display = 'block';
    
    // 1. 显示八字命盘
    const sizhuRow = document.getElementById('sizhuRow');
    sizhuRow.innerHTML = '';
    birthSiZhu.forEach((pillar, index) => {
        const wuxing = getWuXing(pillar.ganIndex, pillar.zhiIndex);
        const td = document.createElement('td');
        td.innerHTML = `
            <div class="pillar">
                <div class="gan">${pillar.gan}<span class="wuxing-tag wuxing-${GAN_COLORS[pillar.ganIndex]}">${wuxing.gan}</span></div>
                <div class="zhi">${pillar.zhi}<span class="wuxing-tag wuxing-${getZhiColor(pillar.zhiIndex)}">${wuxing.zhi}</span></div>
            </div>
        `;
        sizhuRow.appendChild(td);
    });
    
    // 2. 显示十神
    const shishenFlow = document.getElementById('shishenFlow');
    shishenFlow.innerHTML = '';
    const labels = ['年柱', '月柱', '日柱（日主）', '时柱'];
    birthSiZhu.forEach((pillar, index) => {
        const shishen = index === 2 ? '日主' : getShiShen(dayGanIndex, pillar.ganIndex);
        const div = document.createElement('div');
        div.className = 'shishen-item';
        div.innerHTML = `
            <div class="shishen-name">${labels[index]}</div>
            <div class="shishen-gan">${pillar.gan}</div>
            <div style="font-size: 0.85em; color: #a0a0a0; margin-top: 5px;">${shishen}</div>
        `;
        shishenFlow.appendChild(div);
    });
    
    // 3. 显示测算日期八字
    const targetDateInfo = document.getElementById('targetDateInfo');
    targetDateInfo.innerHTML = `
        <div style="font-size: 1.3em; margin-bottom: 15px;">
            ${year}年${month}月${day}日
        </div>
        <div style="font-size: 1.8em; color: #d4af37; font-weight: bold;">
            ${targetYearPillar.gan}${targetYearPillar.zhi}年 
            ${targetMonthPillar.gan}${targetMonthPillar.zhi}月 
            ${targetDayPillar.gan}${targetDayPillar.zhi}日
        </div>
    `;
    
    // 4. 计算日运
    const dayun = getDayun(birthSiZhu, targetDayPillar, dayGanIndex);
    const dayunGrid = document.getElementById('dayunGrid');
    dayunGrid.innerHTML = `
        <div class="yun-card">
            <h4>💫 日主关系</h4>
            <div style="font-size: 1.5em; color: #f4e5c2; margin-bottom: 10px;">${dayun.relation}</div>
            <div style="font-size: 0.9em; color: #a0a0a0;">当日天干与你的关系</div>
        </div>
        <div class="yun-card">
            <h4>📊 综合评分</h4>
            <div style="font-size: 2em; color: #d4af37; font-weight: bold;">${dayun.score.overall}</div>
            <div style="font-size: 0.9em; color: #a0a0a0;">满分100分</div>
        </div>
        <div class="yun-card">
            <h4>💼 事业运</h4>
            <div style="font-size: 1.5em; color: #90ee90;">${dayun.score.career || 70}分</div>
            <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; margin-top: 8px;">
                <div style="width: ${dayun.score.career || 70}%; height: 100%; background: linear-gradient(90deg, #90ee90, #4caf50); border-radius: 3px;"></div>
            </div>
        </div>
        <div class="yun-card">
            <h4>💰 财运</h4>
            <div style="font-size: 1.5em; color: #ffd700;">${dayun.score.wealth || 70}分</div>
            <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; margin-top: 8px;">
                <div style="width: ${dayun.score.wealth || 70}%; height: 100%; background: linear-gradient(90deg, #ffd700, #ff8c00); border-radius: 3px;"></div>
            </div>
        </div>
    `;
    
    // 5. 黄历宜忌
    const yiJi = getYiJi(year, month, day);
    const yiList = document.getElementById('yiList');
    const jiList = document.getElementById('jiList');
    
    yiList.innerHTML = yiJi.yi.map(item => `<span class="tag">${item}</span>`).join('');
    jiList.innerHTML = yiJi.ji.map(item => `<span class="tag">${item}</span>`).join('');
    
    // 6. 综合建议
    const adviceText = document.getElementById('adviceText');
    adviceText.innerHTML = dayun.advice.map((text, index) => 
        `<p style="margin-bottom: 12px; ${index === 0 ? 'font-weight: bold; font-size: 1.1em;' : ''}">${text}</p>`
    ).join('');
    
    // 滚动到结果
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

// 初始化
window.addEventListener('DOMContentLoaded', initSelectors);
