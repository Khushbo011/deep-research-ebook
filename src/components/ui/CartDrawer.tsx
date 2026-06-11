"use client";

import { useCart } from "@/lib/CartContext";
import { X, Trash2, Minus, Plus, ShoppingBag, ArrowRight, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

export function CartDrawer() {
  const { cartItems, isOpen, closeCart, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-obsidian/95 border-l border-border-gold shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-xl flex flex-col"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-champagne" />
                <h2 className="font-serif text-xl font-bold text-ivory">Your Cart</h2>
              </div>
              <button
                onClick={closeCart}
                className="p-1 rounded-full text-muted hover:text-champagne hover:bg-white/5 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-muted mb-4 border border-white/10">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <p className="text-muted text-sm mb-6">Your cart is empty.</p>
                  <Button onClick={closeCart} variant="outline" size="sm">
                    Continue Browsing
                  </Button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-4 rounded-lg bg-espresso/30 border border-white/5 hover:border-champagne/20 transition-colors"
                  >
                    {/* Product Image Upgrade Showcase */}
                    <div className="relative w-20 h-24 bg-gradient-to-br from-[#1b1510] to-[#0c0907] border border-champagne/20 rounded-md overflow-hidden shrink-0 flex items-center justify-center">
                      <Image
                        src={item.product.image}
                        alt={item.product.title}
                        fill
                        sizes="80px"
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-sm font-bold text-ivory line-clamp-2 leading-snug">
                          {item.product.title}
                        </h3>
                        <p className="text-xs text-champagne/80 mt-1 uppercase tracking-wider">
                          {item.product.category}
                        </p>
                      </div>

                      {/* Quantity & Price Row */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1 bg-black/40 border border-white/5 rounded px-1.5 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-0.5 text-muted hover:text-champagne transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-ivory w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-0.5 text-muted hover:text-champagne transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-serif font-bold text-ivory">
                            €{item.product.price * item.quantity}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-muted/60 hover:text-red-400 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-white/5 bg-espresso/20 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Subtotal</span>
                  <span className="text-xl font-serif font-bold text-ivory">€{cartTotal}</span>
                </div>
                
                {/* Checkout Preview / Guarantee Badge */}
                <div className="p-3 bg-black/40 border border-white/5 rounded-md flex items-center gap-3">
                  <Lock className="w-4 h-4 text-champagne shrink-0" />
                  <div className="text-[10px] text-muted leading-tight">
                    <span className="text-ivory font-semibold block">Secured checkout preview</span>
                    100% encrypted & instant delivery
                  </div>
                </div>

                <Link
                  href={`/thank-you?product=${cartItems.map(item => item.product.id).join(',')}`}
                  onClick={() => { clearCart(); closeCart(); }}
                  className="block w-full"
                >
                  <Button className="w-full flex items-center justify-center gap-2 group">
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
