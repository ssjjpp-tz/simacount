/**
 * 潇龙霞八字黄历 v2.1
 * 多语言支持、详细解读、更多算命功能
 */

// ==================== 多语言数据 ====================
const I18N = {
    zh: {
        title: '潇龙霞八字黄历 v2.1',
        subtitle: '八字命理 · 详细解读 · 多语言支持',
        birthInfo: '出生信息',
        targetDate: '测算日期',
        birthDate: '出生日期（阳历）',
        birthTime: '出生时间',
        gender: '性别',
        male: '男',
        female: '女',
        targetDateLabel: '要测算的日期',
        calcBtn: '开始测算',
        baziChart: '八字命盘',
        detailReading: '详细解读',
        dayRelation: '日主关系分析',
        career: '事业运势详解',
        wealth: '财运详解',
        love: '感情运势详解',
        health: '健康提示',
        fortuneScore: '今日运势评分',
        almanac: '黄历宜忌',
        yi: '宜',
        ji: '忌',
        moreFortune: '更多运势',
        shengxiao: '生肖运势',
        xingzuo: '星座运势',
        wuxing: '五行分析',
        dayun: '大运简批'
    },
    en: {
        title: 'Xiao Long Xia Bazi Calendar v2.1',
        subtitle: 'Destiny Analysis · Detailed Reading · Multi-Language',
        birthInfo: 'Birth Information',
        targetDate: 'Target Date',
        birthDate: 'Birth Date (Gregorian)',
        birthTime: 'Birth Time',
        gender: 'Gender',
        male: 'Male',
        female: 'Female',
        targetDateLabel: 'Date to Analyze',
        calcBtn: 'Calculate',
        baziChart: 'Bazi Chart',
        detailReading: 'Detailed Reading',
        dayRelation: 'Day Master Relation',
        career: 'Career Fortune',
        wealth: 'Wealth Fortune',
        love: 'Love Fortune',
        health: 'Health Tips',
        fortuneScore: 'Daily Fortune Score',
        almanac: 'Almanac',
        yi: 'Suitable',
        ji: 'Unsuitable',
        moreFortune: 'More Fortunes',
        shengxiao: 'Chinese Zodiac',
        xingzuo: 'Western Zodiac',
        wuxing: 'Five Elements',
        dayun: 'Decade Fortune'
    },
    ar: {
        title: 'تقويم باجوا شياو لونغ شيا v2.1',
        subtitle: 'التحليل المفصل · دعم متعدد اللغات',
        birthInfo: 'معلومات الميلاد',
        targetDate: 'التاريخ المطلوب',
        birthDate: 'تاريخ الميلاد (ميلادي)',
        birthTime: 'وقت الميلاد',
        gender: 'الجنس',
        male: 'ذكر',
        female: 'أنثى',
        targetDateLabel: 'تاريخ الحساب',
        calcBtn: 'احسب',
        baziChart: 'رسم الباجوا',
        detailReading: 'تحليل مفصل',
        dayRelation: 'علاقة يوم الميلاد',
        career: 'حظ المهنة',
        wealth: 'حظ المال',
        love: 'حظ الحب',
        health: 'نصائح الصحة',
        fortuneScore: 'تقييم الحظ اليومي',
        almanac: 'التقويم',
        yi: 'مناسب',
        ji: 'غير مناسب',
        moreFortune: 'المزيد من الحظ',
        shengxiao: 'البرج الصيني',
        xingzuo: 'البرج الغربي',
        wuxing: 'العناصر الخمسة',
        dayun: 'حظ العقد'
    }
};

