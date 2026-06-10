import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import Link from "next/link";
import { ShieldCheck, Download, Award, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Premium Store Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#120e0a] to-obsidian">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-champagne/5 rounded-full blur-[120px] opacity-40" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-champagne/20 bg-champagne/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-champagne" />
            <span className="text-[10px] font-bold text-champagne uppercase tracking-widest">
              Exclusive Digital Vault
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-ivory leading-tight mb-6">
            Elite Assets for <span className="gold-gradient-text">Executive Minds</span>
          </h1>

          <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            Acquire industry-defining research, expert guides, and technical tools compiled by top-tier consultants and systems architects.
          </p>

          <div className="flex justify-center gap-4">
            <Link href="#products">
              <Button size="lg">Explore Collection</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-espresso border-y border-border-gold">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <ShieldCheck className="w-5 h-5 text-champagne" />
              <span className="text-xs tracking-wider uppercase font-semibold text-ivory/80">Secured Payments</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Download className="w-5 h-5 text-champagne" />
              <span className="text-xs tracking-wider uppercase font-semibold text-ivory/80">Instant Download</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Award className="w-5 h-5 text-champagne" />
              <span className="text-xs tracking-wider uppercase font-semibold text-ivory/80">Premium Quality</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-5 h-5 text-champagne" />
              <span className="text-xs tracking-wider uppercase font-semibold text-ivory/80">Lifetime Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Product Grid */}
      <section className="py-24 bg-obsidian" id="products">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-champagne font-bold block mb-3">
                Curated Collections
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-ivory">
                Featured Assets
              </h2>
            </div>
            <p className="text-muted max-w-md mt-4 md:mt-0 leading-relaxed">
              Explore our premium products. Invest once to elevate your team, accelerate implementation, or secure critical industry intelligence.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Call to Action */}
      <CTASection />
    </div>
  );
}

