import React, { useEffect, useState } from "react";
import styles from "./bigButton.module.css";
import { CompetitiveExam, Resources } from "@prisma/client";
interface BigButtonProps {
  name: string;
  data: Resources[] | CompetitiveExam[];
  onChange: (filteredData: any[]) => void;
}

export const BigButton: React.FC<BigButtonProps> = ({
  name,
  data,
  onChange,
}) => {
  const handleFilter = (query: string) => {
    const filteredArr = data.filter((obj) => {
      if (query === "Core Materials") {
        return obj.type.toLowerCase().includes("core");
      } else {
        return obj.type.toLowerCase().includes("coding");
      }
    });

    // console.log(filteredArr);

    onChange(filteredArr);
  };

  // useEffect(() => {
  //   if (clicked) {
  //     handleFilter();
  //   }
  // }, [clicked, query]);

  return (
    <>
      <button
        className={styles.button}
        onClick={() => handleFilter(name)}
        style={{ cursor: "pointer" }}
      >
        {name}
      </button>
    </>
  );
};
