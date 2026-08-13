import type { Metadata } from "next";
import Link from "next/link";
import SakuraPetals from "@/components/SakuraPetals";

export const metadata: Metadata = {
  title: "À propos — Hanami",
  description: "Découvrez l'histoire et les valeurs de Hanami, la boutique inspirée des cerisiers en fleurs japonais.",
};

const VALUES = [
  {
    emoji: "🌸",
    title: "Positivité",
    text: "Chaque produit est choisi pour apporter un sourire, un instant de légèreté dans votre journée.",
  },
  {
    emoji: "🍃",
    title: "Pleine conscience",
    text: "Inspirés par le hanami japonais, nous vous invitons à ralentir et savourer l'instant présent.",
  },
  {
    emoji: "🤝",
    title: "Artisanat & petites séries",
    text: "Nous travaillons avec des artisans passionnés pour des créations soignées et responsables.",
  },
  {
    emoji: "🌱",
    title: "Respect de la nature",
    text: "Emballages recyclables, matières durables : prendre soin de vous sans oublier la planète.",
  },
];

export default function AProposPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-noise-fade py-20">
        <SakuraPetals density="light" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="font-heading text-4xl font-bold text-sakura-900">Notre histoire</h1>
          <p className="mt-4 text-lg text-sakura-900/70">
            Hanami (花見) signifie « regarder les fleurs » en japonais : la tradition
            millénaire qui célèbre la floraison éphémère des cerisiers. Nous avons créé
            cette boutique pour offrir, toute l&apos;année, cette même sensation de
            légèreté et d&apos;émerveillement.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-sakura-900">
              Une bulle de douceur japonaise
            </h2>
            <p className="mt-4 leading-relaxed text-sakura-900/70">
              Tout est parti d&apos;un voyage sous les cerisiers en fleurs de Kyoto, et
              d&apos;une envie simple : prolonger cette sensation de paix et de beauté au
              quotidien. Depuis, nous parcourons le Japon et sélectionnons avec amour des
              thés, des papeteries, des bijoux et des objets qui racontent cette même
              histoire de douceur.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-sakura-900">
              Notre engagement
            </h2>
            <p className="mt-4 leading-relaxed text-sakura-900/70">
              Chaque partenaire est choisi pour son savoir-faire et ses valeurs proches
              des nôtres : qualité, transparence et respect de l&apos;environnement.
              Parce qu&apos;on prend soin de vous, on prend aussi soin de ce qui nous
              entoure.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sakura-50/60 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="font-heading text-center text-3xl font-bold text-sakura-900">
            Nos valeurs
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-sakura-100 bg-white p-6 text-center"
              >
                <span className="text-3xl" aria-hidden="true">
                  {value.emoji}
                </span>
                <h3 className="font-heading mt-3 font-semibold text-sakura-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-sakura-900/70">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
        <p className="text-3xl" aria-hidden="true">
          🌸
        </p>
        <h2 className="font-heading mt-4 text-2xl font-bold text-sakura-900">
          Envie de nous rejoindre sous les cerisiers ?
        </h2>
        <p className="mt-3 text-sakura-900/70">
          Parcourez notre boutique et laissez-vous porter par la douceur du printemps
          japonais.
        </p>
        <Link
          href="/boutique"
          className="font-heading mt-6 inline-block rounded-full bg-sakura-500 px-7 py-3 font-semibold text-white hover:bg-sakura-600"
        >
          Découvrir la boutique
        </Link>
      </section>
    </div>
  );
}
