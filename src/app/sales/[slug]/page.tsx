import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { Star, ShieldCheck, CheckCircle2, ChevronLeft, Lock } from "lucide-react";

interface SalesPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function SalesPage({ params }: SalesPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-champagne transition-colors mb-12 text-sm"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to collection</span>
        </Link>

        {/* Hero Area */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
          {/* Cover Mockup - Left (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center sticky top-32">
            <div className="relative w-full max-w-[360px] aspect-[1/1.4] bg-gradient-to-br from-[#1b1510] to-[#0c0907] border border-champagne/30 rounded-r-xl rounded-l-sm shadow-[0_20px_50px_rgba(198,169,114,0.15),_0_0_30px_rgba(0,0,0,0.8)] p-8 sm:p-10 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 mix-blend-overlay"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-champagne/10 blur-[50px] rounded-full"></div>
              
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] tracking-[0.3em] font-bold text-champagne uppercase">AssetHub</span>
                <span className="text-[9px] uppercase tracking-wider text-muted font-bold px-2 py-0.5 border border-white/10 rounded-full bg-white/5">
                  Secure PDF
                </span>
              </div>

              <div className="relative z-10 my-auto py-8">
                <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-champagne to-soft-gold flex items-center justify-center text-obsidian font-serif font-bold text-xl mb-6">
                  {product.title.charAt(0)}
                </div>
                <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-ivory leading-tight">
                  {product.title}
                </h1>
              </div>

              <div className="relative z-10 border-t border-champagne/20 pt-6">
                <p className="text-champagne text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">
                  {product.category}
                </p>
                <p className="text-muted/60 text-[10px]">Lifetime Access License</p>
              </div>
            </div>
          </div>

          {/* Details - Right (7 Cols) */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.3em] text-champagne font-bold block mb-4">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ivory mb-6 leading-tight">
              {product.title}
            </h1>

            {/* Rating & Trust */}
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="flex text-champagne">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-champagne" />
                  ))}
                </div>
                <span className="text-sm text-ivory font-bold">{product.rating}</span>
                <span className="text-xs text-muted">(180+ reviews)</span>
              </div>
              <div className="h-4 w-[1px] bg-white/10" />
              <div className="flex items-center gap-2 text-xs text-muted">
                <ShieldCheck className="w-4 h-4 text-champagne" />
                <span>Verified Publication</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-muted leading-relaxed mb-10">
              {product.longDescription}
            </p>

            {/* Price & Purchase CTA */}
            <Card className="!bg-espresso/30 p-8 mb-12 border-border-gold">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted block mb-1">Price</span>
                  <span className="text-4xl font-serif font-bold text-ivory">${product.price} USD</span>
                </div>
                <Link href={`/thank-you?product=${product.id}`} className="w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    Complete Order
                  </Button>
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-4 text-xs text-muted">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-champagne" /> Encrypted Checkout
                </span>
                <span>&bull;</span>
                <span>Instant Download Access</span>
                <span>&bull;</span>
                <span>100% Secure Transaction</span>
              </div>
            </Card>

            {/* Benefits List */}
            <div className="mb-16">
              <h2 className="text-2xl font-serif font-bold text-ivory mb-8">What You Will Discover</h2>
              <div className="grid gap-6">
                {product.benefits.map((benefit, index) => {
                  const [title, desc] = benefit.split(": ");
                  return (
                    <div key={index} className="flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-champagne shrink-0 mt-1" />
                      <div>
                        <h3 className="text-ivory font-semibold mb-1">{title}</h3>
                        {desc && <p className="text-muted text-sm leading-relaxed">{desc}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Features (What is included) */}
            <div className="mb-16">
              <h2 className="text-2xl font-serif font-bold text-ivory mb-6">Features & Deliverables</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-ivory mb-8">Frequently Asked Questions</h2>
              <div className="grid gap-6">
                {product.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-white/5 pb-6">
                    <h3 className="text-ivory font-serif font-bold mb-3">{faq.question}</h3>
                    <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
