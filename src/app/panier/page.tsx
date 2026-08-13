"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";
import { getProductBySlug } from "@/data/products";

export default function PanierPage() {
  const { items, updateQuantity, removeItem, clearCart, totalPrice, isReady } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isReady) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center text-sakura-900/50 sm:px-6">
        Préparation de votre panier fleuri…
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <p className="text-5xl">🌸</p>
        <h1 className="font-heading mt-4 text-3xl font-bold text-sakura-900">
          Merci infiniment !
        </h1>
        <p className="mt-3 text-sakura-900/70">
          Votre commande a été enregistrée avec succès. Elle sera préparée avec tout notre
          soin et vous apportera, on l&apos;espère, un peu de douceur et de bonne humeur.
        </p>
        <Link
          href="/boutique"
          className="font-heading mt-8 inline-block rounded-full bg-sakura-500 px-6 py-3 font-semibold text-white hover:bg-sakura-600"
        >
          Continuer mes emplettes
        </Link>
      </div>
    );
  }

  const shipping = totalPrice >= 40 || totalPrice === 0 ? 0 : 4.9;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-3xl font-bold text-sakura-900">Mon panier</h1>

      {items.length === 0 ? (
        <div className="mt-12 text-center">
          <p className="text-5xl">🌸</p>
          <p className="mt-4 text-sakura-900/70">
            Votre panier est encore vide, comme un jardin qui attend le printemps.
          </p>
          <Link
            href="/boutique"
            className="font-heading mt-6 inline-block rounded-full bg-sakura-500 px-6 py-3 font-semibold text-white hover:bg-sakura-600"
          >
            Découvrir la boutique
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_320px]">
          <ul className="flex flex-col gap-4">
            {items.map((item) => {
              const product = getProductBySlug(item.slug);
              if (!product) return null;
              return (
                <li
                  key={item.slug}
                  className="flex items-center gap-4 rounded-2xl border border-sakura-100 bg-white p-4"
                >
                  <Link
                    href={`/boutique/${product.slug}`}
                    className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sakura-100 to-white text-3xl"
                  >
                    <span aria-hidden="true">{product.emoji}</span>
                  </Link>
                  <div className="flex-1">
                    <Link
                      href={`/boutique/${product.slug}`}
                      className="font-heading font-semibold text-sakura-900 hover:text-sakura-600"
                    >
                      {product.name}
                    </Link>
                    <p className="text-sm text-sakura-900/60">{formatPrice(product.price)}</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-sakura-200 px-2 py-1">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                      className="flex h-7 w-7 items-center justify-center rounded-full text-sakura-600 hover:bg-sakura-50"
                      aria-label={`Diminuer la quantité de ${product.name}`}
                    >
                      −
                    </button>
                    <span className="w-5 text-center text-sm font-semibold text-sakura-900">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                      className="flex h-7 w-7 items-center justify-center rounded-full text-sakura-600 hover:bg-sakura-50"
                      aria-label={`Augmenter la quantité de ${product.name}`}
                    >
                      +
                    </button>
                  </div>
                  <p className="w-20 text-right font-heading font-semibold text-sakura-700">
                    {formatPrice(product.price * item.quantity)}
                  </p>
                  <button
                    type="button"
                    onClick={() => removeItem(item.slug)}
                    className="text-sakura-400 hover:text-sakura-600"
                    aria-label={`Retirer ${product.name} du panier`}
                  >
                    ✕
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="h-fit rounded-2xl border border-sakura-100 bg-sakura-50/60 p-6">
            <h2 className="font-heading text-lg font-bold text-sakura-900">Récapitulatif</h2>
            <div className="mt-4 flex justify-between text-sm text-sakura-900/70">
              <span>Sous-total</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className="mt-2 flex justify-between text-sm text-sakura-900/70">
              <span>Livraison</span>
              <span>{shipping === 0 ? "Offerte 🌸" : formatPrice(shipping)}</span>
            </div>
            {shipping > 0 && (
              <p className="mt-2 text-xs text-sakura-600">
                Plus que {formatPrice(40 - totalPrice)} pour la livraison offerte !
              </p>
            )}
            <div className="mt-4 flex justify-between border-t border-sakura-200 pt-4 font-heading text-lg font-bold text-sakura-900">
              <span>Total</span>
              <span>{formatPrice(totalPrice + shipping)}</span>
            </div>
            <button
              type="button"
              onClick={() => {
                setOrderPlaced(true);
                clearCart();
              }}
              className="font-heading mt-6 w-full rounded-full bg-sakura-500 px-6 py-3 font-semibold text-white shadow-sm hover:bg-sakura-600"
            >
              Passer commande
            </button>
            <p className="mt-3 text-center text-xs text-sakura-900/50">
              Paiement sécurisé · Cette boutique est une démonstration.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
