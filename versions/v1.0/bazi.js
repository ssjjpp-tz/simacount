/**
 * 八字计算器核心算法
 * 潇龙霞出品
 */

// ==================== 基础数据 ====================

// 天干
const TIAN_GAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];

// 地支
const DI_ZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// 五行
const WU_XING = ['木', '木', '火', '火', '土', '土', '金', '金', '水', '水']; // 对应天干
const ZHI_WU_XING = ['水', '土', '木', '木', '土', '火', '火', '土', '金', '金', '土', '水']; // 对应地支

// 天干五行色
const GAN_COLORS = ['mu', 'mu', 'huo', 'huo', 'tu', 'tu', 'jin', 'jin', 'shui', 'shui'];

// 十神名称（以日干为中心）
const SHI_SHEN = ['比肩', '劫财', '食神', '伤官', '偏财', '正财', '七杀', '正官', '偏印', '正印'];

// 时辰对应表（23-1点为子时）
const SHI_CHEN = [
    { name: '子时', start: 23, end: 1 },
    { name: '丑时', start: 1, end: 3 },
    { name: '寅时', start: 3, end: 5 },
    { name: '卯时', start: 5, end: 7 },
    { name: '辰时', start: 7, end: 9 },
    { name: '巳时', start: 9, end: 11 },
    { name: '午时', start: 11, end: 13 },
    { name: '未时', start: 13, end: 15 },
    { name: '申时', start: 15, end: 17 },
    { name: '酉时', start: 17, end: 19 },
    { name: '戌时', start: 19, end: 21 },
    { name: '亥时', start: 21, end: 23 }
];

// 纳音五行
const NAYIN = [
    '海中金', '炉中火', '大林木', '路旁土', '剑锋金', '山头火',
    '涧下水', '城头土', '白蜡金', '杨柳木', '泉中水', '屋上土',
    '霹雳火', '松柏木', '长流水', '砂中金', '山下火', '平地木',
    '壁上土', '金箔金', '覆灯火', '天河水', '大驿土', '钗钏金',
    '桑柘木', '大溪水', '沙中土', '天上火', '石榴木', '大海水'
];

// 月份地支对应（正月为寅）
const YUE_ZHI = ['寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑'];

//  ==================== 初始化 ====================

function initSelectors() {
    const yearSelect = document.getElementById('year');
    const monthSelect = document.getElementById('month');
    const daySelect = document.getElementById('day');
    const hourSelect = document.getElementById('hour');
    const minuteSelect = document.getElementById('minute');
    
    // 年份选择器（1900-2100）
    for (let y = 1900; y <= 2100; y++) {
        const opt = document.createElement('option');
        opt.value = y;
        opt.textContent = y + '年';
        yearSelect.appendChild(opt);
    }
    
    // 月份选择器
    for (let m = 1; m <= 12; m++) {
        const opt = document.createElement('option');
        opt.value = m;
        opt.textContent = m + '月';
        monthSelect.appendChild(opt);
    }
    
    // 日期选择器（动态更新，先初始化为31天）
    updateDays();
    
    // 时辰选择器（0-23时）
    for (let h = 0; h <= 23; h++) {
        const opt = document.createElement('option');
        opt.value = h;
        opt.textContent = h + '时';
        hourSelect.appendChild(opt);
    }
    
    // 分钟选择器
    minuteSelect.appendChild(new Option('0分', '0'));
    for (let m = 0; m < 60; m += 5) {
        const opt = document.createElement('option');
        opt.value = m;
        opt.textContent = m + '分';
        minuteSelect.appendChild(opt);
    }
    
    // 监听年月变化更新日期
    yearSelect.addEventListener('change', updateDays);
    monthSelect.addEventListener('change', updateDays);
    
    // 设置默认值
    const now = new Date();
    yearSelect.value = now.getFullYear();
    monthSelect.value = now.getMonth() + 1;
    updateDays();
    daySelect.value = now.getDate();
    hourSelect.value = now.getHours();
}

function updateDays() {
    const year = parseInt(document.getElementById('year').value) || 2000;
    const month = parseInt(document.getElementById('month').value) || 1;
    const daySelect = document.getElementById('day');
    
    // 保留当前选择
    const currentDay = daySelect.value;
    
    // 清空
    daySelect.innerHTML = '<option value="">日</option>';
    
    // 获取该月天数
    const daysInMonth = new Date(year, month, 0).getDate();
    
    for (let d = 1; d <= daysInMonth; d++) {
        const opt = document.createElement('option');
        opt.value = d;
        opt.textContent = d + '日';
        daySelect.appendChild(opt);
    }
    
    // 恢复选择
    if (currentDay && currentDay <= daysInMonth) {
        daySelect.value = currentDay;
    }
}