// ==================== 详细解读数据 ====================
const DETAILED_READINGS = {
    '比肩': {
        title: '比肩日 - 自我提升之日',
        shortDesc: '比肩代表自我、同辈、朋友、竞争。今日与你日干相同，是比肩之日。',
        fullDesc: '比肩日适合与朋友聚会、团队合作，但也要注意竞争关系。今日你的独立性较强，适合独自完成任务。财运方面，比肩日容易有分财之象，大额支出需谨慎。感情上，单身者可通过朋友介绍认识新对象，有伴侣者要注意避免因小事争执。比肩日也是自我反思的好时机，可以总结过去的经验教训，为未来做规划。',
        career: '适合团队协作，共同完成项目。可以与同事讨论想法，集思广益。但要注意不要与同事产生直接竞争，保持和谐的工作氛围。今日也适合学习新技能，提升自我竞争力。',
        wealth: '财运平稳，但易有分财之虑。不宜进行大额投资或借贷，小额消费无碍。今日适合制定理财计划，为未来的财务目标做准备。如果有合伙生意，要注意账目清晰。',
        love: '朋友可能成为介绍人，多参加社交活动有机会遇到心仪对象。已有伴侣者要注意沟通方式，避免因固执己见而产生矛盾。今日适合与伴侣一起参加朋友聚会。',
        health: '注意脾胃健康，饮食规律。比肩日容易因工作压力而影响消化系统，建议少食多餐，避免暴饮暴食。适当运动有助于缓解压力。'
    },
    '劫财': {
        title: '劫财日 - 谨慎理财之日',
        shortDesc: '劫财代表竞争、破耗、冲动。今日天干与你不和，为劫财之日。',
        fullDesc: '劫财日需要特别注意财务管理，避免冲动消费和投资。今日容易遇到竞争对手，工作上要保持冷静，不要被他人激怒。虽然劫财日有破耗之象，但也是锻炼应变能力的好时机。感情上，劫财日容易产生争执，建议多忍让。保持低调，避免与人正面冲突，是度过劫财日的最佳策略。',
        career: '竞争激烈，需保持冷静。可能会遇到强劲的竞争对手，但不要被激怒，用实力说话。提防小人背后使坏，重要文件要备份。今日不宜做重大职业决定。',
        wealth: '财运不佳，避免借贷和投资。守财为上，今日容易有意外的支出，要做好预算控制。不宜借钱给他人，也要小心财务诈骗。',
        love: '易有争执，多忍让。不宜做重大感情决定，如分手或表白。已有伴侣者要学会退让，避免因小事伤害感情。单身者今日桃花运不佳。',
        health: '注意交通安全，避免剧烈运动。劫财日容易发生小意外，出行要小心。情绪容易波动，建议通过冥想或瑜伽来平复心情。'
    },
    '食神': {
        title: '食神日 - 享乐休闲之日',
        shortDesc: '食神代表享受、口福、才华、温和。今日为食神之日，适合放松身心。',
        fullDesc: '食神日是享受生活的好日子，适合品尝美食、休闲娱乐。你的创造力和表达力今日较强，适合从事创作、演讲等工作。食神也代表福气，今日人缘好，容易得到他人帮助。财运方面，食神生财，有小财入账的可能。感情上单身的你可能会遇到聊得来的对象，有伴侣的适合享受二人世界。',
        career: '创意十足，适合创作、策划。表达能力增强，适合演讲、汇报、谈判。今日人缘好，容易得到同事和上司的帮助。适合提出新想法，容易被接受。',
        wealth: '小财可求，正财运佳。可能会有意外的收入或奖金。今日也适合通过才华技能赚钱，如接私活、出售作品等。但不要贪心，见好就收。',
        love: '桃花运旺，适合约会、表白。今日魅力值提升，容易吸引异性注意。有伴侣者适合享受浪漫时光，可以安排一顿美食或看场电影。',
        health: '注意肠胃，享受美食但勿过量。食神日容易暴饮暴食，要注意控制饮食。适合尝试新的健康饮食方式。'
    },
    '伤官': {
        title: '伤官日 - 创意迸发之日',
        shortDesc: '伤官代表才华、表现、傲气、变革。今日思维活跃，创意无限。',
        fullDesc: '伤官日思维活跃，创意无限，适合头脑风暴和创新工作。但要注意言语表达，伤官日容易说话直率而得罪人。今日适合挑战权威、提出新想法，但也要注意方式方法。感情上，伤官日追求浪漫，但也容易挑剔对方。保持谦逊，避免因过于自信而得罪人，是伤官日的成功之道。',
        career: '创意爆发，适合提案、创新。可以挑战传统做法，提出改革方案。但要注意言语表达，不要过于直接而伤害他人。适合从事艺术、设计、写作等创意工作。',
        wealth: '偏财运佳，但风险也大。可以通过创意和才华赚钱，如写作、设计等。但投资需谨慎，不宜跟风。今日也适合学习理财知识。',
        love: '追求完美，易挑剔。对伴侣的要求可能会过高，要学会欣赏对方的优点。单身者眼光较高，不容易遇到满意的对象。',
        health: '注意呼吸道，多休息。伤官日容易用脑过度，要保证充足睡眠。适合户外散步，呼吸新鲜空气。'
    },
    '偏财': {
        title: '偏财日 - 意外收获之日',
        shortDesc: '偏财代表意外之财、机遇、社交。今日偏财日，机遇多多。',
        fullDesc: '偏财日是求财的好日子，容易有意外的收获和机会。今日社交运旺，适合拓展人脉、商务应酬。偏财也代表流动性财富，适合短期投资和灵活理财。但要注意，偏财来得快去得也快，见好就收。感情上，偏财日浪漫多情，适合约会。保持开放的心态，抓住每一个机会，是偏财日的致胜法宝。',
        career: '社交运佳，适合拓展人脉。参加行业活动或商务应酬，可能遇到贵人。有机会获得额外的收入或奖金。但要注意不要因为忙于社交而忽视了本职工作。',
        wealth: '偏财运极佳！把握机会，但别贪心。可能有意外之财，如中奖、红包、投资回报等。适合短期理财，但不宜投入过多。见好就收是今天的理财原则。',
        love: '浪漫多情，适合约会、送礼。今日魅力值爆表，容易吸引异性。可以给伴侣一个惊喜，或向心仪对象表白。单身者今日桃花运极旺。',
        health: '注意休息，别因应酬过度。偏财日社交活动多，要注意劳逸结合。饮酒要适量，保护肝脏。'
    },
    '正财': {
        title: '正财日 - 踏实工作之日',
        shortDesc: '正财代表正当收入、稳定、务实。今日正财日，踏实为上。',
        fullDesc: '正财日是踏实工作的好日子，适合处理日常事务、完成既定目标。今日财运稳定，付出即有回报。正财也代表责任感，今日你的责任心强，适合承担重要任务。感情上，正财日稳定踏实，适合谈婚论嫁。脚踏实地，一步一个脚印，是正财日的成功秘诀。',
        career: '踏实肯干，领导赏识。适合完成常规工作，稳扎稳打。你的努力会被上司看到，可能获得表扬或加薪。不宜冒险尝试新项目，专注于手头工作。',
        wealth: '正财运稳，多劳多得。工资收入稳定，可能会有绩效奖金。不宜投机取巧，踏实工作才是赚钱之道。今日适合制定长期储蓄计划。',
        love: '感情稳定，适合谈婚论嫁。可以给伴侣安全感，讨论未来的计划。单身者适合寻找长期稳定的关系，而非短暂的激情。',
        health: '身体康健，保持规律作息。正财日身心状态稳定，适合建立健康的生活习惯。'
    },
    '七杀': {
        title: '七杀日 - 挑战应对之日',
        shortDesc: '七杀代表压力、挑战、权威。今日七杀日，需要勇气。',
        fullDesc: '七杀日是充满挑战的日子，工作上可能面临压力或突发状况。但七杀也代表能力和魄力，今日你的应变能力将得到锻炼。面对挑战不要退缩，迎难而上才能成长。注意身体健康，七杀日容易疲劳。保持冷静，理性分析问题，是度过七杀日的关键。',
        career: '压力大，但成长快。可能面临紧急任务或突发状况，要保持冷静。迎难而上，你会发现自己的能力超出预期。适合处理危机和难题。',
        wealth: '风险大，保守理财。不宜进行高风险投资，守财为上。可能会有意外支出，要做好预算。',
        love: '易有矛盾，冷静沟通。压力可能会影响感情，要学会向伴侣倾诉。单身者今日不宜表白，容易受挫。',
        health: '注意减压，保证睡眠。七杀日容易疲劳，要注意休息。可以通过运动来释放压力。'
    },
    '正官': {
        title: '正官日 - 贵人相助之日',
        shortDesc: '正官代表权威、规则、贵人。今日正官日，贵人运旺。',
        fullDesc: '正官日是贵人运旺的日子，容易得到领导、长辈的帮助和赏识。今日适合处理正式事务、拜访重要人物。正官也代表规则，今日适合制定计划、遵守规矩。感情上，正官日稳重可靠，给人安全感。尊重规则，谦虚有礼，是正官日的成功之道。',
        career: '贵人运旺，易得提拔。与上司或长辈的沟通会很顺利，可以寻求他们的建议。适合参加正式场合，展现你的专业素养。',
        wealth: '财运平稳，适合长期规划。贵人可能带来赚钱的机会或信息。不宜投机取巧，稳健理财为佳。',
        love: '稳重可靠，给人安全感。适合见家长或讨论婚姻大事。单身者可能通过长辈介绍认识对象。',
        health: '身心平衡，状态良好。正官日精神状态佳，适合建立规律的生活习惯。'
    },
    '偏印': {
        title: '偏印日 - 学习思考之日',
        shortDesc: '偏印代表学习、思考、偏门。今日偏印日，适合独处。',
        fullDesc: '偏印日适合学习新知识、独处思考。今日你的洞察力强，适合研究、策划工作。偏印也代表独特视角，可能有新颖的想法。但要注意，偏印日容易胡思乱想，保持专注很重要。感情上，偏印日较为冷淡，需要主动沟通。独处充电，积蓄能量，是偏印日的主题。',
        career: '适合研究、策划。独特视角可能带来创新的解决方案。适合独立工作，不宜太多会议讨论。可以深入研究某个专业领域。',
        wealth: '偏门财运，谨慎尝试。可能通过学习新技能或专业知识来赚钱。不宜跟风投资，要有自己的判断。',
        love: '较为冷淡，需主动沟通。可能专注于工作或学习而忽略了伴侣。单身者今日桃花运一般。',
        health: '注意精神状态，多放松。偏印日容易焦虑，要学会放松。适合冥想、瑜伽等静心的活动。'
    },
    '正印': {
        title: '正印日 - 福泽深厚之日',
        shortDesc: '正印代表学识、贵人、福气。今日正印日，福星高照。',
        fullDesc: '正印日是福泽深厚的日子，容易得到贵人帮助，逢凶化吉。今日适合学习、考试、获取证书。正印也代表保护，今日有逢凶化吉之象。感情上，正印日温柔体贴，适合家庭聚会。保持感恩之心，回馈他人，是正印日的正确打开方式。',
        career: '逢凶化吉，贵人相助。遇到困难会有人主动帮忙。适合学习新知识或考取证书。长辈或老师可能给你重要建议。',
        wealth: '财运平稳，有贵人带财。可能会有长辈的经济支持或礼物。不宜冒险，稳健理财。',
        love: '温柔体贴，家庭和睦。适合家庭聚会或拜访长辈。单身者可能通过长辈介绍认识对象。',
        health: '身心安泰，状态上佳。正印日身心状态都很好，但要注意不要因此而懈怠。'
    }
};

