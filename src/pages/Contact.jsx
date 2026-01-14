import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

/**
 * Safe code splitting: Lazy load ContactForm (365 lines)
 * Reduces initial bundle for Contact page
 */
const ContactForm = lazy(() => import("../components/contact/ContactForm"));

const FormFallback = () => (
  <div className="py-20 flex items-center justify-center" role="status" aria-label="Loading" aria-live="polite">
    <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
  </div>
);

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="gradient-hero py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-amber-400 mr-2" />
              <span className="text-amber-400 font-medium uppercase tracking-wider text-sm">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's Bring Your Vision
              <span className="text-gradient"> to Life</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to create something extraordinary? Our Chicago-based team is here to help 
              you develop premium custom solutions that make a lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<FormFallback />}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}