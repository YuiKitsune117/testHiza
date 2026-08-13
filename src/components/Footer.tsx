import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-sakura-100 bg-sakura-50/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-heading flex items-center gap-2 text-lg font-bold text-sakura-700">
              <span aria-hidden="true">🌸</span> Hanami
            </p>
            <p className="mt-3 text-sm leading-relaxed text-sakura-900/70">
              Une boutique pensée comme un jardin de cerisiers : de la douceur, de la
              couleur, et un peu de magie japonaise dans chaque commande.
            </p>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold text-sakura-800">Boutique</p>
            <ul className="mt-3 space-y-2 text-sm text-sakura-900/70">
              <li>
                <Link href="/boutique" className="hover:text-sakura-600">
                  Toute la collection
                </Link>
              </li>
              <li>
                <Link href="/boutique?categorie=the-infusions" className="hover:text-sakura-600">
                  Thé & Infusions
                </Link>
              </li>
              <li>
                <Link href="/boutique?categorie=bijoux" className="hover:text-sakura-600">
                  Bijoux
                </Link>
              </li>
              <li>
                <Link href="/boutique?categorie=maison" className="hover:text-sakura-600">
                  Bougies & Maison
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold text-sakura-800">La maison</p>
            <ul className="mt-3 space-y-2 text-sm text-sakura-900/70">
              <li>
                <Link href="/a-propos" className="hover:text-sakura-600">
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sakura-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/panier" className="hover:text-sakura-600">
                  Mon panier
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold text-sakura-800">Restons connectés</p>
            <p className="mt-3 text-sm text-sakura-900/70">
              Suivez le fil de nos nouveautés, saupoudré de bonne humeur.
            </p>
            <div className="mt-3 flex gap-3 text-xl">
              <span aria-hidden="true">🌷</span>
              <span aria-hidden="true">🍡</span>
              <span aria-hidden="true">🎐</span>
              <span aria-hidden="true">🍃</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-sakura-200/70 pt-6 text-xs text-sakura-900/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Hanami — Fait avec 🌸 et beaucoup de positivité.</p>
          <p>Chaque commande fait fleurir un sourire.</p>
        </div>
      </div>
    </footer>
  );
}
