import { Nunito_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/Header";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
