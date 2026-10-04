import type { Locale } from "../i18n";

/**
 * Zahra — the AI chief of staff. Content mirrors the Agentnomics launch page,
 * with an Arabic translation for the GCC market.
 *
 * `en` is the source of truth; `ar` is typed against it, so a missing or
 * misspelled key is a compile error rather than a silently English section.
 */
const en = {
  /* Teaser that opens the BlueScaler home page */
  teaser: {
    pill: "Design partner program · 100 free seats",
    title: "Presenting",
    name: "Zahra",
    byline: "by Agentnomics",
    tagline: "Muse for the Enterprise.",
    body: "A voice-first chief of staff who answers from the systems your company runs on. What are the biggest deals in my pipeline? Where are my supply chain bottlenecks? What broke overnight? Ask out loud. She answers, books, chases and reports. Nothing drops.",
    cta: "Meet Zahra →",
    secondary: "Watch the film",
  },

  /* The full /zahra page */
  pill: "Design partner program · 100 free seats",
  title: "Presenting",
  name: "Zahra",
  byline: "by Agentnomics",
  tagline: "Muse for the Enterprise.",
  intro:
    "Zahra is a voice-first chief of staff who answers from the systems your company runs on. What are the biggest deals in my pipeline? Where are my supply chain bottlenecks? What broke overnight? Ask out loud. She answers, books, chases and reports. Nothing drops.",
  cta: "Request an Invitation →",
  badge: "ZAHRA · YOUR AI CHIEF OF STAFF",
  chips: [
    "Voice, avatar & text",
    "Wired to Salesforce, SAP & ServiceNow",
    "Works on WhatsApp & Slack",
    "Trust & governance",
  ],

  film: {
    eyebrow: "The film · 100 seconds",
    title: "Watch her run your company.",
    body: "She answers from Salesforce, SAP and ServiceNow, then runs your calendar, email, calls and bookings. Sound on.",
  },

  productLine: {
    eyebrow: "The product line",
    title: "One Zahra per seat at the executive table",
    body: "An intelligent, enterprise-aware voice agent for each enterprise leader. Whether it's a C-level exec asking high-level business questions or a VP of Supply Chain identifying risks and bottlenecks, Zahra answers without you ever having to touch SAP, Salesforce or ServiceNow.",
    roles: [
      {
        code: "VS",
        title: "Zahra for the VP of Sales",
        body: "Pipeline, deal risk and escalations from your Salesforce agents. She chases the forecast, books prospect meetings, and briefs you before every call.",
        ask: "Which deals above 100K are at risk this quarter?",
        answer:
          "Three: Meridian at $240K, quiet for 12 days. Northwind at $180K, slipped twice. Halcyon at $125K, waiting on legal. Want me to book check-ins with the owners?",
      },
      {
        code: "SC",
        title: "Zahra for the VP of Supply Chain",
        body: "Demand, coverage and replenishment from your SAP and forecasting agents. Supplier reports arrive on her WhatsApp; she checks every cell before your standup.",
        ask: "Will we cover Dallas DC demand next month?",
        answer:
          "Coverage is 92%. The gap is 3,400 units of SKU-214 in week two. Pulling the purchase order forward nine days closes it. Shall I flag procurement?",
      },
      {
        code: "OP",
        title: "Zahra for the VP of Operations",
        body: "Incidents, backlog and SLA health from ServiceNow. Standing playbooks keep the daily cadence, and every action lands in an audit log compliance can export.",
        ask: "Any SLA breaches overnight?",
        answer:
          "Two P2s. Payment gateway latency ran six hours over. The scanner outage was resolved at 3 AM. Backlog is 41, down eight.",
      },
      {
        code: "HR",
        title: "Zahra for the VP of HR",
        body: "Headcount, attrition and open reqs by voice. She also handles the part that eats recruiting teams alive: coordinating interviews with candidates, directly.",
        ask: "Where are we on the analytics team hires?",
        answer:
          "Four open reqs, nine in process, two onsites this week. Thursday is confirmed; I arranged it with the candidate on WhatsApp. Attrition is 6%, flat.",
      },
    ],
  },

  interfaceSection: {
    eyebrow: "The interface",
    title: "Just say it",
    body: "One sentence is the whole interface. No dashboard, no prompts, no app to poke at.",
    ask: "Set up thirty minutes with the Hascall team next week.",
    answer:
      "Consider it done. I'll offer Thursday and Friday and come back when it's locked.",
    confirm: "Invite locked · Friday 10:00 · you were never cc'd",
    closing:
      "You talk, she acts: calendar, email, calls, bookings, reports. Flights are ticketed on licensed airline APIs, not a browser bot clicking around with your identity. And she can tell your voice from everyone else's in the room.",
  },

  beyond: {
    eyebrow: "Beyond the app",
    title: "She deals with the people around you",
    body: "Every assistant on the market is an app its owner reads. Zahra is the one other people talk to.",
    cards: [
      {
        title: "Reports, collected and verified",
        body: "Whoever owes you a report sends it to her WhatsApp. She reads every cell, flags what's missing, and chases what's late.",
        lines: [
          "Here's today's close.",
          "Got it, Sarah. Cash and sales check out, but I don't see accounts receivable. Could you resend with AR included?",
        ],
      },
      {
        title: "Meetings, booked for you",
        body: "Give people her number. She offers real open slots and puts it on your calendar. Tell her once if you'd rather approve first.",
        lines: [
          "Hi, Marcus from Meridian. I'd like 30 minutes with Javed this week.",
          "Happy to help. He's free Tue 2 PM, Wed 10 AM, or Fri 3 PM. Which works?",
        ],
      },
      {
        title: "In Slack, where work happens",
        body: "Anyone on the team can hand her scheduling right in the thread. Slack already knows their email, so there's nothing to ask.",
        lines: [
          "@Zahra find us 45 minutes for the pricing review this week?",
          "Thursday 9:30 works for everyone. Booked, invites sent.",
        ],
      },
    ],
  },

  trust: {
    eyebrow: "Trust",
    title: "Built for companies that can't afford a leak",
    body: "Discretion is the product, and it's structural, not a policy page.",
    items: [
      {
        title: "One private world per principal",
        body: "Your calendar, contacts and company data are never pooled, and nothing you touch trains a shared model.",
      },
      {
        title: "She can send email, not read it",
        body: "Zahra holds a send-only permission. Your inbox is invisible to her by architecture, so it can't leak.",
      },
      {
        title: "Every action on the record",
        body: "Meetings booked, emails sent, reports chased: each one lands in an audit log you can export any time.",
      },
      {
        title: "Revoke her in one click",
        body: "Access runs through Google's own consent screen and your platform admin. Pull it whenever you like.",
      },
    ],
  },

  programme: {
    eyebrow: "The design partner program",
    title: "100 design-partner seats, free. Then we close it.",
    body: "Apply, get accepted, and we build her around your company.",
    bullets: [
      "Free for design partners, no card, no procurement to get started",
      "We do the wiring: your Zahra persona, connected to your SAP, Salesforce or ServiceNow",
      "A direct line to the people building her, and a hand in shaping the roadmap",
    ],
    cta: "Claim a Seat",
    note: "Every application is reviewed personally.",
  },

  howItStarts: {
    eyebrow: "How it starts",
    title: "See her run your business.",
    body: "Twenty minutes on your real questions: deals at risk, supply gaps, overnight incidents, hiring status. Ask her what you'd ask your team. If it's a fit, we hand you the keys.",
    steps: [
      { n: "01", title: "You apply", body: "Two minutes. Read by a person." },
      {
        n: "02",
        title: "A private walkthrough",
        body: "Your week and your data, not a canned demo.",
      },
      {
        n: "03",
        title: "She goes to work",
        body: "We wire her to your systems, on design-partner terms.",
      },
    ],
  },

  faq: {
    eyebrow: "Before you apply",
    title: "The four things everyone asks.",
    items: [
      {
        q: "What does she need access to?",
        a: "Google Calendar and send-only email, through Google's own consent screen. Enterprise personas connect to your Salesforce, SAP or ServiceNow agents during onboarding. You choose what she sees, and you can revoke any of it whenever you like.",
      },
      {
        q: "Will she send anything without me?",
        a: "Not until you say so. Every email, invite, call and booking is confirmed with you first, and you loosen that per category once you trust her. Whatever mode you choose, it's all in the audit log.",
      },
      {
        q: "Is my data pooled or trained on?",
        a: "Never. One isolated world per principal, and nothing you touch trains a shared model. That's the difference between a consumer assistant and one you can bring to work.",
      },
      {
        q: "How is this different from Meta's Muse?",
        a: "Muse is for your personal life: it browses with your identity and trains on your data by default. Zahra works for your role in the company, answers from your enterprise systems, and leaves a paper trail. Muse for the enterprise, with a data posture your CFO can sign.",
      },
    ],
  },

  closing:
    "Zahra is a private AI chief of staff for principals whose time is their scarcest asset.",
};

