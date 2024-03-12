import React from "react";
import prithvi from "@/public/prithvi.png";
import styles from "./activityId.module.css";
import { ActivityHeader } from "@/components/ActivityHeader";
import { ActivityContent } from "@/components/ActivityContent";
import prismadb from "@/lib/prismadb";

export default async function ActivityParticularPage({
  params,
}: {
  params: { activityId: string };
}) {
  const activity = await prismadb.activity.findUnique({
    where: {
      id: params.activityId,
    },
    include: {
      link: true,
    },
  });

  return (
    <>
      <div className={styles.mainDiv}>
        <ActivityHeader activity={activity} />
        <ActivityContent activity={activity} />
      </div>
    </>
  );
}
