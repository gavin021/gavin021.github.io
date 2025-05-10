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
        'hero-title': 'Creative Advice To Grow Your Corporate Business',
        'hero-subtitle': 'Innovative Technology, Leading the Future',
        'cta-button': 'Contact Us',
        'services-title': 'Our Services',
        'view-more': 'View More Services',
        'news-title': 'News',
        'news-ai-title': 'The Application of Artificial Intelligence in Business',
        'news-digital-title': 'Digital Transformation Guide',
        'news-cloud-title': 'Cloud Computing Best Practices',
        'news-meta-author': 'Author',
        'news-meta-date': 'Date',
        'news-meta-category': 'Category',
        'news-read-more': 'Read More',
        'news-ai-desc': 'Artificial Intelligence (AI) is profoundly changing the way modern businesses operate. From automated processes to intelligent decision support, AI technology brings unprecedented opportunities and challenges to enterprises.',
        'news-digital-desc': 'Digital transformation is not just about technology, but about reshaping business models and organizational culture to adapt to the digital age.',
        'news-cloud-desc': 'Cloud computing has become the foundation of modern IT infrastructure. Understanding and implementing best practices is crucial for business success.',
        'blog-title': 'Blog',
        'blog-ai-title': 'The Application of Artificial Intelligence in Business',
        'blog-digital-title': 'Digital Transformation Guide',
        'blog-cloud-title': 'Cloud Computing Best Practices',
        'blog-ai-desc': 'Artificial Intelligence (AI) is profoundly changing the way modern businesses operate. From automated processes to intelligent decision support, AI technology brings unprecedented opportunities and challenges to enterprises.',
        'blog-digital-desc': 'Digital transformation is not just about technology, but about reshaping business models and organizational culture to adapt to the digital age.',
        'blog-cloud-desc': 'Cloud computing has become the foundation of modern IT infrastructure. Understanding and implementing best practices is crucial for business success.',
        'blog-meta-author': 'Author',
        'blog-meta-date': 'Date',
        'blog-meta-category': 'Category',
        'blog-read-more': 'Read More',
        'blog-tags': 'Tags',
        'blog-ai-applications': 'Main Applications of AI in Business',
        'blog-ai-factors': 'Key Considerations for AI Implementation',
        'blog-ai-future': 'Future Outlook',
        'blog-tag-ai': 'Artificial Intelligence',
        'blog-tag-innovation': 'Business Innovation',
        'blog-tag-digital': 'Digital Transformation',
        'read-more': 'Read More',
        'quick-links': 'Quick Links',
        'privacy-policy': 'Privacy Policy',
        'privacy-intro': 'Introduction',
        'privacy-intro-text': 'Action For合同会社 (hereinafter referred to as "we") takes user privacy protection very seriously. This Privacy Policy aims to explain how we collect, use, store, and protect your personal information.',
        'privacy-collection': 'Information Collection',
        'privacy-collection-text': 'We may collect the following types of information:',
        'privacy-collection-1': 'Basic Information: Name, email address, phone number, etc.',
        'privacy-collection-2': 'Usage Information: Access time, browsing history, device information, etc.',
        'privacy-collection-3': 'Cookie Information: Cookie data used to improve user experience',
        'privacy-usage': 'Information Usage',
        'privacy-usage-text': 'We use the collected information for:',
        'privacy-usage-1': 'Providing and improving our services',
        'privacy-usage-2': 'Communicating with you and providing customer support',
        'privacy-usage-3': 'Sending service updates and marketing information (with your consent)',
        'privacy-protection': 'Information Protection',
        'privacy-protection-text': 'We take the following measures to protect your personal information:',
        'privacy-protection-1': 'Using encryption technology to protect data transmission',
        'privacy-protection-2': 'Implementing access control and authentication mechanisms',
        'privacy-protection-3': 'Conducting regular security assessments and updates',
        'privacy-rights': 'User Rights',
        'privacy-rights-text': 'You have the following rights regarding your personal information:',
        'privacy-rights-1': 'Access and view your personal information',
        'privacy-rights-2': 'Correct inaccurate information',
        'privacy-rights-3': 'Request deletion of your personal information',
        'privacy-rights-4': 'Withdraw consent',
        'privacy-contact': 'Contact Us',
        'privacy-contact-text': 'If you have any questions about this Privacy Policy, please contact us through:',
        'privacy-email': 'Email: andrealee199202@gmail.com',
        'privacy-phone': 'Phone: 080-7099-0700',
        'cookie-settings': 'Cookie Settings',
        'terms': 'Terms of Use',
        'terms-intro': 'Introduction',
        'terms-intro-text': 'Welcome to the Action For合同会社 website. By using this website, you agree to comply with the following terms of use. Please read these terms carefully.',
        'terms-acceptance': 'Acceptance of Terms',
        'terms-acceptance-text': 'By accessing and using this website, you confirm that you have read, understood, and agree to be bound by these terms of use. If you do not agree to these terms, please do not use this website.',
        'terms-usage': 'Usage Rules',
        'terms-usage-text': 'When using this website, you agree to:',
        'terms-usage-1': 'Comply with all applicable laws and regulations',
        'terms-usage-2': 'Not engage in any behavior that may damage the website or affect other users',
        'terms-usage-3': 'Not attempt to access any part of the website without authorization',
        'terms-usage-4': 'Not post any illegal, harmful, or inappropriate content',
        'terms-intellectual': 'Intellectual Property',
        'terms-intellectual-text': 'All content on this website, including but not limited to text, images, logos, designs, and software, is protected by intellectual property laws. These contents may not be copied, modified, or used without our explicit permission.',
        'terms-disclaimer': 'Disclaimer',
        'terms-disclaimer-text': 'The information provided on this website is for reference only. We make no warranties regarding the accuracy, completeness, or timeliness of the information. You use this website at your own risk.',
        'terms-limitation': 'Limitation of Liability',
        'terms-limitation-text': 'To the maximum extent permitted by law, we shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this website.',
        'terms-changes': 'Changes to Terms',
        'terms-changes-text': 'We reserve the right to modify these terms of use at any time. Modified terms will take effect immediately upon posting on the website. Continued use of the website indicates your acceptance of the modified terms.',
        'terms-contact': 'Contact Us',
        'terms-contact-text': 'If you have any questions about these terms of use, please contact us through:',
        'all-rights': 'All rights reserved.',
        // About page translations
        'about-title': 'About Us',
        'contact-title': 'Contact Information',
        'contact-person': 'Contact Person',
        'contact-phone': 'Phone Number',
        'contact-email': 'Email',
        'contact-address': 'Company Address',
        'contact-phone-text': 'Phone: 080-7099-0700',
        'contact-email-text': 'Email: andrealee199202@gmail.com',
        'contact-address-text': 'Address: Harumi 2003, Bayside Tower Harumi, 3-16-1 Harumi, Chuo-ku, Tokyo',
        'service-software': 'Software Development',
        'service-software-desc': 'Customized software solutions to meet your business needs',
        'service-mobile': 'Mobile Applications',
        'service-mobile-desc': 'Professional mobile app development with excellent user experience',
        'service-cloud': 'Cloud Services',
        'service-cloud-desc': 'Secure and reliable cloud computing solutions',
        'service-security': 'Network Security',
        'service-security-desc': 'Comprehensive network security protection services',
        'service-consulting': 'Technical Consulting',
        'service-consulting-desc': 'Professional technical consulting services',
        'service-maintenance': 'System Maintenance',
        'service-maintenance-desc': 'Continuous system maintenance and support services',
        // New translations
        'company-profile': 'Company Profile',
        'company-name': 'Company Name',
        'establishment-date': 'Establishment Date',
        'registered-capital': 'Registered Capital',
        'company-size': 'Company Size',
        'company-desc': 'Action For is a technology company focused on digital transformation and innovation. We are committed to providing comprehensive technical solutions for enterprises, including software development, cloud services, and artificial intelligence applications. With our professional team and advanced technology, we help customers achieve business growth and efficiency improvement.',
        'team-title': 'Core Team',
        'ceo': 'Chief Executive Officer',
        'ceo-desc': 'With 15 years of experience in the IT industry, he has held executive positions in several well-known technology companies. Focused on enterprise digital transformation and strategic planning.',
        'cto': 'Chief Technology Officer',
        'cto-desc': 'Technical expert with extensive software development experience. Leading the technical architecture design of multiple large-scale projects.',
        'coo': 'Chief Operating Officer',
        'coo-desc': 'Responsible for daily operations management, with extensive experience in project management and service delivery.',
        'cookie-settings-title': 'Cookie Settings',
        'cookie-settings-desc': 'We use cookies to improve your browsing experience. Please select the types of cookies you want to accept:',
        'cookie-necessary': 'Necessary Cookies (Required)',
        'cookie-necessary-desc': 'These cookies are essential for the basic functionality of the website and cannot be turned off.',
        'cookie-analytics': 'Analytics Cookies',
        'cookie-analytics-desc': 'Help us understand how visitors use our website.',
        'cookie-marketing': 'Marketing Cookies',
        'cookie-marketing-desc': 'Used for personalized advertising and marketing content.',
        'cookie-accept-all': 'Accept All',
        'cookie-save': 'Save Settings'
    },
    'zh': {
        'nav-home': '首页',
        'nav-about': '关于我们',
        'nav-services': '服务',
        'nav-news': '新闻',
        'nav-contact': '联系我们',
        'hero-title': 'Creative Advice To Grow Your Corporate Business',
        'hero-subtitle': '创新科技，引领未来',
        'cta-button': '联系我们',
        'services-title': '我们的服务',
        'view-more': '了解更多服务',
        'news-title': '新闻',
        'news-ai-title': '人工智能在商业中的应用',
        'news-digital-title': '数字化转型指南',
        'news-cloud-title': '云计算最佳实践',
        'news-meta-author': '作者',
        'news-meta-date': '日期',
        'news-meta-category': '分类',
        'news-read-more': '阅读更多',
        'news-ai-desc': '人工智能（AI）正在深刻改变着现代商业的运作方式。从自动化流程到智能决策支持，AI技术为企业带来了前所未有的机遇和挑战。',
        'news-digital-desc': '数字化转型不仅仅是技术层面的改变，更是重塑商业模式和组织文化以适应数字时代。',
        'news-cloud-desc': '云计算已成为现代IT基础设施的基石。理解和实施最佳实践对业务成功至关重要。',
        'blog-title': '博客',
        'blog-ai-title': '人工智能在商业中的应用',
        'blog-digital-title': '数字化转型指南',
        'blog-cloud-title': '云计算最佳实践',
        'blog-ai-desc': '人工智能（AI）正在深刻改变着现代商业的运作方式。从自动化流程到智能决策支持，AI技术为企业带来了前所未有的机遇和挑战。',
        'blog-digital-desc': '数字化转型不仅仅是技术层面的改变，更是重塑商业模式和组织文化以适应数字时代。',
        'blog-cloud-desc': '云计算已成为现代IT基础设施的基石。理解和实施最佳实践对业务成功至关重要。',
        'blog-meta-author': '作者',
        'blog-meta-date': '日期',
        'blog-meta-category': '分类',
        'blog-read-more': '阅读更多',
        'blog-tags': '标签',
        'blog-ai-applications': 'AI在商业中的主要应用',
        'blog-ai-factors': '实施AI的关键考虑因素',
        'blog-ai-future': '未来展望',
        'blog-tag-ai': '人工智能',
        'blog-tag-innovation': '商业创新',
        'blog-tag-digital': '数字化转型',
        'read-more': '阅读更多',
        'quick-links': '快速链接',
        'privacy-policy': '隐私政策',
        'privacy-intro': '引言',
        'privacy-intro-text': '欢迎访问Action For合同会社的网站。使用本网站即表示您同意遵守以下使用条款。请仔细阅读这些条款。',
        'privacy-collection': '信息收集',
        'privacy-collection-text': '我们可能会收集以下类型的信息：',
        'privacy-collection-1': '基本信息：姓名、电子邮件地址、电话号码等',
        'privacy-collection-2': '使用信息：访问时间、浏览历史、设备信息等',
        'privacy-collection-3': 'Cookie信息：用于提高用户使用体验的Cookie数据',
        'privacy-usage': '信息使用',
        'privacy-usage-text': '我们使用收集的信息用于：',
        'privacy-usage-1': '提供和改进我们的服务',
        'privacy-usage-2': '与您沟通并提供客户支持',
        'privacy-usage-3': '发送服务更新和营销信息（在您同意的情况下）',
        'privacy-protection': '信息保护',
        'privacy-protection-text': '我们采取以下措施保护您的个人信息：',
        'privacy-protection-1': '使用加密技术保护数据传输',
        'privacy-protection-2': '实施访问控制和认证机制',
        'privacy-protection-3': '定期进行安全评估和更新',
        'privacy-rights': '用户权利',
        'privacy-rights-text': '您对个人信息享有以下权利：',
        'privacy-rights-1': '访问和查看您的个人信息',
        'privacy-rights-2': '纠正不准确的信息',
        'privacy-rights-3': '请求删除您的个人信息',
        'privacy-rights-4': '撤回同意',
        'privacy-contact': '联系我们',
        'privacy-contact-text': '如果您对这些使用条款有任何疑问，请通过以下方式联系我们：',
        'privacy-email': '邮箱：andrealee199202@gmail.com',
        'privacy-phone': '电话：080-7099-0700',
        'cookie-settings': 'Cookie 设置',
        'terms': '使用条款',
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
        'all-rights': '保留所有权利。',
        // About page translations
        'about-title': '关于我们',
        'contact-title': '联系方式',
        'contact-person': '联系人',
        'contact-phone': '联系电话',
        'contact-email': '电子邮箱',
        'contact-address': '公司地址',
        'contact-phone-text': '电话：080-7099-0700',
        'contact-email-text': '邮箱：andrealee199202@gmail.com',
        'contact-address-text': '地址：東京都中央区晴海3-16-1ベイサイドタワー晴海2003',
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
        // New translations
        'company-profile': '公司简介',
        'company-name': '公司名称',
        'establishment-date': '成立时间',
        'registered-capital': '注册资本',
        'company-size': '公司规模',
        'company-desc': 'Action For是一家专注于数字化转型和创新的科技公司。我们致力于为企业提供全方位的技术解决方案，包括软件开发、云服务、人工智能应用等。凭借专业的团队和先进的技术，我们帮助客户实现业务增长和效率提升。',
        'team-title': '核心团队',
        'ceo': '首席执行官',
        'ceo-desc': '拥有15年IT行业经验，曾任多家知名科技公司高管职位。专注于企业数字化转型和战略规划。',
        'cto': '技术总监',
        'cto-desc': '技术专家，拥有丰富的软件开发经验。主导多个大型项目的技术架构设计。',
        'coo': '运营总监',
        'coo-desc': '负责公司日常运营管理，在项目管理和服务交付方面有丰富经验。',
        'cookie-settings-title': 'Cookie 设置',
        'cookie-settings-desc': '我们使用 Cookie 来改善您的浏览体验。请选择您想要接受的 Cookie 类型：',
        'cookie-necessary': '必要 Cookie（必需）',
        'cookie-necessary-desc': '这些 Cookie 对于网站的基本功能是必需的，无法关闭。',
        'cookie-analytics': '分析 Cookie',
        'cookie-analytics-desc': '帮助我们了解访问者如何使用我们的网站。',
        'cookie-marketing': '营销 Cookie',
        'cookie-marketing-desc': '用于个性化广告和营销内容。',
        'cookie-accept-all': '接受所有',
        'cookie-save': '保存设置'
    },
    'jp': {
        'nav-home': 'ホーム',
        'nav-about': '会社概要',
        'nav-services': 'サービス',
        'nav-news': 'ニュース',
        'nav-contact': 'お問い合わせ',
        'hero-title': 'Creative Advice To Grow Your Corporate Business',
        'hero-subtitle': '革新的な技術で、未来をリード',
        'cta-button': 'お問い合わせ',
        'services-title': 'サービス内容',
        'view-more': 'サービス一覧',
        'news-title': 'ニュース',
        'news-ai-title': 'ビジネスにおける人工知能の応用',
        'news-digital-title': 'デジタル変革ガイド',
        'news-cloud-title': 'クラウドコンピューティングのベストプラクティス',
        'news-meta-author': '著者',
        'news-meta-date': '日付',
        'news-meta-category': 'カテゴリー',
        'news-read-more': '続きを読む',
        'news-ai-desc': '人工知能（AI）は現代のビジネス運営方法を大きく変えています。自動化プロセスからインテリジェントな意思決定支援まで、AI技術は企業に前例のない機会と課題をもたらしています。',
        'news-digital-desc': 'デジタル変革は技術的な変化だけでなく、デジタル時代に適応するためのビジネスモデルと組織文化の再構築です。',
        'news-cloud-desc': 'クラウドコンピューティングは現代のITインフラストラクチャの基盤となっています。ベストプラクティスの理解と実装はビジネスの成功に不可欠です。',
        'blog-title': 'ブログ',
        'blog-ai-title': 'ビジネスにおける人工知能の応用',
        'blog-digital-title': 'デジタル変革ガイド',
        'blog-cloud-title': 'クラウドコンピューティングのベストプラクティス',
        'blog-ai-desc': '人工知能（AI）は現代のビジネス運営方法を大きく変えています。自動化プロセスからインテリジェントな意思決定支援まで、AI技術は企業に前例のない機会と課題をもたらしています。',
        'blog-digital-desc': 'デジタル変革は技術的な変化だけでなく、デジタル時代に適応するためのビジネスモデルと組織文化の再構築です。',
        'blog-cloud-desc': 'クラウドコンピューティングは現代のITインフラストラクチャの基盤となっています。ベストプラクティスの理解と実装はビジネスの成功に不可欠です。',
        'blog-meta-author': '著者',
        'blog-meta-date': '日付',
        'blog-meta-category': 'カテゴリー',
        'blog-read-more': '続きを読む',
        'blog-tags': 'タグ',
        'blog-ai-applications': 'ビジネスにおけるAIの主な応用',
        'blog-ai-factors': 'AI実装の重要な考慮事項',
        'blog-ai-future': '将来の展望',
        'blog-tag-ai': '人工知能',
        'blog-tag-innovation': 'ビジネスイノベーション',
        'blog-tag-digital': 'デジタル変革',
        'read-more': '続きを読む',
        'quick-links': 'クイックリンク',
        'privacy-policy': 'プライバシーポリシー',
        'privacy-intro': 'はじめに',
        'privacy-intro-text': 'Action For合同会社（以下「当社」）は、ユーザーのプライバシー保護を非常に重視しています。本プライバシーポリシーは、当社が個人情報をどのように収集、使用、保存、保護するかを説明することを目的としています。',
        'privacy-collection': '情報収集',
        'privacy-collection-text': '当社は以下の種類の情報を収集する場合があります：',
        'privacy-collection-1': '基本情報：氏名、メールアドレス、電話番号など',
        'privacy-collection-2': '利用情報：アクセス時間、閲覧履歴、デバイス情報など',
        'privacy-collection-3': 'Cookie情報：ユーザー体験向上のためのCookieデータ',
        'privacy-usage': '情報の使用',
        'privacy-usage-text': '収集した情報は以下の目的で使用します：',
        'privacy-usage-1': 'サービスの提供と改善',
        'privacy-usage-2': 'お客様とのコミュニケーションとカスタマーサポート',
        'privacy-usage-3': 'サービス更新とマーケティング情報の送信（同意を得た場合）',
        'privacy-protection': '情報保護',
        'privacy-protection-text': '当社は以下の措置を講じて個人情報を保護します：',
        'privacy-protection-1': 'データ転送の暗号化技術の使用',
        'privacy-protection-2': 'アクセス制御と認証メカニズムの実装',
        'privacy-protection-3': '定期的なセキュリティ評価と更新の実施',
        'privacy-rights': 'ユーザーの権利',
        'privacy-rights-text': '個人情報に関して、以下の権利を有します：',
        'privacy-rights-1': '個人情報へのアクセスと閲覧',
        'privacy-rights-2': '不正確な情報の訂正',
        'privacy-rights-3': '個人情報の削除要求',
        'privacy-rights-4': '同意の撤回',
        'privacy-contact': 'お問い合わせ',
        'privacy-contact-text': '本プライバシーポリシーについてご質問がある場合は、以下の方法でお問い合わせください：',
        'privacy-email': 'メール：andrealee199202@gmail.com',
        'privacy-phone': '電話：080-7099-0700',
        'cookie-settings': 'Cookie設定',
        'terms': '利用規約',
        'terms-intro': 'はじめに',
        'terms-intro-text': 'Action For合同会社のウェブサイトへようこそ。本ウェブサイトをご利用いただくことで、以下の利用規約に同意いただいたものとみなされます。これらの規約をよくお読みください。',
        'terms-acceptance': '規約の承諾',
        'terms-acceptance-text': '本ウェブサイトにアクセスし利用することで、あなたはこれらの利用規約を読み、理解し、それに拘束されることに同意したことを確認します。これらの規約に同意されない場合は、本ウェブサイトをご利用いただけません。',
        'terms-usage': '利用規則',
        'terms-usage-text': '本ウェブサイトを利用する際、あなたは以下に同意します：',
        'terms-usage-1': 'すべての適用される法律および規制を遵守すること',
        'terms-usage-2': 'ウェブサイトを損傷したり他のユーザーに影響を与える可能性のある行為を行わないこと',
        'terms-usage-3': '許可なくウェブサイトのいかなる部分にもアクセスしようとしないこと',
        'terms-usage-4': '違法、有害、または不適切なコンテンツを投稿しないこと',
        'terms-intellectual': '知的財産権',
        'terms-intellectual-text': '本ウェブサイトのすべてのコンテンツ（テキスト、画像、ロゴ、デザイン、ソフトウェアなど）は、知的財産法によって保護されています。これらのコンテンツは、当社の明示的な許可なしに複製、改変、または使用することはできません。',
        'terms-disclaimer': '免責事項',
        'terms-disclaimer-text': '本ウェブサイトで提供される情報は参考情報のみです。当社は情報の正確性、完全性、または適時性について一切保証しません。本ウェブサイトの利用は自己責任で行ってください。',
        'terms-limitation': '責任の制限',
        'terms-limitation-text': '法律で認められる最大限の範囲において、当社は本ウェブサイトの利用または利用不能から生じる直接的、間接的、偶発的、または結果的な損害について一切責任を負いません。',
        'terms-changes': '規約の変更',
        'terms-changes-text': '当社はこれらの利用規約をいつでも変更する権利を留保します。変更された規約はウェブサイトに掲載された時点で直ちに効力を生じます。ウェブサイトの利用を継続することで、変更された規約に同意したものとみなされます。',
        'terms-contact': 'お問い合わせ',
        'terms-contact-text': 'これらの利用規約についてご質問がある場合は、以下の方法でお問い合わせください：',
        'all-rights': 'All rights reserved.',
        // About page translations
        'about-title': '会社概要',
        'contact-title': 'お問い合わせ',
        'contact-person': '担当者',
        'contact-phone': '電話番号',
        'contact-email': 'メールアドレス',
        'contact-address': '会社住所',
        'contact-phone-text': '電話：080-7099-0700',
        'contact-email-text': 'メール：andrealee199202@gmail.com',
        'contact-address-text': '住所：東京都中央区晴海3-16-1ベイサイドタワー晴海2003',
        'service-software': 'ソフトウェア開発',
        'service-software-desc': 'ビジネスニーズに合わせたカスタマイズソリューション',
        'service-mobile': 'モバイルアプリケーション',
        'service-mobile-desc': '優れたユーザー体験を提供するプロフェッショナルな開発',
        'service-cloud': 'クラウドサービス',
        'service-cloud-desc': '安全で信頼性の高いクラウドコンピューティングソリューション',
        'service-security': 'ネットワークセキュリティ',
        'service-security-desc': '包括的なネットワークセキュリティ保護サービス',
        'service-consulting': '技術コンサルティング',
        'service-consulting-desc': 'プロフェッショナルな技術コンサルティングサービス',
        'service-maintenance': 'システム保守',
        'service-maintenance-desc': '継続的なシステム保守とサポートサービス',
        // New translations
        'company-profile': '会社概要',
        'company-name': '会社名',
        'establishment-date': '設立日',
        'registered-capital': '資本金',
        'company-size': '会社規模',
        'company-desc': 'Action Forは、デジタルトランスフォーメーションとイノベーションに焦点を当てたテクノロジー企業です。ソフトウェア開発、クラウドサービス、人工知能アプリケーションなど、企業向けの包括的な技術ソリューションを提供しています。専門チームと先進技術により、お客様のビジネス成長と効率向上をサポートします。',
        'team-title': 'コアチーム',
        'ceo': '最高経営責任者',
        'ceo-desc': 'IT業界で15年の経験を持ち、数々の有名テクノロジー企業で幹部職を歴任。企業のデジタルトランスフォーメーションと戦略的計画に焦点を当てています。',
        'cto': '最高技術責任者',
        'cto-desc': '豊富なソフトウェア開発経験を持つ技術専門家。複数の大規模プロジェクトの技術アーキテクチャ設計を主導しています。',
        'coo': '最高執行責任者',
        'coo-desc': '会社の日常運営管理を担当し、プロジェクト管理とサービス提供に豊富な経験があります。',
        'cookie-settings-title': 'Cookie設定',
        'cookie-settings-desc': 'ブラウジング体験を向上させるためにCookieを使用しています。受け入れるCookieの種類を選択してください：',
        'cookie-necessary': '必要Cookie（必須）',
        'cookie-necessary-desc': 'これらのCookieはウェブサイトの基本機能に必要で、無効にすることはできません。',
        'cookie-analytics': '分析Cookie',
        'cookie-analytics-desc': '訪問者がウェブサイトをどのように使用しているかを理解するのに役立ちます。',
        'cookie-marketing': 'マーケティングCookie',
        'cookie-marketing-desc': 'パーソナライズされた広告やマーケティングコンテンツに使用されます。',
        'cookie-accept-all': 'すべて受け入れる',
        'cookie-save': '設定を保存'
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
            // 检查元素类型
            if (element.tagName === 'INPUT' && element.type === 'placeholder') {
                element.placeholder = translations[lang][key];
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