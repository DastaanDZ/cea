import React from "react";
import { PageTopHeading } from "@/components/PageTopHeading";
import styles from "./compExam.module.css";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { Icons } from "@/components/Icons";
import { SiBookstack } from "react-icons/si";
import prismadb from "@/lib/prismadb";
import CompExam from "./../page";
import { styled } from "styled-components";
import DownloadPdfLink from "@/components/DownloadPdfLink";
import { redirect } from "next/navigation";
import { OfficialWebsite } from "@/components/OfficialWebsite";

export default async function CompExamMaterial({
  params,
}: {
  params: { compExamId: string };
}) {
  const compExam = await prismadb.competitiveExam.findUnique({
    where: {
      id: params.compExamId,
    },
    include: {
      link: true,
    },
  });

  return (
    <div className={styles.container}>
      <PageTopHeading
        mainHeading="Get to Know about different competitive Examination and Learn."
        heading="COMPETITIVE."
        subHeading="EXAMS."
      />

      <div className={styles.division}>
        <div className={styles.heading}>
          Competitive Exams.\{compExam?.name}
        </div>
        <div className={styles.title}>
          <div
            className={styles.titleImage}
            style={{ backgroundColor: "green" }}
          >
            <Icons
              type=""
              name={compExam?.name ? compExam.name.toString() : ""}
            />
          </div>
          <div className={styles.titleContent}>{compExam?.title}</div>
        </div>
        <div className={styles.content}>
          <div>{compExam?.desc}</div>
          <div className={styles.button}>
            <button className={styles.syllabus}>
              <div style={{ backgroundColor: "inherit" }}>
                <SiBookstack className={styles.buttonIcons} />
              </div>
              <div className={styles.syllabusTitle}>
                {compExam?.title && compExam?.link && (
                  <DownloadPdfLink
                    title="Syllabus"
                    name={compExam?.title + " Syllabus"}
                    link={compExam?.link[0].link}
                  />
                )}
              </div>
            </button>
            <button className={styles.materials}>
              <div style={{ backgroundColor: "inherit" }}>
                <FaGlobeAmericas className={styles.buttonIcons} />
              </div>
              {compExam && compExam.link && (
                <OfficialWebsite link={compExam?.link[2].link} />
              )}
            </button>
            {/* <button className={styles.materials}>
              <div style={{ backgroundColor: "inherit" }}>
                <MdOutlineLibraryBooks className={styles.buttonIcons} />
              </div>
              <div className={styles.materialTitle}>
                {compExam?.title && compExam.link && (
                  <DownloadPdfLink
                    title="Support Materials"
                    name={compExam?.title + " Support Materials"}
                    link={compExam?.link[1].link}
                  />
                )}
              </div>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
