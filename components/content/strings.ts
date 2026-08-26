import type { Locale } from "../i18n";

/**
 * Flat English → Arabic lookup for the secondary pages.
 *
 * The home page and shared chrome use the structured dictionary in `site.ts`.
 * These pages carry their prose inline and pull rows out of `site-content.ts`,
 * so translating at the point of render — `tr(locale, row.impact)` — keeps the
 * page structure intact and lets one entry cover every place a phrase appears.
 *
 * An unknown key falls through to the English, so a missed string degrades to
 * the original rather than to an empty element.
 */
const AR: Record<string, string> = {
  // ── Shared across the secondary pages ──────────────────────────
  "Book a Demo": "احجز عرضًا توضيحيًا",
  "Book a Demo →": "احجز عرضًا توضيحيًا ←",
  "See the Agents": "استعرض الوكلاء",
  "See the Agents →": "استعرض الوكلاء ←",
  "Get Started →": "ابدأ الآن ←",
  "Sign Up Today": "سجّل اليوم",
  "Ready to start?": "جاهز للبدء؟",
  "Talk to Sales": "تحدّث مع المبيعات",
  "Contact Sales": "تواصل مع المبيعات",

  // ── Industries page ────────────────────────────────────────────
  Industries: "القطاعات",
  "AI agents built": "وكلاء ذكاء اصطناعي",
  "for your": "مصمَّمون",
  "industry.": "لقطاعك.",
  "From restaurants to retail, logistics to healthcare — BlueScaler agents plug into how your business already works.":
    "من المطاعم إلى التجزئة، ومن الخدمات اللوجستية إلى الرعاية الصحية — وكلاء بلو سكيلر يندمجون مع طريقة عمل مؤسستك كما هي.",
  "Market coverage": "تغطية السوق",
  "GCC SMB verticals": "قطاعات خليجية",
  "Customer response": "استجابة العملاء",
  "Shared agent platform": "منصة وكلاء موحدة",
  Restaurants: "المطاعم",
  "Bookings, menu questions, order status":
    "الحجوزات، أسئلة قائمة الطعام، حالة الطلب",
  Retail: "التجزئة",
  "Inventory, pricing, returns, product queries":
    "المخزون، التسعير، المرتجعات، استفسارات المنتجات",
  Logistics: "الخدمات اللوجستية",
  "Shipment updates, delivery analytics, SLA risk":
    "تحديثات الشحن، تحليلات التوصيل، مخاطر مستوى الخدمة",
  "Business Impact": "الأثر على الأعمال",
  "One platform,": "منصة واحدة،",
  "six industries.": "ستة قطاعات.",
  "Each vertical gets purpose-built agent flows — not a generic chatbot repurposed for your industry.":
    "كل قطاع يحصل على مسارات وكلاء مصمَّمة لغرضه — لا روبوت محادثة عام أُعيد توظيفه لقطاعك.",
  "Booking confirmed": "تم تأكيد الحجز",
  "Al Bayt Restaurant": "مطعم البيت",
  "Tonight · 8PM · 4 guests": "الليلة · ٨ مساءً · ٤ ضيوف",
  "WhatsApp confirmation sent": "تم إرسال تأكيد عبر واتساب",
  "Reminder set for 7:30PM": "تم ضبط تذكير الساعة ٧:٣٠ مساءً",
  "Book outdoor for 4 at 8 tonight": "احجز طاولة خارجية لأربعة الليلة الساعة ٨",
  "Terrace confirmed at 8PM for 4 guests!":
    "تم تأكيد التراس الساعة ٨ مساءً لأربعة ضيوف!",
  "Active shipments · UAE region": "الشحنات النشطة · منطقة الإمارات",
  "Automated via Analytical Agent": "مؤتمت عبر الوكيل التحليلي",
  "0 manual calls today": "٠ مكالمات يدوية اليوم",
  "Which industry are you": "أي قطاع",
  "transforming today?": "تحوّله اليوم؟",
  "Live in 5 business days. No credit card required to start.":
    "جاهز للعمل خلال ٥ أيام عمل. لا حاجة لبطاقة ائتمان للبدء.",
  Delivered: "تم التسليم",
  "In transit": "قيد الشحن",
  "Out for delivery": "خرجت للتوصيل",
  "Dubai Marina": "دبي مارينا",
  "Abu Dhabi": "أبوظبي",
  Sharjah: "الشارقة",

  // ── Industry rows (site-content) ───────────────────────────────
  "Restaurants & F&B": "المطاعم والأغذية",
  Automotive: "السيارات",
  "Automotive Services": "خدمات السيارات",
  Hospitality: "الضيافة",
  Healthcare: "الرعاية الصحية",
  "Healthcare & Clinics": "الرعاية الصحية والعيادات",
  "Booking automation, menu queries, analytics":
    "أتمتة الحجوزات، استفسارات القائمة، التحليلات",
  "Fewer missed bookings, reduced staff load":
    "حجوزات فائتة أقل وعبء أخف على الفريق",
  "Inventory forecasting, pricing, product queries":
    "التنبؤ بالمخزون، التسعير، استفسارات المنتجات",
  "Higher margins, faster fulfilment": "هوامش أعلى وتنفيذ أسرع",
  "Appointment booking, follow-ups, parts queries":
    "حجز المواعيد، المتابعات، استفسارات قطع الغيار",
  "More bookings, less phone time": "حجوزات أكثر ووقت أقل على الهاتف",
  "24/7 guest support, occupancy analytics":
    "دعم النزلاء على مدار الساعة، تحليلات الإشغال",
  "Better reviews, lower headcount cost":
    "تقييمات أفضل وتكلفة موظفين أقل",
  "Appointment bots, compliance, supply tracking":
    "وكلاء المواعيد، الامتثال، تتبّع المستلزمات",
  "Improved patient care, audit readiness":
    "رعاية أفضل للمرضى وجاهزية للتدقيق",
  "Shipment queries, delivery analytics":
    "استفسارات الشحن، تحليلات التوصيل",
  "Fewer inbound calls, better SLA tracking":
    "مكالمات واردة أقل وتتبّع أفضل لمستوى الخدمة",

  // ── Industry playbook tabs ─────────────────────────────────────
  "Industry Playbooks": "أدلة القطاعات",
  "Pick your vertical,": "اختر قطاعك،",
  "see the exact fit.": "وشاهد الملاءمة بدقة.",
  "Key challenges": "أبرز التحديات",
  "BlueScaler in action": "بلو سكيلر أثناء العمل",
  Queries: "الاستفسارات",
  Actions: "الإجراءات",
  Insights: "الرؤى",
  "Hospitality & Hotels": "الضيافة والفنادق",
  "Logistics & Delivery": "الخدمات اللوجستية والتوصيل",
  "After-hours queries": "استفسارات خارج ساعات العمل",
  "Table booking staff load": "عبء حجز الطاولات على الفريق",
  "Menu questions": "أسئلة قائمة الطعام",
  "Order updates": "تحديثات الطلبات",
  "Restaurant Bot handles bookings, menu FAQs, and order status 24/7.":
    "وكيل المطاعم يتولى الحجوزات وأسئلة القائمة وحالة الطلب على مدار الساعة.",
  "Analytical Agent tracks covers, peak hours, and menu performance.":
    "الوكيل التحليلي يتتبّع عدد الزبائن وساعات الذروة وأداء القائمة.",
  "Reduce front-of-house workload, never miss a booking, and serve guests faster.":
    "خفّف العبء عن فريق الاستقبال، ولا تفوّت أي حجز، واخدم ضيوفك أسرع.",
  "Stock availability questions": "أسئلة توفّر المخزون",
  "Dynamic pricing pressure": "ضغوط التسعير المتغيّر",
  "Customer queries across channels": "استفسارات العملاء عبر القنوات",
  "Dynamic Inventory & Replenishment Agent flags shortages before they hit sales.":
    "وكيل المخزون والتزويد الديناميكي يرصد النواقص قبل أن تؤثر على المبيعات.",
  "Retail Bot answers product queries and return questions around the clock.":
    "وكيل التجزئة يجيب عن استفسارات المنتجات والمرتجعات على مدار الساعة.",
  "Improve fulfillment, protect margins, and respond faster across every channel.":
    "حسّن التنفيذ، واحمِ هوامشك، ورُدّ أسرع عبر كل قناة.",
  "82% of retailers plan to deploy AI Agents within three years.":
    "٨٢٪ من تجار التجزئة يخططون لتفعيل وكلاء ذكاء اصطناعي خلال ثلاث سنوات.",
  "Phone tag for bookings": "تبادل مكالمات لا ينتهي للحجوزات",
  "Manual service follow-ups": "متابعات الخدمة اليدوية",
  "Parts availability questions": "أسئلة توفّر قطع الغيار",
  "Mechanic Bot books appointments and sends automated follow-ups.":
    "وكيل الورشة يحجز المواعيد ويرسل متابعات آلية.",
  "Analytical Agent monitors turnaround and revenue per bay.":
    "الوكيل التحليلي يراقب زمن الإنجاز والإيراد لكل منصة عمل.",
  "Win more bookings, reduce admin, and keep customers informed.":
    "احصد حجوزات أكثر، وقلّل الأعمال الإدارية، وأبقِ عملاءك على اطلاع.",
  "Guest queries at all hours": "استفسارات النزلاء في كل الأوقات",
  "Reservation management": "إدارة الحجوزات",
  "Multilingual support needs": "الحاجة لدعم متعدد اللغات",
  "Conversational Agent handles guest questions across WhatsApp and web.":
    "الوكيل الحواري يتولى أسئلة النزلاء عبر واتساب والموقع.",
  "Analytical Agent tracks occupancy, reviews, and revenue per room.":
    "الوكيل التحليلي يتتبّع الإشغال والتقييمات والإيراد لكل غرفة.",
  "Deliver 24/7 guest service without adding headcount.":
    "قدّم خدمة للنزلاء على مدار الساعة دون توظيف إضافي.",
  "Appointment booking load": "عبء حجز المواعيد",
  "Patient follow-ups": "متابعات المرضى",
  "Supply and compliance tracking": "تتبّع المستلزمات والامتثال",
  "Health Assistant Bot supports appointments, lab results, and caregiver messages.":
    "وكيل المساعدة الصحية يدعم المواعيد ونتائج المختبر ورسائل مقدّمي الرعاية.",
  "Compliance-driven agent helps teams monitor procurement and supplies.":
    "وكيل قائم على الامتثال يساعد الفرق على مراقبة المشتريات والمستلزمات.",
  "Improve patient experience and reduce admin burden.":
    "حسّن تجربة المريض وقلّل العبء الإداري.",
  "Shipment status queries": "استفسارات حالة الشحنات",
  "Customer communication volume": "حجم التواصل مع العملاء",
  "Delivery performance visibility": "وضوح أداء التوصيل",
  "Conversational Agent handles shipment queries on WhatsApp automatically.":
    "الوكيل الحواري يتولى استفسارات الشحن على واتساب تلقائيًا.",
  "Analytical Agent monitors delivery performance and SLA compliance.":
    "الوكيل التحليلي يراقب أداء التوصيل والالتزام بمستوى الخدمة.",
  "Reduce inbound calls and improve on-time delivery visibility.":
    "قلّل المكالمات الواردة وحسّن وضوح التسليم في موعده.",

  // ── Partners page ──────────────────────────────────────────────
  "Services Partners": "شركاء الخدمات",
  "We provide the platform.": "نحن نوفّر المنصة.",
  "You deliver for clients.": "وأنت تنفّذ لعملائك.",
  "BlueScaler partners are agencies, system integrators, and consultants who implement AI agents for businesses across the Middle East. We handle the technology — you own the client relationship.":
    "شركاء بلو سكيلر هم وكالات ومتكاملو أنظمة ومستشارون ينفّذون وكلاء الذكاء الاصطناعي لشركات في أنحاء الشرق الأوسط. نحن نتولى التقنية — وأنت تملك العلاقة مع العميل.",
  "Become a Partner →": "كن شريكًا ←",
  "How it works": "كيف يعمل",
  You: "أنت",
  BlueScaler: "بلو سكيلر",
  Client: "العميل",
  "Identify the client need": "تحديد احتياج العميل",
  "Scope the deployment": "تحديد نطاق التنفيذ",
  "Manage the relationship": "إدارة العلاقة",
  "Provide the AI platform": "توفير منصة الذكاء الاصطناعي",
  "Handle infrastructure & AI": "إدارة البنية التحتية والذكاء الاصطناعي",
  "Support you through delivery": "دعمك طوال مراحل التنفيذ",
  "Gets a working AI agent": "يحصل على وكيل ذكاء اصطناعي جاهز",
  "Live in days, not months": "جاهز خلال أيام لا شهور",
  "Supported end-to-end": "مدعوم من البداية إلى النهاية",
  "Partner types": "أنواع الشركاء",
  Onboarding: "التهيئة",
  Region: "المنطقة",
  "5 days": "٥ أيام",
  GCC: "الخليج",
  "The partnership model": "نموذج الشراكة",
  "A clear division of": "تقسيم واضح",
  "responsibility.": "للمسؤوليات.",
  "We provide the platform": "نحن نوفّر المنصة",
  "No need to build AI infrastructure from scratch. BlueScaler handles the platform, AI models, and uptime — you focus on client delivery.":
    "لا حاجة لبناء بنية ذكاء اصطناعي من الصفر. بلو سكيلر يتولى المنصة والنماذج والجاهزية التشغيلية — وأنت تركّز على التنفيذ للعميل.",
  "You implement for clients": "أنت تنفّذ لعملائك",
  "Configure, customise, and launch AI agents for your clients. We give you the tools and training to deliver fast.":
    "اضبط وخصّص وأطلق وكلاء الذكاء الاصطناعي لعملائك. نمنحك الأدوات والتدريب للتنفيذ بسرعة.",
  "Joint go-to-market": "تسويق مشترك",
  "Co-branded materials, regional case studies, and business development support to help you win more clients across the GCC.":
    "مواد بعلامة مشتركة، ودراسات حالة إقليمية، ودعم لتطوير الأعمال يساعدك على كسب عملاء أكثر في الخليج.",
  "Built for services businesses": "مصمَّم لشركات الخدمات",
  "What BlueScaler provides": "ما يوفّره بلو سكيلر",
  "AI agent platform": "منصة وكلاء الذكاء الاصطناعي",
  "Infrastructure & hosting": "البنية التحتية والاستضافة",
  "Model updates & improvements": "تحديثات النماذج وتحسيناتها",
  "Technical support": "الدعم الفني",
  "Onboarding & training": "التهيئة والتدريب",
  "Who we work with": "مع من نعمل",
  "Built for businesses that": "مصمَّم للشركات التي",
  "serve other businesses.": "تخدم شركات أخرى.",
  "Agency Partners": "شركاء الوكالات",
  "Systems Integrators": "متكاملو الأنظمة",
  Consultants: "المستشارون",
  "Web & marketing agencies": "وكالات الويب والتسويق",
  "Tech & IT consultancies": "الاستشارات التقنية وتقنية المعلومات",
  "Strategy & operations advisors": "مستشارو الاستراتيجية والعمليات",
  "You bring the clients, we provide the AI platform. Add WhatsApp and web agents to your GCC client engagements without building anything from scratch.":
    "أنت تجلب العملاء، ونحن نوفّر منصة الذكاء الاصطناعي. أضف وكلاء واتساب والويب إلى مشاريعك مع عملائك في الخليج دون بناء أي شيء من الصفر.",
  "Technical teams who deploy and configure BlueScaler agents into client infrastructure. We manage the platform — you own the integration layer.":
    "فرق تقنية تنشر وتضبط وكلاء بلو سكيلر داخل بنية العميل. نحن ندير المنصة — وأنت تملك طبقة التكامل.",
  "Business advisors who identify automation opportunities and bring BlueScaler as the platform of choice. From scoping to go-live, we support the delivery.":
    "مستشارو أعمال يكتشفون فرص الأتمتة ويقدّمون بلو سكيلر كمنصة مفضّلة. من تحديد النطاق حتى الإطلاق، ندعم التنفيذ معك.",
  "Get in touch →": "تواصل معنا ←",
  "How to Apply": "كيفية التقديم",
  "Let's grow the GCC": "لننمِّ الخليج",
  "together.": "معًا.",
  "Fill in the partner application": "املأ طلب الشراكة",
  "We review and onboard you": "نراجع طلبك ونهيّئك",
  "Start delivering for clients": "ابدأ التنفيذ لعملائك",
  "5 min": "٥ دقائق",
  "Day 6+": "اليوم ٦ فما بعد",
  "Apply to Partner →": "قدّم للشراكة ←",
  "We respond within 2 business days": "نرد خلال يومَي عمل",

  // ── Customers page ─────────────────────────────────────────────
  Customers: "عملاؤنا",
  "Proof for buyers": "دليل يراه المشتري",
  "who need to see it": "قبل أن يقتنع —",
  "working.": "وهو يعمل.",
  "Real GCC businesses using BlueScaler agents to save time, reduce costs, and serve customers better.":
    "شركات خليجية حقيقية تستخدم وكلاء بلو سكيلر لتوفير الوقت وخفض التكاليف وخدمة العملاء بشكل أفضل.",
  "Join Them →": "انضم إليهم ←",
  "Verified outcomes": "نتائج موثّقة",
  "GCC businesses, measured results": "شركات خليجية ونتائج مقاسة",
  "Trusted by businesses across the GCC": "موثوق به لدى شركات في أنحاء الخليج",
  "more orders": "طلبات أكثر",
  "response time": "زمن الاستجابة",
  "more bookings": "حجوزات أكثر",
  "Starchandco · UAE": "ستارش آند كو · الإمارات",
  "Retail · UAE": "التجزئة · الإمارات",
  "Automotive · KSA": "السيارات · السعودية",
  "and 2× brand awareness": "ومضاعفة الوعي بالعلامة",
  "down from 4 hours": "بعد أن كان ٤ ساعات",
  "zero extra staff": "دون أي موظفين إضافيين",
  "More sales": "مبيعات أكثر",
  "Hours saved monthly per employee": "ساعة موفّرة شهريًا لكل موظف",
  "Routine queries automated": "من الاستفسارات الروتينية مؤتمتة",
  "Go live timeline": "مدة الإطلاق",
  "Case Studies": "دراسات الحالة",
  "Real outcomes, real": "نتائج حقيقية، من",
  "GCC businesses.": "شركات خليجية.",
  "Challenge: ": "التحدي: ",
  Starchandco: "ستارش آند كو",
  "UAE retail chain": "سلسلة تجزئة إماراتية",
  "KSA automotive service": "مركز خدمة سيارات سعودي",
  UAE: "الإمارات",
  "Saudi Arabia": "السعودية",
  Aria: "أريا",
  "Retail Bot": "وكيل التجزئة",
  "Mechanic Bot": "وكيل الورشة",
  "Managing customer inquiries, address updates, and marketing promotions was consuming 8–10 hours a day.":
    "إدارة استفسارات العملاء وتحديث العناوين والعروض التسويقية كانت تستهلك ٨–١٠ ساعات يوميًا.",
  "Orders up 20% and brand awareness doubled — with Aria handling customer comms and marketing around the clock.":
    "ارتفاع الطلبات ٢٠٪ ومضاعفة الوعي بالعلامة — مع تولّي أريا للتواصل مع العملاء والتسويق على مدار الساعة.",
  "Customers waited hours for stock and return answers.":
    "كان العملاء ينتظرون ساعات للحصول على إجابات عن المخزون والمرتجعات.",
  "Cut response time from 4 hours to under 2 minutes.":
    "خفض زمن الاستجابة من ٤ ساعات إلى أقل من دقيقتين.",
  "Service bookings were lost to phone queues and slow follow-up.":
    "كانت حجوزات الصيانة تُفقد بسبب طوابير الهاتف وبطء المتابعة.",
  "Booked 3x more appointments with zero extra staff.":
    "ثلاثة أضعاف المواعيد المحجوزة دون أي موظفين إضافيين.",
  "Today's schedule · Riyadh": "جدول اليوم · الرياض",
  "All booked via Mechanic Bot": "جميعها محجوزة عبر وكيل الورشة",
  "Oil Change": "تغيير الزيت",
  "Brake Inspection": "فحص الفرامل",
  "Full Service": "صيانة شاملة",
  WhatsApp: "واتساب",
  Website: "الموقع الإلكتروني",
  "What they say": "ماذا يقولون",
  "From the people": "من الأشخاص",
  "who use it daily.": "الذين يستخدمونه يوميًا.",
  "Kwan, Starchandco": "كوان، ستارش آند كو",
  "Retail Manager": "مدير تجزئة",
  "Clinic Owner": "صاحب عيادة",
  "Agentnomics has been the best thing our company has incorporated since launch. From customer inquiries to marketing, it really gave us that freedom back. Who doesn't want to make money and also have freedom to do it?":
    "أجنتنوميكس أفضل ما أدخلته شركتنا منذ انطلاقها. من استفسارات العملاء إلى التسويق، أعاد لنا حريتنا فعلًا. من لا يريد أن يربح ويحتفظ بحريته في الوقت نفسه؟",
  "Customers now get answers in minutes, and our staff can focus on higher-value work.":
    "صار العملاء يحصلون على إجابات خلال دقائق، وفريقنا يركّز على أعمال أعلى قيمة.",
  "The biggest change was fewer repetitive calls and a calmer front desk.":
    "أكبر تغيير كان تراجع المكالمات المتكررة وهدوء مكتب الاستقبال.",
  "Ready to become our next": "جاهز لتكون قصة نجاحنا",
  "success story?": "القادمة؟",
  "Live in 5 business days. No credit card required.":
    "جاهز للعمل خلال ٥ أيام عمل. لا حاجة لبطاقة ائتمان.",
  "Start Free": "ابدأ مجانًا",
  Agent: "الوكيل",
  "3× vs. last quarter": "٣ أضعاف مقارنة بالربع الماضي",

  // ── Agents page ────────────────────────────────────────────────
  Agents: "الوكلاء",
  "Meet your": "تعرّف على",
  "AI agents.": "وكلائك الأذكياء.",
  "Ready-to-deploy agents for customer conversations and business analytics. Go live in days, not months.":
    "وكلاء جاهزون للتفعيل لمحادثات العملاء وتحليلات الأعمال. انطلق خلال أيام لا شهور.",
  "Sign Up →": "سجّل الآن ←",
  "Live agent desk": "مكتب الوكلاء المباشر",
  "Website · WhatsApp · Analytics": "الموقع · واتساب · التحليلات",
  "24/7 active": "نشط ٢٤/٧",
  "WhatsApp lead": "عميل محتمل من واتساب",
  "Restaurant booking confirmed": "تم تأكيد حجز المطعم",
  "Inventory question": "استفسار عن المخزون",
  "Stock risk chart generated": "تم إنشاء رسم مخاطر المخزون",
  "Service request": "طلب صيانة",
  "Mechanic slot reserved": "تم حجز موعد في الورشة",
  Conversations: "المحادثات",
  "Bookings, questions, orders, returns": "الحجوزات، الأسئلة، الطلبات، المرتجعات",
  Analytics: "التحليلات",
  "Revenue, inventory, pricing, compliance": "الإيرادات، المخزون، التسعير، الامتثال",
  Builder: "المنشئ",
  "Templates, no-code flows, fast launch": "قوالب، مسارات بلا برمجة، إطلاق سريع",
  "Aria handles your": "أريا تتولى",
  "customer support.": "دعم عملائك.",
  "AI-powered chat across your website, WhatsApp, and app — 24/7, without hiring extra staff.":
    "محادثات مدعومة بالذكاء الاصطناعي عبر موقعك وواتساب وتطبيقك — على مدار الساعة ودون توظيف إضافي.",
  "Live conversation": "محادثة مباشرة",
  "Do you have outdoor seating?": "هل لديكم جلسات خارجية؟",
  "Yes! Our terrace overlooks the marina.": "نعم! تراسنا يطل على المارينا.",
  "Restaurant Bot": "وكيل المطاعم",
  "Health Assistant": "المساعد الصحي",
  "Fairway Concierge": "كونسيرج الغولف",
  "Let customers book a table or browse your menu any time.":
    "دع عملاءك يحجزون طاولة أو يتصفحون قائمتك في أي وقت.",
  "Book appointments, check results, and message caregivers.":
    "حجز المواعيد، ومراجعة النتائج، ومراسلة مقدّمي الرعاية.",
  "Book tee times without the hold music.":
    "احجز أوقات اللعب دون انتظار على الهاتف.",
  "Answer product questions and process returns 24/7.":
    "الرد على أسئلة المنتجات ومعالجة المرتجعات على مدار الساعة.",
  "Book service appointments and follow up automatically.":
    "حجز مواعيد الصيانة والمتابعة تلقائيًا.",
  "Reserve a table for 4 tonight at 8PM": "احجز طاولة لأربعة الليلة الساعة ٨ مساءً",
  "Done! 4 seats confirmed at 8PM. I'll send a reminder 30 mins before.":
    "تم! أربعة مقاعد مؤكدة الساعة ٨ مساءً. سأرسل تذكيرًا قبل ٣٠ دقيقة.",
  "Book a checkup for next Tuesday": "احجز فحصًا يوم الثلاثاء القادم",
  "Dr. Al-Hassan has 10AM free. Shall I confirm?":
    "الدكتور الحسن متاح الساعة ١٠ صباحًا. هل أؤكد الموعد؟",
  "Any tee times Saturday morning?": "هل تتوفر مواعيد لعب صباح السبت؟",
  "Emirates Club has 8:30AM open. Want me to reserve?":
    "نادي الإمارات متاح الساعة ٨:٣٠ صباحًا. هل أحجز لك؟",
  "Track my order #2847": "تتبّع طلبي رقم ٢٨٤٧",
  "Shipped today — arriving Thursday by 6PM.":
    "شُحن اليوم — يصل الخميس قبل الساعة ٦ مساءً.",
  "Need an oil change this week": "أحتاج تغيير زيت هذا الأسبوع",
  "Tomorrow at 2PM. Your Toyota Camry is all set.":
    "غدًا الساعة ٢ ظهرًا. سيارتك تويوتا كامري جاهزة.",
  "Ask your business data": "اسأل بيانات أعمالك",
  "questions.": "أسئلتك مباشرة.",
  "Get instant answers, charts, and recommendations — just ask in plain English.":
    "احصل على إجابات ورسوم بيانية وتوصيات فورية — فقط اسأل بلغة واضحة.",
  "Sample query": "استعلام نموذجي",
  "Revenue · 30 days": "الإيرادات · ٣٠ يومًا",
  "Last 30 days": "آخر ٣٠ يومًا",
  "Sales Analytics Agent": "وكيل تحليلات المبيعات",
  "Inventory Agent": "وكيل المخزون",
  "Pricing Agent": "وكيل التسعير",
  "Compliance Agent": "وكيل الامتثال",
  "Warehouse Agent": "وكيل المستودعات",
  "Track revenue, pipeline, and rep performance. Ask anything.":
    "تتبّع الإيرادات وخط الصفقات وأداء المندوبين. اسأل ما تشاء.",
  "Monitor stock levels, forecast demand, and prevent shortages.":
    "راقب مستويات المخزون، وتنبّأ بالطلب، وامنع النواقص.",
  "Optimise pricing in real time based on demand and competition.":
    "حسّن التسعير لحظيًا وفق الطلب والمنافسة.",
  "Stay audit-ready with automated compliance monitoring.":
    "ابقَ جاهزًا للتدقيق مع مراقبة آلية للامتثال.",
  "Improve fulfilment speed and reduce warehouse errors.":
    "حسّن سرعة التنفيذ وقلّل أخطاء المستودع.",
  "Which items are running low this week?": "ما الأصناف التي توشك على النفاد هذا الأسبوع؟",
  "Am I priced competitively for my market?": "هل أسعاري تنافسية في سوقي؟",
  "Any missed audit checkpoints this quarter?": "هل فاتتنا أي نقاط تدقيق هذا الربع؟",
  "What's my average pick time in Zone B?": "ما متوسط زمن الالتقاط في المنطقة ب؟",
  "No-Code Builder": "منشئ بلا برمجة",
  "Build your own agent.": "ابنِ وكيلك الخاص.",
  "No code needed.": "دون أي برمجة.",
  "Four steps from sign-up to a live AI agent working for your business.":
    "أربع خطوات من التسجيل إلى وكيل ذكاء اصطناعي يعمل لأعمالك.",
  "No-code simplicity": "بساطة بلا برمجة",
  "Practical setup for SMB teams that need working agents, not a long implementation project.":
    "إعداد عملي لفرق الشركات الصغيرة والمتوسطة التي تريد وكلاء يعملون، لا مشروع تنفيذ طويلًا.",
  "Plug into your systems": "اربطه بأنظمتك",
  "Connect to your existing data, CRM, calendar, or WhatsApp with no custom engineering.":
    "اتصل ببياناتك الحالية أو نظام إدارة العملاء أو التقويم أو واتساب دون هندسة مخصّصة.",
  "Live in days": "جاهز خلال أيام",
  "From sign-up to live agent in 3–5 business days with our onboarding team by your side.":
    "من التسجيل إلى وكيل يعمل خلال ٣–٥ أيام عمل، وفريق التهيئة إلى جانبك.",
  "Pre-built templates": "قوالب جاهزة",
  "Start from a proven template for your industry and customise from there.":
    "ابدأ من قالب مجرَّب لقطاعك ثم خصّصه كما تشاء.",
  "Ready to see the agents": "جاهز لرؤية الوكلاء",
  "in action?": "أثناء العمل؟",

  // ── Values, units and labels that appear inside cards ──────────
  "Conversational Agents": "الوكلاء الحواريون",
  "Analytical Agents": "الوكلاء التحليليون",
  Coverage: "التغطية",
  Setup: "الإعداد",
  Channels: "القنوات",
  "Web + WA": "الويب + واتساب",
  "< 5 min": "أقل من ٥ دقائق",
  "24/7": "٢٤/٧",
  Days: "أيام",
  "20%": "٢٠٪",
  "2min": "دقيقتان",
  "3×": "٣ أضعاف",
  "60%": "٦٠٪",
  "80%": "٨٠٪",
  "40": "٤٠",
  "4s": "٤ ثوانٍ",
  "11s": "١١ ثانية",
  "8s": "٨ ثوانٍ",
  "8:30AM": "٨:٣٠ ص",
  "12:00PM": "١٢:٠٠ م",
  "4:00PM": "٤:٠٠ م",
  "What were my top revenue days last month?":
    "ما أعلى أيام الإيرادات لدي الشهر الماضي؟",

  // ── Capability chips (split from the comma-joined rows) ────────
  "Booking automation": "أتمتة الحجوزات",
  "menu queries": "استفسارات القائمة",
  analytics: "التحليلات",
  "Inventory forecasting": "التنبؤ بالمخزون",
  pricing: "التسعير",
  "product queries": "استفسارات المنتجات",
  "Appointment booking": "حجز المواعيد",
  "follow-ups": "المتابعات",
  "parts queries": "استفسارات قطع الغيار",
  "24/7 guest support": "دعم النزلاء على مدار الساعة",
  "occupancy analytics": "تحليلات الإشغال",
  "Appointment bots": "وكلاء المواعيد",
  compliance: "الامتثال",
  "supply tracking": "تتبّع المستلزمات",
  "Shipment queries": "استفسارات الشحن",
  "delivery analytics": "تحليلات التوصيل",
};

/**
 * Translate one English string. Unknown strings pass through unchanged, so a
 * gap in the map shows the English rather than nothing at all.
 */
export function tr(locale: Locale, text: string): string {
  if (locale === "en") return text;
  return AR[text] ?? text;
}

/** Translate a comma-joined list, item by item. */
export function trList(locale: Locale, csv: string, sep = ", "): string[] {
  return csv.split(sep).map((part) => tr(locale, part.trim()));
}
