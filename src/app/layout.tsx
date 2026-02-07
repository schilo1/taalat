import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cheztaalat.com"),

  title: {
    default: "Chez Talaat – Restaurant à Abidjan (Deux-Plateaux, Mirador)",
    template: "%s | Chez Talaat",
  },

  description:
    "Chez Talaat est un restaurant à Abidjan situé aux Deux-Plateaux Mirador. Grillades, poulet braisé, poisson braisé, attiéké, plats africains, menus familiaux et commande sur place ou à emporter.",

  keywords: [
    "restaurant Abidjan",
    "restaurant deux plateaux",
    "restaurant mirador Abidjan",
    "maquis Abidjan",
    "grillades Abidjan",
    "poulet braisé Abidjan",
    "poisson braisé Abidjan",
    "attiéké poisson Abidjan",
    "attiéké poulet",
    "restaurant africain Abidjan",
    "où manger à Abidjan",
    "restaurant près de moi Abidjan",
    "restaurant livraison Abidjan",
    "restaurant ouvert Abidjan",
    "restaurant familial Abidjan",
    "restaurant chic Abidjan",
    "sortir à Abidjan restaurant",
    "meilleur restaurant Abidjan",
    "manger aux deux plateaux",
    "maquis deux plateaux",
    "restaurant ivoirien Abidjan",
    "restaurant Mirador",
    "Chez Talaat restaurant",
  ],

  openGraph: {
    title: "Chez Talaat – Restaurant à Abidjan (Deux-Plateaux Mirador)",
    description:
      "Restaurant à Abidjan : grillades, poulet braisé, poisson braisé, attiéké et plats africains aux Deux-Plateaux Mirador.",
    url: "https://cheztaalat.com",
    siteName: "Chez Talaat",
    locale: "fr_CI",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Chez Talaat – Restaurant à Abidjan",
    description:
      "Grillades et plats africains aux Deux-Plateaux Mirador à Abidjan.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
