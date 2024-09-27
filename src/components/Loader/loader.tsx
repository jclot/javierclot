import React from "react";
import styles from "./loader.module.css";

const Loader: React.FC = () => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.spinner}></div>
            </div>
        </div>
    )
}

export default Loader;