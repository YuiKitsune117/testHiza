"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";

export default function AddToCartButton({
  slug,
  quantity = 1,
  full = false,
}: {
  slug: string;
  quantity?: number;
  full?: boolean;
}) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  function handleClick() {
    addItem(slug, quantity);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`font-heading rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-all duration-200 ${
        full ? "w-full" : ""
      } ${
        justAdded
          ? "bg-matcha-500 text-white"
          : "bg-sakura-500 text-white hover:bg-sakura-600 hover:shadow-md"
      }`}
    >
      {justAdded ? "Ajouté ✓" : "Ajouter au panier 🌸"}
    </button>
  );
}
