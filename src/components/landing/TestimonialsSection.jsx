import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Marketing",
    company: "TechFlow Conference",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b820?w=100&h=100&fit=crop&crop=face",
    content: "Sole Much Better delivered 2,000 custom sneakers for our annual conference. The quality was exceptional and our attendees loved them. The team was professional throughout the entire process.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Brand Director", 
    company: "Athletic Performance Co.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Working with Sole Much Better transformed our brand activation strategy. Their custom apparel and branding solutions helped us stand out at major sporting events across three continents.",
    rating: 5
  },
  {
    name: "Jennifer Kim",
    role: "Creative Director",
    company: "Lifestyle Brands Inc.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "The attention to detail and premium quality of their custom products exceeded our expectations. Our limited edition collaboration sold out in hours thanks to their exceptional craftsmanship.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Quote className="w-6 h-6 text-amber-500 mr-2" />
            <span className="text-amber-600 font-medium uppercase tracking-wider text-sm">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry
            <span className="text-gradient"> Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our enterprise clients say about 
            working with Sole Much Better.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-amber-600 font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}