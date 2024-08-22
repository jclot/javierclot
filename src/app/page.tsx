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
            <p>Experience that solves, integrity that guides. Your legal ally at every step</p>
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
            <p>Javier Clot has over 30 years of legal expertise and has made a name for himself as one of the most reputable attorneys in the fields of criminal and business law. He has spent his entire professional life assisting people with complicated legal problems by offering legal counsel and representation. His methodical approach and extensive legal knowledge enable him to provide tailored and efficient answers. As a solo attorney now, he still devotes his time to upholding his clients' rights with honesty and passion, promising top-notch legal representation in each and every instance.</p>
          </div>
        </section>
        <hr className="commonHr" />
        <section className={styles.services}>
          <h1 className={styles.servicesTitle}>Services</h1>
          <div className={styles.servicesDescription}>
            <p>To better serve his clients, Javier Clot provides a wide range of legal services. In his capacity as a notary, he offers notarial services, scrupulously and precisely verifying the legitimacy and authenticity of significant documents, including contracts, wills, and deeds. Furthermore, he provides tailored legal advice services, helping his customers navigate intricate legal procedures. Javier Clot offers precise and practical solutions by fusing his extensive experience with a thorough understanding of the law, whether he is handling civil, criminal, or business concerns. His dedication to perfection ensures that every aspect of his practice will receive complete and superior care.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
