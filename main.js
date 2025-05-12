// 移动端菜单
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

    menuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // 点击菜单项时关闭菜单
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // 点击页面其他区域时关闭菜单
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });

    // 语言切换
    const languageSelector = document.querySelector('.language-selector select');
    if (languageSelector) {
        // 应用保存的语言设置或使用默认语言（英文）
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
        languageSelector.value = savedLanguage;
        changeLanguage(savedLanguage);

        languageSelector.addEventListener('change', function(e) {
            changeLanguage(e.target.value);
        });
    }

    // Cookie 设置
    checkCookieConsent();
});

// 语言翻译
const translations = {
    'en': {
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-services': 'Services',
        'nav-news': 'News',
        'nav-contact': 'Contact',
        'hero-title': 'Launch Smarter.\nScale Faster.\nWin in Japan and China.',
        'hero-subtitle1': 'We turn big dreams into bold realities.',
        'hero-subtitle2': 'From zero to hero, our local know-how, creative firepower, and growth-first strategies help foreign brands thrive in Asia\'s most exciting markets.',
        'cta-button': ' → Launch My Brand',
        'services-title': 'Our Services',
        'services-subtitle': 'Your trusted partner for business growth in Asia',
        'service-software': 'Software Development',
        'service-software-desc': 'Custom software solutions for your business needs',
        'service-mobile': 'Mobile Applications',
        'service-mobile-desc': 'Professional mobile app development with excellent user experience',
        'service-cloud': 'Cloud Services',
        'service-cloud-desc': 'Secure and reliable cloud computing solutions',
        'service-security': 'Cybersecurity',
        'service-security-desc': 'Comprehensive network security protection services',
        'service-consulting': 'Technical Consulting',
        'service-consulting-desc': 'Professional technical consulting services',
        'service-maintenance': 'System Maintenance',
        'service-maintenance-desc': 'Continuous system maintenance and support services',
        'view-more': 'View More Services',
        'news-title': 'Latest News',
        'news-subtitle': 'Your trusted partner for business growth in Asia',
        'news-ai-title': 'AI Applications in Business',
        'news-ai-desc': 'Artificial Intelligence (AI) is profoundly changing how modern businesses operate. From automated processes to intelligent decision support, AI technology brings unprecedented opportunities and challenges to enterprises.',
        'news-digital-title': 'Digital Transformation Guide',
        'news-digital-desc': 'Digital transformation is not just about technological change, but also about reshaping business models and organizational culture to adapt to the digital age.',
        'news-cloud-title': 'Cloud Computing Best Practices',
        'news-cloud-desc': 'Cloud computing has become the cornerstone of modern IT infrastructure. Understanding and implementing best practices is crucial for business success.',
        'news-read-more': 'Read More',
        'about-title': 'About Us',
        'about-subtitle': 'Your trusted partner for business growth in Asia',
        'company-profile': 'Company Profile',
        'company-name': 'Company Name',
        'establishment-date': 'Establishment Date',
        'registered-capital': 'Registered Capital',
        'company-size': 'Company Size',
        'company-desc': '',
        'company-intro-title': 'Launch Smarter. Scale Faster. Win in Japan and China.',
        'company-intro-subtitle1': 'We turn big dreams into bold realities.',
        'company-intro-subtitle2': 'From zero to hero, our local know-how, creative firepower, and growth-first strategies help foreign brands thrive in Asia\'s most exciting markets.',
        'company-intro-paragraph': 'Your success in Asia demands more than translation—it demands true localization, market intelligence, and strategic execution. At Action For, we deliver full-service marketing and sales acceleration solutions designed to help foreign brands break through cultural barriers and achieve real, measurable results.',
        'contact-title': 'Contact Us',
        'contact-subtitle': 'Your trusted partner for business growth in Asia',
        'contact-person': 'Contact Person',
        'contact-phone': 'Phone Number',
        'contact-email': 'Email',
        'contact-address': 'Address',
        'contact-phone-text': 'Phone: 080-7099-0700',
        'contact-email-text': 'Email: andrealee199202@gmail.com',
        'contact-address-text': 'Address: Harumi 3-16-1 Bayside Tower Harumi 2003, Chuo-ku, Tokyo',
        'quick-links': 'Quick Links',
        'privacy-policy': 'Privacy Policy',
        'terms': 'Terms of Use',
        'all-rights': 'All rights reserved.',
        'cookie-settings': 'Cookie Settings',
        'cookie-settings-title': 'Cookie Settings',
        'cookie-settings-desc': 'We use cookies to improve your browsing experience. Please select the types of cookies you want to accept:',
        'cookie-necessary': 'Necessary Cookies (Required)',
        'cookie-necessary-desc': 'These cookies are essential for the basic functionality of the website and cannot be disabled.',
        'cookie-analytics': 'Analytics Cookies',
        'cookie-analytics-desc': 'Help us understand how visitors use our website.',
        'cookie-marketing': 'Marketing Cookies',
        'cookie-marketing-desc': 'Used for personalized advertising and marketing content.',
        'cookie-accept-all': 'Accept All',
        'cookie-save': 'Save Settings',
        'team-title': 'Core Team',
        'team-ceo-name': 'Andrea Lee',
        'team-ceo-position': 'Founder & Chief Growth Officer',
        'team-ceo-desc': 'A Bridge Between Cultures. A Catalyst for Growth. With over 12 years of hands-on experience helping global brands enter and scale across Japan and Greater China, Andrea Lee is a rare breed: a marketing strategist fluent in the cultures, languages, and business landscapes of both East and West.',
        'team-cto-name': 'Pherson Wong',
        'team-cto-position': 'Senior Digital Strategy Partner',
        'team-cto-desc': 'Shaping Digital Growth Across Japan and Asia. With over a decade of leadership experience in the digital marketing industry, Pherson brings a rare blend of agency excellence, cross-border strategy, and cutting-edge media technology expertise to our team.',
        'team-cmo-name': 'Mattiuw Reynolds',
        'team-cmo-position': 'Senior Digital Marketing Strategist',
        'team-cmo-desc': 'Driving Full-Stack Digital Success Across Japan and the U.S. Mattiuw Reynolds brings over 15 years of digital marketing experience, specializing in full-stack B2B and B2C growth strategies for the Japanese and U.S. markets.'
    },
    'zh': {
        'nav-home': '首页',
        'nav-about': '关于我们',
        'nav-services': '服务',
        'nav-news': '新闻',
        'nav-contact': '联系我们',
        'hero-title': 'Launch Smarter.\nScale Faster.\nWin in Japan and China.',
        'hero-subtitle1': '我们将远大梦想转化为现实。',
        'hero-subtitle2': '从零到成功，我们凭借本地专业知识、创意实力和增长优先策略，帮助外国品牌在亚洲最具活力的市场中蓬勃发展。',
        'cta-button': ' → Launch My Brand',
        'services-title': '我们的服务',
        'services-subtitle': '您的亚洲业务增长伙伴',
        'service-software': '软件开发',
        'service-software-desc': '定制化软件解决方案，满足您的业务需求',
        'service-mobile': '移动应用',
        'service-mobile-desc': '专业的移动应用开发，提供卓越用户体验',
        'service-cloud': '云服务',
        'service-cloud-desc': '安全可靠的云计算解决方案',
        'service-security': '网络安全',
        'service-security-desc': '全面的网络安全防护服务',
        'service-consulting': '技术咨询',
        'service-consulting-desc': '专业的技术咨询服务',
        'service-maintenance': '系统维护',
        'service-maintenance-desc': '持续的系统维护和支持服务',
        'view-more': '了解更多服务',
        'news-title': '最新动态',
        'news-subtitle': '您的亚洲业务增长伙伴',
        'news-ai-title': '人工智能在商业中的应用',
        'news-ai-desc': '人工智能（AI）正在深刻改变着现代商业的运作方式。从自动化流程到智能决策支持，AI技术为企业带来了前所未有的机遇和挑战。',
        'news-digital-title': '数字化转型指南',
        'news-digital-desc': '数字化转型不仅仅是技术层面的改变，更是重塑商业模式和组织文化以适应数字时代。',
        'news-cloud-title': '云计算最佳实践',
        'news-cloud-desc': '云计算已成为现代IT基础设施的基石。理解和实施最佳实践对业务成功至关重要。',
        'news-read-more': '阅读更多',
        'about-title': '关于我们',
        'about-subtitle': '您的亚洲业务增长伙伴',
        'company-profile': '公司简介',
        'company-name': '公司名称',
        'establishment-date': '成立时间',
        'registered-capital': '注册资本',
        'company-size': '公司规模',
        'company-desc': '',
        'company-intro-title': 'Launch Smarter. Scale Faster. Win in Japan and China.',
        'company-intro-subtitle1': '我们将远大梦想转化为现实。',
        'company-intro-subtitle2': '从零到英雄，我们凭借本地专业知识、创意实力和增长优先策略，帮助外国品牌在亚洲最具活力的市场中蓬勃发展。',
        'company-intro-paragraph': '在亚洲取得成功需要的不仅仅是翻译——它需要真正的本地化、市场洞察和战略执行。在 Action For，我们提供全方位的营销和销售加速解决方案，旨在帮助外国品牌突破文化障碍，实现真实、可衡量的成果。',
        'contact-title': '联系我们',
        'contact-subtitle': '您的亚洲业务增长伙伴',
        'contact-person': '联系人',
        'contact-phone': '联系电话',
        'contact-email': '电子邮箱',
        'contact-address': '公司地址',
        'contact-phone-text': '电话：080-7099-0700',
        'contact-email-text': '邮箱：andrealee199202@gmail.com',
        'contact-address-text': '地址：東京都中央区晴海3-16-1ベイサイドタワー晴海2003',
        'quick-links': '快速链接',
        'privacy-policy': '隐私政策',
        'terms': '使用条款',
        'all-rights': '保留所有权利。',
        'cookie-settings': 'Cookie 设置',
        'cookie-settings-title': 'Cookie 设置',
        'cookie-settings-desc': '我们使用 Cookie 来改善您的浏览体验。请选择您想要接受的 Cookie 类型：',
        'cookie-necessary': '必要 Cookie（必需）',
        'cookie-necessary-desc': '这些 Cookie 对于网站的基本功能是必需的，无法关闭。',
        'cookie-analytics': '分析 Cookie',
        'cookie-analytics-desc': '帮助我们了解访问者如何使用我们的网站。',
        'cookie-marketing': '营销 Cookie',
        'cookie-marketing-desc': '用于个性化广告和营销内容。',
        'cookie-accept-all': '接受所有',
        'cookie-save': '保存设置',
        'team-title': '核心团队',
        'team-ceo-name': 'Andrea Lee',
        'team-ceo-position': '创始人兼首席增长官',
        'team-ceo-desc': '文化的桥梁，增长的催化剂。Andrea Lee拥有超过12年的实战经验，帮助全球品牌进入并拓展日本和大中华区市场。她是一位罕见的营销战略家，精通东西方文化、语言和商业环境。',
        'team-cto-name': 'Pherson Wong',
        'team-cto-position': '高级数字战略合伙人',
        'team-cto-desc': '塑造日本和亚洲的数字增长。Pherson在数字营销行业拥有超过十年的领导经验，为我们的团队带来了独特的代理卓越性、跨境战略和尖端媒体技术专长的组合。',
        'team-cmo-name': 'Mattiuw Reynolds',
        'team-cmo-position': '高级数字营销战略师',
        'team-cmo-desc': '推动日本和美国的全栈数字成功。Mattiuw Reynolds拥有超过15年的数字营销经验，专注于为日本和美国市场提供全栈B2B和B2C增长战略。'
    },
    'jp': {
        'nav-home': 'ホーム',
        'nav-about': '会社概要',
        'nav-services': 'サービス',
        'nav-news': 'ニュース',
        'nav-contact': 'お問い合わせ',
        'hero-title': 'Launch Smarter.\nScale Faster.\nWin in Japan and China.',
        'hero-subtitle1': '私たちは大きな夢を現実に変えます。',
        'hero-subtitle2': 'ゼロから成功へ、私たちのローカルノウハウ、クリエイティブな力、成長重視の戦略により、外国ブランドがアジアの最も魅力的な市場で成功することを支援します。',
        'cta-button': ' → Launch My Brand',
        'services-title': 'サービス内容',
        'services-subtitle': 'アジアでのビジネス成長のパートナー',
        'service-software': 'ソフトウェア開発',
        'service-software-desc': 'ビジネスニーズに合わせたカスタムソフトウェアソリューション',
        'service-mobile': 'モバイルアプリケーション',
        'service-mobile-desc': '優れたユーザー体験を提供するプロフェッショナルなモバイルアプリ開発',
        'service-cloud': 'クラウドサービス',
        'service-cloud-desc': '安全で信頼性の高いクラウドコンピューティングソリューション',
        'service-security': 'サイバーセキュリティ',
        'service-security-desc': '包括的なネットワークセキュリティ保護サービス',
        'service-consulting': '技術コンサルティング',
        'service-consulting-desc': 'プロフェッショナルな技術コンサルティングサービス',
        'service-maintenance': 'システム保守',
        'service-maintenance-desc': '継続的なシステム保守とサポートサービス',
        'view-more': 'サービスをもっと見る',
        'news-title': '最新ニュース',
        'news-subtitle': 'アジアでのビジネス成長のパートナー',
        'news-ai-title': 'ビジネスにおけるAIの応用',
        'news-ai-desc': '人工知能（AI）は現代のビジネス運営方法を大きく変えています。自動化プロセスからインテリジェントな意思決定支援まで、AI技術は企業に前例のない機会と課題をもたらしています。',
        'news-digital-title': 'デジタルトランスフォーメーションガイド',
        'news-digital-desc': 'デジタルトランスフォーメーションは技術的な変化だけでなく、デジタル時代に適応するためのビジネスモデルと組織文化の再構築でもあります。',
        'news-cloud-title': 'クラウドコンピューティングのベストプラクティス',
        'news-cloud-desc': 'クラウドコンピューティングは現代のITインフラストラクチャの基盤となっています。ベストプラクティスの理解と実装はビジネスの成功に不可欠です。',
        'news-read-more': '続きを読む',
        'about-title': '会社概要',
        'about-subtitle': 'アジアでのビジネス成長のパートナー',
        'company-profile': '会社概要',
        'company-name': '会社名',
        'establishment-date': '設立日',
        'registered-capital': '資本金',
        'company-size': '会社規模',
        'company-desc': '',
        'company-intro-title': 'Launch Smarter. Scale Faster. Win in Japan and China.',
        'company-intro-subtitle1': '私たちは大きな夢を現実に変えます。',
        'company-intro-subtitle2': 'ゼロからヒーローへ、私たちのローカルノウハウ、クリエイティブな力、成長重視の戦略により、外国ブランドがアジアの最も魅力的な市場で成功することを支援します。',
        'company-intro-paragraph': 'アジアでの成功には、単なる翻訳以上のものが必要です。真のローカライゼーション、市場インテリジェンス、戦略的な実行が必要です。Action Forでは、外国ブランドが文化的障壁を突破し、実質的で測定可能な結果を達成するための、フルサービスのマーケティングとセールス加速ソリューションを提供しています。',
        'contact-title': 'お問い合わせ',
        'contact-subtitle': 'アジアでのビジネス成長のパートナー',
        'contact-person': '担当者',
        'contact-phone': '電話番号',
        'contact-email': 'メールアドレス',
        'contact-address': '住所',
        'contact-phone-text': '電話：080-7099-0700',
        'contact-email-text': 'メール：andrealee199202@gmail.com',
        'contact-address-text': '住所：東京都中央区晴海3-16-1ベイサイドタワー晴海2003',
        'quick-links': 'クイックリンク',
        'privacy-policy': 'プライバシーポリシー',
        'terms': '利用規約',
        'all-rights': 'All rights reserved.',
        'cookie-settings': 'Cookie設定',
        'cookie-settings-title': 'Cookie設定',
        'cookie-settings-desc': 'ブラウジング体験を向上させるためにCookieを使用しています。受け入れるCookieの種類を選択してください：',
        'cookie-necessary': '必要Cookie（必須）',
        'cookie-necessary-desc': 'これらのCookieはウェブサイトの基本機能に必要で、無効にすることはできません。',
        'cookie-analytics': '分析Cookie',
        'cookie-analytics-desc': '訪問者がウェブサイトをどのように使用しているかを理解するのに役立ちます。',
        'cookie-marketing': 'マーケティングCookie',
        'cookie-marketing-desc': 'パーソナライズされた広告やマーケティングコンテンツに使用されます。',
        'cookie-accept-all': 'すべて受け入れる',
        'cookie-save': '設定を保存',
        'team-title': 'コアチーム',
        'team-ceo-name': 'Andrea Lee',
        'team-ceo-position': '創業者兼最高成長責任者',
        'team-ceo-desc': '文化的の架け橋、成長の触媒。Andrea Leeは12年以上の実践的な経験を持ち、グローバルブランドの日本と大中華圏への参入と拡大を支援してきました。東洋と西洋の文化、言語、ビジネス環境に精通した希少なマーケティング戦略家です。',
        'team-cto-name': 'Pherson Wong',
        'team-cto-position': 'シニアデジタル戦略パートナー',
        'team-cto-desc': '日本とアジア全体のデジタル成長を形作る。Phersonはデジタルマーケティング業界で10年以上のリーダーシップ経験を持ち、代理店の卓越性、クロスボーダー戦略、最先端のメディア技術の専門知識を組み合わせた希少な才能をチームにもたらしています。',
        'team-cmo-name': 'Mattiuw Reynolds',
        'team-cmo-position': 'シニアデジタルマーケティング戦略家',
        'team-cmo-desc': '日本とアメリカのフルスタックデジタル成功を推進。Mattiuw Reynoldsは15年以上のデジタルマーケティング経験を持ち、日本とアメリカ市場向けのフルスタックB2BおよびB2C成長戦略を専門としています。'
    }
};

