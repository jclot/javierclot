"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.imageBackground}>
        <div className={styles.welcome}>
          <div className={styles.mainTitle}>
            <h1>JAVIER CLOT</h1>
          </div>
          <div className={styles.mainDescription}>
            <p>Experiencia que resuelve, integridad que guía. Tu aliado legal en cada paso.</p>
            <Link className={styles.contactButton} href="/contact">CONTACT</Link>
          </div>
        </div>
      </div>
      <hr className="commonHr" />
      <div className={styles.mainContent}>
        <section className={styles.biography}>
          <h1 className={styles.biographyTitle}>Biography</h1>
          <div className={styles.biographyDescription}>
            <p>Javier Clot, a notarial lawyer, integrates modernity and tradition in his legal practice. He has developed a distinct method that combines his clients' modern needs with legal rigour through more than three decades of experience. His career has led him through a variety of experiences, which have broadened his perspective on the law. As an independent professional, Javier is committed to providing a close and accessible service, maintaining his sophistication and excellence. His commitment is evident: to provide cutting-edge and efficient legal solutions, with a personal touch that distinguishes from the first meeting.
            </p>
          </div>
        </section>
        <hr className="commonHr" />
        <section className={styles.specialization}>
          <h1 className={styles.specializationTitle}>Specialization</h1>
          <div className={styles.specializationDescription}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut sem sed leo eleifend tincidunt id ut lacus. Fusce feugiat ex risus, ac pharetra neque rutrum at. Donec gravida commodo ex ut cursus. Duis lacus libero, elementum in tincidunt eget, placerat non libero. Phasellus tortor elit, laoreet in vestibulum vitae, tristique in eros. Nullam vel diam tortor. Fusce vitae porttitor nisl. Duis lacinia porta ullamcorper. Aliquam erat volutpat. Curabitur a sollicitudin mi, non bibendum nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis molestie tellus. Nunc scelerisque elit ut lobortis ullamcorper. Vestibulum sagittis accumsan magna, a laoreet nisl mattis eget. Quisque dui ante, maximus vitae lacus a, volutpat iaculis nisl. Pellentesque a est eget diam consectetur consequat sed sed quam.</p>
          </div>
        </section>
        <hr className="commonHr" />
        <section className={styles.services}>
          <h1 className={styles.servicesTitle}>Services</h1>
          <div className={styles.servicesDescription}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut sem sed leo eleifend tincidunt id ut lacus. Fusce feugiat ex risus, ac pharetra neque rutrum at. Donec gravida commodo ex ut cursus. Duis lacus libero, elementum in tincidunt eget, placerat non libero. Phasellus tortor elit, laoreet in vestibulum vitae, tristique in eros. Nullam vel diam tortor. Fusce vitae porttitor nisl. Duis lacinia porta ullamcorper. Aliquam erat volutpat. Curabitur a sollicitudin mi, non bibendum nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis molestie tellus. Nunc scelerisque elit ut lobortis ullamcorper. Vestibulum sagittis accumsan magna, a laoreet nisl mattis eget. Quisque dui ante, maximus vitae lacus a, volutpat iaculis nisl. Pellentesque a est eget diam consectetur consequat sed sed quam.</p>
          </div>
        </section>
        <button onClick={async () => {
          await fetch("/api/emails", { method: "POST" });
        }} >
          Send button
        </button>
      </div>
    </main>
  );
}
