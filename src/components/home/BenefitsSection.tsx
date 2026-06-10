"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Cpu, Globe, TrendingUp, Zap } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Cpu className="w-6 h-6 text-champagne" />,
      title: "Architecture & Systems",
      description: "Deep dive into the neural architectures and physical systems powering the next generation of robotics."
    },
    {
      icon: <Globe className="w-6 h-6 text-champagne" />,
      title: "Global Market Impact",
      description: "Analyze how intelligent automation is disrupting supply chains, manufacturing, and global economics."
    },
    {
      icon: <Zap className="w-6 h-6 text-champagne" />,
      title: "Emerging Capabilities",
      description: "Understand the leap from automated to autonomous decision-making in unpredictable environments."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-champagne" />,
      title: "Investment Opportunities",
      description: "Identify high-growth sectors and key players dominating the smart systems landscape."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0806] relative" id="overview">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-ivory mb-6">
            Why This Research Matters
          </h2>
          <p className="text-lg text-muted">
            The robotics industry is undergoing a paradigm shift. This report distills complex technological advancements into actionable intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} delay={index * 0.1} className="h-full">
              <div className="w-12 h-12 rounded-full bg-champagne/10 flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-ivory mb-3">{benefit.title}</h3>
              <p className="text-muted leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