// 切换语言
function changeLanguage(lang) {
    // 保存语言选择到localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // 更新所有带有data-translate属性的元素
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            // 如果是标题，需要处理换行符
            if (element.classList.contains('hero-title')) {
                element.innerHTML = translations[lang][key].replace(/\n/g, '<br>');
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // 更新语言选择器的值
    const languageSelector = document.querySelector('.language-selector select');
    if (languageSelector) {
        languageSelector.value = lang;
    }
}

// 页面加载时初始化语言
document.addEventListener('DOMContentLoaded', function() {
    // 获取保存的语言设置或使用默认语言
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'zh';
    
    // 设置语言选择器的初始值
    const languageSelector = document.querySelector('.language-selector select');
    if (languageSelector) {
        languageSelector.value = savedLanguage;
    }
    
    // 应用保存的语言设置
    changeLanguage(savedLanguage);
});

// Cookie 设置相关功能
function checkCookieConsent() {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
        showCookieSettings();
    }
}

function showCookieSettings() {
    const cookieModal = document.querySelector('.cookie-modal');
    if (cookieModal) {
        cookieModal.style.display = 'block';
    }
}

function saveCookieSettings() {
    const necessaryCookies = document.getElementById('necessary-cookies').checked;
    const analyticsCookies = document.getElementById('analytics-cookies').checked;
    const marketingCookies = document.getElementById('marketing-cookies').checked;

    localStorage.setItem('cookieConsent', JSON.stringify({
        necessary: necessaryCookies,
        analytics: analyticsCookies,
        marketing: marketingCookies
    }));

    const cookieModal = document.querySelector('.cookie-modal');
    if (cookieModal) {
        cookieModal.style.display = 'none';
    }
}