// ==================== 八字计算核心 ====================

/**
 * 计算年柱
 * 年干 = (年份 - 3) % 10
 * 年支 = (年份 - 3) % 12
 */
function getYearPillar(year) {
    const ganIndex = (year - 4) % 10;
    const zhiIndex = (year - 4) % 12;
    return {
        gan: TIAN_GAN[ganIndex],
        zhi: DI_ZHI[zhiIndex],
        ganIndex: ganIndex,
        zhiIndex: zhiIndex
    };
}

/**
 * 计算月柱
 * 月支：正月为寅，依此类推
 * 月干：根据年干推算（年上起月法）
 * 甲己之年丙作首，乙庚之岁戊为头
 * 丙辛之岁寻庚起，丁壬壬位顺行流
 * 戊癸之年何方发，甲寅之上好追求
 */
function getMonthPillar(year, month, yearGanIndex) {
    // 月支索引（正月寅对应索引2，所以需要转换）
    const zhiIndex = (month + 1) % 12;
    
    // 月干计算
    const yearGan = yearGanIndex % 5;
    let startGan;
    switch(yearGan) {
        case 0: case 5: startGan = 2; break; // 甲己 -> 丙(2)
        case 1: case 6: startGan = 4; break; // 乙庚 -> 戊(4)
        case 2: case 7: startGan = 6; break; // 丙辛 -> 庚(6)
        case 3: case 8: startGan = 8; break; // 丁壬 -> 壬(8)
        case 4: case 9: startGan = 0; break; // 戊癸 -> 甲(0)
        default: startGan = 2;
    }
    const ganIndex = (startGan + month - 1) % 10;
    
    return {
        gan: TIAN_GAN[ganIndex],
        zhi: DI_ZHI[zhiIndex],
        ganIndex: ganIndex,
        zhiIndex: zhiIndex
    };
}

/**
 * 计算日柱
 * 使用简化算法：基于已知日期推算
 * 以1900年1月1日为基准（甲子日）
 */
function getDayPillar(year, month, day) {
    // 计算从1900年1月1日到目标日期的天数
    const baseDate = new Date(1900, 0, 1);
    const targetDate = new Date(year, month - 1, day);
    const diffDays = Math.floor((targetDate - baseDate) / (1000 * 60 * 60 * 24));
    
    // 甲子日为基准（索引0）
    const ganIndex = ((diffDays % 10) + 10) % 10;
    const zhiIndex = ((diffDays % 12) + 12) % 12;
    
    return {
        gan: TIAN_GAN[ganIndex],
        zhi: DI_ZHI[zhiIndex],
        ganIndex: ganIndex,
        zhiIndex: zhiIndex
    };
}

/**
 * 计算时柱
 * 时支根据小时确定
 * 时干根据日干推算（日上起时法）
 * 甲己还加甲，乙庚丙作初
 * 丙辛从戊起，丁壬庚子居
 * 戊癸何方发，壬子是真途
 */
function getHourPillar(hour, dayGanIndex) {
    // 确定时辰索引（0-11对应子到亥）
    let zhiIndex;
    if (hour >= 23 || hour < 1) zhiIndex = 0; // 子时
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
    else zhiIndex = 11; // 亥时
    
    // 时干计算
    const dayGan = dayGanIndex % 5;
    let startGan;
    switch(dayGan) {
        case 0: case 5: startGan = 0; break; // 甲己 -> 甲(0)
        case 1: case 6: startGan = 2; break; // 乙庚 -> 丙(2)
        case 2: case 7: startGan = 4; break; // 丙辛 -> 戊(4)
        case 3: case 8: startGan = 6; break; // 丁壬 -> 庚(6)
        case 4: case 9: startGan = 8; break; // 戊癸 -> 壬(8)
        default: startGan = 0;
    }
    const ganIndex = (startGan + zhiIndex) % 10;
    
    return {
        gan: TIAN_GAN[ganIndex],
        zhi: DI_ZHI[zhiIndex],
        ganIndex: ganIndex,
        zhiIndex: zhiIndex
    };
}

/**
 * 计算十神
 * 以日干为中心，与其他干支的关系
 */
function getShiShen(dayGanIndex, targetGanIndex) {
    const diff = (targetGanIndex - dayGanIndex + 10) % 10;
    return SHI_SHEN[diff];
}

/**
 * 获取五行
 */
