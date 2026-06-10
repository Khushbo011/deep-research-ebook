"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/CartContext";
import { products } from "@/data/products";

export function CTASection() {
  const { addToCart } = useCart();
  const product = products[0];

  return (
    <section className="py-32 bg-espresso relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6">
            <span className="gold-gradient-text uppercase tracking-[0.3em] text-sm font-bold">Immediate Access</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-ivory mb-8 leading-tight">
            Secure Your Competitive Advantage Today
          </h2>
          <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
            Join thousands of executives, researchers, and founders who rely on our intelligence to navigate the future.
          </p>

          <div className="flex flex-col items-center gap-6">
            <Button onClick={() => addToCart(product)} size="lg" className="w-full sm:w-auto px-12">
              Purchase Executive Report — €85
            </Button>
            <p className="text-sm text-muted/60 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Instant digital delivery. Secure SSL checkout.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

