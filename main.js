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
        // 获取保存的语言设置或使用默认语言（英文）
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
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
        'contact-form-submit': 'Submit',
        'team-title': 'Core Team',
        'privacy-intro': 'Introduction',
        'privacy-intro-text': 'Action For LLC (hereinafter referred to as "we") attaches great importance to user privacy protection. This privacy policy is intended to explain how we collect, use, store, and protect your personal information.',
        'privacy-collection': 'Information Collection',
        'privacy-collection-text': 'We may collect the following types of information:',
        'privacy-collection-1': 'Basic information: name, email address, phone number, etc.',
        'privacy-collection-2': 'Usage information: access time, browsing history, device information, etc.',
        'privacy-collection-3': 'Cookie information: cookie data used to improve user experience',
        'privacy-usage': 'Use of Information',
        'privacy-usage-text': 'We use the collected information to:',
        'privacy-usage-1': 'Provide and improve our services',
        'privacy-usage-2': 'Communicate with you and provide customer support',
        'privacy-usage-3': 'Send service updates and marketing information (with your consent)',
        'privacy-protection': 'Information Protection',
        'privacy-protection-text': 'We take the following measures to protect your personal information:',
        'privacy-protection-1': 'Use encryption technology to protect data transmission',
        'privacy-protection-2': 'Implement access control and authentication mechanisms',
        'privacy-protection-3': 'Conduct regular security assessments and updates',
        'privacy-rights': 'User Rights',
        'privacy-rights-text': 'You have the following rights regarding your personal information:',
        'privacy-rights-1': 'Access and view your personal information',
        'privacy-rights-2': 'Correct inaccurate information',
        'privacy-rights-3': 'Request deletion of your personal information',
        'privacy-rights-4': 'Withdraw consent',
        'privacy-contact': 'Contact Us',
        'privacy-contact-text': 'If you have any questions about this privacy policy, please contact us by the following means:',
        'privacy-email': 'Email: andrealee199202@gmail.com',
        'privacy-phone': 'Phone: 080-7099-0700',
        'privacy-address': 'Address: Harumi 3-16-1 Bayside Tower Harumi 2003, Chuo-ku, Tokyo',
        'terms-intro': 'Introduction',
        'terms-intro-text': 'Welcome to the Action For LLC website. By using this website, you agree to comply with the following terms of use. Please read these terms carefully.',
        'terms-acceptance': 'Acceptance of Terms',
        'terms-acceptance-text': 'By accessing and using this website, you acknowledge that you have read, understood, and agree to be bound by these terms of use. If you do not agree to these terms, please do not use this website.',
        'terms-usage': 'Rules of Use',
        'terms-usage-text': 'When using this website, you agree to:',
        'terms-usage-1': 'Comply with all applicable laws and regulations',
        'terms-usage-2': 'Not engage in any conduct that may harm the website or affect other users',
        'terms-usage-3': 'Not attempt to access any part of the website without authorization',
        'terms-usage-4': 'Not post any illegal, harmful, or inappropriate content',
        'terms-intellectual': 'Intellectual Property',
        'terms-intellectual-text': 'All content on this website, including but not limited to text, images, logos, designs, and software, is protected by intellectual property laws. You may not copy, modify, or use this content without our express permission.',
        'terms-disclaimer': 'Disclaimer',
        'terms-disclaimer-text': 'The information provided on this website is for reference only. We make no guarantees regarding the accuracy, completeness, or timeliness of the information. Use of this website is at your own risk.',
        'terms-limitation': 'Limitation of Liability',
        'terms-limitation-text': 'To the fullest extent permitted by law, we are not liable for any direct, indirect, incidental, or consequential damages arising from the use of or inability to use this website.',
        'terms-changes': 'Changes to Terms',
        'terms-changes-text': 'We reserve the right to modify these terms of use at any time. The modified terms will take effect immediately upon posting on the website. Continued use of this website constitutes your acceptance of the modified terms.',
        'terms-contact': 'Contact Us',
        'terms-contact-text': 'If you have any questions about these terms of use, please contact us by the following means:',
        'hero-slide2-title': 'Ready to scale your business in Asia?',
        'hero-slide3-title': 'Achieve sustained growth with tailored strategies',
        'company-profile-title': 'Company Profile',
        'company-profile-name-label': 'Company Name:',
        'company-profile-name': 'Action For LLC',
        'company-profile-en-label': 'English Name:',
        'company-profile-en': 'Action For LLC',
        'company-profile-date-label': 'Established:',
        'company-profile-date': '2024/02',
        'news-ai-ads-tag1': 'AI',
        'news-ai-ads-tag2': 'Google Ads',
        'news-ai-ads-tag3': 'DeepSeek',
        'news-ai-ads-tag4': 'ChatGPT',
        'news-ai-ads-tag5': 'Digital Marketing',
        'news-ai-ads-title': 'The Impact of AI on Google Search Ads'
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
        'contact-address-text': '地址：東京都中央区晴海3-16-1-2003',
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
        'contact-form-submit': '提交',
        'team-title': '核心团队',
        'privacy-intro': '引言',
        'privacy-intro-text': 'Action For合同会社（以下简称"我们"）非常重视用户的隐私保护。本隐私政策旨在向您说明我们如何收集、使用、存储和保护您的个人信息。',
        'privacy-collection': '信息收集',
        'privacy-collection-text': '我们可能收集以下类型的信息：',
        'privacy-collection-1': '基本信息：姓名、电子邮件地址、电话号码等',
        'privacy-collection-2': '使用信息：访问时间、浏览记录、设备信息等',
        'privacy-collection-3': 'Cookie信息：用于改善用户体验的Cookie数据',
        'privacy-usage': '信息使用',
        'privacy-usage-text': '我们使用收集的信息用于：',
        'privacy-usage-1': '提供和改进我们的服务',
        'privacy-usage-2': '与您沟通和提供客户支持',
        'privacy-usage-3': '发送服务更新和营销信息（经您同意）',
        'privacy-protection': '信息保护',
        'privacy-protection-text': '我们采取以下措施保护您的个人信息：',
        'privacy-protection-1': '使用加密技术保护数据传输',
        'privacy-protection-2': '实施访问控制和身份验证机制',
        'privacy-protection-3': '定期进行安全评估和更新',
        'privacy-rights': '用户权利',
        'privacy-rights-text': '您对个人信息拥有以下权利：',
        'privacy-rights-1': '访问和查看您的个人信息',
        'privacy-rights-2': '更正不准确的信息',
        'privacy-rights-3': '要求删除您的个人信息',
        'privacy-rights-4': '撤回同意',
        'privacy-contact': '联系我们',
        'privacy-contact-text': '如果您对本隐私政策有任何疑问，请通过以下方式联系我们：',
        'privacy-email': '邮箱：andrealee199202@gmail.com',
        'privacy-phone': '电话：080-7099-0700',
        'privacy-address': '地址：東京都中央区晴海3-16-1-2003',
        'terms-intro': '引言',
        'terms-intro-text': '欢迎访问Action For合同会社的网站。使用本网站即表示您同意遵守以下使用条款。请仔细阅读这些条款。',
        'terms-acceptance': '接受条款',
        'terms-acceptance-text': '通过访问和使用本网站，您确认您已阅读、理解并同意受这些使用条款的约束。如果您不同意这些条款，请勿使用本网站。',
        'terms-usage': '使用规则',
        'terms-usage-text': '在使用本网站时，您同意：',
        'terms-usage-1': '遵守所有适用的法律法规',
        'terms-usage-2': '不从事任何可能损害网站或影响其他用户的行为',
        'terms-usage-3': '不尝试未经授权访问网站的任何部分',
        'terms-usage-4': '不发布任何违法、有害或不当的内容',
        'terms-intellectual': '知识产权',
        'terms-intellectual-text': '本网站的所有内容，包括但不限于文本、图像、标志、设计和软件，均受知识产权法保护。未经我们明确许可，不得复制、修改或使用这些内容。',
        'terms-disclaimer': '免责声明',
        'terms-disclaimer-text': '本网站提供的信息仅供参考。我们不对信息的准确性、完整性或及时性做出任何保证。使用本网站的风险由您自行承担。',
        'terms-limitation': '责任限制',
        'terms-limitation-text': '在法律允许的最大范围内，我们不对因使用或无法使用本网站而导致的任何直接、间接、偶然或后果性损害承担责任。',
        'terms-changes': '条款修改',
        'terms-changes-text': '我们保留随时修改这些使用条款的权利。修改后的条款将在网站上发布后立即生效。继续使用本网站即表示您接受修改后的条款。',
        'terms-contact': '联系我们',
        'terms-contact-text': '如果您对这些使用条款有任何疑问，请通过以下方式联系我们：',
        'hero-slide2-title': '准备好在亚洲扩展您的业务了吗？',
        'hero-slide3-title': '通过定制化策略实现持续增长',
        'company-profile-title': '公司概要',
        'company-profile-name-label': '公司名：',
        'company-profile-name': '合同会社アクションフォー',
        'company-profile-en-label': '英文名：',
        'company-profile-en': 'Action For LLC',
        'company-profile-date-label': '设立日：',
        'company-profile-date': '2024/02',
        'news-ai-ads-tag1': 'AI',
        'news-ai-ads-tag2': 'Google广告',
        'news-ai-ads-tag3': 'DeepSeek',
        'news-ai-ads-tag4': 'ChatGPT',
        'news-ai-ads-tag5': '数字营销',
        'news-ai-ads-title': 'AI对Google搜索广告的冲击'
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
        'contact-address-text': '住所：東京都中央区晴海3-16-1-2003',
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
        'contact-form-submit': '送信',
        'team-title': 'コアチーム',
        'privacy-intro': 'はじめに',
        'privacy-intro-text': 'Action For合同会社（以下「当社」）は、ユーザーのプライバシー保護を非常に重視しています。本プライバシーポリシーは、当社がどのように個人情報を収集、利用、保存、保護するかを説明するものです。',
        'privacy-collection': '情報の収集',
        'privacy-collection-text': '当社は以下の種類の情報を収集する場合があります：',
        'privacy-collection-1': '基本情報：氏名、メールアドレス、電話番号など',
        'privacy-collection-2': '利用情報：アクセス時間、閲覧履歴、デバイス情報など',
        'privacy-collection-3': 'Cookie情報：ユーザー体験向上のためのCookieデータ',
        'privacy-usage': '情報の利用',
        'privacy-usage-text': '収集した情報は以下の目的で利用します：',
        'privacy-usage-1': 'サービスの提供および改善',
        'privacy-usage-2': 'お客様との連絡およびカスタマーサポートの提供',
        'privacy-usage-3': 'サービス更新やマーケティング情報の送信（ご同意いただいた場合）',
        'privacy-protection': '情報の保護',
        'privacy-protection-text': '当社は個人情報を保護するために以下の措置を講じています：',
        'privacy-protection-1': '暗号化技術によるデータ伝送の保護',
        'privacy-protection-2': 'アクセス制御と認証機構の実施',
        'privacy-protection-3': '定期的なセキュリティ評価と更新',
        'privacy-rights': 'ユーザーの権利',
        'privacy-rights-text': 'お客様はご自身の個人情報について以下の権利を有します：',
        'privacy-rights-1': '個人情報へのアクセスと閲覧',
        'privacy-rights-2': '不正確な情報の訂正',
        'privacy-rights-3': '個人情報の削除要求',
        'privacy-rights-4': '同意の撤回',
        'privacy-contact': 'お問い合わせ',
        'privacy-contact-text': '本プライバシーポリシーに関するご質問は、以下の方法でご連絡ください：',
        'privacy-email': 'メール：andrealee199202@gmail.com',
        'privacy-phone': '電話：080-7099-0700',
        'privacy-address': '住所：東京都中央区晴海3-16-1-2003',
        'terms-intro': 'はじめに',
        'terms-intro-text': 'Action For合同会社のウェブサイトへようこそ。本ウェブサイトを利用することで、以下の利用規約に同意したものとみなされます。これらの規約をよくお読みください。',
        'terms-acceptance': '規約の受諾',
        'terms-acceptance-text': '本ウェブサイトへアクセスし利用することで、これらの利用規約を読み、理解し、同意したものとみなされます。規約に同意されない場合は、本ウェブサイトをご利用にならないでください。',
        'terms-usage': '利用ルール',
        'terms-usage-text': '本ウェブサイトを利用する際、あなたは以下に同意します：',
        'terms-usage-1': 'すべての適用される法律および規則を遵守すること',
        'terms-usage-2': 'ウェブサイトや他の利用者に損害を与える行為を行わないこと',
        'terms-usage-3': '許可なくウェブサイトのいかなる部分にもアクセスしようとしないこと',
        'terms-usage-4': '違法、有害、不適切な内容を投稿しないこと',
        'terms-intellectual': '知的財産権',
        'terms-intellectual-text': '本ウェブサイトのすべてのコンテンツ（テキスト、画像、ロゴ、デザイン、ソフトウェアなど）は知的財産法によって保護されています。当社の明示的な許可なく、これらのコンテンツを複製、改変、使用することはできません。',
        'terms-disclaimer': '免責事項',
        'terms-disclaimer-text': '本ウェブサイトで提供される情報は参考目的のみです。当社は情報の正確性、完全性、最新性について一切保証しません。本ウェブサイトの利用は自己責任で行ってください。',
        'terms-limitation': '責任の制限',
        'terms-limitation-text': '法律で認められる最大限の範囲で、本ウェブサイトの利用または利用不能に起因するいかなる直接的、間接的、偶発的、または結果的損害についても当社は責任を負いません。',
        'terms-changes': '規約の変更',
        'terms-changes-text': '当社はこれらの利用規約を随時変更する権利を有します。変更後の規約はウェブサイト上に掲載された時点で直ちに有効となります。引き続き本ウェブサイトを利用することで、変更後の規約に同意したものとみなされます。',
        'terms-contact': 'お問い合わせ',
        'terms-contact-text': 'これらの利用規約に関してご質問がある場合は、以下の方法でご連絡ください：',
        'hero-slide2-title': 'アジアでビジネスを拡大する準備はできていますか？',
        'hero-slide3-title': '最適化された戦略で持続的な成長を実現',
        'company-profile-title': '会社概要',
        'company-profile-name-label': '会社名：',
        'company-profile-name': '合同会社アクションフォー',
        'company-profile-en-label': '英語名：',
        'company-profile-en': 'Action For LLC',
        'company-profile-date-label': '設立日：',
        'company-profile-date': '2024/02',
        'news-ai-ads-tag1': 'AI',
        'news-ai-ads-tag2': 'Google広告',
        'news-ai-ads-tag3': 'DeepSeek',
        'news-ai-ads-tag4': 'ChatGPT',
        'news-ai-ads-tag5': 'デジタルマーケティング',
        'news-ai-ads-title': 'AIがGoogle検索広告に与えるインパクト'
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

