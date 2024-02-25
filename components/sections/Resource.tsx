import React from "react";
import styles from "./resource.module.css";
import { ResourceCard } from "../ResourceCard";
import { Header } from "../Header";
import { DownArrowButton } from "../DownArrowButton";

export const Resource = () => {
  return (
    <>
      <div className={styles.maindiv}>
        <Header headingText="RESOURCE." subHeadingText="MATERIALS." />
        <div className={styles.cardholder}>
          <ResourceCard title="CORE" />
          <ResourceCard title="CODING" />
        </div>
        <DownArrowButton text="Load More" redirectLink="/resources" />
      </div>
    </>
  );
};
