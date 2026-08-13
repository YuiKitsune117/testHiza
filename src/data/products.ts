export type Category = {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  gradient: string;
};

export const categories: Category[] = [
  {
    slug: "t-shirts",
    name: "T-shirts",
    emoji: "👕",
    description: "Du coton doux et des imprimés fleuris pour un look printanier.",
    gradient: "from-rose-200 via-pink-100 to-rose-50",
  },
  {
    slug: "bracelets",
    name: "Bracelets",
    emoji: "📿",
    description: "Des perles délicates à empiler pour porter la douceur au poignet.",
    gradient: "from-lilac-200 via-pink-100 to-lilac-50",
  },
  {
    slug: "colliers",
    name: "Colliers",
    emoji: "💎",
    description: "Des pendentifs fins qui fleurissent votre quotidien.",
    gradient: "from-lilac-300 via-lilac-100 to-pink-50",
  },
  {
    slug: "crocs",
    name: "Crocs",
    emoji: "🩴",
    description: "Des sabots confortables et colorés, prêts pour l'aventure.",
    gradient: "from-rose-300 via-pink-200 to-rose-100",
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
    slug: "t-shirt-sakura-blossom",
    name: "T-shirt Sakura Blossom",
    category: "t-shirts",
    price: 24.9,
    emoji: "👕",
    badge: "Best-seller",
    short: "Coton bio, branche de cerisier imprimée dans le dos.",
    description:
      "Un t-shirt unisexe en coton biologique orné d'une branche de cerisier en fleurs délicatement imprimée dans le dos. Confortable, léger, et plein de bonne humeur.",
    details: ["Coton bio 180g/m²", "Coupe unisexe, du XS au XXL", "Impression résistante au lavage"],
  },
  {
    slug: "t-shirt-oversize-hizakura",
    name: "T-shirt Oversize Hizakura",
    category: "t-shirts",
    price: 27.9,
    emoji: "👕",
    badge: "Nouveau",
    short: "Coupe oversize confortable, imprimé pastel Hizakura.",
    description:
      "Une coupe oversize pour un maximum de confort, avec un imprimé pastel qui célèbre l'art du hanami. Le t-shirt parfait pour les journées cocooning comme les sorties entre ami·e·s.",
    details: ["100% coton peigné", "Coupe oversize", "Fabriqué dans un atelier partenaire éthique"],
  },
  {
    slug: "t-shirt-brode-petits-sakura",
    name: "T-shirt Brodé Petits Sakura",
    category: "t-shirts",
    price: 26.9,
    emoji: "👕",
    short: "Petite broderie fleurs de cerisier sur la poitrine.",
    description:
      "Une discrète broderie de petites fleurs de cerisier vient égayer ce t-shirt basique en coton doux. Un intemporel plein de charme, à porter en toute saison.",
    details: ["Broderie fil rose poudré", "Col rond renforcé", "Coton bio certifié"],
  },
  {
    slug: "t-shirt-ichi-go-ichi-e",
    name: "T-shirt « Ichi-go Ichi-e »",
    category: "t-shirts",
    price: 25.9,
    emoji: "👕",
    badge: "Coup de cœur",
    short: "Typographie japonaise et branche fleurie minimaliste.",
    description:
      "Inspiré de la philosophie japonaise « un instant, une rencontre », ce t-shirt allie typographie japonaise épurée et illustration minimaliste de fleurs de cerisier.",
    details: ["Coton bio 180g/m²", "Coupe régulière mixte", "Encre à base d'eau, sans solvants"],
  },
  {
    slug: "bracelet-perles-roses",
    name: "Bracelet Perles Roses",
    category: "bracelets",
    price: 19.9,
    emoji: "📿",
    badge: "Best-seller",
    short: "Perles de quartz rose et breloque fleur de cerisier.",
    description:
      "Un bracelet élastique fin composé de perles de quartz rose naturel, orné d'une petite breloque en forme de fleur de sakura plaquée or. Porte-bonheur et douceur assurés.",
    details: ["Quartz rose naturel", "Breloque plaquée or 18 carats", "Taille ajustable"],
  },
  {
    slug: "bracelet-fleur-de-cerisier-dore",
    name: "Bracelet Fleur de Cerisier Doré",
    category: "bracelets",
    price: 22.9,
    emoji: "📿",
    badge: "Nouveau",
    short: "Chaîne fine dorée et breloque sakura ciselée.",
    description:
      "Une chaîne fine plaquée or ornée d'une breloque sakura finement ciselée. Un bijou léger à porter seul ou empilé avec vos autres bracelets préférés.",
    details: ["Plaqué or 18 carats", "Fermoir mousqueton réglable", "Hypoallergénique"],
  },
  {
    slug: "bracelet-jade-sakura",
    name: "Bracelet Jade & Sakura",
    category: "bracelets",
    price: 24.9,
    emoji: "📿",
    short: "Perles de jade naturel et accent floral rose.",
    description:
      "Des perles de jade naturel, symbole de sérénité, associées à une petite fleur de cerisier émaillée. Un bracelet apaisant à porter au quotidien.",
    details: ["Jade naturel véritable", "Élastique résistant", "Livré dans une pochette en tissu"],
  },
  {
    slug: "bracelet-cordon-sakura",
    name: "Bracelet Cordon Sakura",
    category: "bracelets",
    price: 14.9,
    emoji: "📿",
    short: "Cordon tressé rose poudré, breloque fleur émaillée.",
    description:
      "Un bracelet cordon tressé à la main dans un rose poudré tout doux, avec une petite breloque fleur de cerisier émaillée. Simple, léger, plein de charme.",
    details: ["Cordon tressé résistant à l'eau", "Coulisse ajustable", "Fait main en petite série"],
  },
  {
    slug: "collier-pendentif-sakura",
    name: "Collier Pendentif Sakura",
    category: "colliers",
    price: 26.9,
    emoji: "💎",
    badge: "Coup de cœur",
    short: "Pendentif fleur de cerisier sur chaîne fine dorée.",
    description:
      "Un pendentif en forme de fleur de cerisier, serti d'une pierre rose délicate, suspendu à une chaîne fine plaquée or. Un bijou intemporel pour illuminer chaque tenue.",
    details: ["Plaqué or 18 carats", "Chaîne 45cm + extension", "Pendentif serti main"],
  },
  {
    slug: "collier-chaine-fine-doree",
    name: "Collier Chaîne Fine Dorée",
    category: "colliers",
    price: 21.9,
    emoji: "💎",
    short: "Chaîne minimaliste, breloque sakura discrète.",
    description:
      "Une chaîne fine et minimaliste ornée d'une toute petite breloque sakura, pour un bijou du quotidien discret et raffiné, seul ou superposé.",
    details: ["Acier inoxydable doré", "Résistant à l'eau", "Chaîne 42cm"],
  },
  {
    slug: "collier-perle-de-lune-rose",
    name: "Collier Perle de Lune Rose",
    category: "colliers",
    price: 28.9,
    emoji: "💎",
    badge: "Nouveau",
    short: "Pierre de lune rose et finitions dorées.",
    description:
      "Une pierre de lune rose aux reflets nacrés, montée sur une chaîne dorée délicate. Un collier lumineux qui rappelle l'éclat des pétales de cerisier au crépuscule.",
    details: ["Pierre de lune naturelle", "Plaqué or 18 carats", "Livré dans un écrin cadeau"],
  },
  {
    slug: "collier-multi-rangs-sakura",
    name: "Collier Multi-rangs Sakura",
    category: "colliers",
    price: 24.9,
    emoji: "💎",
    badge: "Best-seller",
    short: "Trois rangs superposés, breloques fleuries.",
    description:
      "Trois fines chaînes superposées, agrémentées de petites breloques fleurs de cerisier, pour un effet layering réussi sans effort.",
    details: ["3 rangs ajustables", "Acier inoxydable doré", "Ne noircit pas"],
  },
  {
    slug: "sabots-sakura-blush",
    name: "Sabots Sakura Blush",
    category: "crocs",
    price: 34.9,
    emoji: "🩴",
    badge: "Best-seller",
    short: "Sabots légers rose blush, confort toute la journée.",
    description:
      "Des sabots ultra-légers en rose blush, parfaits pour un confort absolu toute la journée. Leur semelle souple amortit chaque pas, à la maison comme en balade.",
    details: ["Matière légère et souple", "Perforations respirantes", "Du 36 au 44"],
  },
  {
    slug: "sabots-fleurs-de-cerisier-charms",
    name: "Sabots Fleurs de Cerisier + Charms",
    category: "crocs",
    price: 39.9,
    emoji: "🩴",
    badge: "Coup de cœur",
    short: "Sabots roses et 5 charms fleurs de cerisier inclus.",
    description:
      "Des sabots roses accompagnés de 5 charms fleurs de cerisier à clipser sur les perforations. De quoi personnaliser vos pas avec une touche de printemps.",
    details: ["5 charms sakura inclus", "Compatible avec charms standards", "Du 36 au 44"],
  },
  {
    slug: "sabots-edition-hizakura",
    name: "Sabots Édition Hizakura",
    category: "crocs",
    price: 36.9,
    emoji: "🩴",
    badge: "Nouveau",
    short: "Semelle dégradée rose et blanc, esprit floral.",
    description:
      "Une édition limitée à la semelle dégradée rose et blanc, pour un look tout en douceur qui rappelle la pluie de pétales sous les cerisiers en fleurs.",
    details: ["Édition limitée", "Sangle arrière ajustable", "Du 36 au 44"],
  },
  {
    slug: "sabots-sakura-pastel",
    name: "Sabots Sakura Pastel",
    category: "crocs",
    price: 32.9,
    emoji: "🩴",
    short: "Coloris pastel doux, semelle ultra-confort.",
    description:
      "Un coloris pastel tout doux pour ces sabots au confort ultra-léger. Faciles à enfiler, ils accompagnent vos journées avec légèreté et bonne humeur.",
    details: ["Léger et flexible", "Facile à nettoyer", "Du 36 au 44"],
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
