import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Hanami",
  description: "Une question, une envie particulière ? L'équipe Hanami est là pour vous répondre avec le sourire.",
};

const INFOS = [
  { emoji: "📍", title: "Adresse", text: "12 rue des Cerisiers, 75011 Paris" },
  { emoji: "✉️", title: "E-mail", text: "bonjour@hanami-boutique.fr" },
  { emoji: "⏰", title: "Horaires", text: "Lundi – Samedi, 10h – 19h" },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h1 className="font-heading text-4xl font-bold text-sakura-900">Parlons-en</h1>
        <p className="mx-auto mt-3 max-w-xl text-sakura-900/70">
          Une question sur une commande, une envie de collaboration ou simplement l&apos;envie
          de nous dire bonjour ? Nous serions ravis de vous lire.
        </p>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.3fr]">
        <div className="flex flex-col gap-6">
          {INFOS.map((info) => (
            <div key={info.title} className="flex items-start gap-4">
              <span className="text-2xl" aria-hidden="true">
                {info.emoji}
              </span>
              <div>
                <p className="font-heading font-semibold text-sakura-900">{info.title}</p>
                <p className="text-sm text-sakura-900/70">{info.text}</p>
              </div>
            </div>
          ))}
          <div className="rounded-3xl border border-sakura-100 bg-sakura-50/60 p-5 text-sm text-sakura-900/70">
            🌸 Astuce : pour un suivi de commande, gardez votre numéro de confirmation à
            portée de main, notre équipe adore répondre vite et avec le sourire !
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
