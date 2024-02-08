import React from "react";
import { PageTopHeading } from "@/components/PageTopHeading";
import styles from "./resourceMaterial.module.css";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import prismadb from "@/lib/prismadb";

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
          <div>{resource?.desc}</div>
        </div>
      </div>

      <div className={styles.button}>
        <button className={styles.syllabus}>
          <div style={{ background: "transparent" }}>
            <SiBookstack className={styles.buttonIcons} />
          </div>
          <div className={styles.syllabusTitle}>Syllabus</div>
        </button>
        <button className={styles.materials}>
          <div style={{ background: "transparent" }}>
            <MdOutlineLibraryBooks className={styles.buttonIcons} />
          </div>
          <div className={styles.materialTitle}>Support Materials</div>
        </button>
      </div>
    </div>
  );
}
