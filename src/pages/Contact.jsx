import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Contact() {
    const { t } = useTranslation();

    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>{t("contact.title")}</h1>
            <p className="contact-subtitle">{t("contact.intro")}</p>
            <div className="contact-info">
                <p><span className="icon"></span>{t("contact.address")}</p>
                <p><span className="icon"></span>{t("contact.phone")}</p>
                <p><span className="icon">️</span>{t("contact.email")}</p>
                <p><span className="icon"></span>{t("contact.note")}</p>
            </div>
            <button className="contact-button" onClick={() => window.location.href = "mailto:alexramos140403@gmail.com"}>
                {t("contact.button")}
            </button>
        </motion.div>
    );
}

export default Contact;
