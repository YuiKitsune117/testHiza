"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-sakura-100 bg-sakura-50/60 p-8 text-center">
        <p className="text-4xl" aria-hidden="true">
          🌸
        </p>
        <h2 className="font-heading mt-3 text-xl font-bold text-sakura-900">
          Message envoyé avec bonheur !
        </h2>
        <p className="mt-2 text-sakura-900/70">
          Merci de nous avoir écrit. Notre équipe vous répondra avec plaisir sous 48h.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-heading text-sm font-semibold text-sakura-800">
            Nom
          </label>
          <input
            id="name"
            type="text"
            required
            className="mt-1 w-full rounded-xl border border-sakura-200 px-4 py-2.5 focus:border-sakura-400 focus:outline-none focus:ring-2 focus:ring-sakura-200"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-heading text-sm font-semibold text-sakura-800">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-sakura-200 px-4 py-2.5 focus:border-sakura-400 focus:outline-none focus:ring-2 focus:ring-sakura-200"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="font-heading text-sm font-semibold text-sakura-800">
          Sujet
        </label>
        <input
          id="subject"
          type="text"
          required
          className="mt-1 w-full rounded-xl border border-sakura-200 px-4 py-2.5 focus:border-sakura-400 focus:outline-none focus:ring-2 focus:ring-sakura-200"
        />
      </div>
      <div>
        <label htmlFor="message" className="font-heading text-sm font-semibold text-sakura-800">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="mt-1 w-full rounded-xl border border-sakura-200 px-4 py-2.5 focus:border-sakura-400 focus:outline-none focus:ring-2 focus:ring-sakura-200"
        />
      </div>
      <button
        type="submit"
        className="font-heading w-fit rounded-full bg-sakura-500 px-7 py-3 font-semibold text-white shadow-sm hover:bg-sakura-600"
      >
        Envoyer le message 🌸
      </button>
    </form>
  );
}
