import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">JAVIER<br></br>CLOT</Link>
            </div>
            <ul className={styles.navLinks}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/areas">Areas of practice</Link>
                </li>
                <li>
                    <Link href="/industries">Industries</Link>
                </li>
                <li>
                    <Link href="/about">About me</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;