import React from "react";
import styles from '../areas.module.css';
import Image from "next/image";

const PracticeOne: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.areasIntroduction}>
        <div className={styles.areasTitle}>
          <h1>Condominiums</h1>
        </div>
        <div className={styles.areasDescription}>
          <p>Javier Clot offers owners and managers of horizontal properties specific advise in the condominium market. He has drafted and reviewed condominium rules, mediated disputes between condo owners, and represented condo owners in lawsuits pertaining to condominiums. Javier makes sure that everyone knows the rules and abides by them, so that people living in condominium complexes can live in harmony with one another. His legal strategy guarantees the upholding of property rights and appropriate property management, fostering a secure and orderly environment.</p>
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
          <p className={styles.cardDescription} style={{textDecoration:'underline'}}><a href="https://www.britannica.com/topic/property-law" target="_blank" rel="noopener noreferrer">Learn more</a></p>
        </div>
      </div>
    </div>
  );
};

export default PracticeOne;
