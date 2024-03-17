import { Activity } from "@prisma/client";
import styles from "./activityCard.module.css";

export const ActivityCard: React.FC<Activity> = (data) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.days}>
          <p>1</p>
          <p>Days</p>
        </div>
        <div className={styles.imgContainer}>
          <img src={data.link[0].link} alt="" className={styles.img} />
        </div>
        <div className={styles.infoContainer}>
          <p>{data.name}</p>
          <p>{data.deadline.toString()}</p>
          <div className={styles.reg}>
            <p>Fee: ₹ 799</p>
            <div className={styles.button}>Register</div>
          </div>
        </div>
      </div>
    </>
  );
};