// ==================== 基础数据 ====================
const TIAN_GAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const DI_ZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const WU_XING = ['木', '木', '火', '火', '土', '土', '金', '金', '水', '水'];
const ZHI_WU_XING = ['水', '土', '木', '木', '土', '火', '火', '土', '金', '金', '土', '水'];
const GAN_COLORS = ['mu', 'mu', 'huo', 'huo', 'tu', 'tu', 'jin', 'jin', 'shui', 'shui'];
const SHI_SHEN = ['比肩', '劫财', '食神', '伤官', '偏财', '正财', '七杀', '正官', '偏印', '正印'];
const SHENGXIAO = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];

// 生肖运势
const SHENGXIAO_FORTUNE = {
    '鼠': { desc: '机智灵活，善于应变', today: '今日思维敏捷，适合处理复杂问题。财运小有收获。' },
    '牛': { desc: '勤劳踏实，坚韧不拔', today: '今日稳扎稳打，付出即有回报。不宜冒进。' },
    '虎': { desc: '勇敢果断，有领导力', today: '今日气势如虹，但需防小人暗算。' },
    '兔': { desc: '温和善良，心思细腻', today: '今日人缘运佳，贵人暗中相助。宜社交。' },
    '龙': { desc: '自信强大，志向远大', today: '今日气势旺盛，适合大展拳脚。把握机会。' },
    '蛇': { desc: '智慧冷静，善于谋划', today: '今日宜静不宜动，多思考少行动。防口舌。' },
    '马': { desc: '热情奔放，自由不羁', today: '今日宜出行，远方有喜讯。但注意安全。' },
    '羊': { desc: '温和善良，富有同情心', today: '今日桃花运旺，感情甜蜜。宜约会。' },
    '猴': { desc: '聪明机智，善于变通', today: '今日创意无限，灵感迸发。宜创新。' },
    '鸡': { desc: '勤奋努力，追求完美', today: '今日事业运佳，工作表现突出。宜表现。' },
    '狗': { desc: '忠诚可靠，正义感强', today: '今日贵人运旺，朋友相助。宜合作。' },
    '猪': { desc: '善良淳朴，福气满满', today: '今日福星高照，诸事顺遂。宜享受。' }
};

