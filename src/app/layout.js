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
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" 
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" />
      </head>

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
