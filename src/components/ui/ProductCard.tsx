"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight, ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { Button } from "./Button";
import { Card } from "./Card";
import { useCart } from "@/lib/CartContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="flex flex-col h-full hover:border-champagne/45 transition-all group duration-500 bg-espresso/10 backdrop-blur-sm overflow-hidden border-white/5 relative">
      {/* Product Category Badge */}
      <div className="flex justify-between items-center p-6 pb-2 z-10">
        <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-champagne bg-champagne/10 px-3 py-1 rounded-sm border border-champagne/20">
          {product.category}
        </span>
        <div className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded border border-white/5">
          <Star className="w-3.5 h-3.5 fill-champagne text-champagne" />
          <span className="text-xs text-ivory font-bold">{product.rating}</span>
        </div>
      </div>

      {/* Upgraded eBook Cover/Mockup Box */}
      <div className="relative aspect-[16/11] w-full bg-gradient-to-br from-espresso/40 to-obsidian border-y border-white/5 flex items-center justify-center p-6 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-champagne/10 to-transparent pointer-events-none" />
        
        {/* Floating background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
        
        {/* 3D cover container with premium hover scaling and shadow depth */}
        <div className="relative w-[130px] aspect-[1/1.4] rounded-md overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.6),_0_0_20px_rgba(198,169,114,0.1)] transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.8),_0_0_30px_rgba(198,169,114,0.2)]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="130px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="font-serif text-2xl font-bold text-ivory mb-3 group-hover:text-champagne transition-colors leading-tight">
          {product.title}
        </h3>
        
        <p className="text-sm text-muted leading-relaxed mb-6 line-clamp-3 flex-1">
          {product.description}
        </p>

        {/* Action / Buy Details */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
          <div className="flex flex-col">
            <span className="text-[10px] text-muted uppercase tracking-wider font-semibold">Single License</span>
            <span className="text-3xl font-serif font-bold text-ivory">
              €{product.price}
            </span>
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto">
            <Link href={`/sales/${product.slug}`} className="w-full sm:w-auto">
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-1.5 hover:bg-white/5">
                <span>Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
            
            <Button
              onClick={() => addToCart(product)}
              variant="primary"
              size="sm"
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 shadow-[0_4px_20px_rgba(198,169,114,0.15)] hover:shadow-[0_4px_25px_rgba(198,169,114,0.3)]"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Add to Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

