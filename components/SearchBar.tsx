import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import styles from "./searchBar.module.css";
import { CompetitiveExam, Resources } from "@prisma/client";

interface SearchBarProps {
  data: Resources[] | CompetitiveExam[];
  onChange: (filteredData: any[]) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ data, onChange }) => {
  const [query, setQuery] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleFilter = () => {
    const filteredArr = data.filter((obj) =>
      obj.title.toLowerCase().includes(query.toLowerCase())
    );

    onChange(filteredArr);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleFilter();
    }
  };

  useEffect(() => {
    if (clicked) {
      handleFilter();
    }
  }, [clicked, query]);

  return (
    <div className={styles.searchBar}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Search Exams"
          name="name"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className={styles.iconContainer}>
        <CiFilter
          className={styles.icons}
          onClick={() => setClicked(!clicked)}
        />
      </div>
    </div>
  );
};
