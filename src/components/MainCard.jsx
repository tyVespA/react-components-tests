import React from "react";
import styles from "../styles/MainCard.module.css";

function MainCard({ title, children }) {
  return (
    <a>
      <div className={styles.mainCard}>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </a>
  );
}

export default MainCard;
