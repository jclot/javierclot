import styles from "./contact.module.css";
import React, { useState, FormEvent } from 'react';

const ContactForm: React.FC = () => {
    return (
        <div className={styles.contactForma}>
            <div className={styles.contactTitle}>
                <h1>Contact</h1>
            </div>
            <form autoComplete="off" className={styles.contactForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input autoComplete="off" type="text" id="name" name="user_name" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">E-mail</label>
                    <input autoComplete="off" type="email" id="email" name="user_email" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required />
                </div>
                <button type="submit" className={styles.submitButton}>SUBMIT</button>
            </form>
        </div>
    );
};

export default ContactForm;