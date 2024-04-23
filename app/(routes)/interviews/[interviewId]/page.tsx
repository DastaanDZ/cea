import React from "react";
import { PageTopHeading } from "@/components/PageTopHeading";
import styles from "./interviewExp.module.css";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { Heading } from "@/components/Heading";
import { IoStar } from "react-icons/io5";
import { useParams, useRouter } from "next/navigation";
import prismadb from "@/lib/prismadb";

export default async function InterviewExp({
  params,
}: {
  params: { interviewId: string };
}) {
  console.log(params);

  const interview = await prismadb.interviewExp.findUnique({
    where: {
      id: params.interviewId,
    },
    include: {
      link: true,
    },
  });

  const starsArray = Array.from(
    { length: interview?.rating ?? 0 },
    (_, index) => (
      <IoStar
        key={index}
        style={{
          marginRight: "0.3rem",
          marginBottom: "0.5rem",
          marginTop: "0.5rem",
          background: "transparent",
        }}
        size={30}
      />
    )
  );

  return (
    <div className={styles.mainContainer}>
      <PageTopHeading
        mainHeading="Get to Know about various interview experiences"
        heading="TESTIMONIALS."
        subHeading="INTERVIEW EXP."
      />

      <div className={styles.container}>
        <div className={styles.mobileHeader}>
          <div className={styles.headline}>
            <p className={styles.title}>Interview Experience</p>
            <p className={styles.stars}>{starsArray}</p>
          </div>
          <div className={styles.companyContainer}>
            <img
              src={interview?.link[1].link}
              alt="Company logo"
              className={styles.companyLogo}
            />
            <p
              style={{ backgroundColor: "inherit" }}
              className={styles.companyName}
            >
              {interview?.company}
            </p>
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileInfoContainer}>
            <div className={styles.imgContainer}>
              <img
                src={interview?.link[0].link}
                alt="profile photo"
                className={styles.image}
              />
            </div>
            <div className={styles.profileInfo}>
              <div className={styles.name}>{interview?.name}</div>
              <div className={styles.roll}>{interview?.rollno}</div>
              <div>
                <FaLinkedin size={32} color="#A9A9A9" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.heading}>
            <div className={styles.headline}>
              <p className={styles.title}>Interview Experience</p>
              <p className={styles.stars}>{starsArray}</p>
              <div className={styles.moreInfoContainer}>
                <div className={styles.moreInfo}>
                  <p>Email: </p>
                  <p>{interview?.email}</p>
                </div>
                <div className={styles.moreInfo}>
                  <p>Phone: </p>
                  <p>{interview?.phone}</p>
                </div>
                <div className={styles.moreInfo}>
                  <p>Package: </p>
                  <p>{interview?.package}</p>
                </div>
              </div>
            </div>
            <div className={styles.companyContainer}>
              <img
                src={interview?.link[1].link}
                alt="Company logo"
                className={styles.companyLogo}
              />

              <p
                style={{ backgroundColor: "inherit" }}
                className={styles.companyName}
              >
                Sprinkler
              </p>
            </div>
          </div>
          <div className={styles.experience}>{interview?.desc}</div>
        </div>
      </div>
    </div>
  );
}
