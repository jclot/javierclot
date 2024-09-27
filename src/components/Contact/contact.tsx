"use client";

import React, { useState, FormEvent } from "react";
import styles from "./contact.module.css";
import Modal from "../Modal/modal";
import Loader from "../Loader/loader";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_number: "",
        message: "",
    });
    const [status, setStatus] = useState<string | null>(null);
    const [isModalSuccessOpen, setIsModalSuccessOpen] = useState<boolean>(false)
    const [isModalFailureOpen, setIsModalFailureOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("/api/emails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (result.success) {
                setStatus("Your message has been sent successfully!");
                setIsModalSuccessOpen(true);
            } else {
                setStatus("Failed to send message.");
                setIsModalFailureOpen(true);
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setStatus("Failed to send message.");
            setIsModalFailureOpen(true);
        } finally {
            setLoading(false);
        }
    };

    const closeModal = () => {
        setIsModalSuccessOpen(false);
        setIsModalFailureOpen(false);
    };

    return (
        <div className={styles.contactForma}>
            <div className={styles.contactTitle}>
                <h1>Contact</h1>
            </div>
            <form autoComplete="off" className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                        autoComplete="off"
                        type="text"
                        id="name"
                        name="user_name"
                        placeholder="First and last name"
                        value={formData.user_name}
                        onChange={handleChange}
                        className={styles.placeholderColor}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">E-mail</label>
                    <input
                        autoComplete="off"
                        type="email"
                        id="email"
                        name="user_email"
                        placeholder="example@gmail.com"
                        value={formData.user_email}
                        onChange={handleChange}
                        className={styles.placeholderColor}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="number">Phone number</label>
                    <input
                        autoComplete="off"
                        type="tel"
                        id="number"
                        name="user_number"
                        placeholder="(506)"
                        value={formData.user_number}
                        onChange={handleChange}
                        className={styles.placeholderColor}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Some message"
                        value={formData.message}
                        onChange={handleChange}
                        className={styles.placeholderColor}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>SUBMIT</button>
            </form>
            {loading && <Loader />}
            <Modal isOpen={isModalSuccessOpen} onClose={closeModal}>
                <h2 style={{ marginBottom: 10, color: '#B69D74', fontStyle: 'italic' }}>Your message has been sent successfully!</h2>
                <p>We will get back to you as soon as possible.</p>
            </Modal>
            <Modal isOpen={isModalFailureOpen} onClose={closeModal}>
                <h2 style={{ marginBottom: 10, color: '#B69D74', fontStyle: 'italic' }}>Your message could not be sent.</h2>
                <p>Please try again, or send an email directly to <a href="mailto:jaclot@hotmail.com">jaclot@hotmail.com</a>.</p>
            </Modal>
        </div>
    );
};

export default ContactForm;