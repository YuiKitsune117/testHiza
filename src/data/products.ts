export type Category = {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  gradient: string;
};

export const categories: Category[] = [
  {
    slug: "the-infusions",
    name: "Thé & Infusions",
    emoji: "🍵",
    description: "Des mélanges délicats pour ralentir et savourer l'instant.",
    gradient: "from-rose-200 via-pink-100 to-rose-50",
  },
  {
    slug: "papeterie",
    name: "Papeterie",
    emoji: "📔",
    description: "De quoi écrire vos plus jolies pensées.",
    gradient: "from-pink-200 via-rose-100 to-orange-50",
  },
  {
    slug: "maison",
    name: "Bougies & Maison",
    emoji: "🕯️",
    description: "Une atmosphère cocon, parfumée aux fleurs de cerisier.",
    gradient: "from-fuchsia-200 via-pink-100 to-amber-50",
  },
  {
    slug: "bijoux",
    name: "Bijoux",
    emoji: "💍",
    description: "Des pièces délicates qui fleurissent votre quotidien.",
    gradient: "from-rose-300 via-pink-200 to-rose-100",
  },
  {
    slug: "beaute",
    name: "Beauté",
    emoji: "🧴",
    description: "Des rituels doux inspirés des jardins japonais.",
    gradient: "from-pink-100 via-rose-100 to-purple-50",
  },
  {
    slug: "accessoires",
    name: "Accessoires",
    emoji: "🎀",
    description: "Pour porter la douceur du printemps partout avec vous.",
    gradient: "from-rose-200 via-fuchsia-100 to-pink-50",
  },
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  emoji: string;
  badge?: "Nouveau" | "Coup de cœur" | "Best-seller";
  short: string;
  description: string;
  details: string[];
};

