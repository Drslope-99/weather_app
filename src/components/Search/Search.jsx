import { useState } from "react";
import styles from "./Search.module.css";
import { IoSearch } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { FaMicrophoneSlash } from "react-icons/fa";

export default function Search() {
  const [search, setSearch] = useState("");
  const [microphone, setMicrophone] = useState(false);

  const toggleMic = () => {
    setMicrophone((prev) => !prev);
  };

  return (
    <form className={styles.searchForm}>
      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <IoSearch className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search for a place..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="button"
            className={`${styles.micBtn} ${microphone ? "active" : ""}`}
            onClick={toggleMic}
          >
            {!microphone ? <FaMicrophoneSlash /> : <FaMicrophone />}
          </button>
        </div>

        <button type="button" className={styles.searchBtn}>
          search
        </button>
      </div>
      {search && <div className={styles.searchItems}>searchItems here</div>}
    </form>
  );
}
