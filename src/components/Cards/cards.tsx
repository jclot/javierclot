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
                    <h2 className={styles.cardTitle}>Card Title</h2>
                    <p className={styles.cardDescription}>This is a description of the card. It provides some details about the content or purpose of the card.</p>
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
                    <h2 className={styles.cardTitle}>Card Title</h2>
                    <p className={styles.cardDescription}>This is a description of the card. It provides some details about the content or purpose of the card.</p>
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
                    <h2 className={styles.cardTitle}>Card Title</h2>
                    <p className={styles.cardDescription}>This is a description of the card. It provides some details about the content or purpose of the card.</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;
