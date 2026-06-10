"use client";

import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { CheckCircle2, Download, ShieldCheck, Mail, ArrowRight, ExternalLink } from "lucide-react";
import { Suspense } from "react";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product") || "1"; // Default to first product if none specified
  const product = products.find((p) => p.id === productId) || products[0];

  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-24 flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-2xl">
        <Card hoverEffect={false} className="text-center p-10 md:p-12 border-border-gold relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-champagne/10 rounded-full blur-[40px] -z-10" />

          {/* Success Icon */}
          <div className="w-20 h-20 rounded-full bg-champagne/10 border border-champagne/30 flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-champagne" />
          </div>

          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-champagne block mb-3">
            Transaction Complete
          </span>
          
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-6">
            Thank You for Your Acquisition
          </h1>
          
          <p className="text-muted leading-relaxed mb-10 max-w-md mx-auto">
            Your purchase was processed securely. You now have lifetime access to the executive digital publication below.
          </p>

          {/* Purchased Product Preview */}
          <div className="bg-espresso/40 border border-white/5 rounded-lg p-6 mb-10 text-left flex items-center justify-between gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-champagne font-bold block mb-1">
                {product.category}
              </span>
              <h3 className="font-serif text-lg font-bold text-ivory line-clamp-1">
                {product.title}
              </h3>
              <p className="text-xs text-muted/80 mt-1">Order Ref: AH-{Math.floor(Math.random() * 90000) + 10000}</p>
            </div>
            <a 
              href={product.downloadLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="shrink-0"
            >
              <Button size="sm" variant="outline" className="flex items-center gap-2">
                <span>Download</span>
                <Download className="w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* Detailed Instructions */}
          <div className="text-left border-t border-white/5 pt-8 mb-10">
            <h4 className="text-ivory font-serif font-bold mb-4">Access Instructions</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne mt-2 shrink-0" />
                <span>Click the <strong>Download</strong> button above to access the secure file folder.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne mt-2 shrink-0" />
                <span>A backup copy of your download link and transaction details has been sent to your billing email address.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne mt-2 shrink-0" />
                <span>If you require multiple licenses or customized enterprise setups, contact our corporate support.</span>
              </li>
            </ul>
          </div>

          {/* Support and Back */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-6 border-t border-white/5 text-xs text-muted">
            <a href="mailto:support@assethub.io" className="flex items-center gap-1.5 hover:text-champagne transition-colors">
              <Mail className="w-3.5 h-3.5" /> support@assethub.io
            </a>
            <Link href="/" className="flex items-center gap-1 hover:text-champagne transition-colors font-bold">
              <span>Return to Store</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="bg-obsidian min-h-screen pt-32 flex items-center justify-center text-ivory">
        Loading confirmation...
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