function getWuXing(ganIndex, zhiIndex) {
    return {
        gan: WU_XING[ganIndex],
        zhi: ZHI_WU_XING[zhiIndex]
    };
}

/**
 * 计算纳音
 */
function getNaYin(ganIndex, zhiIndex) {
    // 纳音算法：(干支数 + 2) / 2 取整
    const gz = (ganIndex % 2 === zhiIndex % 2) ? 
        (ganIndex + zhiIndex) / 2 : 
        Math.floor((ganIndex + zhiIndex) / 2);
    return NAYIN[(gz + 1) % 30];
}

// ==================== 主计算函数 ====================

function calculateBazi() {
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);
    const hour = parseInt(document.getElementById('hour').value);
    
    if (!year || !month || !day || isNaN(hour)) {
        alert('请填写完整的出生日期和时间');
        return;
    }
    
    // 计算四柱
    const yearPillar = getYearPillar(year);
    const monthPillar = getMonthPillar(year, month, yearPillar.ganIndex);
    const dayPillar = getDayPillar(year, month, day);
    const hourPillar = getHourPillar(hour, dayPillar.ganIndex);
    
    const sizhu = [yearPillar, monthPillar, dayPillar, hourPillar];
    
    // 显示结果
    displayResult(sizhu, dayPillar.ganIndex);
}

function displayResult(sizhu, dayGanIndex) {
    const resultSection = document.getElementById('result');
    const sizhuRow = document.getElementById('sizhu-row');
    
    // 清空之前的内容
    sizhuRow.innerHTML = '';
    
    // 填充四柱
    sizhu.forEach((pillar, index) => {
        const wuxing = getWuXing(pillar.ganIndex, pillar.zhiIndex);
        const nayin = getNaYin(pillar.ganIndex, pillar.zhiIndex);
        
        const td = document.createElement('td');
        td.innerHTML = `
            <div class="pillar">
                <div class="gan">${pillar.gan}
                    <span class="wuxing-tag wuxing-${GAN_COLORS[pillar.ganIndex]}">${wuxing.gan}</span>
                </div>
                <div class="zhi">${pillar.zhi}
                    <span class="wuxing-tag wuxing-${getZhiColor(pillar.zhiIndex)}">${wuxing.zhi}</span>
                </div>
            </div>
        `;
        sizhuRow.appendChild(td);
    });
    
    // 日主
    const dayMaster = sizhu[2];
    document.getElementById('day-master').innerHTML = `
        <strong style="font-size: 1.5em; color: #f4e5c2;">${dayMaster.gan}${dayMaster.zhi}</strong>
        <br>五行：${getWuXing(dayMaster.ganIndex, dayMaster.zhiIndex).gan}
    `;
    
    // 五行统计
    const wuxingCount = countWuXing(sizhu);
    document.getElementById('wuxing-count').innerHTML = `
        金:${wuxingCount.jin} 木:${wuxingCount.mu} 水:${wuxingCount.shui} 
        火:${wuxingCount.huo} 土:${wuxingCount.tu}
    `;
    
    // 十神
    const shishenList = document.getElementById('shishen-list');
    shishenList.innerHTML = '';
    sizhu.forEach((pillar, index) => {
        if (index !== 2) { // 排除日主
            const shishenGan = getShiShen(dayGanIndex, pillar.ganIndex);
            const shishenZhi = '地支'; // 简化显示
            const tag = document.createElement('div');
            tag.className = 'shishen-tag';
            tag.textContent = `${pillar.gan}:${shishenGan}`;
            shishenList.appendChild(tag);
        }
    });
    
    // 纳音
    const nayinText = sizhu.map(p => getNaYin(p.ganIndex, p.zhiIndex)).join(' | ');
    document.getElementById('nayin').textContent = nayinText;
    
    // 显示结果区域
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

function getZhiColor(zhiIndex) {
    const colors = ['shui', 'tu', 'mu', 'mu', 'tu', 'huo', 'huo', 'tu', 'jin', 'jin', 'tu', 'shui'];
    return colors[zhiIndex];
}

function countWuXing(sizhu) {
    const count = { jin: 0, mu: 0, shui: 0, huo: 0, tu: 0 };
    const map = { '金': 'jin', '木': 'mu', '水': 'shui', '火': 'huo', '土': 'tu' };
    
    sizhu.forEach(pillar => {
        count[map[WU_XING[pillar.ganIndex]]]++;
        count[map[ZHI_WU_XING[pillar.zhiIndex]]]++;
    });
    
    return count;
}

// 初始化
window.addEventListener('DOMContentLoaded', initSelectors);