// 星座运势
const XINGZUO_FORTUNE = {
    '白羊座': { desc: '热情冲动，勇往直前', today: '今日精力充沛，适合挑战新任务。注意控制脾气。' },
    '金牛座': { desc: '稳重务实，享受生活', today: '今日财运不错，适合理财规划。宜享受美食。' },
    '双子座': { desc: '聪明灵活，善于沟通', today: '今日社交运旺，适合拓展人脉。宜交流。' },
    '巨蟹座': { desc: '温柔顾家，情感丰富', today: '今日家庭运佳，适合陪伴家人。宜居家。' },
    '狮子座': { desc: '自信大方，领导力强', today: '今日事业运旺，展现才华的好时机。宜表现。' },
    '处女座': { desc: '追求完美，注重细节', today: '今日工作效率高，完美完成任务。宜专注。' },
    '天秤座': { desc: '优雅平衡，善于协调', today: '今日人际关系和谐，合作顺利。宜合作。' },
    '天蝎座': { desc: '深沉神秘，洞察力强', today: '今日直觉敏锐，相信你的判断。宜决策。' },
    '射手座': { desc: '乐观自由，热爱冒险', today: '今日宜出行，远方有好运。宜探索。' },
    '摩羯座': { desc: '务实上进，责任心强', today: '今日事业运佳，努力工作有回报。宜坚持。' },
    '水瓶座': { desc: '独立创新，思维独特', today: '今日创意无限，适合头脑风暴。宜创新。' },
    '双鱼座': { desc: '浪漫感性，富有想象力', today: '今日艺术灵感强，适合创作。宜创作。' }
};

