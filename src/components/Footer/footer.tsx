import React from "react";
import styles from "./footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.footer_section}>
                    <h2>Contact me</h2>
                    <p>WhatsApp: <a href="tel:+50683827865">(+506) 8382-7865</a></p>
                    <p>Email: <a href="mailto:jsauma@saumarossi.com">jaclot@hotmail.com</a></p>
                </div>
                <div className={styles.footer_logo}>
                    <h1>JAVIER CLOT</h1>
                </div>
                <div className={styles.footer_section}>
                    <h2>Address</h2>
                    <p>37 Street, Barrio Dent, San José 11501, CR</p>
                </div>
                <div className={styles.footer_section}>
                    <h2>Links</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/areas">Areas of Practice</a></li>
                        <li><a href="/industries">Industries</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.footer_bottom}>
                <p>&copy; {new Date().getFullYear()} SAUMA ROSSI. All rights reserved. Powered by Neurobrand.</p>
            </div>
        </footer>
    );
};

export default Footer;