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
    title: "UPI AutoPay Mandates in India: The Complete Guide to Tracking and Cancelling",
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
    title: "How to Cancel Every Major OTT Subscription in India (Netflix, Hotstar, Prime, Sony LIV)",
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
    title: "India's Account Aggregator Framework, Explained Like You're Not a Banker",
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
];
