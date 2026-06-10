"use client";

import { useCart } from "@/lib/CartContext";
import { Product } from "@/data/products";
import { Button } from "./Button";
import { ShoppingCart } from "lucide-react";

interface PurchaseButtonProps {
  product: Product;
}

export function PurchaseButton({ product }: PurchaseButtonProps) {
  const { addToCart } = useCart();

  return (
    <Button
      onClick={() => addToCart(product)}
      size="lg"
      className="w-full flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(198,169,114,0.15)] hover:shadow-[0_4px_30px_rgba(198,169,114,0.3)] transition-all duration-300"
    >
      <ShoppingCart className="w-5 h-5" />
      <span>Complete Order — €{product.price}</span>
    </Button>
  );
}
