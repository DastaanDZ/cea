import React from "react";
import styles from "./OurExperienceCard.module.css";
import Image from "next/image";
import boxImg from "../public/bg.jpg";
import linkdin from "@/public/Linkdin.png";
import github from "@/public/github.png";
import { RiInstagramFill } from "react-icons/ri";
import { Activity, ActivityLink } from "@prisma/client";
import { ExtendsHook } from "@prisma/client/runtime/library";

export const OurExperienceCard: React.FC<any> = (data) => {
  return (
    <>
      <div className={styles.cardDiv}>
        <h3>{data.name}</h3>
        <div className={styles.cardBox}>
          {/* <Image
            src={boxImg}
            alt=""
            style={{ maxWidth: "100%", height: "100%", borderRadius: "0.5rem" }}
            objectFit="cover"
            objectPosition="centre"
          /> */}
          <img
            src={data.link[0].link}
            alt=""
            style={{
              maxWidth: "100%",
              height: "100%",
              borderRadius: "0.5rem",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div className={styles.socialDiv}>
          <div className={styles.linkDiv}>
            {/* <Image src={linkdin} alt="" className={styles.circleImage} /> */}
            <RiInstagramFill
              // style={{ background: "transparent", color: "#afafaf" }}
              className={styles.insta}
              // size={25}
            />
          </div>
          {/* <div className={styles.linkDiv}>
            <Image src={github} alt="" className={styles.circleImage} />
          </div> */}
        </div>
      </div>
    </>
  );
};
