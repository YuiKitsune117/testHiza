import Link from "next/link";
import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Boutique — Hanami",
  description: "Toute la collection Hanami : thés, papeterie, bijoux, bougies et accessoires inspirés des cerisiers en fleurs.",
};

export default async function BoutiquePage(props: PageProps<"/boutique">) {
  const searchParams = await props.searchParams;
  const rawCategory = searchParams.categorie;
  const activeCategory = Array.isArray(rawCategory) ? rawCategory[0] : rawCategory;

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  const activeCategoryData = categories.find((c) => c.slug === activeCategory);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-wide text-sakura-500">
          Boutique
        </p>
        <h1 className="font-heading mt-2 text-4xl font-bold text-sakura-900">
          {activeCategoryData ? activeCategoryData.name : "Toute la collection"}
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-sakura-900/60">
          {activeCategoryData
            ? activeCategoryData.description
            : "Des trésors sakura pour chaque instant de votre quotidien."}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <Link
          href="/boutique"
          className={`font-heading rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            !activeCategory
              ? "bg-sakura-500 text-white"
              : "bg-sakura-50 text-sakura-700 hover:bg-sakura-100"
          }`}
        >
          Tout voir
        </Link>
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/boutique?categorie=${category.slug}`}
            className={`font-heading rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              activeCategory === category.slug
                ? "bg-sakura-500 text-white"
                : "bg-sakura-50 text-sakura-700 hover:bg-sakura-100"
            }`}
          >
            {category.emoji} {category.name}
          </Link>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-sakura-900/60">
          Aucun produit dans cette catégorie pour le moment. Revenez bientôt fleurir votre panier !
        </p>
      )}
    </div>
  );
}
