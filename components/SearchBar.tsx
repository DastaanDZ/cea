import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import styles from "./searchBar.module.css";
import { CompetitiveExam, Resources } from "@prisma/client";

interface SearchBarProps {
  data: Resources[] | CompetitiveExam[];
  onChange: (filteredData: any[]) => void;
  page: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  data,
  onChange,
  page,
}) => {
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
        {page === "resource" ? (
          <input
            type="text"
            name="name"
            placeholder="Search Resource..."
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <input
            type="text"
            name="name"
            placeholder="Search Exams..."
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        )}
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
