import { useState } from "react";
import styles from "./DropdownMenu.module.css";
import { FaAngleDown } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

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
        <menu className={styles.dropdownMenu}>
          <p className={styles.dropdownTitle}>Switch to Imperial</p>
          <ul className={styles.dropdownList}>
            <li>
              <p className={styles.measure}>Temperatue</p>
              <button className={styles.unit}>
                <span>
                  Celscius (<sup>o</sup>C)
                </span>
              </button>
              <button className={styles.unit}>
                <span>
                  Fahrenheit (<sup>o</sup>F)
                </span>
                <FaCheck />
              </button>
            </li>
            <li>
              <p className={styles.measure}>Wind Speed</p>
              <button className={styles.unit}>
                <span>Km/h</span>
              </button>
              <button className={styles.unit}>
                <span>mph</span>
                <FaCheck />
              </button>
            </li>
            <li>
              <p className={styles.measure}>Precipitation</p>
              <button className={styles.unit}>
                <span>Millimeters (mm)</span>
              </button>
              <button className={styles.unit}>
                <span> Inches (in)</span>
                <FaCheck />
              </button>
            </li>
          </ul>
        </menu>
      )}
    </div>
  );
}
