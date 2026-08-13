import Link from "next/link";
import SakuraPetals from "@/components/SakuraPetals";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import { categories, products } from "@/data/products";

const VALUE_PROPS = [
  { emoji: "🚚", title: "Livraison offerte", text: "Dès 40€ d'achat, partout en France." },
  { emoji: "🤍", title: "Fait avec soin", text: "Petites séries et artisanat sélectionné." },
  { emoji: "🔄", title: "Satisfait ou remboursé", text: "30 jours pour changer d'avis." },
  { emoji: "🌱", title: "Éco-responsable", text: "Emballages recyclables et durables." },
];

const bestSellers = products.filter((p) => p.badge === "Best-seller").slice(0, 4);
const featured = bestSellers.length >= 4 ? bestSellers : products.slice(0, 8);

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-noise-fade">
        <SakuraPetals />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-24 text-center sm:px-6 sm:py-32">
          <span className="font-heading rounded-full bg-sakura-100 px-4 py-1.5 text-sm font-semibold text-sakura-700">
            🌸 Nouvelle collection Hanami est arrivée
          </span>
          <h1 className="font-heading max-w-3xl text-4xl font-bold text-sakura-900 sm:text-6xl">
            Laissez fleurir la <span className="text-sakura-500">joie</span> dans votre quotidien
          </h1>
          <p className="max-w-xl text-lg text-sakura-900/70">
            T-shirts, bracelets, colliers et crocs inspirés des jardins de cerisiers
            japonais. Une boutique pensée pour ralentir, sourire et savourer chaque petit
            instant.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/boutique"
              className="font-heading rounded-full bg-sakura-500 px-7 py-3 font-semibold text-white shadow-md shadow-sakura-300/50 transition-colors hover:bg-sakura-600"
            >
              Découvrir la boutique
            </Link>
            <Link
              href="/a-propos"
              className="font-heading rounded-full border border-sakura-300 px-7 py-3 font-semibold text-sakura-700 transition-colors hover:bg-sakura-50"
            >
              Notre histoire
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-sakura-100 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
          {VALUE_PROPS.map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-1 text-center">
              <span className="text-3xl" aria-hidden="true">
                {item.emoji}
              </span>
              <p className="font-heading text-sm font-semibold text-sakura-900">{item.title}</p>
              <p className="text-xs text-sakura-900/60">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-sakura-500">
              Univers
            </p>
            <h2 className="font-heading mt-2 text-3xl font-bold text-sakura-900">
              Explorez nos collections
            </h2>
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="bg-sakura-50/60 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-sakura-500">
                Coups de cœur
              </p>
              <h2 className="font-heading mt-2 text-3xl font-bold text-sakura-900">
                Nos best-sellers
              </h2>
            </div>
            <Link
              href="/boutique"
              className="font-heading hidden text-sm font-semibold text-sakura-600 hover:text-sakura-700 sm:block"
            >
              Voir toute la boutique →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
        <span className="text-4xl" aria-hidden="true">
          🌸🍃🌸
        </span>
        <h2 className="font-heading mt-4 text-3xl font-bold text-sakura-900">
          « Ichi-go ichi-e » — chaque instant ne se vit qu&apos;une fois
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sakura-900/70">
          Comme les fleurs de cerisier qui n&apos;éclosent que quelques jours par an, Hanami
          vous invite à célébrer la beauté fragile du quotidien. Nos produits sont choisis
          pour vous aider à ralentir, respirer et savourer ce qui compte vraiment.
        </p>
      </section>

      <Testimonials />
      <Newsletter />
    </div>
  );
}
