import Link from "next/link";
import type { Category } from "@/data/products";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/boutique?categorie=${category.slug}`}
      className={`group flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br ${category.gradient} p-6 transition-transform hover:-translate-y-1`}
    >
      <span className="text-4xl" aria-hidden="true">
        {category.emoji}
      </span>
      <div className="mt-8">
        <h3 className="font-heading text-lg font-bold text-sakura-900">{category.name}</h3>
        <p className="mt-1 text-sm text-sakura-900/70">{category.description}</p>
        <span className="font-heading mt-3 inline-flex items-center gap-1 text-sm font-semibold text-sakura-700 group-hover:gap-2 transition-all">
          Découvrir →
        </span>
      </div>
    </Link>
  );
}
