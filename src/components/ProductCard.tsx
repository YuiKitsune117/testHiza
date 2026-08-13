import Link from "next/link";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import AddToCartButton from "@/components/AddToCartButton";

const BADGE_STYLES: Record<string, string> = {
  Nouveau: "bg-matcha-500 text-white",
  "Coup de cœur": "bg-gold-500 text-white",
  "Best-seller": "bg-sakura-600 text-white",
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-sakura-100 bg-white transition-shadow hover:shadow-lg hover:shadow-sakura-200/40">
      <Link href={`/boutique/${product.slug}`} className="relative block">
        <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-sakura-100 via-sakura-50 to-white text-6xl transition-transform duration-300 group-hover:scale-105">
          <span aria-hidden="true">{product.emoji}</span>
        </div>
        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${BADGE_STYLES[product.badge]}`}
          >
            {product.badge}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link href={`/boutique/${product.slug}`}>
          <h3 className="font-heading text-base font-semibold text-sakura-900 group-hover:text-sakura-600">
            {product.name}
          </h3>
        </Link>
        <p className="flex-1 text-sm text-sakura-900/60">{product.short}</p>
        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="font-heading text-lg font-bold text-sakura-700">
            {formatPrice(product.price)}
          </span>
          <AddToCartButton slug={product.slug} />
        </div>
      </div>
    </div>
  );
}
