import React from "react";
import styles from '../areas.module.css';
import Image from "next/image";

const PracticeTwo: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.areasIntroduction}>
        <div className={styles.areasTitle}>
          <h1>Labor law</h1>
        </div>
        <div className={styles.areasDescription}>
          <p>Javier Clot provides labor legal advice to companies and employees about the settlement of labor disputes. His methods include examining and creating employment contracts as well as representing clients in collective bargaining and labor disputes. Javier is committed to defending workers' rights and making sure businesses abide by relevant labor laws. He is aware of the complexity of labor rules. Javier Clot ensures fair and balanced labor relations by providing practical ways to prevent and resolve labor disputes with painstaking attention to detail.</p>
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
          <p className={styles.cardDescription} style={{ textDecoration: 'underline' }}><a href="https://www.britannica.com/topic/labour-law" target="_blank" rel="noopener noreferrer">Learn more</a></p>
        </div>
      </div>
    </div>
  );
};

export default PracticeTwo;