let currentLang = 'zh';

// ==================== 语言切换 ====================
function changeLanguage() {
    currentLang = document.getElementById('langSelect').value;
    updatePageText();
}

function updatePageText() {
    const t = I18N[currentLang];
    if (!t) return;
    
    document.getElementById('pageTitle').textContent = t.title;
    document.getElementById('pageSubtitle').textContent = t.subtitle;
    document.getElementById('birthInfoTitle').textContent = t.birthInfo;
    document.getElementById('targetDateTitle').textContent = t.targetDate;
    document.getElementById('birthDateLabel').textContent = t.birthDate;
    document.getElementById('birthTimeLabel').textContent = t.birthTime;
    document.getElementById('genderLabel').textContent = t.gender;
    document.getElementById('maleText').textContent = t.male;
    document.getElementById('femaleText').textContent = t.female;
    document.getElementById('targetDateLabel').textContent = t.targetDateLabel;
    document.getElementById('calcBtn').textContent = t.calcBtn;
}

// ==================== 初始化 ====================
function init() {
    const now = new Date();
    initDateSelect('birthYear', 'birthMonth', 'birthDay', 1900, 2100, now.getFullYear(), now.getMonth() + 1, now.getDate());
    initTimeSelect('birthHour');
    initDateSelect('targetYear', 'targetMonth', 'targetDay', 1900, 2100, now.getFullYear(), now.getMonth() + 1, now.getDate());
    
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
        opt.textContent = y;
        if (y === defaultYear) opt.selected = true;
        yearSelect.appendChild(opt);
    }
    
    for (let m = 1; m <= 12; m++) {
        const opt = document.createElement('option');
        opt.value = m;
        opt.textContent = m;
        if (m === defaultMonth) opt.selected = true;
        monthSelect.appendChild(opt);
    }
    
    const updateDays = () => {
        const y = parseInt(yearSelect.value);
        const m = parseInt(monthSelect.value);
        const daysInMonth = new Date(y, m, 0).getDate();
        daySelect.innerHTML = '<option value="">日</option>';
        for (let d = 1; d <= daysInMonth; d++) {
            const opt = document.createElement('option');
            opt.value = d;
            opt.textContent = d;
            if (d === defaultDay) opt.selected = true;
            daySelect.appendChild(opt);
        }
    };
    
    yearSelect.addEventListener('change', updateDays);
    monthSelect.addEventListener('change', updateDays);
    updateDays();
}

