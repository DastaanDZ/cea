import { Activity, ActivityLink } from "@prisma/client";
import styles from "./activityHeader.module.css";
import { FaBookmark } from "react-icons/fa";
import downloadPdf from "@/utils/downloadPdf";
import DownloadPdfLink from "./DownloadPdfLink";

interface ActivityHeaderProps {
  activity: Activity | null;
  link: ActivityLink[] | null;
}

export const ActivityHeader: React.FC<ActivityHeaderProps> = ({
  activity,
  link,
}) => {
  let simpleDate = "";
  let simpleDeadline = "";

  if (activity) {
    const activityDateObject = activity.activityDate;
    const deadlineObject = activity.deadline;

    if (activityDateObject) {
      const year = activityDateObject.getFullYear();
      const month = activityDateObject.getMonth() + 1; // Month is zero-indexed, so adding 1
      const activityDate = activityDateObject.getDate();
      simpleDate = `${year}-${month < 10 ? "0" + month : month}-${
        activityDate < 10 ? "0" + activityDate : activityDate
      }`;
    }

    if (deadlineObject) {
      const year = deadlineObject.getFullYear();
      const month = deadlineObject.getMonth() + 1; // Month is zero-indexed, so adding 1
      const deadlineDate = deadlineObject.getDate();
      simpleDeadline = `${year}-${month < 10 ? "0" + month : month}-${
        deadlineDate < 10 ? "0" + deadlineDate : deadlineDate
      }`;
    }
  }

  const handleDownloadPdf = (link: string) => {
    downloadPdf(link);
  };

  return (
    <>
      <div className={styles.activeIdMain}>
        <div className={styles.activeIdHead}>
          <div className={styles.bookmarkContainer}>
            <FaBookmark className={styles.bookmark} />
          </div>
          <h1>{activity?.name}</h1>
        </div>
        <ul>
          <li>
            <h3>Event Date</h3>
            <p>{simpleDate}</p>
          </li>
          <li>
            <h3>Reg. Deadline</h3>
            <p>{simpleDeadline}</p>
          </li>
          <li>
            <h3>Venue</h3>
            <p>{activity?.venue}</p>
          </li>
          <li>
            <h3>Event Guidelines</h3>
            {link && activity?.name && (
              <DownloadPdfLink name={activity?.name} link={link[1].link} />
            )}
          </li>
        </ul>
      </div>
    </>
  );
};
