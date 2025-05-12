// 移动端菜单和语言切换初始化
document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单逻辑
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

    // 语言切换初始化
    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        // 获取保存的语言设置或使用默认语言（中文）
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'zh';
        languageSelector.value = savedLanguage;
        
        // 应用保存的语言设置
        changeLanguage(savedLanguage);

        // 添加语言切换事件监听
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
        'service-digital-title': 'Digital Growth Services',
        'service-digital-intro': 'Building brand awareness is the foundation of long-term success. Our digital marketing services are designed to localize your brand, amplify your presence, and build deep engagement with audiences across Japan and Greater China—before your competitors even get noticed.',
        'service-digital-mpr-title': 'Marketing and Public Relations Strategy',
        'service-digital-mpr-desc': 'Craft powerful stories that drive business and open doors',
        'service-digital-content-title': 'Content Marketing (English, Japanese Chinese)',
        'service-digital-content-desc': 'Content that speaks to your audience—and speaks for your brand',
        'service-digital-seo-title': 'Search Engine Optimization (SEO)',
        'service-digital-seo-desc': 'Get found where it matters—with content and technical excellence',
        'service-digital-email-title': 'Email Marketing',
        'service-digital-email-desc': 'Turn your inbox into your highest-converting sales channel',
        'service-digital-website-title': 'Website (Campaign Landing Pages) Design and Development',
        'service-digital-website-desc': 'Campaign pages that convert browsers into buyers',
        'service-sales-title': 'Sales Acceleration Services',
        'service-sales-intro': 'Visibility alone isn\'t enough—you need action. Our sales acceleration solutions directly connect your brand with local buyers, partners, and distributors, turning attention into transactions and helping you scale revenue quickly in Japan and China.',
        'service-sales-fullstack-title': 'Full Stack Digital Marketing',
        'service-sales-fullstack-desc': 'Build, launch, and scale your brand from zero to hero',
        'service-sales-distributor-title': 'Local Distributor Partner',
        'service-sales-distributor-desc': 'Your trusted gateway to local sales channels in Japan and China',
        'service-sales-social-title': 'Social Media Management (China): Little Red Book and Douyin',
        'service-sales-social-desc': 'Master China\'s hottest platforms with localized content that sells',
        'view-more': 'View More Services',
        'news-title': 'Latest News',
        'news-live-commerce-title': 'Chinese Live Commerce: Inspiring New Sales Models in Japan',
        'news-live-commerce-desc': 'Chinese live commerce has revolutionized the retail landscape, offering a dynamic and interactive shopping experience. This innovative approach, which combines entertainment with e-commerce, is now inspiring Japanese retailers to adopt similar strategies to enhance customer engagement and drive sales.',
        'news-social-title': 'Social Media Marketing in 2025: New Trends and Opportunities for Business Promotion',
        'news-social-desc': 'As social media continues to evolve, corporate marketing strategies in 2025 are undergoing significant transformations. From short-form video content to AI-driven personalized marketing, businesses must adapt to these new trends to remain competitive in the digital marketing landscape.',
        'news-ai-title': 'AI Applications in Business',
        'news-ai-desc': 'Artificial Intelligence (AI) is profoundly changing how modern businesses operate. From automated processes to intelligent decision support, AI technology brings unprecedented opportunities and challenges to enterprises.',
        'news-read-more': 'Read More',
        'partners-title': 'Partners',
        'quick-links': 'Quick Links',
        'contact-title': 'Contact Us',
        'contact-phone-text': 'Phone: 080-7099-0700',
        'contact-email-text': 'Email: andrealee199202@gmail.com',
        'contact-address-text': 'Address: Harumi 3-16-1 Bayside Tower Harumi 2003, Chuo-ku, Tokyo',
        'privacy-policy': 'Privacy Policy',
        'cookie-settings': 'Cookie Settings',
        'terms': 'Terms of Use',
        'all-rights': 'All rights reserved.',
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
        'contact-person': 'Contact Person',
        'contact-phone': 'Phone',
        'contact-email': 'Email',
        'contact-address': 'Address',
        'contact-form-name': 'Your Name',
        'contact-form-email': 'Your Email',
        'contact-form-phone': 'Your Phone',
        'contact-form-message': 'Message',
        'contact-form-submit': 'Submit'
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
        'service-digital-title': '数字增长服务',
        'service-digital-intro': '品牌认知度的建立是长期成功的基础。我们的数字营销服务旨在本地化您的品牌，提升您的影响力，并在日本和大中华区与受众建立深度互动——让您的品牌在竞争对手之前脱颖而出。',
        'service-digital-mpr-title': '市场与公关策略',
        'service-digital-mpr-desc': '打造推动业务和开拓市场的强大故事',
        'service-digital-content-title': '内容营销（英/日/中）',
        'service-digital-content-desc': '内容既能打动受众，也能代表品牌发声',
        'service-digital-seo-title': '搜索引擎优化（SEO）',
        'service-digital-seo-desc': '内容与技术并重，让品牌在关键位置被发现',
        'service-digital-email-title': '邮件营销',
        'service-digital-email-desc': '让邮箱成为转化率最高的销售渠道',
        'service-digital-website-title': '网站（活动落地页）设计与开发',
        'service-digital-website-desc': '活动页面助力访客转化为买家',
        'service-sales-title': '销售加速服务',
        'service-sales-intro': '仅有曝光还不够——还需要行动。我们的销售加速方案让您的品牌直连本地买家、合作伙伴和分销商，将关注转化为交易，助您在日本和中国快速提升营收。',
        'service-sales-fullstack-title': '全栈数字营销',
        'service-sales-fullstack-desc': '从零到英雄，助力品牌全面成长',
        'service-sales-distributor-title': '本地分销合作',
        'service-sales-distributor-desc': '您在日本和中国本地销售渠道的信赖之选',
        'service-sales-social-title': '社交媒体运营（中国）：小红书与抖音',
        'service-sales-social-desc': '用本地化内容玩转中国最火平台，助力销售',
        'view-more': '了解更多服务',
        'news-title': '最新动态',
        'news-live-commerce-title': '中国直播电商：为日本带来新销售模式启发',
        'news-live-commerce-desc': '中国直播电商彻底改变了零售格局，带来了充满活力和互动性的购物体验。这种将娱乐与电商结合的创新方式，正激励日本零售商采用类似策略以提升客户参与度和销售额。',
        'news-social-title': '2025年社交媒体营销：企业推广的新趋势与机遇',
        'news-social-desc': '随着社交媒体的持续发展，2025年的企业营销策略正在经历重大变革。从短视频内容到AI驱动的个性化营销，企业需要适应这些新趋势才能在数字营销领域保持竞争力。',
        'news-ai-title': '人工智能在商业中的应用',
        'news-ai-desc': '人工智能（AI）正在深刻改变着现代商业的运作方式。从自动化流程到智能决策支持，AI技术为企业带来了前所未有的机遇和挑战。',
        'news-read-more': '阅读更多',
        'partners-title': '合作伙伴',
        'quick-links': '快速链接',
        'contact-title': '联系方式',
        'contact-phone-text': '电话：080-7099-0700',
        'contact-email-text': '邮箱：andrealee199202@gmail.com',
        'contact-address-text': '地址：東京都中央区晴海3-16-1ベイサイドタワー晴海2003',
        'privacy-policy': '隐私政策',
        'cookie-settings': 'Cookie 设置',
        'terms': '使用条款',
        'all-rights': '保留所有权利。',
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
        'contact-person': '联系人',
        'contact-phone': '联系电话',
        'contact-email': '电子邮箱',
        'contact-address': '公司地址',
        'contact-form-name': '您的姓名',
        'contact-form-email': '您的邮箱',
        'contact-form-phone': '您的电话',
        'contact-form-message': '咨询内容',
        'contact-form-submit': '提交'
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
        'service-digital-title': 'デジタル成長サービス',
        'service-digital-intro': 'ブランド認知度の構築は長期的な成功の基盤です。私たちのデジタルマーケティングサービスは、ブランドのローカライズ、プレゼンスの拡大、日本と大中華圏のオーディエンスとの深いエンゲージメントを実現します。競合他社よりも早く注目を集めましょう。',
        'service-digital-mpr-title': 'マーケティング・PR戦略',
        'service-digital-mpr-desc': 'ビジネスを推進し、チャンスを切り開く強力なストーリーを構築',
        'service-digital-content-title': 'コンテンツマーケティング（英・日・中）',
        'service-digital-content-desc': 'オーディエンスに響き、ブランドを語るコンテンツ',
        'service-digital-seo-title': '検索エンジン最適化（SEO）',
        'service-digital-seo-desc': '重要な場面で見つけてもらうためのコンテンツと技術力',
        'service-digital-email-title': 'メールマーケティング',
        'service-digital-email-desc': 'メールボックスを最高のコンバージョンチャネルに',
        'service-digital-website-title': 'ウェブサイト（キャンペーンLP）デザイン・開発',
        'service-digital-website-desc': '訪問者を購入者に変えるキャンペーンページ',
        'service-sales-title': 'セールス加速サービス',
        'service-sales-intro': '認知だけでは不十分——行動が必要です。私たちのセールス加速ソリューションは、ブランドを現地のバイヤー、パートナー、ディストリビューターと直接つなぎ、注目を取引に変え、日本と中国での収益拡大をサポートします。',
        'service-sales-fullstack-title': 'フルスタックデジタルマーケティング',
        'service-sales-fullstack-desc': 'ゼロからヒーローへ、ブランドを構築・展開・拡大',
        'service-sales-distributor-title': '現地ディストリビューターパートナー',
        'service-sales-distributor-desc': '日本と中国の現地販売チャネルへの信頼の架け橋',
        'service-sales-social-title': 'ソーシャルメディア運用（中国）：小紅書・抖音',
        'service-sales-social-desc': '現地化コンテンツで中国の人気プラットフォームを攻略',
        'view-more': 'サービスをもっと見る',
        'news-title': '最新ニュース',
        'news-live-commerce-title': '中国ライブコマース：日本に新たな販売モデルのインスピレーション',
        'news-live-commerce-desc': '中国のライブコマースは小売業界に革命をもたらし、ダイナミックでインタラクティブなショッピング体験を提供しています。この革新的な手法は、エンターテインメントとEコマースを融合し、日本の小売業者にも顧客エンゲージメントと売上向上のための新たな戦略を促しています。',
        'news-social-title': '2025年ソーシャルメディアマーケティング：ビジネスプロモーションの新トレンドと機会',
        'news-social-desc': 'ソーシャルメディアの進化に伴い、2025年の企業マーケティング戦略は大きく変化しています。ショート動画やAIによるパーソナライズドマーケティングなど、企業はこれらの新トレンドに適応し、デジタルマーケティング分野で競争力を維持する必要があります。',
        'news-ai-title': 'ビジネスにおけるAIの応用',
        'news-ai-desc': '人工知能（AI）は現代のビジネス運営方法を大きく変えています。自動化プロセスからインテリジェントな意思決定支援まで、AI技術は企業に前例のない機会と課題をもたらしています。',
        'news-read-more': '続きを読む',
        'partners-title': 'パートナー',
        'quick-links': 'クイックリンク',
        'contact-title': 'お問い合わせ',
        'contact-phone-text': '電話：080-7099-0700',
        'contact-email-text': 'メール：andrealee199202@gmail.com',
        'contact-address-text': '住所：東京都中央区晴海3-16-1ベイサイドタワー晴海2003',
        'privacy-policy': 'プライバシーポリシー',
        'cookie-settings': 'Cookie設定',
        'terms': '利用規約',
        'all-rights': 'All rights reserved.',
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
        'contact-person': '担当者',
        'contact-phone': '電話番号',
        'contact-email': 'メールアドレス',
        'contact-address': '会社住所',
        'contact-form-name': 'お名前',
        'contact-form-email': 'メールアドレス',
        'contact-form-phone': '電話番号',
        'contact-form-message': 'お問い合わせ内容',
        'contact-form-submit': '送信'
    }
};

