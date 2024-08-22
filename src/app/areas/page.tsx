import React from "react";
import Cards from "@/components/Cards/cards";
import styles from './areas.module.css';

const Areas: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.areasIntroduction}>
        <div className={styles.areasTitle}>
          <h1>Areas of practice</h1>
        </div>
        <div className={styles.areasDescription}>
          <p>Javier Clot guarantees full covering for his customers legal needs by providing a thorough approach in a variety of legal areas. His expertise in labor law helps him to mediate disputes between employers and employees, while his background in criminal law allows him to effectively defend people facing legal action. Furthermore, he counsels businesses and entrepreneurs in the field of commercial law about the safeguarding of their rights and the streamlining of their processes. Lastly, his expertise in condominium law guarantees appropriate administration and settlement of conflicts pertaining to horizontal real estate. To deliver efficient legal solutions, Javier Clot blends his experience with a tailored strategy in each practice area.</p>
        </div>
      </div>
      <Cards />
    </div>

  );
};

export default Areas;
