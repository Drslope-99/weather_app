import { useState } from "react";
import styles from "./DropdownMenu.module.css";
import { FaAngleDown } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

export default function DropdownMenu({ title, icon = false }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((show) => !show);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownBtn} onClick={handleToggle}>
        {icon && <IoSettingsOutline style={styles.dropdownIcon} />}

        {title}
        <FaAngleDown style={styles.dropdownIcon} />
      </button>
      {toggle && (
        <ul className={styles.dropdownList}>
          {/* <li>mondaay</li>
          <li>mondaay</li>
          <li>mondaay</li>
          <li>mondaay</li> */}
        </ul>
      )}
    </div>
  );
}
