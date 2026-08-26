export const SIGNUP_URLS = {
  conversational: "https://app.agentnomics.ai/signup/conversational-agent",
  analytical: "https://app.agentnomics.ai/signup/analytical-agent",
};

export const DEMO_BOOKING_URL = "https://calendar.app.google/mshQQNn8UMNhjcGdA";

export const CONTACT_EMAIL_URL = "mailto:sales@agentnomics.ai";

export const SUPPORT_EMAIL_URL = "mailto:support@agentnomics.ai";

export const PARTNER_EMAIL_URL =
  "mailto:partners@agentnomics.ai?subject=BlueScaler%20partner%20application";

const WHATSAPP_NUMBER = "";

export const WHATSAPP_URL = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I'm%20interested%20in%20BlueScaler%20AI%20agents`
  : DEMO_BOOKING_URL;

export const NAV_LINKS = [
  { label: "Agents", href: "/agents" },
  { label: "Industries", href: "/industries" },
  { label: "Customers", href: "/customers" },
  { label: "Partners", href: "/partners" },
];

export type SiteVideo = {
  title: string;
  videoSrc: string;
  /** Frame shown before playback — without one the player is a black box. */
  poster?: string;
};

export const CONVERSATIONAL_VIDEOS: SiteVideo[] = [
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
];

export const ANALYTICAL_VIDEO = {
  title: "Demand planning, answered in plain English",
  videoSrc: "/videos/demand-planning-demo.mp4",
};

export const AGENTS_PAGE_VIDEOS: SiteVideo[] = [
  {
    title: "Aria customer support agent",
    videoSrc: "/videos/aria-hero-silent.webm",
  },
  ...CONVERSATIONAL_VIDEOS,
];

export const CONVERSATIONAL_AGENT_CARDS = [
  {
    name: "Restaurant Bot",
    tagline: "Let customers book a table or browse your menu any time.",
  },
  {
    name: "Health Assistant",
    tagline: "Book appointments, check results, and message caregivers.",
  },
  {
    name: "Fairway Concierge",
    tagline: "Book tee times without the hold music.",
  },
  {
    name: "Retail Bot",
    tagline: "Answer product questions and process returns 24/7.",
  },
  {
    name: "Mechanic Bot",
    tagline: "Book service appointments and follow up automatically.",
  },
];

/**
 * Analytical agents ship as system-specific families — each one reads the
 * customer's own SAP or Salesforce data, so they're grouped by source system
 * rather than listed flat.
 */
