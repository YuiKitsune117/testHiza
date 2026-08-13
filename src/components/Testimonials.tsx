const TESTIMONIALS = [
  {
    name: "Léa M.",
    text: "Ma commande sentait littéralement le printemps ! Le thé sakura est devenu mon rituel du matin, ça me met de bonne humeur à chaque tasse.",
    rating: 5,
  },
  {
    name: "Camille R.",
    text: "L'emballage à lui seul mérite 5 étoiles. On sent que chaque détail est pensé avec soin et bienveillance. Une vraie bulle de douceur.",
    rating: 5,
  },
  {
    name: "Yuki T.",
    text: "J'ai offert le bracelet et le collier assortis à ma sœur, elle ne les enlève plus. Hizakura, c'est un peu de Japon et beaucoup de sourires.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-wide text-sakura-500">
          Ils ont fait fleurir leur quotidien
        </p>
        <h2 className="font-heading mt-2 text-3xl font-bold text-sakura-900">
          Des avis qui donnent le sourire
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-3xl border border-sakura-100 bg-white p-6 shadow-sm"
          >
            <div className="text-gold-500" aria-hidden="true">
              {"★".repeat(t.rating)}
            </div>
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-sakura-900/80">
              « {t.text} »
            </blockquote>
            <figcaption className="font-heading mt-4 text-sm font-semibold text-sakura-700">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
