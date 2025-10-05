import footerStyle from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={footerStyle.footerContainer}>
            <p className={footerStyle.footerText}>&copy; Gabby French | Made with ❤️ in the UK</p>

            <div className={footerStyle.footerSocialIcons}>
                <a 
                    href="https://github.com/gabbythecoder"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>

                <a
                    href="https://www.linkedin.com/in/gabbyy-frenchh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <i className="fa-brands fa-linkedin"></i>
                </a>

            </div>
        </footer>
    )
}