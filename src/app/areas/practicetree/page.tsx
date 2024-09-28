import React from "react";
import styles from '../areas.module.css';
import Image from "next/image";

const PracticeTree: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.areasIntroduction}>
        <div className={styles.areasTitle}>
          <h1>Commercial law</h1>
        </div>
        <div className={styles.areasDescription}>
          <p>Javier Clot assists businesses of all sizes in navigating the intricacies of the business world by offering knowledgeable legal counsel on commercial law. Protecting his clients business interests, Javier provides a comprehensive service that includes everything from company incorporation to contract negotiation and drafting. In order to ensure that every transaction is handled with the highest care and precision, his expertise includes providing advice on mergers, acquisitions, and the resolution of commercial disputes. Javier Clot is committed to helping businesses expand and remain stable by providing them with legal solutions that boost their capacity to make money.</p>
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
          <p className={styles.cardDescription} style={{ textDecoration: 'underline' }}><a href="https://www.britannica.com/topic/property-law" target="_blank" rel="noopener noreferrer">Learn more</a></p>
        </div>
      </div>
    </div>
  );
};

export default PracticeTree;
