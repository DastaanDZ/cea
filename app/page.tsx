import { InterviewExperience } from "@/components/sections/InterviewExp";
import { UserButton, currentUser, useUser } from "@clerk/nextjs";
import styles from "./page.module.css";
import { Resource } from "@/components/sections/Resource";
import ResourcesPage from "./(routes)/resources/page";
import CompExam from "./(routes)/compExam/page";
import { HomePage } from "@/components/sections/HomePage";
import { OurExperience } from "@/components/sections/OurExperience";
import { Competitive } from "@/components/sections/Competitive";
import { Footer } from "@/components/footer";
import InterviewExp from "./(routes)/interviews/[interviewId]/page";
// import { HomePage } from "@/components/sections/HomePage";
// import { Navbar } from "@/components/Navbar";
// import { Competitive } from "@/components/sections/Competitive";
// import { Footer } from "@/components/footer";
// import { InterviewForm } from "@/components/forms/InterviewForm";
// import { Rating } from "react-simple-star-rating";
// import LoadMore from "./(routes)/loadMore/page";
// import ResourceMaterial from "./(routes)/resources/[resourceId]/page";
// import Resources from "./(routes)/resources/page";

export default async function Home() {
  try {
    // console.log("Before currentUser()");
    let user;
    let retryCount = 0;

    while (!user && retryCount < 3) {
      try {
        user = await currentUser();
        console.log(user?.emailAddresses[0].emailAddress);
      } catch (error) {
        // console.error("Error fetching user:", error);
        retryCount++;
        // console.log(`Retrying fetch. Attempt ${retryCount}`);
      }
    }

    // console.log("After currentUser(), user:", user);
    return (
      <>
        <HomePage />
        <div className={styles.seperator}></div>
        <OurExperience />
        <div className={styles.seperator}></div>
        <Competitive />
        <div className={styles.seperator}></div>
        <Resource />
        <div className={styles.seperator}></div>
        <InterviewExperience />
      </>
    );
  } catch (error) {
    // console.error("Error fetching user:", error);
    return <div>Error fetching user.</div>;
  }
}
