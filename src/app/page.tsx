import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.image_background}>
        <div className={styles.welcome}>
          <div className={styles.main_title}>
            <h1>JAVIER<br></br>CLOT</h1>
          </div>
          <div className={styles.main_description}>
            <p>aksndhjla shdjashdl;ahjs;lkdj ksljdaklsjdkl;ajskldja skldjalksjdaskdljalsk;d asdhaksjdh jasd asdasdasd asdasd </p>
            <Link className={styles.contact_button} href="/contact">CONTACT</Link>
          </div>
        </div>
      </div>
      <div className={styles.main_content}>
        <section className={styles.biography}>
          <h1 className={styles.biography_title}>Biography</h1>
          <div className={styles.biography_description}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut sem sed leo eleifend tincidunt id ut lacus. Fusce feugiat ex risus, ac pharetra neque rutrum at. Donec gravida commodo ex ut cursus. Duis lacus libero, elementum in tincidunt eget, placerat non libero. Phasellus tortor elit, laoreet in vestibulum vitae, tristique in eros. Nullam vel diam tortor. Fusce vitae porttitor nisl. Duis lacinia porta ullamcorper. Aliquam erat volutpat. Curabitur a sollicitudin mi, non bibendum nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sagittis molestie tellus. Nunc scelerisque elit ut lobortis ullamcorper. Vestibulum sagittis accumsan magna, a laoreet nisl mattis eget. Quisque dui ante, maximus vitae lacus a, volutpat iaculis nisl. Pellentesque a est eget diam consectetur consequat sed sed quam.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
