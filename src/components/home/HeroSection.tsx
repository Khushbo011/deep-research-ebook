"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useCart } from "@/lib/CartContext";
import { products } from "@/data/products";

export function HeroSection() {
  const { addToCart } = useCart();
  const product = products[0];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-champagne/10 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-champagne/30 bg-champagne/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-champagne shadow-[0_0_8px_rgba(198,169,114,0.8)] animate-pulse" />
            <span className="text-sm font-medium text-champagne uppercase tracking-wider">Premium Research Publication</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-ivory leading-tight mb-6">
            The Definitive Guide to <span className="gold-gradient-text">Autonomous Robots</span> & Smart Systems
          </h1>

          <p className="text-lg md:text-xl text-muted mb-10 leading-relaxed max-w-xl">
            Explore the technologies, architectures, market trends, and innovations shaping the future of intelligent automation. An exclusive €85 executive report.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => addToCart(product)} size="lg" className="sm:w-auto">
              Access Full Report — €85
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("products");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              variant="outline"
              className="sm:w-auto"
            >
              Learn More
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-obsidian bg-espresso flex items-center justify-center text-xs font-bold text-champagne z-[{5-i}]">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-champagne mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-muted"><span className="text-ivory font-bold">500+</span> Industry Leaders</p>
            </div>
          </div>
        </motion.div>

        {/* Book Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative lg:h-[600px] flex justify-center lg:justify-end items-center"
        >
          {/* Main Book using Premium generated Image */}
          <div className="relative w-[300px] sm:w-[380px] aspect-[1/1.4] rounded-r-xl rounded-l-sm bg-gradient-to-br from-espresso to-[#0a0806] border border-champagne/20 shadow-[20px_20px_60px_rgba(0,0,0,0.8),_0_0_40px_rgba(198,169,114,0.15)] transform rotate-y-[-15deg] rotate-x-[5deg] group hover:scale-105 transition-all duration-700 overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Subtle floating elements behind book */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-24 h-24 bg-espresso border border-champagne/20 rounded-lg glass p-4 shadow-xl -z-10"
          >
            <div className="w-full h-2 bg-champagne/20 rounded-full mb-3" />
            <div className="w-3/4 h-2 bg-champagne/20 rounded-full mb-3" />
            <div className="w-1/2 h-2 bg-champagne/20 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

