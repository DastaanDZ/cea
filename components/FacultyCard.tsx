import { Activity } from "@prisma/client";
import styles from "./facultyCard.module.css";

export const FacultyCard: React.FC<any> = (data) => {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.wave} src="/waveLines.png" alt="" />
        <div className={styles.detailWrapper}>
          <div className={styles.cardHeading}>
            <img className={styles.profPic} src="/vaibhav.jpg" alt="photo" />
            <h1>Dr. Rohan Bhasker</h1>
          </div>
          <div className={styles.cardDetails}>
            <p className={styles.email}>
              <img src="/email.png" alt="Email" />
              <p>rohan@nitc.ac.in</p>
            </p>
            <p className={styles.contact}>
              <img src="/contact.png" alt="Contact" />
              <p>+91 8888 8888 88</p>
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
