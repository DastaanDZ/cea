import styles from "./activityHeader.module.css";
import { FaBookmark } from "react-icons/fa";

export const ActivityHeader = () => {
  return (
    <>
      <div className={styles.activeIdMain}>
        <div className={styles.activeIdHead}>
          <div className={styles.bookmarkContainer}>
            <FaBookmark className={styles.bookmark} />
          </div>
          <h1>Prithvi ‘24</h1>
        </div>
        <ul>
          <li>
            <h3>Event Date</h3>
            <p>06-02-2024</p>
          </li>
          <li>
            <h3>Reg. Deadline</h3>
            <p>06-02-2024</p>
          </li>
          <li>
            <h3>Venue</h3>
            <p>Aryabhatta Hall</p>
          </li>
          <li>
            <h3>Event Guidelines</h3>
            <p>Download PDF</p>
          </li>
        </ul>
      </div>
    </>
  );
};
