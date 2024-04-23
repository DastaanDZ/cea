import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import styles from "@/components/searchBar.module.css";

export interface SearchBarProps {
  data: {
    id: number;
    name: string;
    title: string;
    photo: string;
    phone: string;
    email: string;
    address: string;
  }[];
  onChange: (
    filteredData: {
      id: number;
      name: string;
      title: string;
      photo: string;
      phone: string;
      email: string;
      address: string;
    }[]
  ) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ data, onChange }) => {
  const [query, setQuery] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleFilter = () => {
    const filteredArr = data.filter((obj) => {
      const nameLowerCase = obj.name.toLowerCase();
      const queryLowerCase = query.toLowerCase();

      if (queryLowerCase === "") {
        return true;
      }

      let j = 0;

      for (let i = 0; i < nameLowerCase.length; i++) {
        if (nameLowerCase[i] === queryLowerCase[j]) {
          j++;
          if (j === queryLowerCase.length) {
            return true;
          }
        } else {
          j = 0;
        }
      }

      return false;
    });

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
          placeholder="Search Faculties..."
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
