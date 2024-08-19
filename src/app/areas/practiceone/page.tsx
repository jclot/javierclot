import React from "react";
import styles from './practiceone.module.css';

const PracticeOne: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.areasIntroduction}>
        <div className={styles.areasTitle}>
          <h1>Practice #1</h1>
        </div>
        <div className={styles.areasDescription}>
          <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut sem sed leo eleifend tincidunt id ut lacus. Fusce feugiat ex risus, ac pharetra neque rutrum at. Donec gravida commodo ex ut cursus. Duis lacus libero, elementum in tincidunt eget, placerat non libero. Phasellus tortor elit, laoreet in vestibulum vitae, tristique in eros. Nullam vel diam tortor. Fusce vitae porttitor nisl. Duis lacinia porta ullamcorper. Aliquam erat volutpat. Curabitur a sollicitudin mi, non bibendum nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis molestie tellus. Nunc scelerisque elit ut lobortis ullamcorper. Vestibulum sagittis accumsan magna, a laoreet nisl mattis eget. Quisque dui ante, maximus vitae lacus a, volutpat iaculis nisl. Pellentesque a est eget diam consectetur consequat sed sed quam.</p>
        </div>
      </div>
    </div>
  );
};

export default PracticeOne;
