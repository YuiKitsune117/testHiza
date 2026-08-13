import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import ProductActions from "@/components/ProductActions";
import { formatPrice } from "@/lib/format";
import {
  getCategoryBySlug,
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata(
  props: PageProps<"/boutique/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Hanami`,
    description: product.short,
  };
}

export default async function ProductPage(props: PageProps<"/boutique/[slug]">) {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.category);
  const related = getRelatedProducts(product);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <nav className="text-sm text-sakura-900/50">
        <Link href="/boutique" className="hover:text-sakura-600">
          Boutique
        </Link>
        {category && (
          <>
            {" "}
            /{" "}
            <Link href={`/boutique?categorie=${category.slug}`} className="hover:text-sakura-600">
              {category.name}
            </Link>
          </>
        )}{" "}
        / <span className="text-sakura-900/70">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br from-sakura-100 via-sakura-50 to-white text-[8rem]">
          <span aria-hidden="true">{product.emoji}</span>
        </div>

        <div className="flex flex-col justify-center gap-4">
          {product.badge && (
            <span className="w-fit rounded-full bg-sakura-100 px-3 py-1 text-xs font-semibold text-sakura-700">
              {product.badge}
            </span>
          )}
          <h1 className="font-heading text-3xl font-bold text-sakura-900">{product.name}</h1>
          <p className="font-heading text-2xl font-bold text-sakura-600">
            {formatPrice(product.price)}
          </p>
          <p className="leading-relaxed text-sakura-900/70">{product.description}</p>

          <ul className="flex flex-col gap-1.5 text-sm text-sakura-900/70">
            {product.details.map((detail) => (
              <li key={detail} className="flex items-center gap-2">
                <span className="text-sakura-400" aria-hidden="true">
                  🌸
                </span>
                {detail}
              </li>
            ))}
          </ul>

          <div className="mt-2">
            <ProductActions slug={product.slug} />
          </div>

          <p className="text-xs text-sakura-900/50">
            🚚 Livraison offerte dès 40€ · 🔄 Retours gratuits sous 30 jours
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-heading text-2xl font-bold text-sakura-900">
            Vous aimerez aussi
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
