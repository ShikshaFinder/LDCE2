"use client";
import React from "react";
import styles from "./style.module.scss";

export default function Index({ index, title, manageModal }) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>Click on View</p>
    </div>
  );
}
