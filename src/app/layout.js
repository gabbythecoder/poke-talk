import { Nunito_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const nunitoSans = Nunito_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"]
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
