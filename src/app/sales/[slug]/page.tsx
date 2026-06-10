import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { PurchaseButton } from "@/components/ui/PurchaseButton";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
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
            <div className="relative w-full max-w-[360px] aspect-[1/1.4] bg-gradient-to-br from-espresso to-[#0a0806] border border-champagne/20 rounded-r-xl rounded-l-sm shadow-[0_20px_50px_rgba(198,169,114,0.15),_0_0_30px_rgba(0,0,0,0.8)] overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
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
                  <span className="text-4xl font-serif font-bold text-ivory">€{product.price}</span>
                </div>
                <div className="w-full sm:w-auto">
                  <PurchaseButton product={product} />
                </div>
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

