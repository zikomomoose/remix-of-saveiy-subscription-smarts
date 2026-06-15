import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Terms of Service | Saveiy</title>
      <meta name="description" content="The terms governing your use of Saveiy's subscription intelligence platform." />
      <link rel="canonical" href="https://saveiy.com/terms" />
      <meta property="og:title" content="Terms of Service | Saveiy" />
      <meta property="og:url" content="https://saveiy.com/terms" />
    </Helmet>
    <Navbar />

    <div className="max-w-3xl mx-auto px-6 pt-24 pb-16">
      <Link to="/" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.1em] text-primary hover:text-primary/80 mb-8 transition-colors">
        <ArrowLeft size={14} /> Back
      </Link>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: 15 March, 2026</p>

        <div className="prose prose-sm text-muted-foreground space-y-6 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">

          <h2>1. Acceptance of Terms</h2>
          <p>These Terms of Service ("Terms") govern your access to and use of Saveiy's website, applications, and services (collectively, the "Service").</p>
          <p>By accessing or using Saveiy, you agree to be bound by these Terms. If you do not agree, you must not use the Service.</p>

          <h2>2. Description of Service</h2>
          <p>Saveiy provides a recurring payment intelligence platform that helps users detect, monitor, and optimize subscriptions and other recurring financial obligations.</p>
          <p>Saveiy:</p>
          <ul>
            <li>Detects recurring billing signals from authorized data sources</li>
            <li>Provides renewal predictions and alerts</li>
            <li>Surfaces potential optimization insights</li>
          </ul>
          <p>Saveiy does not:</p>
          <ul>
            <li>Provide financial advice</li>
            <li>Act as a lender, broker, or financial institution</li>
            <li>Execute transactions on your behalf</li>
            <li>Cancel subscriptions without user action (unless explicitly stated in product functionality)</li>
          </ul>
          <p>All insights are informational in nature.</p>

          <h2>3. Eligibility</h2>
          <p>You must be at least 18 years old to use the Service.</p>
          <p>By using Saveiy, you represent that:</p>
          <ul>
            <li>The information you provide is accurate</li>
            <li>You have authority to grant data access permissions</li>
            <li>You are legally capable of entering into this agreement</li>
          </ul>

          <h2>4. Account Registration & Security</h2>
          <p>You may create an account using email or third-party authentication (e.g., Google OAuth).</p>
          <p>You are responsible for:</p>
          <ul>
            <li>Maintaining confidentiality of your account credentials</li>
            <li>All activities occurring under your account</li>
          </ul>
          <p>You must notify us immediately of unauthorized use.</p>

          <h2>5. Data Access & Consent</h2>
          <p>By connecting external accounts (including Gmail or Account Aggregator integrations), you grant Saveiy permission to access relevant data solely for providing subscription and recurring payment intelligence.</p>
          <p>Saveiy:</p>
          <ul>
            <li>Uses data strictly for the purpose described in the Privacy Policy</li>
            <li>Does not sell personal data</li>
            <li>Complies with Google API Services User Data Policy and Limited Use requirements</li>
            <li>Operates under consent-driven frameworks</li>
          </ul>
          <p>You may revoke access at any time.</p>

          <h2>6. No Financial Advice</h2>
          <p>Saveiy provides informational insights only.</p>
          <p>We do not:</p>
          <ul>
            <li>Guarantee savings</li>
            <li>Guarantee accuracy of predictions</li>
            <li>Provide tax, investment, or legal advice</li>
          </ul>
          <p>Users remain solely responsible for financial decisions and transactions.</p>

          <h2>7. Third-Party Services</h2>
          <p>Saveiy integrates with third-party services such as:</p>
          <ul>
            <li>Google</li>
            <li>Account Aggregator infrastructure</li>
            <li>Financial institutions</li>
          </ul>
          <p>We are not responsible for:</p>
          <ul>
            <li>Availability of third-party services</li>
            <li>Data accuracy provided by third parties</li>
            <li>Actions taken by third-party platforms</li>
          </ul>
          <p>Your use of third-party services is subject to their respective terms.</p>

          <h2>8. Intellectual Property</h2>
          <p>All content, software, algorithms, and technology within Saveiy are owned by Corewave Innovations Pvt. Ltd. or its licensors.</p>
          <p>You may not:</p>
          <ul>
            <li>Reverse engineer</li>
            <li>Copy</li>
            <li>Modify</li>
            <li>Distribute</li>
            <li>Exploit the Service</li>
          </ul>
          <p>Without prior written consent.</p>

          <h2>9. Prohibited Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for unlawful purposes</li>
            <li>Attempt to bypass security mechanisms</li>
            <li>Interfere with system integrity</li>
            <li>Use automated systems to access the Service without authorization</li>
          </ul>

          <h2>10. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law:</p>
          <p>Saveiy shall not be liable for:</p>
          <ul>
            <li>Financial losses resulting from subscription renewals</li>
            <li>Missed alerts</li>
            <li>Incorrect predictions</li>
            <li>Indirect, incidental, or consequential damages</li>
          </ul>
          <p>The Service is provided "as is" without warranties of any kind.</p>

          <h2>11. Termination</h2>
          <p>We may suspend or terminate access if:</p>
          <ul>
            <li>You violate these Terms</li>
            <li>Your use poses risk to the platform</li>
            <li>Required by law</li>
          </ul>
          <p>You may terminate your account at any time by requesting deletion.</p>

          <h2>12. Data Protection & User Rights</h2>
          <p>Your use of the Service is governed by our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.</p>
          <p>In accordance with applicable data protection laws, including India's Digital Personal Data Protection Act (DPDP):</p>
          <ul>
            <li>You may withdraw consent</li>
            <li>You may request data correction</li>
            <li>You may request erasure of personal data</li>
          </ul>

          <h2>13. Modifications to Terms</h2>
          <p>We may update these Terms periodically. Continued use after updates constitutes acceptance of revised Terms.</p>

          <h2>14. Governing Law</h2>
          <p>These Terms shall be governed by the laws of India.</p>
          <p>Any disputes shall be subject to the jurisdiction of courts located in Rajasthan, India.</p>

          <h2>15. Contact Information</h2>
          <p>Corewave Innovations Pvt. Ltd.<br />
          Email: <a href="mailto:support@saveiy.com" className="text-primary hover:underline">support@saveiy.com</a><br />
          Website: <a href="https://www.saveiy.com" className="text-primary hover:underline">https://www.saveiy.com</a></p>
        </div>
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default Terms;
