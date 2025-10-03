import Image from "next/image";
import HomepageTitle from "@/../public/images/homepage-title.png";
import PokeballHomepage from "@/../public/images/pokeball-homepage.png";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <h1 className="homepage-welcome">WELCOME TO</h1>

      <Image 
        src={HomepageTitle}
        alt="PokéTalk title on the home page"
        className="homepage-title"
        placeholder="blur"
      />

      <Image 
        src={PokeballHomepage}
        alt="Pokeball icon on the home page"
        className="homepage-pokeball"
        placeholder="blur"
      />

      <div className="homepage-text">
        <p>Drop a comment, give a Poké-rating and see what other trainers are saying.</p>
        <p>It&apos;s like the Pokédex, but way more fun - and with sass!</p>
      </div>

      <Link href={"/pokemons"} className="homepage-button">CHAT &apos;EM ALL</Link>
    </div>
  )
}