// 多语言切换新闻列表卡片摘要
function updateNewsListSummaries(lang) {
    // AI对Google搜索广告的冲击
    var aiCard = document.querySelector('.news-item-content h3[data-translate="news-ai-ads-title"]')?.parentElement;
    if (aiCard) {
        aiCard.querySelectorAll('[data-translate^="news-ai-ads-summary"]').forEach(function(el){ el.style.display = 'none'; });
        if(lang === 'en') {
            var en = aiCard.querySelector('[data-translate="news-ai-ads-summary-en"]');
            if(en) en.style.display = '';
        } else if(lang === 'jp') {
            var jp = aiCard.querySelector('[data-translate="news-ai-ads-summary-jp"]');
            if(jp) jp.style.display = '';
        } else {
            var zh = aiCard.querySelector('[data-translate="news-ai-ads-summary"]');
            if(zh) zh.style.display = '';
        }
    }
}

// 包装原有changeLanguage，确保新闻列表摘要也切换
const origChangeLanguage = changeLanguage;
changeLanguage = function(lang) {
    origChangeLanguage(lang);
    updateNewsListSummaries(lang);
};
// 页面初始加载时也调用一次
(function(){
    var lang = localStorage.getItem('selectedLanguage') || 'en';
    updateNewsListSummaries(lang);
})(); 