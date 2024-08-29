import React from "react";
import styles from '../areas.module.css';
import Image from "next/image";

const PracticeOne: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.areasIntroduction}>
        <div className={styles.areasTitle}>
          <h1>Criminal law</h1>
        </div>
        <div className={styles.areasDescription}>
          <p>Javier Clot offers robust criminal defense services, defending those facing criminal charges and making sure their rights are upheld throughout the whole legal process. Javier offers a tailored and strategic defense, drawing from his extensive expertise defending complicated cases ranging from misdemeanors to serious offenses. His thorough understanding of criminal law enables him to manage difficult circumstances with skill, standing up for his clients in court and, when required, negotiating settlements. Javier Clot is dedicated to providing his clients with strong legal counsel, upholding their rights and freedoms with honesty and tenacity.</p>
        </div>
      </div>
      <div className={styles.card}>
        <Image
          src="/fotoFirma.jpg"
          width={1000}
          height={1000}
          alt="AreasOfPractice"
        />
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>Criminal law</h2>
          <p className={styles.cardDescription} style={{ textDecoration: 'underline' }}><a href="https://www.britannica.com/topic/criminal-law" target="_blank" rel="noopener noreferrer">Learn more</a></p>
        </div>
      </div>
    </div>
  );
};

export default PracticeOne;