export const ANALYTICAL_AGENT_FAMILIES = [
  {
    system: "SAP Finance",
    accent: "gold" as const,
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
    system: "Salesforce Customer Success",
    accent: "teal" as const,
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
];

/**
 * The flat, system-agnostic list still used by the /agents page. The home page
 * shows ANALYTICAL_AGENT_FAMILIES instead.
 */
export const ANALYTICAL_AGENTS = [
  {
    name: "Sales Analytics Agent",
    description: "Track revenue, pipeline, and rep performance. Ask anything.",
  },
  {
    name: "Inventory Agent",
    description: "Monitor stock levels, forecast demand, and prevent shortages.",
  },
  {
    name: "Pricing Agent",
    description: "Optimise pricing in real time based on demand and competition.",
  },
  {
    name: "Compliance Agent",
    description: "Stay audit-ready with automated compliance monitoring.",
  },
  {
    name: "Warehouse Agent",
    description: "Improve fulfilment speed and reduce warehouse errors.",
  },
];

export const INDUSTRIES = [
  {
    label: "Restaurants & F&B",
    useCase: "Handle reservations, menu questions, and orders automatically.",
  },
  {
    label: "Retail",
    useCase: "Answer product queries and process returns 24/7.",
  },
  {
    label: "Automotive Services",
    useCase: "Book appointments and follow up with customers.",
  },
  {
    label: "Hospitality",
    useCase: "Automate guest queries across WhatsApp and your website.",
  },
  {
    label: "Healthcare & Clinics",
    useCase: "Book appointments, follow up with patients, and track supplies.",
  },
  {
    label: "Logistics",
    useCase: "Give customers real-time shipment updates without extra staff.",
  },
];

export const INDUSTRY_TABS = [
  {
    label: "Restaurants & F&B",
    challenges: [
      "After-hours queries",
      "Table booking staff load",
      "Menu questions",
      "Order updates",
    ],
    actions: [
      "Restaurant Bot handles bookings, menu FAQs, and order status 24/7.",
      "Analytical Agent tracks covers, peak hours, and menu performance.",
    ],
    value:
      "Reduce front-of-house workload, never miss a booking, and serve guests faster.",
  },
  {
    label: "Retail",
    challenges: [
      "Stock availability questions",
      "Dynamic pricing pressure",
      "Customer queries across channels",
    ],
    actions: [
      "Dynamic Inventory & Replenishment Agent flags shortages before they hit sales.",
      "Retail Bot answers product queries and return questions around the clock.",
    ],
    value:
      "Improve fulfillment, protect margins, and respond faster across every channel.",
    insight: "82% of retailers plan to deploy AI Agents within three years.",
  },
  {
    label: "Automotive Services",
    challenges: [
      "Phone tag for bookings",
      "Manual service follow-ups",
      "Parts availability questions",
    ],
    actions: [
      "Mechanic Bot books appointments and sends automated follow-ups.",
      "Analytical Agent monitors turnaround and revenue per bay.",
    ],
    value: "Win more bookings, reduce admin, and keep customers informed.",
  },
  {
    label: "Hospitality & Hotels",
    challenges: [
      "Guest queries at all hours",
      "Reservation management",
      "Multilingual support needs",
    ],
    actions: [
      "Conversational Agent handles guest questions across WhatsApp and web.",
      "Analytical Agent tracks occupancy, reviews, and revenue per room.",
    ],
    value: "Deliver 24/7 guest service without adding headcount.",
  },
  {
    label: "Healthcare & Clinics",
    challenges: [
      "Appointment booking load",
      "Patient follow-ups",
      "Supply and compliance tracking",
    ],
    actions: [
      "Health Assistant Bot supports appointments, lab results, and caregiver messages.",
      "Compliance-driven agent helps teams monitor procurement and supplies.",
    ],
    value: "Improve patient experience and reduce admin burden.",
  },
  {
    label: "Logistics & Delivery",
    challenges: [
      "Shipment status queries",
      "Customer communication volume",
      "Delivery performance visibility",
    ],
    actions: [
      "Conversational Agent handles shipment queries on WhatsApp automatically.",
      "Analytical Agent monitors delivery performance and SLA compliance.",
    ],
    value: "Reduce inbound calls and improve on-time delivery visibility.",
  },
];

export const INDUSTRY_IMPACT = [
  {
    industry: "Restaurants & F&B",
    capabilities: "Booking automation, menu queries, analytics",
    impact: "Fewer missed bookings, reduced staff load",
  },
  {
    industry: "Retail",
    capabilities: "Inventory forecasting, pricing, product queries",
    impact: "Higher margins, faster fulfilment",
  },
  {
    industry: "Automotive",
    capabilities: "Appointment booking, follow-ups, parts queries",
    impact: "More bookings, less phone time",
  },
  {
    industry: "Hospitality",
    capabilities: "24/7 guest support, occupancy analytics",
    impact: "Better reviews, lower headcount cost",
  },
  {
    industry: "Healthcare",
    capabilities: "Appointment bots, compliance, supply tracking",
    impact: "Improved patient care, audit readiness",
  },
  {
    industry: "Logistics",
    capabilities: "Shipment queries, delivery analytics",
    impact: "Fewer inbound calls, better SLA tracking",
  },
];

export const TRUST_PILLARS = [
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
];

export const RESULTS_STATS = [
  ["60%", "More sales"],
  ["40", "Hours saved monthly per employee"],
  ["80%", "Routine queries automated"],
  ["Days", "Go live timeline"],
];

export const CUSTOMER_CASE_STUDIES = [
  {
    company: "Starchandco",
    industry: "Restaurants & F&B",
    country: "UAE",
    challenge: "Managing customer inquiries, address updates, and marketing promotions was consuming 8–10 hours a day.",
    result: "Orders up 20% and brand awareness doubled — with Aria handling customer comms and marketing around the clock.",
    agent: "Aria",
  },
  {
    company: "UAE retail chain",
    industry: "Retail",
    country: "UAE",
    challenge: "Customers waited hours for stock and return answers.",
    result: "Cut response time from 4 hours to under 2 minutes.",
    agent: "Retail Bot",
  },
  {
    company: "KSA automotive service",
    industry: "Automotive",
    country: "Saudi Arabia",
    challenge: "Service bookings were lost to phone queues and slow follow-up.",
    result: "Booked 3x more appointments with zero extra staff.",
    agent: "Mechanic Bot",
  },
];

export const PARTNER_TYPES = [
  {
    title: "Agency Partners",
    body: "You bring the clients, we provide the AI platform. Add WhatsApp and web agents to your GCC client engagements without building anything from scratch.",
  },
  {
    title: "Systems Integrators",
    body: "Technical teams who deploy and configure BlueScaler agents into client infrastructure. We manage the platform — you own the integration layer.",
  },
  {
    title: "Consultants",
    body: "Business advisors who identify automation opportunities and bring BlueScaler as the platform of choice. From scoping to go-live, we support the delivery.",
  },
];