function acceptAllCookies() {
    localStorage.setItem('cookieConsent', JSON.stringify({
        necessary: true,
        analytics: true,
        marketing: true
    }));

    const cookieModal = document.querySelector('.cookie-modal');
    if (cookieModal) {
        cookieModal.style.display = 'none';
    }
}

// 添加Cookie设置按钮点击事件
document.addEventListener('DOMContentLoaded', function() {
    const cookieSettingsBtn = document.querySelector('.cookie-settings-btn');
    if (cookieSettingsBtn) {
        cookieSettingsBtn.addEventListener('click', showCookieSettings);
    }

    const saveSettingsBtn = document.querySelector('.save-settings');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', saveCookieSettings);
    }

    const acceptAllBtn = document.querySelector('.accept-all');
    if (acceptAllBtn) {
        acceptAllBtn.addEventListener('click', acceptAllCookies);
    }
});

// 滚动动画
function handleScrollAnimation() {
    const sections = document.querySelectorAll('.services-preview, .blog-preview, .partners');
    const cards = document.querySelectorAll('.service-card, .blog-card, .partner-logo');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('services-preview') || 
                    entry.target.classList.contains('blog-preview') || 
                    entry.target.classList.contains('partners')) {
                    // 为子元素添加延迟动画
                    const children = entry.target.querySelectorAll('.service-card, .blog-card, .partner-logo');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible');
                        }, 100 * index); // 每个元素延迟100ms
                    });
                }
            }
        });
    }, observerOptions);

    // 观察所有区块
    sections.forEach(section => {
        observer.observe(section);
    });

    // 观察所有卡片
    cards.forEach(card => {
        observer.observe(card);
    });
}

// 页面加载完成后初始化滚动动画
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimation();
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 导航栏滚动隐藏
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const scrollThreshold = 50; // 滚动阈值

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // 如果滚动距离超过阈值
    if (currentScroll > scrollThreshold) {
        // 向下滚动时隐藏导航栏
        if (currentScroll > lastScrollTop) {
            navbar.classList.add('hide');
        } 
        // 向上滚动时显示导航栏
        else {
            navbar.classList.remove('hide');
        }
    } else {
        // 在页面顶部时始终显示导航栏
        navbar.classList.remove('hide');
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}); 