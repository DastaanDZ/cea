import React from "react";
import { PageTopHeading } from "@/components/PageTopHeading";
import styles from "./resourceMaterial.module.css";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import prismadb from "@/lib/prismadb";
import DownloadPdfLink from "@/components/DownloadPdfLink";

export default async function ResourceMaterial({
  params,
}: {
  params: { resourceId: string };
}) {
  const resource = await prismadb.resources.findUnique({
    where: {
      id: params.resourceId,
    },
    include: {
      link: true,
    },
  });

  console.log(resource);
  return (
    <div className={styles.container}>
      <PageTopHeading
        mainHeading="Get to Know about different competitive Examination and Learn."
        heading="RESOURCES."
        subHeading="MATERIALS."
      />
      <div className={styles.division}>
        <div className={styles.heading}>
          Resources Materials.\{resource?.title}
        </div>
        <div className={styles.title}>
          <div className={styles.titleImage}>
            <MdOutlineLibraryBooks
              className={styles.icons}
              style={{ backgroundColor: "transparent" }}
            />
          </div>
          <div className={styles.titleContent}>{resource?.subTitle}</div>
        </div>
        <div className={styles.content}>
          <div style={{ background: "transparent" }}>{resource?.desc}</div>
        </div>
      </div>
      <div className={styles.button}>
        <button className={styles.syllabus}>
          <div style={{ background: "transparent" }}>
            <SiBookstack className={styles.buttonIcons} />
          </div>
          <div className={styles.syllabusTitle}>
            {resource?.title && resource?.link && (
              <DownloadPdfLink
                title="Syllabus"
                name={resource?.title + " Syllabus"}
                link={resource?.link[1].link}
              />
            )}
          </div>
        </button>
        <button className={styles.materials}>
          <div style={{ background: "transparent" }}>
            <MdOutlineLibraryBooks className={styles.buttonIcons} />
          </div>
          <div className={styles.materialTitle}>
            {resource?.title && resource?.link && (
              <DownloadPdfLink
                title="Support Materials"
                name={resource?.title + " Support Materials"}
                link={resource?.link[0].link}
              />
            )}
          </div>
        </button>
      </div>
    </div>
  );
}
