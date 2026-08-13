"use client";

import { useState, type FormEvent } from "react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sakura-500 to-sakura-600 py-16">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="text-3xl" aria-hidden="true">
          🌸
        </p>
        <h2 className="font-heading mt-3 text-3xl font-bold text-white">
          10% offerts pour votre première commande
        </h2>
        <p className="mt-3 text-sakura-50">
          Rejoignez le jardin Hanami et recevez nos nouveautés, nos conseils bien-être et
          une pluie de bonnes vibrations, une fois par mois seulement.
        </p>

        {submitted ? (
          <p className="mt-6 rounded-full bg-white/15 px-6 py-3 font-heading font-semibold text-white">
            Merci et bienvenue dans la famille Hanami ! 🌸 Votre code : SAKURA10
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Adresse e-mail
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="votre@email.com"
              className="w-full rounded-full border-0 px-5 py-3 text-sakura-900 placeholder:text-sakura-900/40 focus:outline-none focus:ring-4 focus:ring-white/40"
            />
            <button
              type="submit"
              className="font-heading rounded-full bg-white px-6 py-3 font-semibold text-sakura-600 transition-colors hover:bg-sakura-50"
            >
              Je m&apos;abonne
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
