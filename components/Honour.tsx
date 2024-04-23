import { ImgProps } from "next/dist/shared/lib/get-img-props";
import React from "react";
import styles from "./honour.module.css";

interface HonourProp {
  text: string;
  //   img: ImgProps;
}

export const Honour: React.FC<HonourProp> = ({ text }) => {
  return (
    <div className={styles.parentDiv}>
      <div className={styles.blankDiv}>
        <img className={styles.img} src="/anamika.jpg" alt="" />
        <div className={styles.textDiv}>
          <p className={styles.colorText}>{text}</p>
          <p className={styles.greyText}>
            A Heartfelt Thanks for Study Resource Support
          </p>
        </div>
      </div>
    </div>
  );
};
