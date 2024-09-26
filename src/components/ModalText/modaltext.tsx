// It is not implemented so far, but it is being considered to facilitate the reading of the information.

import React from 'react';
import styles from './modaltext.module.css';

interface ModalTextProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const ModalText: React.FC<ModalTextProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default ModalText;
