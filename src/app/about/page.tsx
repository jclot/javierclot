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
            src="/28564542397_751b9d261e_b.jpg"
            alt="Picture of the author"
            width={400}
            height={267}
            style={{ border: "1px solid #f5f5f5" }}
          />
        </div>
        <div className={styles.text}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut sem sed leo eleifend tincidunt id ut lacus. Fusce feugiat ex risus, ac pharetra neque rutrum at. Donec gravida commodo ex ut cursus. Duis lacus libero, elementum in tincidunt eget, placerat non libero. Phasellus tortor elit, laoreet in vestibulum vitae, tristique in eros. Nullam vel diam tortor. Fusce vitae porttitor nisl. Duis lacinia porta ullamcorper. Aliquam erat volutpat. Curabitur a sollicitudin mi, non bibendum nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis molestie tellus. Nunc scelerisque elit ut lobortis ullamcorper. Vestibulum sagittis accumsan magna, a laoreet nisl mattis eget. Quisque dui ante, maximus vitae lacus a, volutpat iaculis nisl. Pellentesque a est eget diam consectetur consequat sed sed quam.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