const ar: typeof en = {
  teaser: {
    pill: "برنامج الشركاء المؤسِّسين · ١٠٠ مقعد مجاني",
    title: "نقدّم لكم",
    name: "زهرة",
    byline: "من أجنتنوميكس",
    tagline: "ميوز للمؤسسات.",
    body: "رئيسة مكتب تعمل بالصوت أولًا، تجيب من الأنظمة التي تدير شركتك. ما أكبر الصفقات في خط مبيعاتي؟ أين اختناقات سلسلة التوريد لدي؟ ما الذي تعطّل ليلًا؟ اسأل بصوتك. تجيب وتحجز وتتابع وترفع التقارير. ولا يسقط شيء.",
    cta: "تعرّف على زهرة ←",
    secondary: "شاهد الفيلم",
  },

  pill: "برنامج الشركاء المؤسِّسين · ١٠٠ مقعد مجاني",
  title: "نقدّم لكم",
  name: "زهرة",
  byline: "من أجنتنوميكس",
  tagline: "ميوز للمؤسسات.",
  intro:
    "زهرة رئيسة مكتب تعمل بالصوت أولًا، تجيب من الأنظمة التي تدير شركتك. ما أكبر الصفقات في خط مبيعاتي؟ أين اختناقات سلسلة التوريد لدي؟ ما الذي تعطّل ليلًا؟ اسأل بصوتك. تجيب وتحجز وتتابع وترفع التقارير. ولا يسقط شيء.",
  cta: "اطلب دعوة ←",
  badge: "زهرة · رئيسة مكتبك بالذكاء الاصطناعي",
  chips: [
    "صوت وصورة ونص",
    "موصولة بـ Salesforce وSAP وServiceNow",
    "تعمل على واتساب وسلاك",
    "الثقة والحوكمة",
  ],

  film: {
    eyebrow: "الفيلم · ١٠٠ ثانية",
    title: "شاهدها وهي تدير شركتك.",
    body: "تجيب من Salesforce وSAP وServiceNow، ثم تدير تقويمك وبريدك ومكالماتك وحجوزاتك. شغّل الصوت.",
  },

  productLine: {
    eyebrow: "خط المنتج",
    title: "زهرة واحدة لكل مقعد على طاولة القيادة",
    body: "وكيل صوتي ذكي يفهم المؤسسة، مخصص لكل قائد فيها. سواء كان مسؤولًا تنفيذيًا يسأل أسئلة استراتيجية أو نائب رئيس لسلسلة التوريد يرصد المخاطر والاختناقات، تجيب زهرة دون أن تضطر للدخول إلى SAP أو Salesforce أو ServiceNow.",
    roles: [
      {
        code: "VS",
        title: "زهرة لنائب رئيس المبيعات",
        body: "خط الصفقات ومخاطرها والتصعيدات من وكلاء Salesforce لديك. تتابع التوقعات، وتحجز اجتماعات العملاء المحتملين، وتوجزك قبل كل مكالمة.",
        ask: "أي الصفقات فوق ١٠٠ ألف معرّضة للخطر هذا الربع؟",
        answer:
          "ثلاث: ميريديان بـ ٢٤٠ ألف دولار، صامتة منذ ١٢ يومًا. نورثويند بـ ١٨٠ ألفًا، تأجلت مرتين. هالسيون بـ ١٢٥ ألفًا، بانتظار الشؤون القانونية. أأحجز لك متابعات مع أصحابها؟",
      },
      {
        code: "SC",
        title: "زهرة لنائب رئيس سلسلة التوريد",
        body: "الطلب والتغطية والتزويد من وكلاء SAP والتنبؤ لديك. تصل تقارير المورّدين على واتساب الخاص بها، وتراجع كل خلية قبل اجتماعك الصباحي.",
        ask: "هل سنغطي طلب مركز دالاس الشهر القادم؟",
        answer:
          "التغطية ٩٢٪. الفجوة ٣٬٤٠٠ وحدة من الصنف SKU-214 في الأسبوع الثاني. تقديم أمر الشراء تسعة أيام يغلقها. أأبلغ قسم المشتريات؟",
      },
      {
        code: "OP",
        title: "زهرة لنائب رئيس العمليات",
        body: "الحوادث والمتأخرات وصحة مستوى الخدمة من ServiceNow. أدلة العمل الثابتة تحافظ على الإيقاع اليومي، وكل إجراء يُسجَّل في سجل تدقيق يمكن للامتثال تصديره.",
        ask: "هل وقعت أي خروقات لمستوى الخدمة ليلًا؟",
        answer:
          "حادثتان من الدرجة الثانية. تأخر بوابة الدفع تجاوز ست ساعات. وانقطاع الماسح حُلّ الساعة ٣ فجرًا. المتأخرات ٤١، بانخفاض ثمانية.",
      },
      {
        code: "HR",
        title: "زهرة لنائب رئيس الموارد البشرية",
        body: "أعداد الموظفين ومعدل الدوران والشواغر المفتوحة بالصوت. وتتولى أيضًا ما يستنزف فرق التوظيف: تنسيق المقابلات مع المرشحين مباشرةً.",
        ask: "أين وصلنا في توظيف فريق التحليلات؟",
        answer:
          "أربعة شواغر مفتوحة، وتسعة قيد الإجراء، ومقابلتان حضوريتان هذا الأسبوع. الخميس مؤكد؛ رتّبته مع المرشح على واتساب. ومعدل الدوران ٦٪ دون تغيّر.",
      },
    ],
  },

  interfaceSection: {
    eyebrow: "الواجهة",
    title: "قُلها فحسب",
    body: "جملة واحدة هي الواجهة كاملة. بلا لوحة معلومات ولا أوامر ولا تطبيق تتنقل فيه.",
    ask: "رتّب ثلاثين دقيقة مع فريق هاسكال الأسبوع القادم.",
    answer: "اعتبرها منجزة. سأعرض الخميس والجمعة وأعود إليك حين تُثبَّت.",
    confirm: "تم تثبيت الدعوة · الجمعة ١٠:٠٠ · دون أن تُنسخ في أي رسالة",
    closing:
      "أنت تتحدث وهي تنفّذ: التقويم والبريد والمكالمات والحجوزات والتقارير. وتُحجز تذاكر الطيران عبر واجهات شركات الطيران المرخّصة، لا عبر روبوت متصفح يتنقل بهويتك. وهي تميّز صوتك عن أصوات الآخرين في الغرفة.",
  },

  beyond: {
    eyebrow: "أبعد من التطبيق",
    title: "تتعامل مع من حولك",
    body: "كل مساعد في السوق تطبيق يقرأه صاحبه. أما زهرة فهي التي يتحدث إليها الآخرون.",
    cards: [
      {
        title: "تقارير تُجمع وتُدقَّق",
        body: "من يدين لك بتقرير يرسله إلى واتساب الخاص بها. تقرأ كل خلية، وتشير إلى الناقص، وتلاحق المتأخر.",
        lines: [
          "تفضّل إقفال اليوم.",
          "وصلني يا سارة. النقد والمبيعات مطابقان، لكني لا أرى الذمم المدينة. هل تعيد الإرسال مع تضمينها؟",
        ],
      },
      {
        title: "اجتماعات تُحجز نيابةً عنك",
        body: "أعطِ الناس رقمها. تعرض مواعيد شاغرة حقيقية وتضعها في تقويمك. وأخبرها مرة واحدة إن كنت تفضّل الموافقة أولًا.",
        lines: [
          "مرحبًا، أنا ماركوس من ميريديان. أودّ ثلاثين دقيقة مع جاويد هذا الأسبوع.",
          "بكل سرور. هو متفرغ الثلاثاء ٢ ظهرًا، أو الأربعاء ١٠ صباحًا، أو الجمعة ٣ عصرًا. أيها يناسبك؟",
        ],
      },
      {
        title: "في سلاك، حيث يجري العمل",
        body: "يستطيع أي فرد في الفريق تسليمها مهمة الجدولة داخل المحادثة مباشرة. وسلاك يعرف بريدهم أصلًا، فلا حاجة للسؤال.",
        lines: [
          "@زهرة جدي لنا ٤٥ دقيقة لمراجعة التسعير هذا الأسبوع؟",
          "الخميس ٩:٣٠ يناسب الجميع. حُجز وأُرسلت الدعوات.",
        ],
      },
    ],
  },

  trust: {
    eyebrow: "الثقة",
    title: "مبنية لشركات لا تحتمل تسريبًا",
    body: "التكتّم هو المنتج نفسه، وهو بنيوي لا مجرد صفحة سياسات.",
    items: [
      {
        title: "عالم خاص لكل مسؤول",
        body: "تقويمك وجهات اتصالك وبيانات شركتك لا تُجمَّع مع غيرها أبدًا، ولا شيء تلمسه يدرّب نموذجًا مشتركًا.",
      },
      {
        title: "ترسل البريد ولا تقرؤه",
        body: "تملك زهرة صلاحية إرسال فقط. صندوق بريدك غير مرئي لها بحكم التصميم، فلا يمكن أن يتسرّب.",
      },
      {
        title: "كل إجراء موثّق",
        body: "الاجتماعات المحجوزة والرسائل المرسلة والتقارير المتابَعة: كلٌّ منها يُسجَّل في سجل تدقيق يمكنك تصديره متى شئت.",
      },
      {
        title: "إلغاء الصلاحية بنقرة",
        body: "يمرّ الوصول عبر شاشة موافقة Google نفسها ومسؤول المنصة لديك. اسحبه متى أردت.",
      },
    ],
  },

  programme: {
    eyebrow: "برنامج الشركاء المؤسِّسين",
    title: "١٠٠ مقعد للشركاء المؤسِّسين، مجانًا. ثم نغلق الباب.",
    body: "قدّم طلبك، واحصل على القبول، ونبنيها حول شركتك.",
    bullets: [
      "مجانًا للشركاء المؤسِّسين، بلا بطاقة ائتمان وبلا إجراءات شراء للبدء",
      "نحن ننفّذ الربط: شخصية زهرة الخاصة بك، موصولة بـ SAP أو Salesforce أو ServiceNow لديك",
      "خط مباشر مع من يبنونها، ويد في صياغة خارطة الطريق",
    ],
    cta: "احجز مقعدًا",
    note: "كل طلب يُراجَع شخصيًا.",
  },

  howItStarts: {
    eyebrow: "كيف يبدأ الأمر",
    title: "شاهدها تدير أعمالك.",
    body: "عشرون دقيقة على أسئلتك الحقيقية: الصفقات المعرّضة للخطر، وفجوات التوريد، وحوادث الليل، وحالة التوظيف. اسألها ما تسأله فريقك. وإن كانت مناسبة، سلّمناك المفاتيح.",
    steps: [
      { n: "٠١", title: "تقدّم بطلبك", body: "دقيقتان. يقرؤه إنسان." },
      {
        n: "٠٢",
        title: "جولة خاصة",
        body: "أسبوعك وبياناتك أنت، لا عرضًا معلّبًا.",
      },
      {
        n: "٠٣",
        title: "تبدأ العمل",
        body: "نوصلها بأنظمتك، وفق شروط الشركاء المؤسِّسين.",
      },
    ],
  },

  faq: {
    eyebrow: "قبل أن تتقدّم",
    title: "الأسئلة الأربعة التي يطرحها الجميع.",
    items: [
      {
        q: "ما الصلاحيات التي تحتاجها؟",
        a: "تقويم Google وبريد بصلاحية إرسال فقط، عبر شاشة موافقة Google نفسها. أما الشخصيات المؤسسية فتتصل بوكلاء Salesforce أو SAP أو ServiceNow لديك أثناء التهيئة. أنت تختار ما تراه، ويمكنك سحب أي صلاحية متى شئت.",
      },
      {
        q: "هل ترسل شيئًا دون علمي؟",
        a: "لا، حتى تأذن بذلك. كل رسالة ودعوة ومكالمة وحجز تُؤكَّد معك أولًا، ثم تخفّف هذا القيد لكل فئة حين تثق بها. وأيًا كان الوضع الذي تختاره، يبقى كل شيء في سجل التدقيق.",
      },
      {
        q: "هل تُجمَّع بياناتي أو يُدرَّب عليها؟",
        a: "أبدًا. عالم معزول واحد لكل مسؤول، ولا شيء تلمسه يدرّب نموذجًا مشتركًا. وهذا هو الفرق بين مساعد استهلاكي وآخر يمكنك إدخاله إلى العمل.",
      },
      {
        q: "بمَ تختلف عن ميوز من ميتا؟",
        a: "ميوز لحياتك الشخصية: تتصفح بهويتك وتتدرّب على بياناتك افتراضيًا. أما زهرة فتعمل لدورك في الشركة، وتجيب من أنظمتك المؤسسية، وتترك أثرًا موثّقًا. ميوز للمؤسسات، بوضع بيانات يستطيع مديرك المالي التوقيع عليه.",
      },
    ],
  },

  closing:
    "زهرة رئيسة مكتب خاصة بالذكاء الاصطناعي، لقادة وقتهم أندر ما يملكون.",
};

const CONTENT = { en, ar } satisfies Record<Locale, typeof en>;

export type ZahraCopy = typeof en;

export function getZahra(locale: Locale): ZahraCopy {
  return CONTENT[locale];
}

/** Where "Request an Invitation" and "Claim a Seat" point. */
export const ZAHRA_INVITE_URL = "https://www.agentnomics.ai/zahra";

export const ZAHRA_FILM = {
  videoSrc: "/videos/zahra-film-v2.mp4",
  poster: "/videos/zahra-film-poster.jpg",
};
