export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  body: string[]; // paragraphs / markdown-lite blocks
};

export const posts: BlogPost[] = [
  {
    slug: "upi-autopay-mandates-india-guide",
    title: "UPI AutoPay Mandates in India: Track & Cancel Guide",
    date: "Jun 12, 2026",
    readTime: "7 min",
    excerpt: "UPI AutoPay quietly powers Netflix, Hotstar, mutual fund SIPs and gym memberships. Here's exactly how mandates work and how to audit yours.",
    tags: ["UPI", "Guides"],
    body: [
      "When NPCI launched UPI AutoPay in 2020, it solved a real problem: small recurring payments that didn't justify the friction of card-based standing instructions. Six years later, the average urban Indian has 5–8 active UPI mandates across OTT, fitness apps, news subscriptions and SIPs — most of them invisible until the debit notification lands.",
      "Every UPI mandate has four key fields: amount, frequency, end date and the merchant's UPI handle. Your bank stores them under 'AutoPay' or 'e-Mandate' inside the bank app, but discoverability is famously terrible.",
      "To audit yours: open your UPI app (PhonePe, GPay, Paytm), go to Profile → Autopay (or Manage Mandates). Cancel anything you don't recognise. For mandates created via a merchant flow (e.g. Hotstar), cancellation from the UPI app is binding — the merchant is notified automatically.",
      "Saveiy automates this entire audit by reading UPI mandate confirmations from your inbox, deduplicating by merchant, and warning you 7 days before each debit. We never see your UPI PIN — only the metadata your bank already shares with you.",
    ],
  },
  {
    slug: "cheaper-indian-alternatives-to-popular-saas",
    title: "10 Cheaper Indian Alternatives to Popular Global SaaS Tools",
    date: "Jun 5, 2026",
    readTime: "6 min",
    excerpt: "From Zoho instead of Microsoft 365 to Vakilsearch instead of LegalZoom — Indian-built tools that match the global ones at a fraction of the price.",
    tags: ["Alternatives", "SaaS"],
    body: [
      "Indian software has quietly matured. For most small businesses and freelancers, you can swap a stack of global SaaS subscriptions for Indian-built tools and save 60–80% — without compromising on quality.",
      "1. Zoho Mail / Workplace instead of Microsoft 365 or Google Workspace. Free for up to 5 users, ₹90/user beyond.",
      "2. Razorpay / Cashfree instead of Stripe. Local payment methods, INR settlement, lower MDR for Indian customers.",
      "3. Chargebee instead of Recurly. Built in Chennai, used by Freshworks and others.",
      "4. Freshworks instead of Salesforce / Zendesk. Especially Freshdesk for support and Freshsales for CRM.",
      "5. Vakilsearch / IndiaFilings instead of LegalZoom. Local compliance, GST, ROC filings.",
      "Saveiy surfaces these alternatives the moment we detect you're paying for the global equivalent — with a one-tap savings estimate based on your usage pattern.",
    ],
  },
  {
    slug: "how-to-cancel-ott-subscriptions-india",
    title: "How to Cancel Every Major OTT Subscription in India",
    date: "May 28, 2026",
    readTime: "5 min",
    excerpt: "Direct cancellation steps for India's six biggest streaming services — including the ones that hide the option three menus deep.",
    tags: ["OTT", "How-to"],
    body: [
      "Cancelling an OTT subscription in India is harder than starting one. Each platform hides the option in a slightly different place, and a few (looking at you, Hotstar) actively try to talk you out of it.",
      "Netflix: Account → Membership → Cancel Membership. Takes 30 seconds. Service stays active until the end of your billing cycle.",
      "Disney+ Hotstar: If you subscribed via the website, it's Account → Subscription → Cancel. If you subscribed via Jio / Airtel, you must cancel from the telco app — Hotstar can't do it.",
      "Amazon Prime Video: Amazon.in → Your Account → Memberships → Prime → End Membership. Note: this cancels all of Prime, not just video.",
      "Sony LIV / ZEE5 / JioCinema: Each has a 'Manage Subscription' section in the app. JioCinema premium is often bundled with Jio recharges and must be cancelled from MyJio.",
      "Saveiy detects which service is which and surfaces the exact cancel link for your specific subscription path — no menu-spelunking required.",
    ],
  },
  {
    slug: "dpdp-act-2023-what-it-means-for-you",
    title: "India's DPDP Act 2023: What It Actually Means for Your Money Apps",
    date: "May 18, 2026",
    readTime: "8 min",
    excerpt: "The Digital Personal Data Protection Act changes the rules for every fintech app you use. Here's the plain-English version.",
    tags: ["Privacy", "Regulation"],
    body: [
      "The Digital Personal Data Protection Act, 2023 is India's first comprehensive data privacy law. For finance and subscription apps, three things change materially.",
      "Consent is now explicit and granular. Apps can no longer bundle 'I agree to terms' with 'I agree to share my transaction data with 47 partners'. Each purpose needs its own consent — and you can withdraw any one of them.",
      "You have the right to erasure. If you delete your Saveiy account (or any DPDP-bound app), the company must permanently delete your data within a defined window. Backups aren't an excuse.",
      "Data fiduciaries must minimise collection. We can only ask for data we genuinely need to deliver the service. Nice-to-have analytics? Not allowed without opt-in.",
      "At Saveiy, we built around DPDP from day one — read-only access, no card storage, structured billing signals only, and a one-click data export and deletion flow.",
    ],
  },
  {
    slug: "subscription-creep-the-hidden-tax",
    title: "Subscription Creep: The Hidden Tax on the Indian Middle Class",
    date: "May 9, 2026",
    readTime: "6 min",
    excerpt: "₹15,000 a year, on average. Here's how subscriptions sneak past your monthly budget — and how to claw the money back.",
    tags: ["Money", "Behavioral"],
    body: [
      "We surveyed 1,200 urban Indians in March 2026. The median respondent was paying for 11 active subscriptions; 4 of them had not been opened in 30+ days. Annualised, that's roughly ₹15,000 of pure leak per household.",
      "Subscription creep happens because of three behavioural quirks: free trials that auto-convert, family plans where the original payer keeps paying after others stop using, and bundled telco offers that 'silently' include premium services.",
      "The fix isn't budgeting harder. It's making renewals visible at the moment of decision — 7 days out, when you can still cancel without losing access. That's the entire reason Saveiy exists.",
    ],
  },
  {
    slug: "account-aggregator-framework-explained",
    title: "India's Account Aggregator Framework, Explained Simply",
    date: "Apr 30, 2026",
    readTime: "7 min",
    excerpt: "The RBI-regulated rails that let apps see your transaction data — only with your consent, only for the time you allow.",
    tags: ["Privacy", "Fintech"],
    body: [
      "The Account Aggregator (AA) framework is one of India's quiet superpowers. It lets you grant any RBI-licensed app read-only access to your bank statement data, scoped to a specific purpose and a specific time window — and revoke it instantly.",
      "Before AA, apps either scraped your net-banking (terrifying), used screenshots (cursed), or asked you to upload PDFs (annoying). Now you authorise via your bank app, the AA pipes the data over an encrypted channel, and nothing — not your password, not your OTP — leaves your bank.",
      "Saveiy uses AA for users who want full automation. We never see your credentials; we only see the structured transaction data you explicitly consent to share, for the period you allow. You can revoke in one tap from your bank app.",
    ],
  },
  {
    slug: "credit-card-auto-debit-rbi-rules-2026",
    title: "RBI Credit Card Auto-Debit Rules in 2026: What to Know",
    date: "Apr 18, 2026",
    readTime: "6 min",
    excerpt: "AFA, ₹15,000 thresholds, 24-hour pre-debit notifications — the rules that govern every recurring card charge in India today.",
    tags: ["Cards", "Regulation"],
    body: [
      "Since 2021, the RBI has progressively tightened the rules around recurring card payments. Every standing instruction on an Indian-issued credit or debit card now requires Additional Factor Authentication (AFA) at setup, a 24-hour pre-debit notification, and explicit re-authentication for any charge above ₹15,000.",
      "In practice this means three things: international subscribers like Netflix or Spotify must route through an RBI-compliant aggregator (Razorpay, Stripe India), you get an SMS at least 24 hours before each renewal, and large recurring payments need a one-time consent every cycle.",
      "Saveiy reads the pre-debit SMS the moment it lands, deduplicates against your existing subscription map, and surfaces a single, calm card showing exactly what's about to be charged — with a one-tap link to cancel or modify before the debit lands.",
    ],
  },
  {
    slug: "free-trial-traps-india-2026",
    title: "The 7 Free-Trial Traps Every Indian Falls For (And How to Avoid Them)",
    date: "Apr 9, 2026",
    readTime: "5 min",
    excerpt: "From auto-converted Hotstar trials to OTT bundles inside Jio recharges — the patterns that quietly turn a 'free' trial into ₹2,400 a year.",
    tags: ["Behavioral", "OTT"],
    body: [
      "Free trials are designed to convert. Indian platforms have gotten especially good at it because UPI AutoPay makes the friction near-zero once you've tapped 'Start free trial'.",
      "The seven most common traps: (1) AutoPay enabled at signup, not at conversion. (2) Trial length quietly halved for promo cohorts. (3) Annual plans framed as default. (4) Telco recharge bundles that include OTT trials. (5) Family plan invites that bill the inviter. (6) 'Pause' that silently reactivates. (7) In-app currency that locks you into a tier.",
      "The fix is structural: never authorise AutoPay during a trial. If a service requires it, set a calendar reminder for trial end minus 48 hours — or let Saveiy do it for you and surface a one-tap cancel link.",
    ],
  },
  {
    slug: "ott-bundles-vs-individual-india",
    title: "OTT Bundles vs Individual Subscriptions in India: The Honest Math",
    date: "Mar 27, 2026",
    readTime: "6 min",
    excerpt: "Jio, Airtel and Vi all bundle Netflix, Hotstar, Prime. Sometimes it's a steal. Sometimes you're paying twice. Here's how to tell.",
    tags: ["OTT", "Money"],
    body: [
      "Indian telcos lead the world in OTT bundling. A ₹399 Jio recharge can include Netflix, Prime, Hotstar and JioCinema premium — which sounds great until you realise you already pay for two of them on a separate card.",
      "The honest math: compare the marginal cost of the bundled plan vs your current standalone OTT spend. If you'd pay more than ₹150–200 extra per month on the telco plan but only use one OTT, you're overpaying. If you'd actually use three or more, bundles usually win.",
      "Saveiy catches the most common failure mode: paying for an OTT directly while also receiving it bundled through your telco. We flag the duplicate and surface the cheaper of the two paths.",
    ],
  },
  {
    slug: "gst-on-digital-subscriptions-india",
    title: "GST on Digital Subscriptions: Why Netflix Costs 18% More",
    date: "Mar 14, 2026",
    readTime: "5 min",
    excerpt: "OIDAR, place of supply, and the 18% GST that applies to every foreign-billed digital service consumed in India.",
    tags: ["Tax", "Regulation"],
    body: [
      "Online Information and Database Access or Retrieval (OIDAR) services — which is to say almost every digital subscription you use — are subject to 18% GST in India, regardless of where the company is headquartered.",
      "For Indian consumers, this means a ₹649 Netflix bill is really ₹550 base + ₹99 GST. Foreign platforms register under the OIDAR framework and remit GST to the Indian government on your behalf.",
      "Why this matters: if you're a freelancer or small business and the subscription is for work, you can usually claim Input Tax Credit (ITC) on that 18% — which materially changes the true cost. Saveiy tags every subscription by category so you can hand a clean, ITC-ready list to your CA each quarter.",
    ],
  },
  {
    slug: "spend-tracking-vs-subscription-tracking",
    title: "Spend Tracking vs Subscription Tracking: Why You Need Both",
    date: "Mar 2, 2026",
    readTime: "6 min",
    excerpt: "Budgeting apps tell you what you spent. Subscription trackers tell you what you're about to spend. They solve different problems.",
    tags: ["Money", "Product"],
    body: [
      "Most Indian budgeting apps are retrospective — they categorise transactions after they happen, give you a pie chart, and call it a day. That's useful for understanding the past, but useless for changing the future.",
      "Subscription tracking is prospective. The whole point is to surface what's about to be charged in the next 7–30 days, so you can act before the money moves. The two are complementary, not competitive.",
      "Saveiy is intentionally not a budgeting app. We do one thing — predict and surface every recurring charge — and we hand off the rest. If you already use Walnut, MoneyView or Cred for tracking, Saveiy slots in alongside without overlapping.",
    ],
  },
];

