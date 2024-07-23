import React from "react";
import ContactForm from "@/components/Contact/contact";
import styles from "./contact.maps.module.css";

const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <ContactForm />
    </div>
  );
};

export default Contact;
