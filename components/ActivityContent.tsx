import { Activity } from "@prisma/client";
import styles from "./activityContent.module.css";

interface ActivityContentProps {
  activity: Activity | null;
}

export const ActivityContent: React.FC<ActivityContentProps> = ({
  activity,
}) => {
  return (
    <>
      <div className={styles.aboutMain}>
        <h1 className={styles.mobileAbout}>ABOUT</h1>
        <div className={styles.imgContentWrapper}>
          <img src={activity?.link[0].link} className={styles.img} alt="" />
          <div className={styles.aboutDiv}>
            <h1>ABOUT</h1>
            <p>{activity?.desc}</p>
            <input className={styles.expand_btn} type="checkbox" />
            <div className={styles.buttonDiv}>
              {/* <Link> 
              </Link> */}
              <button className={styles.button}>Register Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
