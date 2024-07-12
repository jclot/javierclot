"use client";

import styles from "./contact.module.css";
import React, { useState, FormEvent } from 'react';

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<string>('');

    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('Email sent successfully!');
                form.reset();
            } else {
                setStatus('Failed to send email. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred. Please try again.');
        }
    };

    return (
        <div className={styles.contactForma}>
            <div className={styles.contactTitle}>
                <h1>Contact</h1>
            </div>
            <form autoComplete="off" onSubmit={sendEmail} className={styles.contactForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input autoComplete="off" type="text" id="name" name="user_name" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input autoComplete="off" type="email" id="email" name="user_email" />
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