function initTimeSelect(hourId) {
    const hourSelect = document.getElementById(hourId);
    const now = new Date();
    for (let h = 0; h <= 23; h++) {
        const opt = document.createElement('option');
        opt.value = h;
        opt.textContent = h + '时';
        if (h === now.getHours()) opt.selected = true;
        hourSelect.appendChild(opt);
    }
}

// ==================== 八字计算 ====================
function getYearPillar(year) {
    const ganIndex = (year - 4) % 10;
    const zhiIndex = (year - 4) % 12;
    return { gan: TIAN_GAN[ganIndex], zhi: DI_ZHI[zhiIndex], ganIndex, zhiIndex };
}

function getMonthPillar(year, month, yearGanIndex) {
    const zhiIndex = (month + 1) % 12;
    const yearGan = yearGanIndex % 5;
    let startGan = [2, 4, 6, 8, 0][yearGan] || 2;
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
    let zhiIndex = Math.floor(((hour + 1) % 24) / 2);
    const dayGan = dayGanIndex % 5;
    let startGan = [0, 2, 4, 6, 8][dayGan] || 0;
    const ganIndex = (startGan + zhiIndex) % 10;
    return { gan: TIAN_GAN[ganIndex], zhi: DI_ZHI[zhiIndex], ganIndex, zhiIndex };
}

function getShiShen(dayGanIndex, targetGanIndex) {
    return SHI_SHEN[(targetGanIndex - dayGanIndex + 10) % 10];
}

function getWuXing(ganIndex, zhiIndex) {
    return { gan: WU_XING[ganIndex], zhi: ZHI_WU_XING[zhiIndex] };
}

function getZhiColor(zhiIndex) {
    return ['shui', 'tu', 'mu', 'mu', 'tu', 'huo', 'huo', 'tu', 'jin', 'jin', 'tu', 'shui'][zhiIndex];
}

function getShengXiao(year) {
    return SHENGXIAO[(year - 4) % 12];
}

function getXingZuo(month, day) {
    const dates = [20, 19, 21, 20, 21, 21, 23, 23, 23, 23, 22, 22];
    const names = ['摩羯座', '水瓶座', '双鱼座', '白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座'];
    if (day < dates[month - 1]) return names[month - 1];
    return names[month % 12];
}

