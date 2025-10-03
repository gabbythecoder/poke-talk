import { Nunito_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const nunitoSans = Nunito_Sans({
  weight: "500",
})

export const metadata = {
  title: "PokéTalk",
  description: "Pokémon Review Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <div className="layout-container">
        <Header />
          <main className="main-content">
            {children}
          </main>
        <Footer />
        </div>
      </body>
    </html>
  );
}
