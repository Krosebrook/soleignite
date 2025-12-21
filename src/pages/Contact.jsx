import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import ContactForm from "../components/contact/ContactForm";

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
          <ContactForm />
        </div>
      </section>
    </div>
  );
}