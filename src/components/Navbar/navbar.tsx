"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { CiMenuBurger } from "react-icons/ci";

const Navbar: React.FC = () => {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropDown = () => {
        setDropDownOpen(!dropDownOpen);
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">JAVIER<br></br>CLOT</Link>
            </div>
            <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <CiMenuBurger size={40} /> : <CiMenuBurger size={40} />}
            </div>
            <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.dropDown} onMouseEnter={toggleDropDown} onMouseLeave={toggleDropDown}>
                    <Link href="/areas">Areas of practice</Link>
                    {dropDownOpen && (
                        <ul className={styles.dropDownMenu}>
                            <li>
                                <Link href="/areas/practiceone">Criminal law</Link>
                            </li>
                            <li>
                                <Link href="/areas/practicetwo">Labor law</Link>
                            </li>
                            <li>
                                <Link href="/areas/practicetree">Commercial law</Link>
                            </li>
                            <li>
                                <Link href="/areas/practicefour">Condominium</Link>
                            </li>
                        </ul>
                    )}
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