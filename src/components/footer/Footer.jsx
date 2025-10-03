import footerStyle from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={footerStyle.footerContainer}>
            <p className={footerStyle.footerText}>&copy; Gabby French | Made with ❤️ in the UK</p>
        </footer>
    )
}