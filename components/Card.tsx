import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdEngineering } from "react-icons/md";
import { FaArrowRight, FaHome } from "react-icons/fa";
import { RightArrowButton } from "./RightArrowButton";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { Icons } from "./Icons";
import { CompetitiveExam, Resources } from "@prisma/client";

export const Card: React.FC<Resources | CompetitiveExam> = (card) => {
  let bgColor = "rgba(255, 255, 255, 0.2)";
  if (card.type !== "core" && card.type !== "coding") {
    if (card.name === "UPSC") {
      bgColor = "#35D870";
    } else if (card.name === "CAT EXAM") bgColor = "#017FDD";
    else bgColor = "#F8C733";
  }

  console.log("Card Data");
  console.log(card);

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.cardTop}>
          <div
            className={styles.imageStyle}
            style={{
              backgroundColor: bgColor,
              borderRadius: "4px",
            }}
          >
            <Icons type={card.type} name={card.name} />
          </div>
          <div className={styles.headingOne}>{card.type}</div>
        </div>

        <div className={styles.cardMiddle}>
          <div className={styles.headingTwo}>{card.name}</div>
          <div className={styles.middleHeading}>
            <div className={styles.headingThree}>{card.title}</div>
            <div className={styles.headingFour}>{card.subTitle}</div>
          </div>
        </div>

        <Link
          className={styles.cardBottom}
          style={{ color: bgColor }}
          href={`/${
            card.type === "core" || card.type === "coding"
              ? "resources"
              : "compExam"
          }/${card.id}`}
        >
          Know More{" "}
          <FaArrowRight
            style={{ backgroundColor: "inherit", marginLeft: "9px" }}
          />
        </Link>
      </div>

      {/* <RightArrowButton text="Know More" redirectLink="#" /> */}
      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>
      <div className={styles.glow3}></div>
    </div>
  );
};
