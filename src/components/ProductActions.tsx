"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";

export default function ProductActions({ slug }: { slug: string }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  function handleAdd() {
    addItem(slug, quantity);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1800);
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="flex items-center gap-3 rounded-full border border-sakura-200 px-3 py-1.5">
        <button
          type="button"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="flex h-8 w-8 items-center justify-center rounded-full text-lg font-semibold text-sakura-600 hover:bg-sakura-50"
          aria-label="Diminuer la quantité"
        >
          −
        </button>
        <span className="w-6 text-center font-heading font-semibold text-sakura-900">
          {quantity}
        </span>
        <button
          type="button"
          onClick={() => setQuantity((q) => Math.min(20, q + 1))}
          className="flex h-8 w-8 items-center justify-center rounded-full text-lg font-semibold text-sakura-600 hover:bg-sakura-50"
          aria-label="Augmenter la quantité"
        >
          +
        </button>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        className={`font-heading flex-1 rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition-colors ${
          justAdded ? "bg-matcha-500 text-white" : "bg-sakura-500 text-white hover:bg-sakura-600"
        }`}
      >
        {justAdded ? "Ajouté au panier ✓" : "Ajouter au panier 🌸"}
      </button>
    </div>
  );
}
