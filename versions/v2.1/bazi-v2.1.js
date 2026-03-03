/**
 * 潇龙霞八字黄历 v2.1
 * 多语言支持、详细解读、更多算命功能
 */

// ==================== 多语言数据 ====================
const I18N = {
    zh: {
        title: '潇龙霞大师掐指问天',
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
        dayun: '大运简批',
        overall: '综合运势',
        careerLabel: '事业运',
        wealthLabel: '财运',
        loveLabel: '感情运',
        healthLabel: '健康运',
        wuxingDistribution: '您的八字五行分布',
        wuxingPartial: '五行偏',
        dayunStart: '您',
        dayunCycle: '岁起运，每十年一大运',
        dayunCurrent: '当前大运阶段',
        suitableFor: '适合',
        avoid: '避免',
        footer: '第二阶段 · 八字黄历 v2.1 · 多语言版'
    },
    en: {
        title: 'Master Xiao Long Xia Divine Divination',
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
        dayun: 'Decade Fortune',
        overall: 'Overall',
        careerLabel: 'Career',
        wealthLabel: 'Wealth',
        loveLabel: 'Love',
        healthLabel: 'Health',
        wuxingDistribution: 'Five Elements Distribution',
        wuxingPartial: 'Dominant Element',
        dayunStart: 'Fortune starts at age',
        dayunCycle: 'Every 10 years',
        dayunCurrent: 'Current phase',
        suitableFor: 'Suitable for',
        avoid: 'Avoid',
        footer: 'Phase 2 · Bazi Calendar v2.1 · Multi-Language'
    },
    ar: {
        title: 'السيد شياو لونغ شيا التكهن الإلهي',
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
        dayun: 'حظ العقد',
        overall: 'التقييم العام',
        careerLabel: 'المهنة',
        wealthLabel: 'المال',
        loveLabel: 'الحب',
        healthLabel: 'الصحة',
        wuxingDistribution: 'توزيع العناصر الخمسة',
        wuxingPartial: 'العنصر المسيطر',
        dayunStart: 'تبدأ من عمر',
        dayunCycle: 'كل عشر سنوات',
        dayunCurrent: 'المرحلة الحالية',
        suitableFor: 'مناسب لـ',
        avoid: 'تجنب',
        footer: 'المرحلة 2 · تقويم الباجوا v2.1 · نسخة متعددة اللغات'
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
    
    // 更新结果区域标题
    const baziChartTitle = document.getElementById('baziChartTitle');
    if (baziChartTitle) baziChartTitle.textContent = t.baziChart;
    
    const detailReadingTitle = document.getElementById('detailReadingTitle');
    if (detailReadingTitle) detailReadingTitle.textContent = t.detailReading;
    
    const readingTitle = document.getElementById('readingTitle');
    if (readingTitle) readingTitle.textContent = t.dayRelation;
    
    const careerTitle = document.querySelector('.detail-box:nth-child(2) h4');
    if (careerTitle) careerTitle.textContent = t.career;
    
    const wealthTitle = document.querySelector('.detail-box:nth-child(3) h4');
    if (wealthTitle) wealthTitle.textContent = t.wealth;
    
    const loveTitle = document.querySelector('.detail-box:nth-child(4) h4');
    if (loveTitle) loveTitle.textContent = t.love;
    
    const healthTitle = document.querySelector('.detail-box:nth-child(5) h4');
    if (healthTitle) healthTitle.textContent = t.health;
    
    const fortuneScoreTitle = document.getElementById('fortuneScoreTitle');
    if (fortuneScoreTitle) fortuneScoreTitle.textContent = t.fortuneScore;
    
    const almanacTitle = document.getElementById('almanacTitle');
    if (almanacTitle) almanacTitle.textContent = t.almanac;
    
    const yiTitle = document.getElementById('yiTitle');
    if (yiTitle) yiTitle.textContent = t.yi;
    
    const jiTitle = document.getElementById('jiTitle');
    if (jiTitle) jiTitle.textContent = t.ji;
    
    const moreFortuneTitle = document.getElementById('moreFortuneTitle');
    if (moreFortuneTitle) moreFortuneTitle.textContent = t.moreFortune;
    
    const shengxiaoTitle = document.getElementById('shengxiaoTitle');
    if (shengxiaoTitle) shengxiaoTitle.textContent = t.shengxiao;
    
    const xingzuoTitle = document.getElementById('xingzuoTitle');
    if (xingzuoTitle) xingzuoTitle.textContent = t.xingzuo;
    
    const wuxingTitle = document.getElementById('wuxingTitle');
    if (wuxingTitle) wuxingTitle.textContent = t.wuxing;
    
    const dayunTitle = document.getElementById('dayunTitle');
    if (dayunTitle) dayunTitle.textContent = t.dayun;
    
    const footerText = document.getElementById('footerText');
    if (footerText) footerText.textContent = t.footer;
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
    const reading = getReading(relation);
    
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
    
    const t = I18N[currentLang];
    
    // 显示八字
    const sizhuRow = document.getElementById('sizhuRow');
    sizhuRow.innerHTML = '';
    const titles = currentLang === 'zh' ? ['年柱', '月柱', '日柱', '时柱'] : 
                   currentLang === 'en' ? ['Year', 'Month', 'Day', 'Hour'] :
                   ['العمود السنوي', 'عمود الشهر', 'عمود اليوم', 'عمود الساعة'];
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
            <div class="score-label">${t.overall}</div>
            <div class="progress-bar"><div class="progress-fill" style="width: ${scores.overall}%; background: linear-gradient(90deg, #d4af37, #f4e5c2);"></div></div>
        </div>
        <div class="score-item">
            <div class="score-value">${scores.career}</div>
            <div class="score-label">${t.careerLabel}</div>
            <div class="progress-bar"><div class="progress-fill" style="width: ${scores.career}%; background: linear-gradient(90deg, #4caf50, #8bc34a);"></div></div>
        </div>
        <div class="score-item">
            <div class="score-value">${scores.wealth}</div>
            <div class="score-label">${t.wealthLabel}</div>
            <div class="progress-bar"><div class="progress-fill" style="width: ${scores.wealth}%; background: linear-gradient(90deg, #ff9800, #ffc107);"></div></div>
        </div>
        <div class="score-item">
            <div class="score-value">${scores.love}</div>
            <div class="score-label">${t.loveLabel}</div>
            <div class="progress-bar"><div class="progress-fill" style="width: ${scores.love}%; background: linear-gradient(90deg, #e91e63, #f48fb1);"></div></div>
        </div>
        <div class="score-item">
            <div class="score-value">${scores.health}</div>
            <div class="score-label">${t.healthLabel}</div>
            <div class="progress-bar"><div class="progress-fill" style="width: ${scores.health}%; background: linear-gradient(90deg, #2196f3, #03a9f4);"></div></div>
        </div>
    `;
    
    // 显示宜忌
    const yiList = currentLang === 'zh' ? ['出行', '会友', '签约', '求财', '祭祀', '祈福'] :
                   currentLang === 'en' ? ['Travel', 'Social', 'Contract', 'Wealth', 'Worship', 'Pray'] :
                   ['السفر', 'الاجتماع', 'التعاقد', 'المال', 'العبادة', 'الدعاء'];
    const jiList = currentLang === 'zh' ? ['动土', '开仓', '安葬', '行丧', '伐木', '上梁'] :
                   currentLang === 'en' ? ['Digging', 'Warehouse', 'Funeral', 'Mourning', 'Logging', 'Beam'] :
                   ['الحفر', 'المستودع', 'الجنازة', 'الحداد', 'قطع الأشجار', 'العارضة'];
    document.getElementById('yiTags').innerHTML = yiList.map(yi => `<span class="yiji-tag">${yi}</span>`).join('');
    document.getElementById('jiTags').innerHTML = jiList.map(ji => `<span class="yiji-tag">${ji}</span>`).join('');
    
    // 显示生肖运势
    const shengxiao = getShengXiao(birthYear);
    const sxData = getShengxiaoFortune(shengxiao);
    const shengxiaoNameMap = {
        '鼠': currentLang === 'en' ? 'Rat' : currentLang === 'ar' ? 'الجرذ' : '鼠',
        '牛': currentLang === 'en' ? 'Ox' : currentLang === 'ar' ? 'الثور' : '牛',
        '虎': currentLang === 'en' ? 'Tiger' : currentLang === 'ar' ? 'النمر' : '虎',
        '兔': currentLang === 'en' ? 'Rabbit' : currentLang === 'ar' ? 'الأرنب' : '兔',
        '龙': currentLang === 'en' ? 'Dragon' : currentLang === 'ar' ? 'التنين' : '龙',
        '蛇': currentLang === 'en' ? 'Snake' : currentLang === 'ar' ? 'الثعبان' : '蛇',
        '马': currentLang === 'en' ? 'Horse' : currentLang === 'ar' ? 'الحصان' : '马',
        '羊': currentLang === 'en' ? 'Goat' : currentLang === 'ar' ? 'الماعز' : '羊',
        '猴': currentLang === 'en' ? 'Monkey' : currentLang === 'ar' ? 'القرد' : '猴',
        '鸡': currentLang === 'en' ? 'Rooster' : currentLang === 'ar' ? 'الديك' : '鸡',
        '狗': currentLang === 'en' ? 'Dog' : currentLang === 'ar' ? 'الكلب' : '狗',
        '猪': currentLang === 'en' ? 'Pig' : currentLang === 'ar' ? 'الخنزير' : '猪'
    };
    const sxLabel = currentLang === 'zh' ? '属' : currentLang === 'en' ? 'Chinese Zodiac: ' : 'البرج الصيني: ';
    document.getElementById('shengxiaoFortune').innerHTML = `
        <strong>${sxLabel}${shengxiaoNameMap[shengxiao]}</strong> - ${sxData.desc}<br><br>
        ${sxData.today}
    `;
    
    // 显示星座运势
    const xingzuo = getXingZuo(birthMonth, birthDay);
    const xzData = getXingzuoFortune(xingzuo);
    const xingzuoNameMap = {
        '摩羯座': currentLang === 'en' ? 'Capricorn' : currentLang === 'ar' ? 'الجدي' : '摩羯座',
        '水瓶座': currentLang === 'en' ? 'Aquarius' : currentLang === 'ar' ? 'الدلو' : '水瓶座',
        '双鱼座': currentLang === 'en' ? 'Pisces' : currentLang === 'ar' ? 'الحوت' : '双鱼座',
        '白羊座': currentLang === 'en' ? 'Aries' : currentLang === 'ar' ? 'الحمل' : '白羊座',
        '金牛座': currentLang === 'en' ? 'Taurus' : currentLang === 'ar' ? 'الثور' : '金牛座',
        '双子座': currentLang === 'en' ? 'Gemini' : currentLang === 'ar' ? 'الجوزاء' : '双子座',
        '巨蟹座': currentLang === 'en' ? 'Cancer' : currentLang === 'ar' ? 'السرطان' : '巨蟹座',
        '狮子座': currentLang === 'en' ? 'Leo' : currentLang === 'ar' ? 'الأسد' : '狮子座',
        '处女座': currentLang === 'en' ? 'Virgo' : currentLang === 'ar' ? 'العذراء' : '处女座',
        '天秤座': currentLang === 'en' ? 'Libra' : currentLang === 'ar' ? 'الميزان' : '天秤座',
        '天蝎座': currentLang === 'en' ? 'Scorpio' : currentLang === 'ar' ? 'العقرب' : '天蝎座',
        '射手座': currentLang === 'en' ? 'Sagittarius' : currentLang === 'ar' ? 'القوس' : '射手座'
    };
    document.getElementById('xingzuoFortune').innerHTML = `
        <strong>${xingzuoNameMap[xingzuo]}</strong> - ${xzData.desc}<br><br>
        ${xzData.today}
    `;
    
    // 显示五行分析
    const wuxingCount = countWuxing(sizhu);
    const maxWuxing = Object.keys(wuxingCount).filter(k => k !== 'dayMaster').reduce((a, b) => wuxingCount[a] > wuxingCount[b] ? a : b);
    const wuxingMap = { jin: '金', mu: '木', shui: '水', huo: '火', tu: '土' };
    const wuxingMapEn = { jin: 'Metal', mu: 'Wood', shui: 'Water', huo: 'Fire', tu: 'Earth' };
    const wuxingMapAr = { jin: 'المعدن', mu: 'الخشب', shui: 'الماء', huo: 'النار', tu: 'التراب' };
    const wuxingName = currentLang === 'zh' ? wuxingMap[maxWuxing] : currentLang === 'en' ? wuxingMapEn[maxWuxing] : wuxingMapAr[maxWuxing];
    
    if (currentLang === 'zh') {
        document.getElementById('wuxingAnalysis').innerHTML = `
            ${t.wuxingDistribution}：<br>
            金:${wuxingCount.jin} 木:${wuxingCount.mu} 水:${wuxingCount.shui} 火:${wuxingCount.huo} 土:${wuxingCount.tu}<br><br>
            <strong>${t.wuxingPartial}${wuxingName}</strong>，${wuxingName}旺之人${getWuxingDesc(maxWuxing)}
        `;
    } else if (currentLang === 'en') {
        document.getElementById('wuxingAnalysis').innerHTML = `
            ${t.wuxingDistribution}:<br>
            Metal:${wuxingCount.jin} Wood:${wuxingCount.mu} Water:${wuxingCount.shui} Fire:${wuxingCount.huo} Earth:${wuxingCount.tu}<br><br>
            <strong>${t.wuxingPartial}: ${wuxingName}</strong><br>
            ${getWuxingDescEn(maxWuxing)}
        `;
    } else {
        document.getElementById('wuxingAnalysis').innerHTML = `
            ${t.wuxingDistribution}:<br>
            المعدن:${wuxingCount.jin} الخشب:${wuxingCount.mu} الماء:${wuxingCount.shui} النار:${wuxingCount.huo} التراب:${wuxingCount.tu}<br><br>
            <strong>${t.wuxingPartial}: ${wuxingName}</strong>
        `;
    }
    
    // 显示大运简批
    const dayunAge = 3 + (document.querySelector('input[name="gender"]:checked').value === 'male' ? 0 : 1);
    if (currentLang === 'zh') {
        document.getElementById('dayunSimple').innerHTML = `
            ${t.dayunStart}${dayunAge}${t.dayunCycle}。<br><br>
            ${t.dayunCurrent}，<strong>${scores.overall >= 80 ? '运势顺遂，宜积极进取' : scores.overall >= 60 ? '运势平稳，稳扎稳打' : '运势波折，宜守不宜攻'}</strong>。<br><br>
            建议：${scores.overall >= 80 ? '把握机会，大胆前行' : scores.overall >= 60 ? '脚踏实地，稳步前进' : '低调行事，积蓄力量'}
        `;
    } else if (currentLang === 'en') {
        document.getElementById('dayunSimple').innerHTML = `
            ${t.dayunStart} ${dayunAge}. ${t.dayunCycle}.<br><br>
            ${t.dayunCurrent}: <strong>${scores.overall >= 80 ? 'Good fortune, be proactive' : scores.overall >= 60 ? 'Stable fortune, steady progress' : 'Turbulent fortune, be cautious'}</strong>.<br><br>
            Advice: ${scores.overall >= 80 ? 'Seize opportunities' : scores.overall >= 60 ? 'Steady progress' : 'Stay low and accumulate strength'}
        `;
    } else {
        document.getElementById('dayunSimple').innerHTML = `
            ${t.dayunStart} ${dayunAge} ${t.dayunCycle}<br><br>
            ${t.dayunCurrent}: <strong>${scores.overall >= 80 ? 'حظ جيد' : scores.overall >= 60 ? 'حظ مستقر' : 'حظ متقلب'}</strong>
        `;
    }
    
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

function getReading(relation) {
    const readings = {
        zh: DETAILED_READINGS,
        en: DETAILED_READINGS_EN,
        ar: DETAILED_READINGS
    };
    return readings[currentLang]?.[relation] || DETAILED_READINGS[relation];
}

function getShengxiaoFortune(shengxiao) {
    const fortunes = {
        zh: SHENGXIAO_FORTUNE,
        en: SHENGXIAO_FORTUNE_EN,
        ar: SHENGXIAO_FORTUNE
    };
    return fortunes[currentLang]?.[shengxiao] || SHENGXIAO_FORTUNE[shengxiao];
}

function getXingzuoFortune(xingzuo) {
    const fortunes = {
        zh: XINGZUO_FORTUNE,
        en: XINGZUO_FORTUNE_EN,
        ar: XINGZUO_FORTUNE
    };
    return fortunes[currentLang]?.[xingzuo] || XINGZUO_FORTUNE[xingzuo];
}
    const descs = {
        jin: '性格刚毅果断，有决断力，重义气。适合从事金融、法律、管理等工作。',
        mu: '性格仁慈正直，有同情心，善成长。适合从事教育、文化、医疗等工作。',
        shui: '性格聪明灵活，善变通，有智慧。适合从事贸易、物流、咨询等工作。',
        huo: '性格热情开朗，有礼貌，善表达。适合从事演艺、营销、公关等工作。',
        tu: '性格稳重可靠，讲信用，善包容。适合从事建筑、农业、房地产等工作。'
    };
    return descs[wuxing];
}

function getWuxingDescEn(wuxing) {
    const descs = {
        jin: 'Decisive and determined, suitable for finance, law, management.',
        mu: 'Kind and compassionate, suitable for education, culture, healthcare.',
        shui: 'Intelligent and adaptable, suitable for trade, logistics, consulting.',
        huo: 'Enthusiastic and expressive, suitable for performing arts, marketing, PR.',
        tu: 'Steady and reliable, suitable for construction, agriculture, real estate.'
    };
    return descs[wuxing];
}

// 初始化
window.onload = init;

// ==================== 塔罗牌数据 ====================
const TAROT_CARDS = [
    {
        id: 0, name: '愚者', nameEn: 'The Fool',
        upright: '新的开始、冒险、纯真、潜在的可能性。这是一张代表旅程开始的牌，象征着跳出舒适圈的勇气。',
        reversed: '鲁莽、愚蠢、缺乏计划、冒险过度。需要更加谨慎，不要盲目行动。',
        advice: '相信直觉，勇敢迈出第一步，但也要做好基本准备。',
        element: '风', relation: '创新突破'
    },
    {
        id: 1, name: '魔术师', nameEn: 'The Magician',
        upright: '创造力、意志力、资源整合、显化能力。你拥有实现梦想所需的所有工具。',
        reversed: '欺骗、缺乏自信、资源浪费、技能不足。需要重新评估自己的能力。',
        advice: '发挥你的才能和资源优势，主动出击创造机会。',
        element: '风', relation: '主动创造'
    },
    {
        id: 2, name: '女祭司', nameEn: 'The High Priestess',
        upright: '直觉、内在智慧、潜意识、神秘。相信你的第六感，答案就在内心深处。',
        reversed: '表面化、忽视直觉、秘密暴露、缺乏深度。需要静下心来倾听内心。',
        advice: '相信直觉，多观察少行动，等待最佳时机。',
        element: '水', relation: '等待观察'
    },
    {
        id: 3, name: '皇后', nameEn: 'The Empress',
        upright: '丰饶、母性、创造力、享受、自然。这是一个收获和享受的美好时期。',
        reversed: '依赖、过度保护、创造力受阻、物质匮乏。需要独立和自给自足。',
        advice: '享受生活的美好，培养创造力，关注身心健康。',
        element: '土', relation: '享受收获'
    },
    {
        id: 4, name: '皇帝', nameEn: 'The Emperor',
        upright: '权威、结构、父性、控制、稳定。建立规则和秩序，展现领导力。',
        reversed: '专制、僵化、缺乏纪律、滥用权力。需要更加灵活和包容。',
        advice: '建立稳定的基础，制定清晰的计划，展现领导力。',
        element: '火', relation: '掌控主导'
    },
    {
        id: 5, name: '教皇', nameEn: 'The Hierophant',
        upright: '传统、信仰、教育、指导、精神价值。遵循传统智慧，寻求导师指引。',
        reversed: '反叛、非传统、个人信仰、打破规则。需要找到自己的道路。',
        advice: '尊重传统和经验，但也要保持开放的心态。',
        element: '土', relation: '学习请教'
    },
    {
        id: 6, name: '恋人', nameEn: 'The Lovers',
        upright: '爱情、选择、和谐、价值观、结合。重要的关系或选择摆在面前。',
        reversed: '不和谐、错误选择、价值观冲突、分离。需要重新审视关系。',
        advice: '倾听内心，做出符合价值观的选择，珍惜重要关系。',
        element: '风', relation: '情感选择'
    },
    {
        id: 7, name: '战车', nameEn: 'The Chariot',
        upright: '意志力、胜利、决心、控制、前进。通过意志力克服障碍，取得成功。',
        reversed: '失控、失败、缺乏方向、意志力不足。需要重新掌控局面。',
        advice: '坚定目标，控制情绪，勇往直前但保持方向感。',
        element: '水', relation: '突破前进'
    },
    {
        id: 8, name: '力量', nameEn: 'Strength',
        upright: '内在力量、勇气、耐心、同情心、掌控。以柔克刚，用耐心克服困难。',
        reversed: '软弱、自我怀疑、缺乏勇气、失控。需要找回内在的力量。',
        advice: '用耐心和同情心面对挑战，相信内在的力量。',
        element: '火', relation: '耐心坚持'
    },
    {
        id: 9, name: '隐士', nameEn: 'The Hermit',
        upright: '内省、独处、寻求真理、智慧、指引。退后一步，寻找内在答案。',
        reversed: '孤独、迷失、社交退缩、拒绝建议。需要走出独处，寻求帮助。',
        advice: '花时间独处反思，寻找内在智慧，但也要适度社交。',
        element: '土', relation: '反思沉淀'
    },
    {
        id: 10, name: '命运之轮', nameEn: 'Wheel of Fortune',
        upright: '变化、周期、命运、转机、好运。命运之轮转动，好运即将来临。',
        reversed: '厄运、阻力、坏运气、抗拒变化。需要接受变化，等待转机。',
        advice: '顺应变化，抓住机会，相信命运的安排。',
        element: '火', relation: '顺势而为'
    },
    {
        id: 11, name: '正义', nameEn: 'Justice',
        upright: '公正、真理、因果、法律、责任。公正的结果，为自己的行为负责。',
        reversed: '不公、不诚实、逃避责任、因果报应。需要诚实面对，承担责任。',
        advice: '公平公正地处理事情，诚实面对，承担应有的责任。',
        element: '风', relation: '公正决策'
    },
    {
        id: 12, name: '倒吊人', nameEn: 'The Hanged Man',
        upright: '牺牲、等待、新视角、放下、耐心。换个角度看问题，学会等待。',
        reversed: '抗拒、拖延、无意义的牺牲、固执。需要放下执着，接受现实。',
        advice: '换个角度思考，学会等待和放下，不要急于行动。',
        element: '水', relation: '等待转化'
    },
    {
        id: 13, name: '死神', nameEn: 'Death',
        upright: '结束、转变、重生、放下过去、新的开始。旧事物的结束带来新开始。',
        reversed: '抗拒改变、停滞、无法放手、恐惧结束。需要接受结束，迎接新生。',
        advice: '接受结束和变化，放下过去，迎接新的开始。',
        element: '水', relation: '结束新生'
    },
    {
        id: 14, name: '节制', nameEn: 'Temperance',
        upright: '平衡、调和、耐心、中庸、融合。寻找平衡，融合对立面。',
        reversed: '极端、失衡、过度、冲突。需要寻找平衡，避免极端。',
        advice: '保持平衡和耐心，融合不同观点，避免极端。',
        element: '火', relation: '平衡调和'
    },
    {
        id: 15, name: '恶魔', nameEn: 'The Devil',
        upright: '束缚、欲望、物质主义、诱惑、执念。被物质或欲望所束缚。',
        reversed: '解放、摆脱束缚、重获自由、打破枷锁。有机会摆脱束缚。',
        advice: '审视自己的执念和束缚，寻求解放和自由。',
        element: '土', relation: '摆脱束缚'
    },
    {
        id: 16, name: '塔', nameEn: 'The Tower',
        upright: '突然变化、灾难、觉醒、破坏、真相。突然的变化打破旧有结构。',
        reversed: '避免灾难、延迟变化、轻微震荡、内在觉醒。变化较温和。',
        advice: '接受突然的变化，从中觉醒和成长，重建更好的基础。',
        element: '火', relation: '突变觉醒'
    },
    {
        id: 17, name: '星星', nameEn: 'The Star',
        upright: '希望、灵感、宁静、信心、指引。充满希望和灵感的美好时期。',
        reversed: '绝望、失去信心、缺乏灵感、悲观。需要重拾希望和信心。',
        advice: '保持希望和信心，相信未来，跟随内心的指引。',
        element: '风', relation: '希望指引'
    },
    {
        id: 18, name: '月亮', nameEn: 'The Moon',
        upright: '幻觉、恐惧、潜意识、不确定性、直觉。事情不明朗，需要依靠直觉。',
        reversed: '真相大白、克服恐惧、迷雾散去、 clarity。真相即将揭晓。',
        advice: '相信直觉，面对恐惧，等待真相大白。',
        element: '水', relation: '直觉探索'
    },
    {
        id: 19, name: '太阳', nameEn: 'The Sun',
        upright: '成功、快乐、活力、正能量、清晰。充满阳光和成功的时期。',
        reversed: '暂时的阴霾、过度乐观、延迟成功、缺乏活力。成功稍延迟。',
        advice: '保持积极乐观，享受成功和快乐，散发正能量。',
        element: '火', relation: '成功快乐'
    },
    {
        id: 20, name: '审判', nameEn: 'Judgement',
        upright: '重生、觉醒、评判、宽恕、召唤。重大觉醒，重生的时刻。',
        reversed: '自我怀疑、拒绝觉醒、逃避评判、缺乏宽恕。需要自我反思。',
        advice: '听从内心的召唤，宽恕自己和他人，迎接重生。',
        element: '火', relation: '觉醒重生'
    },
    {
        id: 21, name: '世界', nameEn: 'The World',
        upright: '完成、圆满、成就、整合、旅行。一个周期的圆满完成。',
        reversed: '未完成、延迟、缺乏 closure、不完美。还有未完成的课题。',
        advice: '庆祝成就，完成未竟之事，准备新的旅程。',
        element: '土', relation: '圆满成就'
    }
];

// 当前抽到的塔罗牌
let currentTarotCards = [];
let currentBaziData = null;

// ==================== 塔罗牌功能 ====================
function drawTarot() {
    const question = document.getElementById('tarotQuestion').value.trim();
    if (!question) {
        alert('请先输入你想问的问题');
        return;
    }
    
    // 如果没有先算八字，提示先算八字
    if (!currentBaziData) {
        alert('建议先完成八字测算，塔罗牌会与八字运势结合给出更准确的解读');
    }
    
    // 随机抽取3张牌（过去、现在、未来）
    currentTarotCards = [];
    const usedIndices = new Set();
    
    while (currentTarotCards.length < 3) {
        const index = Math.floor(Math.random() * TAROT_CARDS.length);
        if (!usedIndices.has(index)) {
            usedIndices.add(index);
            const isReversed = Math.random() < 0.3; // 30%概率逆位
            currentTarotCards.push({
                ...TAROT_CARDS[index],
                position: currentTarotCards.length,
                reversed: isReversed
            });
        }
    }
    
    // 显示塔罗牌
    displayTarotCards(question);
}

function displayTarotCards(question) {
    const displaySection = document.getElementById('tarotCardsDisplay');
    const container = document.getElementById('tarotCardsContainer');
    const readingSection = document.getElementById('tarotReading');
    
    displaySection.style.display = 'block';
    
    const positions = ['过去/根源', '现在/状况', '未来/结果'];
    
    // 显示牌面
    container.innerHTML = currentTarotCards.map((card, index) => `
        <div class="tarot-card ${card.reversed ? 'reversed' : ''}" onclick="flipCard(this, ${index})" style="animation: fadeIn 0.5s ease ${index * 0.2}s both;">
            <div class="tarot-card-back">
                <div class="tarot-number">?</div>
                <div class="tarot-name">点击翻牌</div>
            </div>
            <div class="tarot-card-front">
                <div class="tarot-position">${positions[index]}</div>
                <div class="tarot-number">${card.id}</div>
                <div class="tarot-name">${card.name}${card.reversed ? '<br><small>(逆位)</small>' : ''}</div>
            </div>
        </div>
    `).join('');
    
    // 生成综合解读
    generateTarotReading(question);
}

function flipCard(element, index) {
    element.classList.toggle('flipped');
}

function generateTarotReading(question) {
    const readingSection = document.getElementById('tarotReading');
    
    const positions = ['过去/根源', '现在/状况', '未来/结果'];
    const positionDesc = [
        '代表这个问题的根源或过去的影响',
        '代表当前的状况和面临的挑战',
        '代表可能的结果或未来的走向'
    ];
    
    let cardsHtml = currentTarotCards.map((card, index) => {
        const meaning = card.reversed ? card.reversed : card.upright;
        return `
            <div class="tarot-reading-box">
                <h4>${positions[index]}：${card.name}${card.reversed ? '（逆位）' : ''}</h4>
                <p style="color: #888; font-size: 0.9em; margin-bottom: 10px;">${positionDesc[index]}</p>
                <p class="tarot-meaning">${meaning}</p>
                <p style="color: #d4af37; margin-top: 10px;"><strong>建议：</strong>${card.advice}</p>
            </div>
        `;
    }).join('');
    
    // 八字与塔罗结合解读
    let combinedHtml = '';
    if (currentBaziData) {
        const { relation, scores } = currentBaziData;
        const baziAdvice = generateBaziTarotAdvice(relation, scores);
        
        combinedHtml = `
            <div class="combined-reading">
                <h5>🔮 八字与塔罗综合解读</h5>
                <p style="margin-bottom: 15px;">
                    你的八字显示今日为<strong style="color: #f4e5c2;">${relation}</strong>，
                    综合运势<strong style="color: #d4af37;">${scores.overall}分</strong>。
                    塔罗牌为你问的问题"<em>${question}</em>"提供了更深层的指引。
                </p>
                <p style="margin-bottom: 15px;">${baziAdvice}</p>
            </div>
        `;
    }
    
    // 具体建议和行动方案
    const specificAdvice = generateSpecificAdvice(question, currentTarotCards, currentBaziData);
    
    readingSection.innerHTML = `
        <h3 style="color: #d4af37; margin-bottom: 20px; text-align: center;">🔮 塔罗牌解读：${question}</h3>
        ${cardsHtml}
        ${combinedHtml}
        
        <div class="outcome-section">
            <h4>🎯 针对你问题的具体建议</h4>
            <div style="margin-top: 15px;">
                <h5 style="color: #f4e5c2; margin-bottom: 10px;">当前形势分析：</h5>
                <p style="line-height: 1.8; color: #d0d0d0; margin-bottom: 15px;">${specificAdvice.analysis}</p>
                
                <h5 style="color: #f4e5c2; margin-bottom: 10px;">行动建议：</h5>
                <ul class="advice-list">
                    ${specificAdvice.actions.map(a => `<li>${a}</li>`).join('')}
                </ul>
                
                <h5 style="color: #f4e5c2; margin: 15px 0 10px;">如何改变/优化结局：</h5>
                <ul class="advice-list">
                    ${specificAdvice.improvements.map(i => `<li>${i}</li>`).join('')}
                </ul>
                
                <h5 style="color: #f4e5c2; margin: 15px 0 10px;">成功概率预测：</h5>
                <div style="background: rgba(0,0,0,0.3); border-radius: 10px; padding: 15px;">
                    <div style="display: flex; align-items: center; margin-bottom: 10px;">
                        <span style="width: 100px; color: #a0a0a0;">成功概率：</span>
                        <div class="progress-bar" style="flex: 1; margin: 0 10px;">
                            <div class="progress-fill" style="width: ${specificAdvice.successRate}%; background: linear-gradient(90deg, #d4af37, #f4e5c2);"></div>
                        </div>
                        <span style="color: #d4af37; font-weight: bold;">${specificAdvice.successRate}%</span>
                    </div>
                    <p style="color: #888; font-size: 0.9em;">${specificAdvice.successComment}</p>
                </div>
            </div>
        </div>
    `;
}

function generateBaziTarotAdvice(relation, scores) {
    const adviceMap = {
        '比肩': '今日比肩日适合独立自主，塔罗牌建议你相信自己的判断，不要过度依赖他人。',
        '劫财': '劫财日需谨慎理财，塔罗牌提醒你注意潜在的风险，不要冲动决策。',
        '食神': '食神日适合享受生活，塔罗牌建议你在追求目标的过程中也要懂得享受过程。',
        '伤官': '伤官日思维活跃，塔罗牌鼓励你大胆表达想法，但要注意方式方法。',
        '偏财': '偏财日机遇多多，塔罗牌显示可能有意外收获，保持开放心态。',
        '正财': '正财日适合踏实工作，塔罗牌建议你稳扎稳打，按部就班前进。',
        '七杀': '七杀日有挑战，塔罗牌显示可能需要面对困难，但这也是成长的机会。',
        '正官': '正官日贵人运旺，塔罗牌暗示可能有贵人相助，保持谦逊态度。',
        '偏印': '偏印日适合学习思考，塔罗牌建议你多观察少行动，等待时机。',
        '正印': '正印日福泽深厚，塔罗牌显示今日有逢凶化吉之象，放心前行。'
    };
    return adviceMap[relation] || '结合八字与塔罗，今日宜保持平衡心态，顺势而为。';
}

function generateSpecificAdvice(question, cards, baziData) {
    let successRate = 70;
    let analysis = '';
    let actions = [];
    let improvements = [];
    
    // 根据牌面分析
    const hasPositiveCards = cards.some(c => 
        ['太阳', '星星', '世界', '魔术师', '皇后'].includes(c.name) && !c.reversed
    );
    const hasNegativeCards = cards.some(c => 
        ['塔', '恶魔', '月亮'].includes(c.name) && !c.reversed
    );
    const hasReversed = cards.some(c => c.reversed);
    
    // 分析问题类型并给出建议
    const questionLower = question.toLowerCase();
    
    if (questionLower.includes('表白') || questionLower.includes('感情') || questionLower.includes('喜欢')) {
        analysis = '塔罗牌显示这是一个与情感相关的问题。';
        if (hasPositiveCards) {
            analysis += '牌面整体偏向积极，暗示当前是表达情感的好时机。';
            successRate += 15;
            actions = [
                '选择一个轻松愉快的时机表达',
                '真诚地表达你的感受，不要过度包装',
                '准备好接受任何结果，保持平常心'
            ];
        } else if (hasNegativeCards) {
            analysis += '但牌面显示可能存在一些阻碍或不确定性，建议暂缓。';
            successRate -= 15;
            actions = [
                '先建立更深的了解和信任',
                '观察对方的反应和态度',
                '等待更合适的时机'
            ];
        } else {
            analysis += '牌面显示需要更多耐心和观察。';
            actions = [
                '多创造相处机会，增进了解',
                '通过共同兴趣建立连接',
                '适时表达关心，测试对方反应'
            ];
        }
        
        improvements = [
            '提升自信，展现最真实的自己',
            '培养更多共同话题和兴趣',
            '学会倾听，了解对方真实想法',
            '保持独立，不要过度依赖对方回应'
        ];
    } else if (questionLower.includes('工作') || questionLower.includes('辞职') || questionLower.includes('offer') || questionLower.includes('面试')) {
        analysis = '这是一个关于职业发展的重大问题。';
        if (hasPositiveCards && !hasReversed) {
            analysis += '塔罗牌显示积极信号，当前是推进工作相关事务的好时机。';
            successRate += 20;
            actions = [
                '积极准备，展现专业能力',
                '主动沟通，表达你的意愿',
                '把握机会，果断行动'
            ];
        } else if (cards[2].reversed || hasNegativeCards) {
            analysis += '但未来牌面显示可能有一些挑战，需要谨慎考虑。';
            successRate -= 10;
            actions = [
                '全面评估利弊，不要只看表面',
                '准备好备选方案',
                '寻求专业人士或前辈的建议'
            ];
        } else {
            analysis += '牌面显示这是一个需要深思熟虑的决定。';
            actions = [
                '列出优缺点对比表',
                '咨询信任的朋友或导师',
                '给自己设定决策期限'
            ];
        }
        
        improvements = [
            '持续学习，提升核心竞争力',
            '建立行业人脉，拓宽视野',
            '明确职业目标，制定长期规划',
            '保持职业素养，积累好口碑'
        ];
    } else if (questionLower.includes('投资') || questionLower.includes('理财') || questionLower.includes('买') || questionLower.includes('花钱')) {
        analysis = '这是一个涉及财务决策的问题。';
        if (baziData && baziData.scores.wealth >= 80) {
            analysis += '你的八字显示今日财运较旺，但塔罗牌建议仍需谨慎。';
            successRate = Math.min(85, successRate + 10);
        }
        
        if (hasPositiveCards) {
            actions = [
                '做好充分调研，不要盲目跟风',
                '设定明确的止盈止损点',
                '分散投资，不要孤注一掷'
            ];
        } else {
            successRate -= 10;
            actions = [
                '暂缓重大财务决策',
                '咨询专业理财顾问',
                '优先建立应急储蓄'
            ];
        }
        
        improvements = [
            '学习理财知识，提升财商',
            '建立预算制度，控制支出',
            '区分"想要"和"需要"',
            '定期复盘，调整理财策略'
        ];
    } else {
        // 通用建议
        analysis = '塔罗牌为你的问题提供了多维度的视角。';
        
        // 根据三张牌的综合给出建议
        const firstCard = cards[0];
        const lastCard = cards[2];
        
        if (!firstCard.reversed && !lastCard.reversed) {
            analysis += '整体来看，事情的发展趋势是积极的。';
            successRate += 10;
        } else if (lastCard.reversed) {
            analysis += '结果牌显示可能需要更多努力或调整策略。';
            successRate -= 5;
        }
        
        actions = [
            '明确你的真实目标和动机',
            '收集更多信息，做好充分准备',
            '制定具体可执行的计划',
            '设定检查点，及时调整策略'
        ];
        
        improvements = [
            '提升相关技能和知识',
            '建立支持系统，寻求帮助',
            '保持灵活，准备Plan B',
            '培养耐心，相信过程'
        ];
    }
    
    // 结合八字调整成功率
    if (baziData) {
        const { scores } = baziData;
        if (scores.overall >= 85) {
            successRate += 5;
        } else if (scores.overall < 60) {
            successRate -= 10;
        }
    }
    
    // 确保成功率在合理范围
    successRate = Math.max(30, Math.min(95, successRate));
    
    let successComment = '';
    if (successRate >= 80) {
        successComment = '成功率很高！把握时机，积极行动。';
    } else if (successRate >= 60) {
        successComment = '成功率中等，做好准备，谨慎推进。';
    } else {
        successComment = '成功率偏低，建议暂缓，先改善条件。';
    }
    
    return {
        successRate,
        analysis,
        actions,
        improvements,
        successComment
    };
}

// 在计算八字时保存数据供塔罗使用
const originalCalculateAll = calculateAll;
calculateAll = function() {
    originalCalculateAll();
    
    // 保存八字数据
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const birthMonth = parseInt(document.getElementById('birthMonth').value);
    const birthDay = parseInt(document.getElementById('birthDay').value);
    const birthHour = parseInt(document.getElementById('birthHour').value);
    const targetYear = parseInt(document.getElementById('targetYear').value);
    const targetMonth = parseInt(document.getElementById('targetMonth').value);
    const targetDay = parseInt(document.getElementById('targetDay').value);
    
    if (birthYear && birthMonth && birthDay && !isNaN(birthHour)) {
        const yearPillar = getYearPillar(birthYear);
        const monthPillar = getMonthPillar(birthYear, birthMonth, yearPillar.ganIndex);
        const dayPillar = getDayPillar(birthYear, birthMonth, birthDay);
        const targetDayPillar = getDayPillar(targetYear, targetMonth, targetDay);
        const relation = getShiShen(dayPillar.ganIndex, targetDayPillar.ganIndex);
        const scores = calculateScores(relation);
        
        currentBaziData = { relation, scores };
        
        // 显示综合运势分数
        document.getElementById('overallScoreDisplay').textContent = `(${scores.overall}分)`;
    }
};

// ==================== 算命方式切换 ====================
function switchDivination(type) {
    // 切换标签样式
    document.querySelectorAll('.divination-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // 隐藏所有算命区域
    document.getElementById('tarotDivination').style.display = 'none';
    document.getElementById('chouqianDivination').style.display = 'none';
    document.getElementById('zhouyiDivination').style.display = 'none';
    document.getElementById('xingzuoDivination').style.display = 'none';
    
    // 显示选中的区域
    document.getElementById(type + 'Divination').style.display = 'block';
}

// ==================== 观音灵签数据 ====================
const GUANYIN_QIAN = [
    { number: 1, title: '钟离成道', poem: '开天辟地作良缘，吉日良时万物全；若得此签非小可，人行忠正帝王宣。', meaning: '这是一支上签，表示万事如意，只要心存正念，必得贵人相助，事业有成。' },
    { number: 2, title: '苏秦不第', poem: '鲸鱼未化守江湖，未许升腾离碧波；异日峥嵘身变态，从教一跃禹门过。', meaning: '目前时机未到，宜守不宜攻，待时机成熟必能飞黄腾达。' },
    { number: 3, title: '董永卖身', poem: '临风冒雨去还乡，正是其身似燕儿；衔得泥来欲作垒，到头垒坏复须泥。', meaning: '先难后易，虽然目前辛苦，但最终会有好结果，需坚持不懈。' },
    { number: 4, title: '玉莲会十朋', poem: '菱花镜破复重圆，女再求夫男再婚；自此门闾重改换，更添福禄在儿孙。', meaning: '破镜重圆之象，失而复得，关系可以修复，婚姻美满。' },
    { number: 5, title: '刘晨遇仙', poem: '一锥草地要求泉，努力求之得最难；无意俄然遇知己，相逢携手上青天。', meaning: '有心栽花花不开，无心插柳柳成荫，顺其自然反而有所得。' },
    { number: 6, title: '仁贵遇主', poem: '投身岩下铜鸟居，须是还他大丈夫；取得营谋谁可及，翱翔直上九霄虚。', meaning: '贵人相助，时机已到，可以大展宏图，一飞冲天。' },
    { number: 7, title: '苏娘走难', poem: '奔波役役重重险，水远山遥客里艰；若问前程归缩地，争知缩地有神仙。', meaning: '目前困难重重，但坚持下去必有转机，贵人会在关键时刻出现。' },
    { number: 8, title: '斐度还带', poem: '茂林松柏正兴旺，雨雪风霜总莫为；异日忽然成大用，功名成就栋梁材。', meaning: '先苦后甜，目前虽然默默无闻，但日后必成大器，成为栋梁之才。' },
    { number: 9, title: '孔明点将', poem: '烦君勿作私心事，此意偏宜说问公；一片明心光皎洁，宛如皎月正当中。', meaning: '光明正大，问心无愧，事情会如明月当空般清晰明朗。' },
    { number: 10, title: '庞涓观阵', poem: '石藏无价玉和珍，只管他乡外客寻；宛如持灯更觅火，不如收拾枉劳心。', meaning: '何必舍近求远，其实所求之物就在身边，应珍惜眼前。' }
];

function drawQian() {
    const resultDiv = document.getElementById('qianResult');
    const numberDiv = document.getElementById('qianNumber');
    const titleDiv = document.getElementById('qianTitle');
    const poemDiv = document.getElementById('qianPoem');
    const meaningDiv = document.getElementById('qianMeaning');
    
    // 随机抽取一签
    const qian = GUANYIN_QIAN[Math.floor(Math.random() * GUANYIN_QIAN.length)];
    
    // 显示结果
    numberDiv.textContent = `第${qian.number}签`;
    titleDiv.textContent = qian.title;
    poemDiv.textContent = qian.poem;
    meaningDiv.textContent = qian.meaning;
    
    // 结合八字给出额外建议
    if (currentBaziData) {
        const extraAdvice = getQianBaziAdvice(qian.number, currentBaziData);
        meaningDiv.innerHTML += `<br><br><strong style="color: #d4af37;">结合八字：</strong>${extraAdvice}`;
    }
    
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

function getQianBaziAdvice(qianNumber, baziData) {
    const { relation, scores } = baziData;
    
    if (qianNumber <= 3 && scores.overall >= 80) {
        return '签文吉利，加上你今日运势正旺，此事可成，宜积极行动。';
    } else if (qianNumber <= 3 && scores.overall < 60) {
        return '签文虽好，但你今日运势一般，建议先做好准备工作，待时机更佳时再行动。';
    } else if (qianNumber >= 8 && scores.overall >= 80) {
        return '签文暗示先难后易，但你今日运势不错，困难会很快过去，终能成功。';
    } else if (qianNumber >= 8 && scores.overall < 60) {
        return '签文提示需要耐心等待，加上今日运势平平，建议暂缓行动，积蓄力量。';
    } else {
        return '签文显示中庸之道，配合今日运势，稳扎稳打，顺其自然即可。';
    }
}

// ==================== 周易起卦 ====================
const ZHOUYI_GUA = [
    { name: '乾为天', text: '元亨利贞。', meaning: '大吉之象，事业可成，宜积极进取，但需保持正道。' },
    { name: '坤为地', text: '元亨，利牝马之贞。', meaning: '顺应天时，厚德载物，宜守成不宜冒进，以柔克刚。' },
    { name: '水雷屯', text: '元亨利贞，勿用有攸往，利建侯。', meaning: '万事开头难，宜稳扎稳打，建立基础，不宜急于求成。' },
    { name: '山水蒙', text: '亨。匪我求童蒙，童蒙求我。', meaning: '启蒙学习之时，宜虚心求教，不可自以为是。' },
    { name: '水天需', text: '有孚，光亨，贞吉。利涉大川。', meaning: '等待时机，有诚信则光明亨通，可以涉险过关。' },
    { name: '天水讼', text: '有孚，窒惕，中吉，终凶。', meaning: '争议之事，虽有诚信但终有凶险，宜和解不宜争讼。' },
    { name: '地水师', text: '贞，丈人吉，无咎。', meaning: '行军用师之象，需有老将风范，守正则吉。' },
    { name: '水地比', text: '吉。原筮元永贞，无咎。', meaning: '亲比和睦，得人相助，大吉之象。' }
];

function drawZhouyi() {
    const resultDiv = document.getElementById('zhouyiResult');
    const nameDiv = document.getElementById('guaName');
    const textDiv = document.getElementById('guaText');
    const meaningDiv = document.getElementById('guaMeaning');
    
    // 随机起卦
    const gua = ZHOUYI_GUA[Math.floor(Math.random() * ZHOUYI_GUA.length)];
    
    nameDiv.textContent = gua.name;
    textDiv.textContent = gua.text;
    meaningDiv.textContent = gua.meaning;
    
    // 结合八字
    if (currentBaziData) {
        const extra = getZhouyiBaziAdvice(gua.name, currentBaziData);
        meaningDiv.innerHTML += `<br><br><strong style="color: #d4af37;">结合八字：</strong>${extra}`;
    }
    
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

function getZhouyiBaziAdvice(guaName, baziData) {
    const { relation } = baziData;
    
    const adviceMap = {
        '乾为天': '乾卦代表天行健，配合你今日' + relation + '的运势，宜自强不息，勇往直前。',
        '坤为地': '坤卦代表地势坤，配合' + relation + '之势，宜厚德载物，以柔克刚。',
        '水雷屯': '屯卦显示创业艰难，' + relation + '之日更需谨慎，打好基础。',
        '水天需': '需卦主等待，' + relation + '之时宜耐心等待，时机成熟自然亨通。',
        '地水师': '师卦主行动，' + relation + '之日如有计划，可果断执行。'
    };
    
    return adviceMap[guaName] || '此卦配合你今日' + relation + '的运势，宜顺其自然，见机行事。';
}

// ==================== 星盘占卜 ====================
function drawXingpan() {
    const resultDiv = document.getElementById('xingpanResult');
    const grid = document.getElementById('xingpanGrid');
    
    const planets = [
        { name: '太阳', meaning: '代表意志力和自我，今日太阳位置显示你的核心目标清晰。' },
        { name: '月亮', meaning: '代表情感和直觉，月亮相位提示关注内心感受。' },
        { name: '水星', meaning: '代表思维和沟通，适合学习交流和表达想法。' },
        { name: '金星', meaning: '代表爱情和美，金星位置利于感情发展和艺术创作。' },
        { name: '火星', meaning: '代表行动力和斗志，火星能量助你有勇气面对挑战。' },
        { name: '木星', meaning: '代表幸运和扩张，木星带来好运和成长机会。' }
    ];
    
    // 随机选择3个行星
    const selected = [];
    while (selected.length < 3) {
        const p = planets[Math.floor(Math.random() * planets.length)];
        if (!selected.includes(p)) selected.push(p);
    }
    
    grid.innerHTML = selected.map(p => `
        <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 10px; border-left: 3px solid #d4af37;">
            <div style="color: #d4af37; font-weight: bold; margin-bottom: 8px;">${p.name}</div>
            <div style="color: #a0a0a0; font-size: 0.9em; line-height: 1.6;">${p.meaning}</div>
        </div>
    `).join('');
    
    // 添加综合建议
    if (currentBaziData) {
        grid.innerHTML += `
            <div style="grid-column: 1 / -1; background: rgba(212,175,55,0.1); padding: 15px; border-radius: 10px; border: 1px solid rgba(212,175,55,0.3);">
                <div style="color: #d4af37; font-weight: bold; margin-bottom: 8px;">✨ 星盘与八字综合指引</div>
                <div style="color: #c0c0c0; line-height: 1.7;">
                    你今日八字显示为${currentBaziData.relation}，综合运势${currentBaziData.scores.overall}分。
                    星盘显示${selected[0].name}和${selected[1].name}能量较强，建议发挥${selected[0].name}的积极能量，
                    同时注意${selected[2].name}提示的方面。
                </div>
            </div>
        `;
    }
    
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// ==================== 逆天改命 ====================
const FATE_ITEMS = {
    fuzhou: {
        name: '道教灵符',
        icon: '📜',
        content: `
            <h4>📜 请太岁符一道</h4>
            <p style="line-height: 1.8; color: #c0c0c0;">
                太岁符可化解流年不利，保平安顺遂。建议：<br>
                1. 将符咒置于钱包或随身携带<br>
                2. 心诚则灵，每日默念心愿<br>
                3. 行善积德，符咒效力倍增<br>
                4. 年底需送神还愿
            </p>
            <div style="margin-top: 15px; padding: 10px; background: rgba(0,255,0,0.1); border-radius: 8px;">
                <strong style="color: #90ee90;">改命效果：</strong>可提升运势10-15%
            </div>
        `
    },
    buddha: {
        name: '观音菩萨',
        icon: '🙏',
        content: `
            <h4>🙏 请观音菩萨像</h4>
            <p style="line-height: 1.8; color: #c0c0c0;">
                观音菩萨大慈大悲，有求必应。建议：<br>
                1. 每日早晚礼拜，念诵"南无观世音菩萨"<br>
                2. 心怀慈悲，多行善事<br>
                3. 逢初一十五供灯上香<br>
                4. 可佩戴观音护身符
            </p>
            <div style="margin-top: 15px; padding: 10px; background: rgba(0,255,0,0.1); border-radius: 8px;">
                <strong style="color: #90ee90;">改命效果：</strong>可逢凶化吉，遇难呈祥
            </div>
        `
    },
    jesus: {
        name: '耶稣基督',
        icon: '✝️',
        content: `
            <h4>✝️ 请耶稣像</h4>
            <p style="line-height: 1.8; color: #c0c0c0;">
                主耶稣是道路、真理、生命。建议：<br>
                1. 每日祈祷，将心事交托给主<br>
                2. 阅读圣经，寻求指引<br>
                3. 参加教会活动，与弟兄姐妹交通<br>
                4. 践行爱人如己的教导
            </p>
            <div style="margin-top: 15px; padding: 10px; background: rgba(0,255,0,0.1); border-radius: 8px;">
                <strong style="color: #90ee90;">改命效果：</strong>心灵平安，蒙主赐福
            </div>
        `
    },
    crystal: {
        name: '转运水晶',
        icon: '💎',
        content: `
            <h4>💎 请转运水晶</h4>
            <p style="line-height: 1.8; color: #c0c0c0;">
                根据你的八字五行，推荐以下水晶：<br>
                1. ${currentBaziData && currentBaziData.scores ? '黄水晶 - 招财进宝' : '紫水晶 - 提升智慧'}<br>
                2. 黑曜石 - 辟邪化煞<br>
                3. 粉水晶 - 招桃花<br>
                4. 白水晶 - 净化磁场
            </p>
            <div style="margin-top: 15px; padding: 10px; background: rgba(0,255,0,0.1); border-radius: 8px;">
                <strong style="color: #90ee90;">改命效果：</strong>改善磁场，提升个人能量
            </div>
        `
    }
};

function selectFate(type) {
    const resultDiv = document.getElementById('fateResult');
    const item = FATE_ITEMS[type];
    
    resultDiv.innerHTML = item.content;
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// ==================== 英文详细解读数据 ====================
const DETAILED_READINGS_EN = {
    '比肩': {
        title: 'Peer Day - Self-Improvement Day',
        shortDesc: 'Peer represents self, peers, friends, competition. Today is a Peer day, suitable for self-reflection.',
        fullDesc: 'Peer Day is ideal for gathering with friends and teamwork, but watch out for competitive relationships. Your independence is strong today, perfect for completing tasks alone. Financially, Peer days may indicate sharing wealth - be cautious with large expenses. In relationships, singles may meet new people through friends; those in relationships should avoid arguments over trivial matters. Peer Day is also a good time for self-reflection and planning for the future.',
        career: 'Suitable for teamwork and collaborative projects. Discuss ideas with colleagues and brainstorm together. Avoid direct competition and maintain a harmonious work atmosphere. Today is also good for learning new skills to enhance competitiveness.',
        wealth: 'Stable finances, but watch out for shared expenses. Avoid large investments or loans; small spending is fine. Today is suitable for creating financial plans and preparing for future goals.',
        love: 'Friends may introduce potential partners - attend social activities. Those with partners should focus on communication and avoid stubbornness. Today is good for attending gatherings together.',
        health: 'Pay attention to digestive health and eat regularly. Peer days may bring work stress affecting digestion. Eat smaller meals more frequently and exercise moderately to relieve stress.'
    },
    '劫财': {
        title: 'Rob Wealth Day - Financial Caution Day',
        shortDesc: 'Rob Wealth represents competition, loss, impulsiveness. Today requires careful financial management.',
        fullDesc: 'Rob Wealth Day requires special attention to financial management. Avoid impulsive spending and investments. You may encounter competitors at work today - stay calm and do not be provoked. Although Rob Wealth days have loss implications, they are also opportunities to develop adaptability. In relationships, be more tolerant to avoid disputes.',
        career: 'Competition is fierce - stay calm. You may encounter strong competitors, but do not be angered. Guard against backstabbers and back up important files. Avoid major career decisions today.',
        wealth: 'Poor financial luck - avoid lending and investing. Focus on saving money. Unexpected expenses may occur today, so control your budget carefully.',
        love: 'Prone to arguments - practice tolerance. Avoid major relationship decisions like breaking up or confessing feelings. Singles have poor romantic luck today.',
        health: 'Pay attention to traffic safety and avoid intense exercise. Rob Wealth days are prone to small accidents. Emotional fluctuations are common - practice meditation or yoga to calm your mind.'
    },
    '食神': {
        title: 'Food God Day - Enjoyment Day',
        shortDesc: 'Food God represents enjoyment, good fortune, talent, gentleness. Today is perfect for relaxation.',
        fullDesc: 'Food God Day is for enjoying life - perfect for tasting delicious food and leisure activities. Your creativity and expressiveness are strong today, suitable for creative and presentation work. Food God also represents good fortune - you will have good relationships and easily receive help from others. Financially, Food God generates wealth - there may be small income. Singles may meet interesting people today.',
        career: 'Creativity is abundant - suitable for creation and planning. Expressiveness is enhanced - good for speeches, presentations, and negotiations. Your popularity is high today.',
        wealth: 'Small wealth is available - good regular income. Unexpected income or bonuses may come. Suitable for earning through talents and skills, but do not be greedy.',
        love: 'Romantic luck is strong - suitable for dating and expressing feelings. Your charm is enhanced today. Plan a romantic dinner or movie with your partner.',
        health: 'Enjoy good food but do not overeat. Food God days tend toward overeating - maintain dietary control. Try new healthy eating habits.'
    },
    '伤官': {
        title: 'Injury Officer Day - Creative Burst Day',
        shortDesc: 'Injury Officer represents talent, expression, arrogance, change. Today your mind is active with unlimited creativity.',
        fullDesc: 'Injury Officer Day brings active thinking and unlimited creativity - perfect for brainstorming and innovative work. Pay attention to verbal expression as you may speak too directly and offend others. Today is suitable for challenging authority and proposing new ideas, but be mindful of your approach. In relationships, you pursue romance but may also be overly critical.',
        career: 'Creativity explodes - suitable for proposals and innovation. Challenge traditional methods and propose reforms. Pay attention to verbal expression. Good for artistic, design, and writing work.',
        wealth: 'Side income luck is good but risky. Can earn through creativity and talent like writing and design. Be cautious with investments.',
        love: 'Pursue perfection but easily critical. You may have excessively high expectations of your partner. Singles have high standards and may not easily find satisfactory matches.',
        health: 'Pay attention to respiratory health and rest more. Injury Officer days tend toward overthinking - ensure adequate sleep. Suitable for outdoor walks and fresh air.'
    },
    '偏财': {
        title: 'Side Wealth Day - Unexpected Gain Day',
        shortDesc: 'Side Wealth represents unexpected gains, opportunities, social connections. Today brings many opportunities.',
        fullDesc: 'Side Wealth Day is excellent for seeking wealth - unexpected gains and opportunities are likely. Social luck is strong today - suitable for networking and business entertainment. Side Wealth also represents liquid wealth - suitable for short-term investments. But remember: side wealth comes and goes quickly - take profits when you can. Romantically, today is passionate and suitable for dating.',
        career: 'Good social luck - suitable for networking. Attend industry events where you may meet helpful people. Opportunities for extra income or bonuses exist.',
        wealth: 'Excellent side income luck! Seize opportunities but do not be greedy. Unexpected money may come like prizes, red envelopes, or investment returns. Suitable for short-term理财.',
        love: 'Romantic and passionate - suitable for dating and gift-giving. Your charm is at its peak today. Surprise your partner or confess to someone you like.',
        health: 'Rest well and do not overdo social activities. Side Wealth days have many social engagements - balance work and rest. Drink alcohol in moderation to protect your liver.'
    },
    '正财': {
        title: 'Proper Wealth Day - Steady Work Day',
        shortDesc: 'Proper Wealth represents legitimate income, stability, practicality. Today is for steady progress.',
        fullDesc: 'Proper Wealth Day is for steady work - suitable for handling daily tasks and completing established goals. Financial luck is stable today - effort brings rewards. Proper Wealth also represents responsibility - your sense of duty is strong today, suitable for important tasks. Romantically, today is stable and suitable for discussing marriage.',
        career: 'Work diligently and be recognized by leadership. Suitable for completing routine work steadily. Your efforts will be noticed and may lead to praise or raises.',
        wealth: 'Stable regular income - more work brings more rewards. Salary income is stable, performance bonuses possible. Focus on steady work rather than speculation.',
        love: 'Stable relationships - suitable for discussing marriage. Provide security to your partner and discuss future plans. Singles should seek long-term stable relationships.',
        health: 'Healthy body - maintain regular routines. Proper Wealth days bring stable physical and mental states - establish healthy living habits.'
    },
    '七杀': {
        title: 'Seven Killings Day - Challenge Response Day',
        shortDesc: 'Seven Killings represents pressure, challenges, authority. Today requires courage.',
        fullDesc: 'Seven Killings Day brings challenges and pressure but also opportunities for breakthroughs. Today you will face difficulties and competition - remain calm and confident. Seven Killings also represent authority - you may encounter strict superiors or opponents. Maintain a low profile and avoid direct conflict.',
        career: 'Challenging but breakthrough opportunities exist. Face difficulties bravely and do not retreat. Competitors or strict supervisors may appear - respond calmly.',
        wealth: 'Risky and unstable - avoid large investments. Today has many variables - financial decisions should be conservative. Ensure basic living expenses.',
        love: 'Emotional fluctuations - avoid impulsive decisions. Seven Killings days may bring external interference in relationships. Trust your partner and avoid suspicion.',
        health: 'Stress is high - practice relaxation. Seven Killings days bring mental stress - release it through exercise or meditation. Watch for cardiovascular health.'
    },
    '正官': {
        title: 'Proper Officer Day - Authority Respect Day',
        shortDesc: 'Proper Officer represents authority, rules, career. Today career luck is strong.',
        fullDesc: 'Proper Officer Day brings good career luck - suitable for communicating with superiors and handling official matters. Today you easily gain leadership trust and recognition. Proper Officer also represents rules and order - suitable for establishing norms and systems. Romantically, Proper Officer days are stable - suitable for formal commitments.',
        career: 'Career luck is excellent! Communicate with superiors and take initiative. You may receive important tasks or promotions. Build good relationships with leadership.',
        wealth: 'Stable income through proper channels. Financial luck is stable today - wealth through legitimate work. Avoid speculation and focus on work.',
        love: 'Stable and reliable - suitable for serious commitments. Show responsibility to attract stable partners. Existing relationships are harmonious and trustworthy.',
        health: 'Physical condition is good - maintain healthy habits. Proper Officer days bring disciplined schedules - maintain exercise routines.'
    },
    '偏印': {
        title: 'Side Seal Day - Learning Reflection Day',
        shortDesc: 'Side Seal represents learning, thinking, solitude. Today is suitable for introspection.',
        fullDesc: 'Side Seal Day is suitable for studying, thinking, and working alone. Today your thinking is deep and suitable for research and analysis. Side Seal also represents uniqueness - you may have unconventional ideas. However, you tend to overthink today - do not be overly suspicious.',
        career: 'Suitable for research and analysis work. Deep thinking brings new discoveries. Work independently and avoid excessive socializing.',
        wealth: 'Financial luck is average - suitable for learning理财知识. Today is not ideal for investments - focus on improving financial literacy and planning.',
        love: 'Prone to overthinking - maintain open communication. Side Seal days may bring suspicion and worry. Trust your partner and avoid unnecessary doubts.',
        health: 'Mental stress is high - ensure relaxation. Side Seal days tend toward overthinking - release stress through meditation. Watch for sleep quality.'
    },
    '正印': {
        title: 'Proper Seal Day - Blessing Protection Day',
        shortDesc: 'Proper Seal represents protection, blessings, learning. Today is blessed with good luck.',
        fullDesc: 'Proper Seal Day brings blessings and protection - things go smoothly today. Your learning ability is strong - suitable for studying and taking exams. Proper Seal also represents protection - you easily receive help from elders and benefactors. Romantically, Proper Seal days are warm and suitable for building deep connections.',
        career: 'Blessed with good luck - easily receive help from elders. Suitable for studying and improving skills. Communicate well with superiors and colleagues.',
        wealth: 'Stable financial luck - protected from loss. Today is blessed - wealth remains stable with help from benefactors. Avoid greed.',
        love: 'Warm and caring - relationships develop deeply. Proper Seal days bring gentle energy - express care to your partner. Singles attract warm, reliable partners.',
        health: 'Health is good - suitable for health maintenance. Proper Seal days bring protection - maintain good habits to enhance immunity.'
    }
};

// ==================== 英文生肖运势数据 ====================
const SHENGXIAO_FORTUNE_EN = {
    '鼠': { desc: 'Intelligent and agile', today: 'Today your thinking is sharp and reactions are quick, suitable for handling complex matters. Seize opportunities and act decisively.' },
    '牛': { desc: 'Steady and diligent', today: 'Today you are steady and reliable, suitable for completing important tasks. Maintain your pace and success will come.' },
    '虎': { desc: 'Brave and decisive', today: 'Today you are full of courage and suitable for challenging difficult tasks. Stay confident and move forward boldly.' },
    '兔': { desc: 'Gentle and kind', today: 'Today you have good relationships and are suitable for social activities. Stay gentle and you will receive help from others.' },
    '龙': { desc: 'Majestic and energetic', today: 'Today your energy is high and leadership is strong, suitable for leading teams. Seize opportunities to shine.' },
    '蛇': { desc: 'Wise and thoughtful', today: 'Today your thinking is deep and suitable for analysis and planning. Stay calm and you will make wise decisions.' },
    '马': { desc: 'Active and passionate', today: 'Today you are full of energy and suitable for outdoor activities. Stay enthusiastic and good opportunities will come.' },
    '羊': { desc: 'Gentle and kind', today: 'Today your creativity is good and suitable for artistic work. Stay patient and you will receive recognition.' },
    '猴': { desc: 'Clever and adaptable', today: 'Today you have flexible thinking and suitable for innovative work. Stay smart and you will find good solutions.' },
    '鸡': { desc: 'Diligent and responsible', today: 'Today you are diligent and recognized by leadership. Stay hardworking and you will be rewarded.' },
    '狗': { desc: 'Loyal and reliable', today: 'Today you have good teamwork and suitable for collaborative work. Stay sincere and you will win trust.' },
    '猪': { desc: 'Honest and tolerant', today: 'Today you have good luck and are suitable for enjoying life. Stay optimistic and good fortune will come.' }
};

// ==================== 英文星座运势数据 ====================
const XINGZUO_FORTUNE_EN = {
    '摩羯座': { desc: 'Practical and responsible', today: 'Today your career luck is good, suitable for handling important work. Stay practical and you will be recognized by leadership.' },
    '水瓶座': { desc: 'Independent and innovative', today: 'Today your creativity is abundant, suitable for innovative projects. Maintain independent thinking and you will have unique insights.' },
    '双鱼座': { desc: 'Sensitive and romantic', today: 'Today your intuition is sharp, suitable for creative work. Stay sensitive and you will receive inspiration.' },
    '白羊座': { desc: 'Passionate and direct', today: 'Today you are full of energy, suitable for challenging tasks. Stay passionate and take bold action.' },
    '金牛座': { desc: 'Steady and persistent', today: 'Today your financial luck is stable, suitable for理财规划. Stay patient and wealth will accumulate.' },
    '双子座': { desc: 'Clever and adaptable', today: 'Today your communication skills are strong, suitable for social activities. Stay flexible and you will gain new opportunities.' },
    '巨蟹座': { desc: 'Gentle and family-oriented', today: 'Today your family luck is good, suitable for spending time with family. Stay gentle and enjoy family time.' },
    '狮子座': { desc: 'Confident and generous', today: 'Today your leadership is strong, suitable for leading teams. Stay confident and you will inspire others.' },
    '处女座': { desc: 'Detail-oriented and perfect', today: 'Today your attention to detail is good, suitable for precise work. Stay meticulous and you will produce excellent results.' },
    '天秤座': { desc: 'Harmonious and elegant', today: 'Today your relationships are harmonious, suitable for social activities. Stay elegant and you will be welcomed.' },
    '天蝎座': { desc: 'Deep and mysterious', today: 'Today your intuition is sharp, suitable for research and investigation. Stay focused and you will discover the truth.' },
    '射手座': { desc: 'Optimistic and adventurous', today: 'Today your adventurous spirit is strong, suitable for trying new things. Stay optimistic and you will gain new experiences.' }
};
