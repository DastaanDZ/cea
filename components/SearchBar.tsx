import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import styles from "./searchBar.module.css";
// import { SearchBar } from './SearchBar';

// interface SearchBarProps {
//   data: any[];
//   onChange: (filteredData: any[]) => void;
// }

// const getFilteredItems = (query: any, items: any[]): any[] => {
//   if (!query) return items;

//   return items.filter((item) =>
//     item.name.toLowerCase().includes(query.toLowerCase())
//   );
// };

export const SearchBar = () => {
  // const [query, setQuery] = useState("");

  // const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newQuery = e.target.value;
  //   setQuery(newQuery);

  //   const filteredItems = getFilteredItems(newQuery, data);
  //   onChange(filteredItems);
  // };

  return (
    <div className={styles.searchBar}>
      {/* <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.input}
          // onChange={inputChange}
          placeholder="Search Exams"
          name="name"
        />
      </div> */}

      <div className={styles.inputWrapper}>
        <input type="text" placeholder="Search Exams" name="name" />
      </div>

      <div className={styles.iconContainer}>
        <CiFilter className={styles.icons} />
      </div>
    </div>
  );
};
