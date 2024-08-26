import React from "react";
import styles from './about.module.css';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutTitle}>
        <h1>About me</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image
            src="/fotoFirma2.jpg"
            alt="Image by the author"
            width={400}
            height={267}
            style={{ border: "1px solid #f5f5f5" }}
          />
        </div>
        <div className={styles.text}>
          <p>Javier Clot is a dedicated professional whose dedication and passion for the law are well known. He is a person who values humane treatment, transparency, and honesty in all his interactions, in addition to his exceptional career in the notarial profession. Javier is distinguished by his empathy and his capacity to comprehend the needs of those who seek his advice, establishing a climate of confidence and trust. He can authentically connect with his clients through his meticulous approach and listening ability, providing solutions that not only meet the highest legal standards but also show a deep respect for the people who trust him.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
