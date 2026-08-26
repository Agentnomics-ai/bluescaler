import { SIGNUP_URLS, TRIAL_SIGNUP_URLS } from "../site-content";
import type { Locale } from "../i18n";

/**
 * Every user-facing string on the home page and in the shared chrome.
 *
 * `en` is the source of truth; `ar` is typed against it, so a missing or
 * misspelled key is a compile error rather than a silently English page.
 * Structural data (icon keys, accents, video paths) lives here too so a
 * translated label never has to double as a lookup key.
 */
const en = {
  nav: {
    links: [
      { href: "/agents", label: "Agents" },
      { href: "/industries", label: "Industries" },
      { href: "/customers", label: "Customers" },
      { href: "/partners", label: "Partners" },
    ],
    bookDemo: "Book a Demo",
    getStarted: "Get Started →",
    brand: "BlueScaler",
    brandSub: "powered by Agentnomics",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },

  hero: {
    pill: "Now live · UAE · KSA · Qatar · Kuwait",
    titleLine1: "AI Agents That",
    titleLine2: "Work While",
    titleAccent: "You Scale.",
    body: "Automate customer conversations, unlock business insights, and go live in days — not months. Built for SMBs across the Middle East.",
    primaryCta: "Book a Demo →",
    secondaryCta: "See it in action",
    videoLabel: "A tour of the BlueScaler agent platform",
    stats: [
      { value: "60%", label: "More sales" },
      { value: "24/7", label: "Agent coverage" },
      { value: "Days", label: "To go live" },
    ],
  },

  hub: {
    title: "BlueScaler Agent Hub",
    subtitle: "Ready to deploy · GCC region",
    online: "3 Agents Online",
    agents: [
      {
        key: "aria",
        name: "Aria",
        blurb:
          "Your conversational customer support agent — drives revenue and keeps business moving.",
      },
      {
        key: "restaurant",
        name: "Restaurant Agent",
        blurb:
          "A friendly conversational agent that helps customers find favorite menu items or make a reservation.",
      },
      {
        key: "beauty",
        name: "Beauty Assistant",
        blurb:
          "Matches a customer's shade from a selfie, tracks orders, and books the salon.",
      },
    ],
    stats: [
      { value: "24/7", label: "Coverage" },
      { value: "Web + WA", label: "Channels" },
      { value: "Instant", label: "Analytics" },
    ],
  },

  conversational: {
    pill: "Conversational Agents",
    titleLine1: "Customer conversations",
    titleLine2: "handled",
    titleAccent: "24/7.",
    body: "Deploy AI-powered chat agents on your website, WhatsApp, or app — without writing a single line of code.",
    stats: [
      { value: "24/7", label: "Automated support" },
      { value: "60%", label: "Cost reduction" },
      { value: "Minutes", label: "To deploy" },
    ],
    cta: "Sign Up for Conversational Agent →",
    videos: [
      {
        title: "Aria — Customer Support Agent",
        videoSrc: "/videos/aria-hero-audio.mp4",
        poster: "/videos/aria-hero-poster.jpg",
      },
      {
        title: "Starchandco wins with Agentnomics",
        videoSrc: "/videos/starchandco%20wins%20with%20agentnomics.mp4",
        poster: "/videos/starchandco-poster.jpg",
      },
    ],
  },

  analytical: {
    pill: "Analytical Agents",
    titleLine1: "Turn business data",
    titleLine2: "into",
    titleAccent: "instant answers.",
    body: "Deploy task-specific agents on top of your own SAP and Salesforce data — no manual reporting, no waiting on a BI backlog.",
    ready: "Ready",
    agentsSuffix: "agents",
    cta: "Sign Up for Analytical Agent →",
    video: {
      title: "Demand planning, answered in plain English",
      videoSrc: "/videos/demand-planning-demo.mp4",
      poster: "/videos/demand-planning-poster.jpg",
    },
    families: [
      {
        key: "sap",
        accent: "gold",
        system: "SAP Finance",
        signupUrl: TRIAL_SIGNUP_URLS.sap,
        blurb:
          "AI agents for SAP finance teams. Analyze cash flow, break down spend by supplier and category, assess receivables risk, and optimize working capital — all from your SAP procurement and financial data.",
        agents: [
          {
            name: "Cash Flow Intelligence",
            description:
              "Track purchase orders and sales orders to monitor cash outflows, inflows, and supplier and customer exposure.",
          },
          {
            name: "Spend Analysis",
            description:
              "Break down organizational spend by supplier, material category, and purchasing group to identify savings.",
          },
          {
            name: "Supplier Risk & Payables",
            description:
              "Analyze supplier dependency, payment aging, and procurement exceptions to manage AP risk.",
          },
          {
            name: "Receivables & Customer Risk",
            description:
              "Analyze customer master data, purchasing exposure, and business partner relationships to flag credit risk.",
          },
          {
            name: "Working Capital Optimization",
            description:
              "Assess AP exposure, inventory holding costs, and material positions to identify working capital to release.",
          },
          {
            name: "AP Aging",
            description:
              "Watch overdue payables, surface aging buckets, and flag the invoices that need action first.",
          },
        ],
      },
      {
        key: "salesforce",
        accent: "teal",
        system: "Salesforce Customer Success",
        signupUrl: TRIAL_SIGNUP_URLS.salesforce,
        blurb:
          "AI agents on top of your Sales Cloud and Service Cloud data. Surface at-risk pipeline, sharpen forecasts, and protect renewals — so reps, RevOps, and CS teams act on the right deal, account, and case first.",
        agents: [
          {
            name: "Churn Risk Identifier",
            description:
              "Proactively identify at-risk accounts from support case volume, low engagement, and contract signals.",
          },
          {
            name: "Case Resolution",
            description:
              "Analyze open support cases by priority, age, and product area to help support teams triage.",
          },
          {
            name: "Renewal & Expansion",
            description:
              "Track contract renewals, upsell opportunities, and expansion ARR across the customer base.",
          },
          {
            name: "Customer Health",
            description:
              "Build a health score across the customer base using engagement, support history, and product usage.",
          },
          {
            name: "Volume & CSAT",
            description:
              "Analyze ticket volume, resolution times, and satisfaction trends to identify service gaps.",
          },
          {
            name: "Account Intelligence",
            description:
              "Track contact-level engagement across calls, emails, and meetings to spot disengaged accounts.",
          },
        ],
      },
    ],
  },

  industries: {
    pill: "Use Cases",
    titleLine1: "Built for businesses",
    titleAccent: "like yours.",
    body: "Six GCC verticals. One AI platform. Deployed in days.",
    items: [
      {
        key: "food",
        label: "Restaurants & F&B",
        useCase: "Handle reservations, menu questions, and orders automatically.",
      },
      {
        key: "retail",
        label: "Retail",
        useCase: "Answer product queries and process returns 24/7.",
      },
      {
        key: "automotive",
        label: "Automotive Services",
        useCase: "Book appointments and follow up with customers.",
      },
      {
        key: "hospitality",
        label: "Hospitality",
        useCase: "Automate guest queries across WhatsApp and your website.",
      },
      {
        key: "healthcare",
        label: "Healthcare & Clinics",
        useCase: "Book appointments, follow up with patients, and track supplies.",
      },
      {
        key: "logistics",
        label: "Logistics",
        useCase: "Track shipments and answer delivery questions instantly.",
      },
    ],
  },

  trust: {
    pill: "Why BlueScaler",
    titleBefore: "Local buying confidence,",
    titleAccent: "enterprise-grade",
    titleAfter: "foundation.",
    body: "Built by people who understand the GCC market — not a generic AI tool shipped from abroad.",
    coverageLabel: "GCC coverage:",
    pillars: [
      {
        title: "Enterprise-grade infrastructure",
        body: "Powered by AWS, your data is secure and always available.",
      },
      {
        title: "Proven in the market",
        body: "Built for businesses across the Middle East that need practical AI now.",
      },
      {
        title: "Real support",
        body: "Onboarding help is included. We set it up with you and stay close.",
      },
    ],
    regions: ["🇦🇪 UAE", "🇸🇦 Saudi Arabia", "🇶🇦 Qatar", "🇰🇼 Kuwait"],
  },

  ctaSection: {
    pill: "Get Started",
    titleLine1: "Ready to automate",
    titleLine2: "your",
    titleAccent: "business?",
    body: "Book a demo, start a signup flow, or send us a message. BlueScaler is built for practical AI adoption across GCC SMB teams.",
    bookDemo: "Book a Demo →",
    whatsapp: "WhatsApp Us",
    conversationalPill: "Conversational",
    conversationalTitle: "Start conversational agent signup",
    conversationalBody: "Customer support, ordering, booking, and chat automation.",
    analyticalPill: "Analytical",
    analyticalTitle: "Start analytical agent signup",
    analyticalBody: "Data questions, reports, charts, and operational insights.",
    getStarted: "Get started →",
    messageHeading: "Or send us a message",
  },

  contactForm: {
    thanksHeading: "Thanks — your message is on its way.",
    thanksBody: "Someone from the BlueScaler team will reply within one business day.",
    sendAnother: "Send another message",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Work email",
    emailPlaceholder: "you@company.com",
    message: "Message",
    messagePlaceholder: "Tell us what you want to automate",
    submit: "Send message",
    sending: "Sending…",
    error: "Something went wrong. Please email sales@agentnomics.ai.",
  },

  demoModal: {
    pill: "Book a Demo",
    heading: "Let's find the right agent for you",
    body: "A few details so we can prepare — then pick a time that suits you.",
    optional: "(optional)",
    opening: "Opening calendar…",
    skip: "Skip to calendar",
    footnote:
      "We'll email you back within one business day. Next you'll pick a slot on our calendar.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Work email",
    emailPlaceholder: "you@company.com",
    company: "Company",
    companyPlaceholder: "Company name",
    phone: "Phone",
    phonePlaceholder: "+971 …",
    needs: "What do you want to automate?",
    needsPlaceholder:
      "Customer support on WhatsApp, order taking, reporting…",
    submit: "Continue to booking →",
    submitting: "One moment…",
    close: "Close",
    error: "Something went wrong. Please email sales@agentnomics.ai.",
  },

  footer: {
    ctaEyebrow: "Ready to automate?",
    ctaTitle: "Deploy your first AI agent",
    ctaAccent: "in days.",
    getStarted: "Get Started →",
    bookDemo: "Book a Demo",
    tagline:
      "AI agents built for GCC SMBs — automating conversations and unlocking business insights.",
    coverage: "GCC coverage",
    regions: ["UAE", "Saudi Arabia", "Qatar", "Kuwait"],
    columns: [
      {
        heading: "Platform",
        links: [
          { label: "Conversational Agents", href: "/agents" },
          { label: "Analytical Agents", href: "/agents" },
          { label: "No-Code Builder", href: "/agents" },
          { label: "Industries", href: "/industries" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "Customers", href: "/customers" },
          { label: "Partners", href: "/partners" },
          { label: "Book a Demo", href: "demo" },
          { label: "Partner Programme", href: "partner-email" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Get Started", href: SIGNUP_URLS.conversational },
          { label: "Contact Sales", href: "contact-email" },
          { label: "Support", href: "support-email" },
          { label: "Privacy Policy", href: "#" },
        ],
      },
    ],
    rights: "© 2026 Agentnomics. All rights reserved.",
    builtFor: "Built for the Gulf ·",
  },

  whatsapp: { label: "Contact BlueScaler on WhatsApp" },
};

const ar: typeof en = {
  nav: {
    links: [
      { href: "/agents", label: "الوكلاء" },
      { href: "/industries", label: "القطاعات" },
      { href: "/customers", label: "عملاؤنا" },
      { href: "/partners", label: "الشركاء" },
    ],
    bookDemo: "احجز عرضًا توضيحيًا",
    getStarted: "ابدأ الآن ←",
    brand: "بلو سكيلر",
    brandSub: "مدعوم من أجنتنوميكس",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    language: "اللغة",
  },

  hero: {
    pill: "متاح الآن · الإمارات · السعودية · قطر · الكويت",
    titleLine1: "وكلاء ذكاء اصطناعي",
    titleLine2: "يعملون بينما",
    titleAccent: "تنمو أعمالك.",
    body: "أتمتة محادثات العملاء، واستخراج رؤى الأعمال، والانطلاق خلال أيام لا شهور. مصمَّم للشركات الصغيرة والمتوسطة في الشرق الأوسط.",
    primaryCta: "احجز عرضًا توضيحيًا ←",
    secondaryCta: "شاهده أثناء العمل",
    videoLabel: "جولة في منصة وكلاء بلو سكيلر",
    stats: [
      { value: "٦٠٪", label: "زيادة في المبيعات" },
      { value: "٢٤/٧", label: "تغطية الوكلاء" },
      { value: "أيام", label: "حتى الإطلاق" },
    ],
  },

  hub: {
    title: "مركز وكلاء بلو سكيلر",
    subtitle: "جاهز للتفعيل · منطقة الخليج",
    online: "٣ وكلاء متصلون",
    agents: [
      {
        key: "aria",
        name: "أريا",
        blurb:
          "وكيل دعم العملاء الحواري — يزيد الإيرادات ويبقي أعمالك في حركة دائمة.",
      },
      {
        key: "restaurant",
        name: "وكيل المطاعم",
        blurb:
          "وكيل حواري ودود يساعد عملاءك على اختيار أطباقهم المفضلة أو حجز طاولة.",
      },
      {
        key: "beauty",
        name: "مساعد التجميل",
        blurb:
          "يحدّد درجة لون البشرة من صورة شخصية، ويتابع الطلبات، ويحجز مواعيد الصالون.",
      },
    ],
    stats: [
      { value: "٢٤/٧", label: "تغطية" },
      { value: "الويب + واتساب", label: "القنوات" },
      { value: "فوري", label: "التحليلات" },
    ],
  },

  conversational: {
    pill: "الوكلاء الحواريون",
    titleLine1: "محادثات العملاء",
    titleLine2: "تُدار على مدار",
    titleAccent: "٢٤/٧.",
    body: "فعّل وكلاء محادثة يعملون بالذكاء الاصطناعي على موقعك أو واتساب أو تطبيقك — دون كتابة سطر برمجي واحد.",
    stats: [
      { value: "٢٤/٧", label: "دعم آلي" },
      { value: "٦٠٪", label: "خفض التكاليف" },
      { value: "دقائق", label: "حتى التفعيل" },
    ],
    cta: "سجّل للحصول على وكيل حواري ←",
    videos: [
      {
        title: "أريا — وكيل دعم العملاء",
        videoSrc: "/videos/aria-hero-audio.mp4",
        poster: "/videos/aria-hero-poster.jpg",
      },
      {
        title: "نجاح ستارش آند كو مع أجنتنوميكس",
        videoSrc: "/videos/starchandco%20wins%20with%20agentnomics.mp4",
        poster: "/videos/starchandco-poster.jpg",
      },
    ],
  },

  analytical: {
    pill: "الوكلاء التحليليون",
    titleLine1: "حوّل بيانات أعمالك",
    titleLine2: "إلى",
    titleAccent: "إجابات فورية.",
    body: "فعّل وكلاء متخصصين يعملون على بيانات SAP وSalesforce الخاصة بك — بلا تقارير يدوية وبلا انتظار لفريق ذكاء الأعمال.",
    ready: "جاهز",
    agentsSuffix: "وكلاء",
    cta: "سجّل للحصول على وكيل تحليلي ←",
    video: {
      title: "تخطيط الطلب، بإجابات بلغة واضحة",
      videoSrc: "/videos/demand-planning-demo.mp4",
      poster: "/videos/demand-planning-poster.jpg",
    },
    families: [
      {
        key: "sap",
        accent: "gold",
        system: "SAP للتمويل",
        signupUrl: TRIAL_SIGNUP_URLS.sap,
        blurb:
          "وكلاء ذكاء اصطناعي لفرق التمويل على SAP. حلّل التدفق النقدي، وفصّل الإنفاق حسب المورّد والفئة، وقيّم مخاطر الذمم المدينة، وحسّن رأس المال العامل — انطلاقًا من بيانات المشتريات والبيانات المالية في نظامك.",
        agents: [
          {
            name: "ذكاء التدفق النقدي",
            description:
              "تتبّع أوامر الشراء وأوامر البيع لمراقبة التدفقات النقدية الداخلة والخارجة ومدى الانكشاف على المورّدين والعملاء.",
          },
          {
            name: "تحليل الإنفاق",
            description:
              "فصّل إنفاق المؤسسة حسب المورّد وفئة المواد ومجموعة الشراء لاكتشاف فرص التوفير.",
          },
          {
            name: "مخاطر المورّدين والذمم الدائنة",
            description:
              "حلّل الاعتماد على المورّدين وأعمار المدفوعات واستثناءات المشتريات لإدارة مخاطر الذمم الدائنة.",
          },
          {
            name: "الذمم المدينة ومخاطر العملاء",
            description:
              "حلّل البيانات الرئيسية للعملاء وحجم مشترياتهم وعلاقات الشركاء التجاريين لرصد المخاطر الائتمانية.",
          },
          {
            name: "تحسين رأس المال العامل",
            description:
              "قيّم الانكشاف على الذمم الدائنة وتكاليف الاحتفاظ بالمخزون ومراكز المواد لتحديد رأس مال عامل يمكن تحريره.",
          },
          {
            name: "أعمار الذمم الدائنة",
            description:
              "راقب المستحقات المتأخرة، واعرض شرائح الأعمار، وحدّد الفواتير التي تحتاج إلى إجراء أولًا.",
          },
        ],
      },
      {
        key: "salesforce",
        accent: "teal",
        system: "Salesforce لنجاح العملاء",
        signupUrl: TRIAL_SIGNUP_URLS.salesforce,
        blurb:
          "وكلاء ذكاء اصطناعي يعملون على بيانات Sales Cloud وService Cloud لديك. اكشف الفرص المعرّضة للخطر، وحسّن دقة التوقعات، واحمِ التجديدات — ليركّز مندوبوك وفرق العمليات ونجاح العملاء على الصفقة والحساب والحالة الأهم أولًا.",
        agents: [
          {
            name: "رصد مخاطر فقدان العملاء",
            description:
              "حدّد الحسابات المعرّضة للخطر استباقيًا من حجم حالات الدعم وضعف التفاعل ومؤشرات العقود.",
          },
          {
            name: "حل الحالات",
            description:
              "حلّل حالات الدعم المفتوحة حسب الأولوية والعمر ومجال المنتج لمساعدة فرق الدعم على الفرز.",
          },
          {
            name: "التجديد والتوسّع",
            description:
              "تتبّع تجديدات العقود وفرص البيع الإضافي وإيرادات التوسّع السنوية عبر قاعدة العملاء.",
          },
          {
            name: "صحة العملاء",
            description:
              "ابنِ مؤشر صحة لقاعدة عملائك اعتمادًا على التفاعل وسجل الدعم واستخدام المنتج.",
          },
          {
            name: "حجم التذاكر ورضا العملاء",
            description:
              "حلّل حجم التذاكر وأزمنة الحل واتجاهات الرضا لاكتشاف الثغرات في الخدمة.",
          },
          {
            name: "ذكاء الحسابات",
            description:
              "تتبّع التفاعل على مستوى جهات الاتصال عبر المكالمات والرسائل والاجتماعات لرصد الحسابات الفاترة.",
          },
        ],
      },
    ],
  },

  industries: {
    pill: "حالات الاستخدام",
    titleLine1: "مصمَّم لأعمال",
    titleAccent: "مثل أعمالك.",
    body: "ستة قطاعات خليجية. منصة ذكاء اصطناعي واحدة. تفعيل خلال أيام.",
    items: [
      {
        key: "food",
        label: "المطاعم والأغذية",
        useCase: "إدارة الحجوزات وأسئلة قائمة الطعام والطلبات تلقائيًا.",
      },
      {
        key: "retail",
        label: "التجزئة",
        useCase: "الرد على استفسارات المنتجات ومعالجة المرتجعات على مدار الساعة.",
      },
      {
        key: "automotive",
        label: "خدمات السيارات",
        useCase: "حجز المواعيد ومتابعة العملاء بعد الخدمة.",
      },
      {
        key: "hospitality",
        label: "الضيافة",
        useCase: "أتمتة استفسارات النزلاء عبر واتساب وموقعك الإلكتروني.",
      },
      {
        key: "healthcare",
        label: "الرعاية الصحية والعيادات",
        useCase: "حجز المواعيد ومتابعة المرضى وتتبّع المستلزمات.",
      },
      {
        key: "logistics",
        label: "الخدمات اللوجستية",
        useCase: "تتبّع الشحنات والرد على أسئلة التوصيل فورًا.",
      },
    ],
  },

  trust: {
    pill: "لماذا بلو سكيلر",
    titleBefore: "ثقة شرائية محلية،",
    titleAccent: "بأساس",
    titleAfter: "بمستوى المؤسسات.",
    body: "بناه فريق يفهم سوق الخليج — لا أداة ذكاء اصطناعي عامة مستوردة من الخارج.",
    coverageLabel: "التغطية الخليجية:",
    pillars: [
      {
        title: "بنية تحتية بمستوى المؤسسات",
        body: "مدعومة بخدمات AWS، فبياناتك آمنة ومتاحة على الدوام.",
      },
      {
        title: "مثبت في السوق",
        body: "مبني لشركات في أنحاء الشرق الأوسط تحتاج ذكاءً اصطناعيًا عمليًا الآن.",
      },
      {
        title: "دعم حقيقي",
        body: "المساعدة في التهيئة مشمولة. نجهّزه معك ونبقى قريبين منك.",
      },
    ],
    regions: ["🇦🇪 الإمارات", "🇸🇦 السعودية", "🇶🇦 قطر", "🇰🇼 الكويت"],
  },

  ctaSection: {
    pill: "ابدأ الآن",
    titleLine1: "جاهز لأتمتة",
    titleLine2: "أعمالك",
    titleAccent: "اليوم؟",
    body: "احجز عرضًا توضيحيًا، أو ابدأ التسجيل، أو أرسل لنا رسالة. بلو سكيلر مبني لتبنٍّ عملي للذكاء الاصطناعي في الشركات الخليجية.",
    bookDemo: "احجز عرضًا توضيحيًا ←",
    whatsapp: "راسلنا على واتساب",
    conversationalPill: "حواري",
    conversationalTitle: "ابدأ التسجيل في الوكيل الحواري",
    conversationalBody: "دعم العملاء والطلبات والحجوزات وأتمتة المحادثات.",
    analyticalPill: "تحليلي",
    analyticalTitle: "ابدأ التسجيل في الوكيل التحليلي",
    analyticalBody: "أسئلة البيانات والتقارير والرسوم البيانية والرؤى التشغيلية.",
    getStarted: "ابدأ الآن ←",
    messageHeading: "أو أرسل لنا رسالة",
  },

  contactForm: {
    thanksHeading: "شكرًا لك — رسالتك في طريقها إلينا.",
    thanksBody: "سيرد عليك أحد أعضاء فريق بلو سكيلر خلال يوم عمل واحد.",
    sendAnother: "إرسال رسالة أخرى",
    name: "الاسم",
    namePlaceholder: "اسمك",
    email: "البريد الإلكتروني للعمل",
    emailPlaceholder: "you@company.com",
    message: "الرسالة",
    messagePlaceholder: "أخبرنا بما ترغب في أتمتته",
    submit: "إرسال الرسالة",
    sending: "جارٍ الإرسال…",
    error: "حدث خطأ ما. يرجى مراسلتنا على sales@agentnomics.ai.",
  },

  demoModal: {
    pill: "احجز عرضًا توضيحيًا",
    heading: "لنجد الوكيل المناسب لك",
    body: "بضع تفاصيل تساعدنا على التحضير — ثم اختر الوقت الذي يناسبك.",
    optional: "(اختياري)",
    opening: "جارٍ فتح التقويم…",
    skip: "تخطّي إلى التقويم",
    footnote:
      "سنراسلك عبر البريد خلال يوم عمل واحد. وبعدها ستختار موعدًا على تقويمنا.",
    name: "الاسم",
    namePlaceholder: "اسمك",
    email: "البريد الإلكتروني للعمل",
    emailPlaceholder: "you@company.com",
    company: "الشركة",
    companyPlaceholder: "اسم الشركة",
    phone: "الهاتف",
    phonePlaceholder: "+٩٧١ …",
    needs: "ما الذي ترغب في أتمتته؟",
    needsPlaceholder: "دعم العملاء على واتساب، استقبال الطلبات، التقارير…",
    submit: "المتابعة إلى الحجز ←",
    submitting: "لحظة من فضلك…",
    close: "إغلاق",
    error: "حدث خطأ ما. يرجى مراسلتنا على sales@agentnomics.ai.",
  },

  footer: {
    ctaEyebrow: "جاهز للأتمتة؟",
    ctaTitle: "أطلق أول وكيل ذكاء اصطناعي لديك",
    ctaAccent: "خلال أيام.",
    getStarted: "ابدأ الآن ←",
    bookDemo: "احجز عرضًا توضيحيًا",
    tagline:
      "وكلاء ذكاء اصطناعي للشركات الخليجية الصغيرة والمتوسطة — لأتمتة المحادثات واستخراج رؤى الأعمال.",
    coverage: "التغطية الخليجية",
    regions: ["الإمارات", "السعودية", "قطر", "الكويت"],
    columns: [
      {
        heading: "المنصة",
        links: [
          { label: "الوكلاء الحواريون", href: "/agents" },
          { label: "الوكلاء التحليليون", href: "/agents" },
          { label: "منشئ بلا برمجة", href: "/agents" },
          { label: "القطاعات", href: "/industries" },
        ],
      },
      {
        heading: "الشركة",
        links: [
          { label: "عملاؤنا", href: "/customers" },
          { label: "الشركاء", href: "/partners" },
          { label: "احجز عرضًا توضيحيًا", href: "demo" },
          { label: "برنامج الشركاء", href: "partner-email" },
        ],
      },
      {
        heading: "الدعم",
        links: [
          { label: "ابدأ الآن", href: SIGNUP_URLS.conversational },
          { label: "تواصل مع المبيعات", href: "contact-email" },
          { label: "الدعم الفني", href: "support-email" },
          { label: "سياسة الخصوصية", href: "#" },
        ],
      },
    ],
    rights: "© ٢٠٢٦ أجنتنوميكس. جميع الحقوق محفوظة.",
    builtFor: "مصمَّم للخليج ·",
  },

  whatsapp: { label: "تواصل مع بلو سكيلر على واتساب" },
};

const CONTENT = { en, ar } satisfies Record<Locale, typeof en>;

export type SiteCopy = typeof en;

export function getCopy(locale: Locale): SiteCopy {
  return CONTENT[locale];
}