// 获取翻译
function getTranslation(lang, key) {
    // 处理嵌套的翻译键
    if (key.includes('.')) {
        const parts = key.split('.');
        let current = translations[lang];
        for (const part of parts) {
            if (current && current[part]) {
                current = current[part];
            } else {
                return null;
            }
        }
        return current;
    }
    
    // 处理普通翻译键
    return translations[lang][key] || null;
}

// 切换语言
function changeLanguage(lang) {
    // 保存语言选择到localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // 更新所有带有data-translate属性的元素
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const value = getTranslation(lang, key);
        
        if (value) {
            if (element.classList.contains('hero-title')) {
                element.innerHTML = value.replace(/\n/g, '<br>');
            } else {
                element.textContent = value;
            }
        }
    });
    
    // 更新语言选择器的值
    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        languageSelector.value = lang;
    }
}

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

// Hero Slider 横向滚动控制
function initHeroSlider() {
    const track = document.querySelector('.hero-slider-track');
    const slides = document.querySelectorAll('.hero-slide');
    const leftBtn = document.querySelector('.hero-slider-arrow.left');
    const rightBtn = document.querySelector('.hero-slider-arrow.right');
    const dots = document.querySelectorAll('.hero-slider-dots .dot');
    let current = 0;
    let timer = null;
    function goTo(idx, auto=false) {
        if(idx < 0) idx = 0;
        if(idx > slides.length-1) idx = slides.length-1;
        current = idx;
        track.style.transform = `translateX(-${idx * 100}vw)`;
        dots.forEach((d,i)=>d.classList.toggle('active',i===idx));
        if(!auto) restartAuto();
    }
    function next(auto=false) {
        if(current < slides.length-1) {
            goTo(current+1, auto);
        } else {
            goTo(0, auto);
        }
    }
    function restartAuto() {
        if(timer) clearInterval(timer);
        timer = setInterval(()=>next(true), 3000);
    }
    leftBtn.addEventListener('click',()=>goTo(current-1));
    rightBtn.addEventListener('click',()=>goTo(current+1));
    dots.forEach((d,i)=>d.addEventListener('click',()=>goTo(i)));
    window.addEventListener('keydown',e=>{
        if(document.activeElement.tagName==='INPUT'||document.activeElement.tagName==='TEXTAREA') return;
        if(e.key==='ArrowLeft') goTo(current-1);
        if(e.key==='ArrowRight') goTo(current+1);
    });
    goTo(0);
    restartAuto();
}
document.addEventListener('DOMContentLoaded',function(){
    if(document.querySelector('.hero-slider')){
        initHeroSlider();
    }
}); 