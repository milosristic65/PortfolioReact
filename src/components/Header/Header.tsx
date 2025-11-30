import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>Logo</div>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
          <Link to="/projects" className={styles.navLink}>
            Projects
          </Link>
          <Link to="/contact" className={`${styles.navLink} ${styles.contactButton}`}>
            Get in Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
