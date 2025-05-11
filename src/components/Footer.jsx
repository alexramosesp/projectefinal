import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <p>
                © 2025 Alex Ramos ·{" "}
                <a href="mailto:alexramos140403@gmail.com">{t("footer.contactMe")}</a>
            </p>
        </footer>
    );
}

export default Footer;
