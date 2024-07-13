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
            <p>aksndhjla shdjashdl;ahjs;lkdj ksljdaklsjdkl;ajskldja skldjalksjdaskdljalsk;d asdhaksjdh jasd asdasdasd asdasd </p>
            <Link className={styles.contactButton} href="/contact">CONTACT</Link>
          </div>
        </div>
      </div>
      <hr className={styles.mainContentBreak} />
      <div className={styles.mainContent}>
        <section className={styles.biography}>
          <h1 className={styles.biographyTitle}>Biography</h1>
          <div className={styles.biographyDescription}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut sem sed leo eleifend tincidunt id ut lacus. Fusce feugiat ex risus, ac pharetra neque rutrum at. Donec gravida commodo ex ut cursus. Duis lacus libero, elementum in tincidunt eget, placerat non libero. Phasellus tortor elit, laoreet in vestibulum vitae, tristique in eros. Nullam vel diam tortor. Fusce vitae porttitor nisl. Duis lacinia porta ullamcorper. Aliquam erat volutpat. Curabitur a sollicitudin mi, non bibendum nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis molestie tellus. Nunc scelerisque elit ut lobortis ullamcorper. Vestibulum sagittis accumsan magna, a laoreet nisl mattis eget. Quisque dui ante, maximus vitae lacus a, volutpat iaculis nisl. Pellentesque a est eget diam consectetur consequat sed sed quam.</p>
          </div>
        </section>
        <hr className={styles.mainContentBreak} />
        <section className={styles.specialization}>
          <h1 className={styles.specializationTitle}>Specialization</h1>
          <div className={styles.specializationDescription}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut sem sed leo eleifend tincidunt id ut lacus. Fusce feugiat ex risus, ac pharetra neque rutrum at. Donec gravida commodo ex ut cursus. Duis lacus libero, elementum in tincidunt eget, placerat non libero. Phasellus tortor elit, laoreet in vestibulum vitae, tristique in eros. Nullam vel diam tortor. Fusce vitae porttitor nisl. Duis lacinia porta ullamcorper. Aliquam erat volutpat. Curabitur a sollicitudin mi, non bibendum nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis molestie tellus. Nunc scelerisque elit ut lobortis ullamcorper. Vestibulum sagittis accumsan magna, a laoreet nisl mattis eget. Quisque dui ante, maximus vitae lacus a, volutpat iaculis nisl. Pellentesque a est eget diam consectetur consequat sed sed quam.</p>
          </div>
        </section>
        <hr className={styles.mainContentBreak} />
        <section className={styles.services}>
          <h1 className={styles.servicesTitle}>Services</h1>
          <div className={styles.servicesDescription}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut sem sed leo eleifend tincidunt id ut lacus. Fusce feugiat ex risus, ac pharetra neque rutrum at. Donec gravida commodo ex ut cursus. Duis lacus libero, elementum in tincidunt eget, placerat non libero. Phasellus tortor elit, laoreet in vestibulum vitae, tristique in eros. Nullam vel diam tortor. Fusce vitae porttitor nisl. Duis lacinia porta ullamcorper. Aliquam erat volutpat. Curabitur a sollicitudin mi, non bibendum nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis molestie tellus. Nunc scelerisque elit ut lobortis ullamcorper. Vestibulum sagittis accumsan magna, a laoreet nisl mattis eget. Quisque dui ante, maximus vitae lacus a, volutpat iaculis nisl. Pellentesque a est eget diam consectetur consequat sed sed quam.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
