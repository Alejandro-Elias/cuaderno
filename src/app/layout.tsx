import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "materialize-css/dist/css/materialize.min.css";
import styles from "./page.module.css";
import Menu from "../components/Menu";

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
      <body
        style={{
          background: "url(https://img.freepik.com/vector-gratis/fondo-pantalla-onda-dorada-suave_23-2148819600.jpg?t=st=1717276915~exp=1717280515~hmac=a0734ff5f6acf0a7f8c572df5770febf94b01b5c9e6b09a2ee97839200162d36&w=740)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
        className={inter.className}
      >
        <div className={styles.center}>
          <h1 style={{ fontSize: "3.5rem", color: "#d87d3d" }} className="titulo">
            NoteBook
          </h1>
        </div>
        <Menu />
        {children}
      </body>
    </html>
  );
}
