import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";

export default function HeroSection() {
  const [leadForm, setLeadForm] = useState({
    contact_name: "",
    email: "",
    company_name: "",
    industry: "",
    website_url: "",
    social_media_links: "",
    lead_source: "website_hero"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const newLead = await base44.entities.Lead.create(leadForm);
      
      // Trigger automated follow-up email
      if (newLead && newLead.id) {
        try {
          await base44.functions.invoke('sendLeadFollowUp', { leadId: newLead.id });
        } catch (emailError) {
          console.error("Error sending follow-up email:", emailError);
          // Don't block the form submission if email fails
        }
      }
      
      setIsSubmitted(true);
      setLeadForm({
        contact_name: "",
        email: "",
        company_name: "",
        industry: "",
        website_url: "",
        social_media_links: "",
        lead_source: "website_hero"
      });
    } catch (error) {
      console.error("Error submitting lead:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-amber-500/10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(245,158,11,0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="flex items-center mb-6">
              <Sparkles className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-medium">Premium Enterprise Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Custom Solutions.
              <span className="text-gradient"> Global Impact.</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From our Chicago headquarters, we deliver world-class custom shoes, premium apparel, 
              and innovative branding solutions to enterprise clients across Tech, Sports, Lifestyle, and CPG industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="gradient-gold text-white hover:opacity-90 px-8 py-4 text-lg">
                View Our Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
              >
                Schedule Consultation
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Chicago HQ</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Global Activations</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Enterprise Ready</span>
              </div>
            </div>
          </motion.div>

          {/* Lead Capture Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 shadow-2xl"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Get Started Today
                  </h3>
                  <p className="text-gray-600">
                    Connect with our team for a personalized consultation
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      required
                      value={leadForm.contact_name}
                      onChange={(e) => setLeadForm({...leadForm, contact_name: e.target.value})}
                      placeholder="John Smith"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      value={leadForm.email}
                      onChange={(e) => setLeadForm({...leadForm, email: e.target.value})}
                      placeholder="john@company.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <Input
                    required
                    value={leadForm.company_name}
                    onChange={(e) => setLeadForm({...leadForm, company_name: e.target.value})}
                    placeholder="Your Company"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Industry
                  </label>
                  <Select 
                    value={leadForm.industry} 
                    onValueChange={(value) => setLeadForm({...leadForm, industry: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech_conferences">Tech Conferences</SelectItem>
                      <SelectItem value="sports">Sports & Athletics</SelectItem>
                      <SelectItem value="lifestyle">Lifestyle Brands</SelectItem>
                      <SelectItem value="cpg">Consumer Packaged Goods</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website URL
                  </label>
                  <Input
                    type="url"
                    value={leadForm.website_url}
                    onChange={(e) => setLeadForm({...leadForm, website_url: e.target.value})}
                    placeholder="https://yourcompany.com"
                    className="w-full"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Social Media Links <span className="text-gray-500 font-normal">(Optional)</span>
                  </label>
                  <Input
                    value={leadForm.social_media_links}
                    onChange={(e) => setLeadForm({...leadForm, social_media_links: e.target.value})}
                    placeholder="LinkedIn, Instagram, Twitter URLs (comma-separated)"
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-gold text-white py-3 text-lg hover:opacity-90"
                >
                  {isSubmitting ? "Submitting..." : "Get Free Consultation"}
                  {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to receive communications from Sole Much Better.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  We'll be in touch within 24 hours to discuss your project.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}