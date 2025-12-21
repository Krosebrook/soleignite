import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Footprints, 
  Shirt, 
  Palette, 
  ArrowRight,
  Zap,
  Sparkles
} from "lucide-react";

const services = [
  {
    icon: Footprints,
    title: "Custom Shoes",
    description: "Precision-crafted footwear tailored to your brand specifications and comfort requirements.",
    features: [
      "Premium material selection",
      "Custom colorways & designs", 
      "Brand logo integration",
      "Comfort technology options"
    ],
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop&crop=center",
    badge: "Most Popular"
  },
  {
    icon: Shirt,
    title: "Premium Apparel",
    description: "High-quality custom clothing that represents your brand with sophistication and style.",
    features: [
      "Sustainable fabric options",
      "Custom embroidery & printing",
      "Size-inclusive ranges",
      "Performance materials"
    ],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop&crop=center",
    badge: "Eco-Friendly"
  },
  {
    icon: Palette,
    title: "Branding Solutions",
    description: "Comprehensive brand identity services that create cohesive, memorable customer experiences.",
    features: [
      "Brand strategy development",
      "Visual identity design",
      "Product packaging",
      "Marketing collateral"
    ],
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop&crop=center",
    badge: "Full Service"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-amber-500 mr-2" />
            <span className="text-amber-600 font-medium uppercase tracking-wider text-sm">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            World-Class Solutions for
            <span className="text-gradient"> Enterprise Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to delivery, we partner with you to create exceptional custom products 
            that elevate your brand and engage your audience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card hover:shadow-2xl transition-all duration-500 group cursor-pointer h-full overflow-hidden">
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-amber-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                        {service.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-amber-500" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <Sparkles className="w-4 h-4 text-amber-400 mr-3 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white group-hover:bg-amber-500 transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Process
            </h3>
            <p className="text-gray-600 text-lg">
              A streamlined approach that ensures exceptional results every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision and requirements" },
              { step: "02", title: "Design", desc: "Creating custom concepts and prototypes" },
              { step: "03", title: "Production", desc: "Premium manufacturing with quality control" },
              { step: "04", title: "Delivery", desc: "Global fulfillment and ongoing support" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}