// ==================== 主计算函数 ====================
function calculateAll() {
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const birthMonth = parseInt(document.getElementById('birthMonth').value);
    const birthDay = parseInt(document.getElementById('birthDay').value);
    const birthHour = parseInt(document.getElementById('birthHour').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const targetYear = parseInt(document.getElementById('targetYear').value);
    const targetMonth = parseInt(document.getElementById('targetMonth').value);
    const targetDay = parseInt(document.getElementById('targetDay').value);
    
    if (!birthYear || !birthMonth || !birthDay || isNaN(birthHour)) {
        alert('请填写完整的出生信息');
        return;
    }
    
    // 计算八字
    const yearPillar = getYearPillar(birthYear);
    const monthPillar = getMonthPillar(birthYear, birthMonth, yearPillar.ganIndex);
    const dayPillar = getDayPillar(birthYear, birthMonth, birthDay);
    const hourPillar = getHourPillar(birthHour, dayPillar.ganIndex);
    const sizhu = [yearPillar, monthPillar, dayPillar, hourPillar];
    
    // 计算测算日期
    const targetYearPillar = getYearPillar(targetYear);
    const targetMonthPillar = getMonthPillar(targetYear, targetMonth, targetYearPillar.ganIndex);
    const targetDayPillar = getDayPillar(targetYear, targetMonth, targetDay);
    
    // 计算日主关系
    const relation = getShiShen(dayPillar.ganIndex, targetDayPillar.ganIndex);
    const reading = DETAILED_READINGS[relation];
    
    // 计算运势分数
    const scores = calculateScores(relation);
    
    // 显示结果
    displayResults(sizhu, reading, scores, birthYear, birthMonth, birthDay);
}

function calculateScores(relation) {
    const baseScores = {
        '比肩': { overall: 75, career: 80, wealth: 70, love: 75, health: 75 },
        '劫财': { overall: 60, career: 65, wealth: 50, love: 60, health: 65 },
        '食神': { overall: 85, career: 80, wealth: 75, love: 85, health: 85 },
        '伤官': { overall: 75, career: 80, wealth: 70, love: 70, health: 75 },
        '偏财': { overall: 90, career: 85, wealth: 95, love: 85, health: 80 },
        '正财': { overall: 85, career: 85, wealth: 90, love: 80, health: 85 },
        '七杀': { overall: 65, career: 70, wealth: 65, love: 65, health: 65 },
        '正官': { overall: 90, career: 95, wealth: 80, love: 85, health: 85 },
        '偏印': { overall: 70, career: 75, wealth: 65, love: 70, health: 70 },
        '正印': { overall: 90, career: 85, wealth: 80, love: 85, health: 85 }
    };
    
    const scores = baseScores[relation] || baseScores['比肩'];
    
    // 添加随机波动
    Object.keys(scores).forEach(key => {
        scores[key] = Math.max(0, Math.min(100, scores[key] + Math.floor(Math.random() * 10 - 5)));
    });
    
    return scores;
}

function displayResults(sizhu, reading, scores, birthYear, birthMonth, birthDay) {
    document.getElementById('result').style.display = 'block';
    
    // 显示八字
    const sizhuRow = document.getElementById('sizhuRow');
    sizhuRow.innerHTML = '';
    const titles = ['年柱', '月柱', '日柱', '时柱'];
    sizhu.forEach((pillar, index) => {
        const wuxing = getWuXing(pillar.ganIndex, pillar.zhiIndex);
        const td = document.createElement('td');
        td.innerHTML = `
            <div class="pillar">
                <div style="font-size: 0.9em; color: #888; margin-bottom: 5px;">${titles[index]}</div>
                <div class="gan">${pillar.gan}<span class="wuxing-tag wuxing-${GAN_COLORS[pillar.ganIndex]}">${wuxing.gan}</span></div>
                <div class="zhi">${pillar.zhi}<span class="wuxing-tag wuxing-${getZhiColor(pillar.zhiIndex)}">${wuxing.zhi}</span></div>
            </div>
        `;
        sizhuRow.appendChild(td);
    });
    
    // 显示详细解读
    document.getElementById('readingTitle').textContent = reading.title;
    document.getElementById('readingContent').innerHTML = `
        <p><strong>${reading.shortDesc}</strong></p>
        <p style="margin-top: 10px;">${reading.fullDesc}</p>
    `;
    document.getElementById('careerDetail').textContent = reading.career;
    document.getElementById('wealthDetail').textContent = reading.wealth;
    document.getElementById('loveDetail').textContent = reading.love;
    document.getElementById('healthDetail').textContent = reading.health;
    
    // 显示评分
    const scoreGrid = document.getElementById('scoreGrid');
    scoreGrid.innerHTML = `
        <div class="score-item">
            <div class="score-value">${scores.overall}</div>
            <div class="score-label">综合运势</div>
            <div class="progress-bar"><div class="progress-fill" style="width: ${scores.overall}%; background: linear-gradient(90deg, #d4af37, #f4e5c2);"></div></div>
        </div>
        <div class="score-item">
            <div class="score-value">${scores.career}</div>
            <div class="score-label">事业运</div>
            <div class="progress-bar"><div class="progress-fill" style="width: ${scores.career}%; background: linear-gradient(90deg, #4caf50, #8bc34a);"></div></div>
        </div>
        <div class="score-item">
            <div class="score-value">${scores.wealth}</div>
            <div class="score-label">财运</div>
            <div class="progress-bar"><div class="progress-fill" style="width: ${scores.wealth}%; background: linear-gradient(90deg, #ff9800, #ffc107);"></div></div>
        </div>
        <div class="score-item">
            <div class="score-value">${scores.love}</div>
            <div class="score-label">感情运</div>
            <div class="progress-bar"><div class="progress-fill" style="width: ${scores.love}%; background: linear-gradient(90deg, #e91e63, #f48fb1);"></div></div>
        </div>
        <div class="score-item">
            <div class="score-value">${scores.health}</div>
            <div class="score-label">健康运</div>
            <div class="progress-bar"><div class="progress-fill" style="width: ${scores.health}%; background: linear-gradient(90deg, #2196f3, #03a9f4);"></div></div>
        </div>
    `;
    
    // 显示宜忌
    const yiList = ['出行', '会友', '签约', '求财', '祭祀', '祈福'];
    const jiList = ['动土', '开仓', '安葬', '行丧', '伐木', '上梁'];
    document.getElementById('yiTags').innerHTML = yiList.map(yi => `<span class="yiji-tag">${yi}</span>`).join('');
    document.getElementById('jiTags').innerHTML = jiList.map(ji => `<span class="yiji-tag">${ji}</span>`).join('');
    
    // 显示生肖运势
    const shengxiao = getShengXiao(birthYear);
    const sxData = SHENGXIAO_FORTUNE[shengxiao];
    document.getElementById('shengxiaoFortune').innerHTML = `
        <strong>属${shengxiao}</strong> - ${sxData.desc}<br><br>
        ${sxData.today}
    `;
    
    // 显示星座运势
    const xingzuo = getXingZuo(birthMonth, birthDay);
    const xzData = XINGZUO_FORTUNE[xingzuo];
    document.getElementById('xingzuoFortune').innerHTML = `
        <strong>${xingzuo}</strong> - ${xzData.desc}<br><br>
        ${xzData.today}
    `;
    
    // 显示五行分析
    const wuxingCount = countWuxing(sizhu);
    const maxWuxing = Object.keys(wuxingCount).filter(k => k !== 'dayMaster').reduce((a, b) => wuxingCount[a] > wuxingCount[b] ? a : b);
    const wuxingMap = { jin: '金', mu: '木', shui: '水', huo: '火', tu: '土' };
    document.getElementById('wuxingAnalysis').innerHTML = `
        您的八字五行分布：<br>
        金:${wuxingCount.jin} 木:${wuxingCount.mu} 水:${wuxingCount.shui} 火:${wuxingCount.huo} 土:${wuxingCount.tu}<br><br>
        <strong>五行偏${wuxingMap[maxWuxing]}</strong>，${wuxingMap[maxWuxing]}旺之人${getWuxingDesc(maxWuxing)}
    `;
    
    // 显示大运简批
    const dayunAge = 3 + (document.querySelector('input[name="gender"]:checked').value === 'male' ? 0 : 1);
    document.getElementById('dayunSimple').innerHTML = `
        您${dayunAge}岁起运，每十年一大运。<br><br>
        当前大运阶段，<strong>${scores.overall >= 80 ? '运势顺遂，宜积极进取' : scores.overall >= 60 ? '运势平稳，稳扎稳打' : '运势波折，宜守不宜攻'}</strong>。<br><br>
        建议：${scores.overall >= 80 ? '把握机会，大胆前行' : scores.overall >= 60 ? '脚踏实地，稳步前进' : '低调行事，积蓄力量'}
    `;
    
    document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
}

function countWuxing(sizhu) {
    const count = { jin: 0, mu: 0, shui: 0, huo: 0, tu: 0 };
    const map = { '金': 'jin', '木': 'mu', '水': 'shui', '火': 'huo', '土': 'tu' };
    sizhu.forEach(pillar => {
        const wx = getWuXing(pillar.ganIndex, pillar.zhiIndex);
        count[map[wx.gan]]++;
        count[map[wx.zhi]]++;
    });
    return count;
}

function getWuxingDesc(wuxing) {
    const descs = {
        jin: '性格刚毅果断，有决断力，重义气。适合从事金融、法律、管理等工作。',
        mu: '性格仁慈正直，有同情心，善成长。适合从事教育、文化、医疗等工作。',
        shui: '性格聪明灵活，善变通，有智慧。适合从事贸易、物流、咨询等工作。',
        huo: '性格热情开朗，有礼貌，善表达。适合从事演艺、营销、公关等工作。',
        tu: '性格稳重可靠，讲信用，善包容。适合从事建筑、农业、房地产等工作。'
    };
    return descs[wuxing];
}

// 初始化
window.onload = init;
