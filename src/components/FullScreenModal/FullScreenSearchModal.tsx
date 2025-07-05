import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./fullScreenSearchModal.module.scss";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const mockData = Array.from({ length: 20 }, (_, i) => ({
  title: `List ${i + 1}`,
  items: Array.from({ length: 10 }, (_, j) => `Item ${j + 1}`),
}));

export const FullScreenSearchModal: React.FC<Props> = ({ isOpen, onClose }) => {
  // disable body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.header}>
        <input type="text" className={styles.input} placeholder="Search..." />
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
      </div>
      <div className={styles.results}>
        {mockData.map((list, idx) => (
          <div key={idx} className={styles.listContainer}>
            <h3>{list.title}</h3>
            <ul>
              {list.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>,
    document.body
  );
};
