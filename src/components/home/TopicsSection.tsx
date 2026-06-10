"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

export function TopicsSection() {
  const topics = [
    {
      chapter: "01",
      title: "The Intelligence Evolution",
      description: "Tracing the path from rule-based automation to adaptive, learning systems capable of zero-shot execution."
    },
    {
      chapter: "02",
      title: "Sensory & Perception Layers",
      description: "Deep dive into LiDAR, advanced computer vision, and multi-modal sensor fusion in extreme environments."
    },
    {
      chapter: "03",
      title: "Fleet Synchronization",
      description: "Swarm intelligence and distributed decision making for enterprise-scale autonomous operations."
    },
    {
      chapter: "04",
      title: "The Edge Compute Revolution",
      description: "Why the future of robotics relies on edge processing over cloud dependency for critical response times."
    }
  ];

  return (
    <section className="py-24 bg-obsidian relative border-t border-border-gold" id="topics">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-ivory mb-6 leading-tight">
                Inside the <br className="hidden lg:block"/> Report
              </h2>
              <p className="text-lg text-muted mb-8">
                Over 200 pages of rigorous analysis, proprietary data, and exclusive interviews with industry pioneers.
              </p>
              <div className="h-[1px] w-full bg-gradient-to-r from-champagne/50 to-transparent mb-8" />
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border border-champagne/20 flex items-center justify-center font-serif text-2xl text-champagne">
                  20+
                </div>
                <div className="text-sm">
                  <p className="text-ivory font-bold">Case Studies</p>
                  <p className="text-muted">Real-world applications</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="grid gap-6">
              {topics.map((topic, index) => (
                <Card key={index} className="group !bg-espresso/30 hover:!bg-espresso/80 p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="text-4xl font-serif font-light text-champagne/50 group-hover:text-champagne transition-colors">
                      {topic.chapter}
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-ivory mb-3">{topic.title}</h3>
                      <p className="text-muted leading-relaxed text-lg">{topic.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
