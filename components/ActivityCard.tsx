import { Activity } from "@prisma/client";
import styles from "./activityCard.module.css";

export const ActivityCard: React.FC<any> = (data) => {
  let simpleDeadline = "";

  if (data) {
    const deadlineObject = new Date(data.deadline);

    if (deadlineObject) {
      const year = deadlineObject.getFullYear();
      const month = deadlineObject.getMonth() + 1; // Month is zero-indexed, so adding 1
      const deadlineDate = deadlineObject.getDate();
      simpleDeadline = `${year}-${month < 10 ? "0" + month : month}-${
        deadlineDate < 10 ? "0" + deadlineDate : deadlineDate
      }`;
    }
  }

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
          <p>{simpleDeadline}</p>
          <div className={styles.reg}>
            <p>Fee: ₹ 0</p>
            {/* <div className={styles.button}>Register</div> */}
          </div>
        </div>
      </div>
    </>
  );
};
