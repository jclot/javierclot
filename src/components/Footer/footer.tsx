import React from "react";
import styles from "./footer.module.css";

const Footer: React.FC = () => {
    return (
        <div>
            <hr className="commonHr" />
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h2>Contact me</h2>
                        <p>WhatsApp: <a href="tel:+50683827865">(+506) 8382-7865</a></p>
                        <p>Email: <a href="mailto:jaclot@hotmail.com">jaclot@hotmail.com</a></p>
                    </div>
                    <div className={styles.footerLogo}>
                        <h1>JAVIER CLOT</h1>
                    </div>
                    <div className={styles.footerSection}>
                        <h2>Address</h2>
                        <p>C087, San José, San Pedro, Freses, 11801, CR</p>
                    </div>
                    <div className={styles.footerSection}>
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
                <div className={styles.footerBottom}>
                    <p>&copy; {new Date().getFullYear()} JAVIER CLOT. All rights reserved. Created by <a href="https://github.com/jclot/">Julian Clot</a>.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;