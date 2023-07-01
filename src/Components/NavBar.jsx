import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { ThemeContext } from "../Context/ThemeContextProvider";


function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (

    <div className={styles.nav}>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? styles.link : isActive ? styles.active : styles.link
        }
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? styles.link : isActive ? styles.active : styles.link
        }
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? styles.link : isActive ? styles.active : styles.link
        }
        to="/favs"
      >
        Favs
      </NavLink>
      <button className={styles.btn} onClick={toggleTheme}>
        ☀ 🌙{" "}
      </button>
    </div>
  );
}

export default NavBar;
