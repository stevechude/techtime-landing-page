import { FaBars } from "react-icons/fa";
import styles from "@/styles/Navbar.module.css";
import { useState } from "react";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={styles.container}>
      <h2>Tech Time</h2>
      <div className={styles.toggleBar}>
        {toggleMenu ? (
          <h3 onClick={() => setToggleMenu(false)}>Close</h3>
        ) : (
          <FaBars onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className={styles.menuOpen}>
            <ul className={styles.menuList}>
              <li>Home</li>
              <li>About Us</li>
              <li>Courses</li>
              <li>Testimonial</li>
              <li>Community</li>
            </ul>
            <button>Enroll Now</button>
          </div>
        )}
      </div>
      <div className={styles.second}>
        <ul className={styles.links}>
          <li>Home</li>
          <li>About Us</li>
          <li>Courses</li>
          <li>Testimonial</li>
          <li>Community</li>
        </ul>
        <button className={styles.button}>Enroll Now</button>
      </div>
    </nav>
  );
}

export default Navbar;
