import React from "react";
import styles from "./devCard.module.css";
import { developers } from "./../data/developers";
import { useRouter } from "next/navigation";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

interface DeveloperProps {
  developer: {
    id: number;
    name: string;
    title: string;
    photo: string;
    linkedin: string;
    github: string;
    instagram: string;
  };
}

export const DevCard: React.FC<DeveloperProps> = ({ developer }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div
        className={styles.imageContainer}
        style={{
          backgroundImage: `url(${developer.photo})`,
          height: "100%",
          width: "100%",
        }}
      >
        <div className={styles.backgroundContainer}>
          <div className={styles.name}>{developer.name}</div>
          <div className={styles.links}>
            <div
              className={styles.iconBackground}
              onClick={() => router.push(developer.linkedin)}
            >
              <BiLogoLinkedin className={styles.icon} />
            </div>
            <div
              className={styles.iconBackground}
              onClick={() => router.push(developer.github)}
            >
              <FaGithub className={styles.icon} />
            </div>
            {developer.instagram && (
              <div
                className={styles.iconBackground}
                onClick={() => router.push(developer.instagram)}
              >
                <GrInstagram className={styles.icon} />
              </div>
            )}
          </div>
          <div className={styles.title}>{developer.title}</div>
        </div>
      </div>
    </div>
  );
};
