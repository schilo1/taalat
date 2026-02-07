import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chez Talaat | Restaurant Mirador",
  description:
    "Une expérience culinaire inoubliable au cœur d'Abidjan - Restaurant Chez Talaat Mirador",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
