import React from "react";
import ContactForm from "@/components/Contact/contact";
import styles from "./contact.maps.module.css";

const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <ContactForm />
      <div className={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1168.4170160528552!2d-84.0388811032349!3d9.928068322068297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scr!4v1721686728986!5m2!1ses!2scr" height="450" loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default Contact;
