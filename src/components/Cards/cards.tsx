import React from "react";
import styles from "./cards.module.css";
import Image from "next/image";

const Cards: React.FC = () => {

    return (
        <div className={styles.cardContainers}>
            <div className={styles.card}>
                <Image
                    src="/fotoFirma.jpg"
                    width={1000}
                    height={1000}
                    alt="AreasOfPractice"
                />
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>Criminal law</h2>
                    <p className={styles.cardDescription}>Defense and legal representation in criminal cases, protecting the rights of the accused in judicial proceedings.</p>
                </div>
            </div>
            <div className={styles.card}>
                <Image
                    src="/fotoMano.jpg"
                    width={1000}
                    height={1000}
                    alt="AreasOfPractice"
                />
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>Labor law</h2>
                    <p className={styles.cardDescription}>Advice and resolution of labor disputes between employers and employees, ensuring compliance with labor regulations.</p>
                </div>
            </div>
            <div className={styles.card}>
                <Image
                    src="/fotoPortafolio.jpg"
                    width={1000}
                    height={1000}
                    alt="AreasOfPractice"
                />
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>Commercial law</h2>
                    <p className={styles.cardDescription}>Legal assistance to companies in the management of contracts, commercial agreements, and protection of their commercial interests.</p>
                </div>
            </div>
            <div className={styles.card}>
                <Image
                    src="/fotoPortafolio4.jpg"
                    width={1000}
                    height={1000}
                    alt="AreasOfPractice"
                />
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>Condominiums</h2>
                    <p className={styles.cardDescription}>Management and resolution of conflicts related to horizontal property, ensuring compliance with condominium regulations.</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;
