# BlueScaler

**AI Agents for Growing Businesses in the Gulf.**

BlueScaler is a marketing and lead-generation site for an AI agent platform purpose-built for SMBs across the GCC. It showcases conversational and analytical AI agents that help restaurants, retailers, and service businesses automate customer interactions — handling bookings, orders, and inquiries across web chat, phone, and WhatsApp — without hiring additional staff. Powered by [Agentnomics](https://agentnomics.ai).

🌐 **Live Site:** [https://bluescaler.com](https://bluescaler.com)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | [Lucide React](https://lucide.dev/) |
| UI Library | React 19 |
| Linting | ESLint + eslint-config-next |

---

## Features

- **Multi-page architecture** — Dedicated pages for Home, Agents, Industries, Customers, and Partners, each with per-page metadata for SEO
- - **Conversational Agents showcase** — Interactive section demonstrating AI agents that handle bookings, orders, menus, and customer inquiries
  - - **Analytical Agents showcase** — Section covering intelligence agents that connect to business systems (SAP, Salesforce, ServiceNow) for reporting and decisions
    - - **Industry-specific tabs** — Tailored agent previews for Restaurants & F&B, Retail, Automotive, Hospitality, Healthcare, and Logistics
      - - **Animated Hero section** — Autoplay background video, ambient glow orbs, a floating "BlueScaler Agent Hub" dashboard card with live GCC region stats, and animated entry transitions
        - - **WhatsApp floating widget** — A persistent WhatsApp CTA button for direct lead capture
          - - **Trust & results section** — Key social proof stats (60% more sales, 40 hrs saved/month per employee)
            - - **CTA Section** — Google Calendar booking integration for live demo scheduling
              - - **Responsive navbar** — Hamburger menu for mobile with full desktop navigation
                - - **SEO ready** — `sitemap.ts` and `robots.ts` auto-generation via Next.js App Router
                  - - **Centralized content** — All copy, URLs, and structured data managed through a single `site-content.ts` file for easy updates
                   
                    - ---

                    ## Getting Started

                    ### Prerequisites

                    - Node.js 18+
                    - - npm or yarn
                     
                      - ### Installation
                     
                      - ```bash
                        # 1. Clone the repository
                        git clone https://github.com/abd-az1z/bluescaler.git
                        cd bluescaler

                        # 2. Install dependencies
                        npm install

                        # 3. Start the development server
                        npm run dev
                        ```

                        Open [http://localhost:3000](http://localhost:3000) in your browser.

                        ### Available Scripts

                        | Command | Description |
                        |---------|-------------|
                        | `npm run dev` | Start local development server |
                        | `npm run build` | Create optimised production build |
                        | `npm run start` | Run the production build locally |
                        | `npm run lint` | Run ESLint across the project |

                        ---

                        ## Project Structure

                        ```
                        bluescaler/
                        ├── app/
                        │   ├── page.tsx              # Home page
                        │   ├── layout.tsx            # Root layout (fonts, metadata, WhatsApp widget)
                        │   ├── agents/page.tsx       # Agents detail page
                        │   ├── industries/page.tsx   # Industry verticals page
                        │   ├── customers/page.tsx    # Customer stories page
                        │   ├── partners/page.tsx     # Partners page
                        │   ├── sitemap.ts            # Auto-generated sitemap
                        │   └── robots.ts             # robots.txt config
                        ├── components/
                        │   ├── Hero.tsx              # Animated hero with video background & stats
                        │   ├── ConversationalAgents.tsx
                        │   ├── AnalyticalAgents.tsx
                        │   ├── Industries.tsx
                        │   ├── IndustryTabs.tsx
                        │   ├── TrustSection.tsx
                        │   ├── CTASection.tsx        # Demo booking CTA
                        │   ├── Navbar.tsx
                        │   ├── Footer.tsx
                        │   ├── WhatsAppWidget.tsx    # Floating WhatsApp contact button
                        │   └── site-content.ts       # Centralised copy & config
                        └── public/
                            └── videos/               # Hero background video assets
                        ```

                        ---

                        ## Live Demo

                        🔗 **[https://bluescaler.com](https://bluescaler.com)**

                        To book a demo directly: [sales@agentnomics.ai](mailto:sales@agentnomics.ai)

                        ---

## Lead Notifications

Demo requests and contact-form messages are emailed to
**javed@agentnomics.ai** by `POST /api/lead` ([app/api/lead/route.ts](app/api/lead/route.ts)).

- **Book a Demo** opens a short capture form, emails the lead, then forwards
  the visitor to the Google Calendar booking page. The lead is captured even
  if they never finish booking, and a delivery failure never blocks the
  booking — the visitor can still continue to the calendar.
- **Or send us a message** posts to the same endpoint.

### Configuration

Set these as Environment Variables in Vercel (and in `.env.local` locally).
See [.env.example](.env.example).

| Variable | Required | Purpose |
|----------|----------|---------|
| `RESEND_API_KEY` | one of the two | Send via [Resend](https://resend.com) (tried first) |
| `SENDGRID_API_KEY` | one of the two | Send via [SendGrid](https://sendgrid.com) |
| `LEAD_NOTIFICATION_EMAIL` | no | Recipient. Defaults to `javed@agentnomics.ai` |
| `LEAD_EMAIL_FROM` | no | Sender. Defaults to `BlueScaler <noreply@bluescaler.com>` |

The sending domain must be verified with the provider, or delivery fails.

With no key set, the endpoint returns a friendly error, points the visitor at
`sales@agentnomics.ai`, and writes the full lead to the Vercel logs (prefixed
`[lead]`) so nothing is lost.


                        ## Powered By

                        [Agentnomics](https://agentnomics.ai) — the complete platform for building and deploying AI agents for your business.

                        ---

                        ## License

                        Private — © 2026 BlueScaler / Agentnomics. All rights reserved.
