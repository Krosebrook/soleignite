import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Laptop, 
  Trophy, 
  Sparkles, 
  ShoppingBag,
  TrendingUp,
  Target
} from "lucide-react";

const industries = [
  {
    icon: Laptop,
    title: "Tech Conferences",
    description: "Custom sneakers and branded apparel for tech events, product launches, and corporate activations.",
    features: ["Custom kicks for dev teams", "Event merchandise", "Branded swag suites"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    stats: "500+ Events"
  },
  {
    icon: Trophy,
    title: "Sports & Athletics",
    description: "Performance-driven custom footwear and athletic apparel for teams, leagues, and sporting events.",
    features: ["Team custom shoes", "Athletic merchandise", "Championship gear"],
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-50",
    stats: "200+ Teams"
  },
  {
    icon: Sparkles,
    title: "Lifestyle Brands",
    description: "Elevated custom products that reflect brand identity and create memorable customer experiences.",
    features: ["Brand collaborations", "Limited editions", "Influencer packages"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    stats: "150+ Brands"
  },
  {
    icon: ShoppingBag,
    title: "CPG Companies",
    description: "Strategic branded merchandise and promotional products that drive consumer engagement.",
    features: ["Product launches", "Retail partnerships", "Consumer activations"],
    color: "from-green-500 to-teal-500",
    bgColor: "bg-green-50",
    stats: "100+ Launches"
  }
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-amber-500 mr-2" />
            <span className="text-amber-600 font-medium uppercase tracking-wider text-sm">
              Industries We Serve
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tailored Solutions for Every
            <span className="text-gradient"> Industry</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From Silicon Valley startups to Fortune 500 enterprises, we deliver premium custom solutions 
            that align with your brand goals and industry requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card hover:shadow-2xl transition-all duration-500 group cursor-pointer h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-2xl ${industry.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-8 h-8 bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`} style={{
                          background: `linear-gradient(135deg, ${industry.color.split(' ')[1]}, ${industry.color.split(' ')[3]})`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">
                            {industry.title}
                          </h3>
                          <span className="text-sm font-medium text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                            {industry.stats}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {industry.description}
                        </p>
                        <div className="space-y-2">
                          {industry.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">
                          Learn More
                        </span>
                        <div className="flex items-center text-amber-600 group-hover:translate-x-1 transition-transform duration-300">
                          <span className="text-sm font-medium mr-1">Explore</span>
                          <TrendingUp className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">950+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Fortune 500 Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">25+</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">99%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}