import { Activity } from "@prisma/client";
import { BsSuitcaseLgFill } from "react-icons/bs";
import styles from "./facultyCard.module.css";

interface FacultyProps {
  faculty: {
    id: number;
    name: string;
    title: string;
    photo: string;
    phone: string;
    email: string;
  };
}

export const FacultyCard: React.FC<FacultyProps> = ({ faculty }) => {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.wave} src="/waveLines.png" alt="" />
        <div className={styles.detailWrapper}>
          <div className={styles.cardHeading}>
            <img className={styles.profPic} src={faculty.photo} alt="photo" />
            <h1>{faculty.name}</h1>
          </div>
          <div className={styles.cardDetails}>
            <p className={styles.email}>
              <BsSuitcaseLgFill />
              <p>{faculty.title}</p>
            </p>
            <p className={styles.email}>
              <img src="/email.png" alt="Email" />
              <p>{faculty.email}</p>
            </p>
            <p className={styles.contact}>
              <img src="/contact.png" alt="Contact" />
              <p>{faculty.phone}</p>
            </p>
            <p className={styles.db}>
              <img src="db.png" alt="Department Building" />
              <p>DB - 115</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
