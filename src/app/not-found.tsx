import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="text-6xl" aria-hidden="true">
        🌸
      </p>
      <h1 className="font-heading mt-4 text-3xl font-bold text-sakura-900">
        Cette page s&apos;est envolée avec les pétales
      </h1>
      <p className="mt-3 text-sakura-900/70">
        Pas de panique, il reste plein de jolies choses à découvrir dans notre boutique.
      </p>
      <Link
        href="/"
        className="font-heading mt-8 rounded-full bg-sakura-500 px-6 py-3 font-semibold text-white hover:bg-sakura-600"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
