import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "materialize-css/dist/css/materialize.min.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cuaderno Web",
  description: "Cuaderno de notas desarrollo Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
