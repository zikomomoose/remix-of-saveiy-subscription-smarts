import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="max-w-3xl mx-auto px-6 pt-24 pb-16">
      <Link to="/" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.1em] text-primary hover:text-primary/80 mb-8 transition-colors">
        <ArrowLeft size={14} /> Back
      </Link>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: 15 March, 2026</p>

        <div className="prose prose-sm text-muted-foreground space-y-6 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-base [&_h3]:font-medium [&_h3]:text-foreground [&_h3]:mt-4 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">

          <h2>1. Introduction</h2>
          <p>Corewave Innovations Pvt. Ltd. ("Saveiy", "we", "our", or "us") provides a recurring payment intelligence platform that helps users detect, understand, and manage subscriptions and other recurring financial obligations.</p>
          <p>This Privacy Policy explains how we collect, use, store, and protect your personal data when you use our website and services.</p>
          <p>By using Saveiy, you consent to the practices described in this Policy.</p>

          <h2>2. Information We Collect</h2>
          <p>We collect only the information necessary to provide subscription and recurring payment intelligence services.</p>

          <h3>A. Account Information</h3>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Authentication credentials (via secure providers such as Google OAuth)</li>
          </ul>

          <h3>B. Google Account Information (If You Sign In with Google)</h3>
          <p>If you connect your Google account, Saveiy may request:</p>
          <ul>
            <li>Basic profile information (name, email)</li>
            <li>Read-only access to Gmail (if explicitly authorized)</li>
          </ul>
          <p>We request Gmail read-only access solely to detect subscription-related emails such as:</p>
          <ul>
            <li>Invoices</li>
            <li>Renewal confirmations</li>
            <li>Billing notifications</li>
            <li>Payment receipts</li>
          </ul>
          <p>We use filtered queries to limit processing to billing-related emails only.</p>
          <p>Saveiy:</p>
          <ul>
            <li>Does not send, modify, or delete emails</li>
            <li>Does not use Gmail data for advertising</li>
            <li>Does not sell Gmail data</li>
            <li>Does not use Gmail data to train generalized AI models</li>
          </ul>
          <p>Saveiy's use of information received from Google APIs adheres to the <strong>Google API Services User Data Policy</strong>, including Limited Use requirements.</p>
          <p>Users may revoke Google access at any time through Google Account permissions.</p>

          <h3>C. SMS-Based Signals (If Enabled)</h3>
          <p>With user permission, Saveiy may analyze SMS notifications to detect recurring payment alerts, billing confirmations, and renewal messages.</p>
          <p>We do not access personal conversations unrelated to billing signals.</p>

          <h3>D. Financial Data via Account Aggregator (If Enabled)</h3>
          <p>If you provide explicit consent through a regulated Account Aggregator (AA):</p>
          <ul>
            <li>Transaction metadata</li>
            <li>Recurring debit indicators</li>
            <li>Mandate details</li>
          </ul>
          <p>We do not collect bank login credentials. All financial data access occurs through regulated consent-based frameworks.</p>

          <h3>E. Technical Data</h3>
          <ul>
            <li>IP address</li>
            <li>Device information</li>
            <li>Log data</li>
            <li>Usage analytics</li>
          </ul>
          <p>This information helps us improve performance and security.</p>

          <h2>3. Purpose of Data Processing</h2>
          <p>We process personal data only for the following purposes:</p>
          <ul>
            <li>Detecting and modeling recurring payment behavior</li>
            <li>Predicting upcoming renewals</li>
            <li>Identifying duplicate or unused subscriptions</li>
            <li>Providing optimization insights</li>
            <li>Improving detection accuracy</li>
            <li>Ensuring security and preventing fraud</li>
            <li>Complying with legal and regulatory obligations</li>
          </ul>
          <p>We do not use personal data for targeted advertising.</p>

          <h2>4. Data Minimization and Limited Use</h2>
          <p>Saveiy follows strict data minimization principles:</p>
          <ul>
            <li>We collect only data necessary to provide subscription intelligence</li>
            <li>We store structured billing signals rather than entire email archives</li>
            <li>We do not sell or commercially exploit user data</li>
          </ul>
          <p>Google user data is used strictly to provide core functionality and in accordance with Google's Limited Use requirements.</p>

          <h2>5. Data Sharing</h2>
          <p>We may share information only:</p>
          <ul>
            <li>With infrastructure and hosting providers under confidentiality agreements</li>
            <li>With regulated financial partners where user consent is explicitly provided</li>
            <li>When required by law or legal process</li>
          </ul>
          <p>We do not sell personal data to third parties.</p>

          <h2>6. Data Retention</h2>
          <p>We retain personal data only as long as necessary to provide services or comply with legal obligations.</p>
          <p>Users may request deletion of their account and associated data. Upon verified request, personal data will be permanently deleted within 30 days unless retention is required by law.</p>

          <h2>7. User Rights (DPDP Act Compliance)</h2>
          <p>In accordance with India's Digital Personal Data Protection Act (DPDP), users have the right to:</p>
          <ul>
            <li>Access their personal data</li>
            <li>Correct inaccurate information</li>
            <li>Withdraw consent</li>
            <li>Request erasure of personal data</li>
          </ul>
          <p>Consent is explicit and purpose-specific. Users may withdraw consent at any time, including revoking Google OAuth or Account Aggregator permissions.</p>
          <p>To exercise these rights, contact: <a href="mailto:support@saveiy.com" className="text-primary hover:underline">support@saveiy.com</a></p>

          <h2>8. Data Security</h2>
          <p>We implement reasonable technical and organizational safeguards, including:</p>
          <ul>
            <li>Encryption in transit (HTTPS/TLS)</li>
            <li>Encrypted storage where applicable</li>
            <li>Access controls</li>
            <li>Audit logging</li>
          </ul>
          <p>While no system is completely secure, we continuously improve our safeguards.</p>

          <h2>9. Children's Privacy</h2>
          <p>Saveiy is not intended for individuals under 18 years of age. We do not knowingly collect data from minors.</p>

          <h2>10. Changes to This Policy</h2>
          <p>We may update this Privacy Policy periodically. Changes will be reflected by updating the "Last Updated" date above.</p>

          <h2>11. Contact Information</h2>
          <p>Corewave Innovations Pvt. Ltd.<br />
          Email: <a href="mailto:support@saveiy.com" className="text-primary hover:underline">support@saveiy.com</a><br />
          Website: <a href="https://www.saveiy.com" className="text-primary hover:underline">https://www.saveiy.com</a></p>
        </div>
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default Privacy;