export const products: Product[] = [
  {
    slug: "the-sakura-sencha",
    name: "Thé Sakura Sencha",
    category: "the-infusions",
    price: 14.9,
    emoji: "🍵",
    badge: "Best-seller",
    short: "Sencha japonais infusé aux pétales de cerisier.",
    description:
      "Un sencha vert cultivé dans les collines de Shizuoka, délicatement parfumé de pétales de sakura confits. Une tasse pour démarrer la journée avec douceur.",
    details: ["Boîte de 80g", "Origine : Shizuoka, Japon", "Sans arômes artificiels"],
  },
  {
    slug: "infusion-fleurs-de-cerisier",
    name: "Infusion Fleurs de Cerisier",
    category: "the-infusions",
    price: 12.5,
    emoji: "🌸",
    short: "Infusion florale sans théine, apaisante et gourmande.",
    description:
      "Une infusion 100% naturelle mêlant fleurs de cerisier, hibiscus et une pointe de vanille. Parfaite pour un moment cocooning en fin de journée.",
    details: ["Sachet de 20 mousselines", "Sans théine", "Ingrédients issus de l'agriculture biologique"],
  },
  {
    slug: "coffret-the-matcha-premium",
    name: "Coffret Thé Matcha Premium",
    category: "the-infusions",
    price: 24.9,
    emoji: "🍵",
    badge: "Coup de cœur",
    short: "Matcha cérémoniel, fouet en bambou et bol offerts.",
    description:
      "Un coffret complet pour découvrir l'art du matcha : poudre cérémoniel finement moulue, chasen en bambou et petit bol traditionnel. De quoi s'offrir une pause zen à la maison.",
    details: ["Matcha cérémoniel 30g", "Chasen en bambou inclus", "Bol en céramique fait main"],
  },
  {
    slug: "carnet-sakura-washi",
    name: "Carnet Sakura Washi",
    category: "papeterie",
    price: 9.9,
    emoji: "📔",
    badge: "Nouveau",
    short: "Carnet relié à la main en papier washi fleuri.",
    description:
      "Ce carnet est habillé d'un papier washi japonais orné de branches de cerisier. Ses pages crème, douces sous le crayon, n'attendent que vos rêves et vos listes.",
    details: ["120 pages non lignées", "Format A6", "Reliure cousue à la main"],
  },
  {
    slug: "set-papeterie-hanami",
    name: "Set de Papeterie Hanami",
    category: "papeterie",
    price: 16.9,
    emoji: "✉️",
    short: "Cartes, enveloppes et stickers pour écrire avec le cœur.",
    description:
      "Un set complet pour correspondre avec douceur : 10 cartes illustrées, enveloppes assorties et une planche de stickers sakura. Parfait pour dire merci ou simplement penser à quelqu'un.",
    details: ["10 cartes + enveloppes", "1 planche de 24 stickers", "Impression pastel écoresponsable"],
  },
  {
    slug: "stylo-pinceau-fleur-de-cerisier",
    name: "Stylo Pinceau Fleur de Cerisier",
    category: "papeterie",
    price: 7.5,
    emoji: "🖊️",
    short: "Stylo pinceau à encre rose pour une écriture pleine de charme.",
    description:
      "Inspiré des pinceaux calligraphiques japonais, ce stylo à pointe souple glisse sur le papier avec une encre rose sakura. Idéal pour le lettering et les petits mots doux.",
    details: ["Encre rose sakura", "Pointe souple type pinceau", "Corps en bambou certifié"],
  },
  {
    slug: "bougie-parfumee-hanami",
    name: "Bougie Parfumée « Hanami »",
    category: "maison",
    price: 18.9,
    emoji: "🕯️",
    badge: "Best-seller",
    short: "Notes de cerisier, musc blanc et bois de santal.",
    description:
      "Coulée à la main dans de la cire végétale, cette bougie recrée l'atmosphère d'une promenade sous les cerisiers en fleurs. Environ 40h de combustion, pour prolonger l'instant.",
    details: ["Cire de soja 100% végétale", "Mèche en coton", "~40h de combustion"],
  },
  {
    slug: "diffuseur-sakura-bambou",
    name: "Diffuseur Sakura & Bambou",
    category: "maison",
    price: 22.9,
    emoji: "🎋",
    short: "Diffuseur de parfum d'intérieur, fraîcheur florale.",
    description:
      "Un diffuseur par bâtonnets qui embaume doucement votre intérieur de notes de fleurs de cerisier et de bambou vert, pour une maison toujours accueillante.",
    details: ["Flacon 100ml", "8 bâtonnets en rotin", "Diffusion continue 2 à 3 mois"],
  },
  {
    slug: "bracelet-perles-roses",
    name: "Bracelet Perles Roses",
    category: "bijoux",
    price: 19.9,
    emoji: "📿",
    short: "Perles de quartz rose et breloque fleur de cerisier.",
    description:
      "Un bracelet élastique fin composé de perles de quartz rose naturel, orné d'une petite breloque en forme de fleur de sakura plaquée or. Porte-bonheur et douceur assurés.",
    details: ["Quartz rose naturel", "Breloque plaquée or 18 carats", "Taille ajustable"],
  },
  {
    slug: "boucles-oreilles-petales",
    name: "Boucles d'oreilles Pétales",
    category: "bijoux",
    price: 21.9,
    emoji: "🌸",
    badge: "Nouveau",
    short: "Pétales délicats en acier inoxydable doré.",
    description:
      "Des boucles d'oreilles légères comme un pétale, en acier inoxydable doré hypoallergénique. Elles accompagnent tous les jours avec une touche de poésie.",
    details: ["Acier inoxydable doré", "Hypoallergénique", "Livré dans un écrin cadeau"],
  },
  {
    slug: "baume-a-levres-sakura",
    name: "Baume à Lèvres Sakura",
    category: "beaute",
    price: 6.9,
    emoji: "💄",
    short: "Baume nourrissant à l'extrait de fleur de cerisier.",
    description:
      "Un baume fondant, enrichi en beurre de karité et extrait de fleur de cerisier, pour des lèvres douces toute la journée avec un léger parfum floral.",
    details: ["Formule vegan", "Beurre de karité bio", "Sans silicone ni paraben"],
  },
  {
    slug: "brume-visage-fleur-de-cerisier",
    name: "Brume Visage Fleur de Cerisier",
    category: "beaute",
    price: 15.9,
    emoji: "🌷",
    short: "Eau florale rafraîchissante en spray fin.",
    description:
      "Une brume légère à pulvériser matin et soir pour hydrater et illuminer le teint, avec le parfum réconfortant des cerisiers en fleurs.",
    details: ["100ml", "Sans alcool", "Convient à tous types de peau"],
  },
  {
    slug: "foulard-imprime-sakura",
    name: "Foulard Imprimé Sakura",
    category: "accessoires",
    price: 29.9,
    emoji: "🧣",
    badge: "Coup de cœur",
    short: "Foulard en soie douce, imprimé branches de cerisier.",
    description:
      "Un foulard en satin de soie orné d'un imprimé exclusif de branches de cerisier en fleurs. Un accessoire intemporel qui apporte de la couleur à chaque tenue.",
    details: ["70x70cm", "Satin de soie", "Bords roulottés main"],
  },
  {
    slug: "tote-bag-hanami",
    name: "Tote Bag Hanami",
    category: "accessoires",
    price: 13.9,
    emoji: "👜",
    short: "Tote bag en coton bio, illustration cerisier en fleurs.",
    description:
      "Un tote bag spacieux en coton biologique, orné d'une illustration originale de cerisier en fleurs. Résistant, léger et prêt pour toutes vos aventures joyeuses.",
    details: ["Coton bio 280g/m²", "Format 38x42cm", "Anses renforcées"],
  },
  {
    slug: "epingle-a-cheveux-sakura",
    name: "Épingle à Cheveux Sakura",
    category: "accessoires",
    price: 11.5,
    emoji: "🎀",
    short: "Pince délicate en forme de branche fleurie.",
    description:
      "Une épingle à cheveux artisanale en résine, sculptée en forme de branche de cerisier en fleurs. Un détail plein de charme pour twister un chignon ou une tresse.",
    details: ["Résine artisanale", "Pince à mâchoire dorée", "Pièce unique peinte à la main"],
  },
  {
    slug: "huile-de-bain-sakura",
    name: "Huile de Bain Sakura",
    category: "beaute",
    price: 17.9,
    emoji: "🛁",
    short: "Huile moussante, rituel bain japonais.",
    description:
      "Versez quelques gouttes sous l'eau chaude pour un bain moussant et nourrissant, parfumé aux fleurs de cerisier. Un vrai onsen à la maison.",
    details: ["200ml", "Huile d'amande douce", "Flacon en verre recyclable"],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.category === categorySlug);
}

export function getRelatedProducts(product: Product, count = 4) {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, count);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
