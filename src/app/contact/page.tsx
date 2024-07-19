import React from "react";
import ContactForm from "@/components/Contact/contact";
import styles from "./contact.maps.module.css";

const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <ContactForm />
      <div className={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.62953370385813!2d-84.0389322999448!3d9.927916897839413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e3bcd5f05d8d%3A0x94af20777b102333!2sGrupo%20Jur%C3%ADdico%20Venegas!5e0!3m2!1ses!2scr!4v1721067884105!5m2!1ses!2scr" height="450" loading="lazy" ></iframe>
        <script></script>
      </div>
    </div>
  );
};

export default Contact;
