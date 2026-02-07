import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cheztaalat.com"),
  title: "Chez Talaat | Restaurant Mirador",
  description:
    "Une expérience culinaire inoubliable au cœur d'Abidjan - Restaurant Chez Talaat Mirador",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Chez Talaat | Restaurant Mirador",
    description:
      "Une expérience culinaire inoubliable au cœur d'Abidjan - Restaurant Chez Talaat Mirador",
    url: "https://cheztaalat.com",
    siteName: "Chez Talaat",
    locale: "fr_CI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chez Talaat | Restaurant Mirador",
    description:
      "Une expérience culinaire inoubliable au cœur d'Abidjan - Restaurant Chez Talaat Mirador",
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
