"use client";

import { Product } from "@/data/products";
import { Button } from "./Button";
import { useRouter } from "next/navigation";
import { Zap } from "lucide-react";

interface PurchaseButtonProps {
  product: Product;
}

export function PurchaseButton({ product }: PurchaseButtonProps) {
  const router = useRouter();

  const handlePurchase = () => {
    router.push(`/thank-you?product=${product.id}`);
  };

  return (
    <Button
      onClick={handlePurchase}
      size="lg"
      className="w-full flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(198,169,114,0.15)] hover:shadow-[0_4px_30px_rgba(198,169,114,0.3)] transition-all duration-300"
    >
      <Zap className="w-5 h-5" />
      <span>Complete Order — €{product.price}</span>
    </Button>
  );
}
