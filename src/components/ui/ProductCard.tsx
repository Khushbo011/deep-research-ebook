"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { Product } from "@/data/products";
import { Button } from "./Button";
import { Card } from "./Card";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full hover:border-champagne/40 transition-all group duration-300">
      {/* Product Category Badge */}
      <div className="flex justify-between items-start mb-6">
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-champagne bg-champagne/10 px-3 py-1 rounded-sm border border-champagne/20">
          {product.category}
        </span>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-champagne text-champagne" />
          <span className="text-xs text-ivory/80 font-bold">{product.rating}</span>
        </div>
      </div>

      {/* Book / Product Mockup Box */}
      <div className="relative aspect-[16/10] w-full rounded-sm bg-gradient-to-br from-espresso to-obsidian border border-white/5 flex items-center justify-center p-6 mb-6 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-champagne/5 to-transparent pointer-events-none" />
        {/* Simplified cover design inside grid */}
        <div className="w-[120px] aspect-[1/1.4] bg-[#0E0B08] border border-champagne/25 shadow-[10px_10px_20px_rgba(0,0,0,0.6)] rounded-sm flex flex-col justify-between p-3 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
          <div className="text-[8px] font-bold text-champagne/80 tracking-widest uppercase">AssetHub</div>
          <div className="font-serif text-[10px] sm:text-xs font-bold text-ivory/90 leading-tight">
            {product.title.split(":")[0]}
          </div>
          <div className="text-[7px] text-muted border-t border-champagne/20 pt-1">
            Executive Edition
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col">
        <h3 className="font-serif text-xl font-bold text-ivory mb-2 group-hover:text-champagne transition-colors line-clamp-2">
          {product.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-6 line-clamp-3 flex-1">
          {product.description}
        </p>

        {/* Action / Buy Details */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
          <span className="text-2xl font-serif font-bold text-ivory">
            ${product.price}
          </span>
          <div className="flex gap-2 w-full sm:w-auto">
            <Link href={`/sales/${product.slug}`} className="w-full">
              <Button variant="primary" size="sm" className="w-full">
                Buy Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
