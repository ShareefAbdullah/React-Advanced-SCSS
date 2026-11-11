import React from "react";
import styles from "../styles/styles.module.scss";

export const CenteredBlock = () => {
  return (
    <div className={styles.centeredBlock}>
      <ul>
        <li>
          <a href="#">First</a>
        </li>
        <li>Second</li>
        <li>Third</li>
        <li>Fourth</li>
        <li>Fifth</li>
      </ul>
      <a href="#">Empty link two</a>
    </div>
  );
};
