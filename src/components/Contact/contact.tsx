"use client";

import styles from "./contact.module.css";
import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_1qxpxhf', 'template_8bl5qbt', form.current, 'aoP9GOS9tYxE8lMp5')
                .then(
                    () => {
                        console.log("SUCESS");
                    },
                    (error) => {
                        console.log('FAILED', error.text);
                    },
                );
        }
    };

    return (
        <div className={styles.contact_forma}>
            <div className={styles.contact_title}>
                <h1>Contact</h1>
            </div>
            <form autoComplete="off" ref={form} onSubmit={sendEmail} className={styles.contact_form}>
                <div className={styles.form_group}>
                    <label htmlFor="name">Name</label>
                    <input autoComplete="off" type="text" id="name" name="user_name" />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="email">Email</label>
                    <input autoComplete="off" type="email" id="email" name="user_email" />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required />
                </div>
                <button type="submit" className={styles.submit_button}>Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;