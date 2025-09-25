import { useState } from "react";
import styles from "./Search.module.css";
import { IoSearch } from "react-icons/io5";

export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <form className={styles.searchForm}>
      <div className={styles.searchContainer}>
        <IoSearch className={styles.searchIcon} />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search for a place..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="button" className={styles.searchBtn}>
          search
        </button>
      </div>
      {search && <div className={styles.searchItems}>searchItems here</div>}
    </form>
  );
}
