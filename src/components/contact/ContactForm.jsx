import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Lead } from "@/entities/Lead";

export default function ContactForm() {
  const [contactForm, setContactForm] = useState({
    contact_name: "",
    email: "",
    phone: "",
    company_name: "",
    industry: "",
    project_type: "",
    budget_range: "",
    timeline: "",
    message: "",
    lead_source: "website_contact"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await Lead.create(contactForm);
      setIsSubmitted(true);
      setContactForm({
        contact_name: "",
        email: "",
        phone: "",
        company_name: "",
        industry: "",
        project_type: "",
        budget_range: "",
        timeline: "",
        message: "",
        lead_source: "website_contact"
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Chicago Headquarters",
      details: ["Downtown Chicago", "Global Reach Available"],
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone & Video Calls",
      details: ["Available 9AM - 6PM CT", "Emergency line available"],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email Response",
      details: ["hello@solemuchbetter.com", "24-hour response guarantee"],
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9AM - 6PM CT", "Weekend consultations available"],
      color: "text-amber-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Contact Form */}
      <div className="lg:col-span-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="glass-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">
                {!isSubmitted ? "Let's Start Your Project" : "Thank You!"}
              </CardTitle>
              <p className="text-gray-600">
                {!isSubmitted 
                  ? "Fill out the form below and we'll get back to you within 24 hours"
                  : "Your message has been received. We'll contact you soon!"
                }
              </p>
            </CardHeader>
            
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <Input
                        required
                        value={contactForm.contact_name}
                        onChange={(e) => setContactForm({...contactForm, contact_name: e.target.value})}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <Input
                        required
                        value={contactForm.company_name}
                        onChange={(e) => setContactForm({...contactForm, company_name: e.target.value})}
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Industry
                      </label>
                      <Select 
                        value={contactForm.industry} 
                        onValueChange={(value) => setContactForm({...contactForm, industry: value})}
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
                        Project Type
                      </label>
                      <Select 
                        value={contactForm.project_type} 
                        onValueChange={(value) => setContactForm({...contactForm, project_type: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="What do you need?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="custom_shoes">Custom Shoes</SelectItem>
                          <SelectItem value="apparel">Premium Apparel</SelectItem>
                          <SelectItem value="branding_solutions">Branding Solutions</SelectItem>
                          <SelectItem value="full_activation">Full Brand Activation</SelectItem>
                          <SelectItem value="consultation">Strategy Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <Select 
                        value={contactForm.budget_range} 
                        onValueChange={(value) => setContactForm({...contactForm, budget_range: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under_10k">Under $10k</SelectItem>
                          <SelectItem value="10k_25k">$10k - $25k</SelectItem>
                          <SelectItem value="25k_50k">$25k - $50k</SelectItem>
                          <SelectItem value="50k_100k">$50k - $100k</SelectItem>
                          <SelectItem value="100k_plus">$100k+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <Select 
                        value={contactForm.timeline} 
                        onValueChange={(value) => setContactForm({...contactForm, timeline: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Project timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1_month">Within 1 month</SelectItem>
                          <SelectItem value="3_months">Within 3 months</SelectItem>
                          <SelectItem value="6_months">Within 6 months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <Textarea
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      placeholder="Tell us more about your project, goals, and any specific requirements..."
                      className="h-32"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-gold text-white py-3 text-lg hover:opacity-90"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="w-5 h-5 ml-2" />}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    We'll review your project details and get back to you within 24 hours 
                    with next steps and a preliminary timeline.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Contact Information */}
      <div className="lg:col-span-1">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="glass-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gray-50 ${info.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          <Card className="glass-card">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Schedule a free 30-minute consultation to discuss your project requirements.
              </p>
              <Button className="w-full gradient-gold text-white hover:opacity-90">
                Book Consultation Call
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}