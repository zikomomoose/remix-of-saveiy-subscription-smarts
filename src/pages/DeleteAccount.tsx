import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Trash2, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DeleteAccount = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="max-w-3xl mx-auto px-6 pt-24 pb-16">
      <Link to="/" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.1em] text-primary hover:text-primary/80 mb-8 transition-colors">
        <ArrowLeft size={14} /> Back
      </Link>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-2">Delete Your Saveiy Account</h1>
        <p className="text-sm text-muted-foreground mb-8">We respect your right to control your data.</p>

        <div className="prose prose-sm text-muted-foreground space-y-6 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-base [&_h3]:font-medium [&_h3]:text-foreground [&_h3]:mt-4 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">

          <h2>How to Request Account Deletion</h2>
          <p>Users can request account deletion by:</p>
          <ul>
            <li>Emailing <a href="mailto:support@saveiy.com" className="text-primary hover:underline">support@saveiy.com</a> from your registered email address</li>
            <li>Using the in-app account deletion option (if available in your app settings)</li>
          </ul>

          <h2>What Gets Deleted</h2>
          <p>Upon a verified deletion request, the following data is permanently removed from our systems:</p>
          <ul>
            <li>Account data (profile, preferences, settings)</li>
            <li>Email address and phone number</li>
            <li>Subscription data and billing history</li>
            <li>Linked third-party account connections (Google OAuth, etc.)</li>
          </ul>

          <h2>What May Be Retained</h2>
          <p>Certain information may be retained for compliance and legal purposes:</p>
          <ul>
            <li>Logs for compliance, security, and fraud prevention (anonymized where possible)</li>
            <li>Financial records required by applicable law or regulation</li>
          </ul>
          <p>Any retained data is stored securely and used solely for legal or regulatory compliance purposes.</p>

          <h2>Timeline</h2>
          <p>Deletion requests are typically processed within 30 days of verification. You will receive a confirmation once your account and associated data have been deleted.</p>

          <h2>Contact</h2>
          <p>If you have questions about account deletion, contact us at <a href="mailto:support@saveiy.com" className="text-primary hover:underline">support@saveiy.com</a>.</p>
        </div>
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default DeleteAccount;
