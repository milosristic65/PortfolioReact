import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../../config/routes";

function Header() {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`);
      const banner = document.querySelector(".banner"); // Check if banner is present

      if (header && banner) {
        const headerAtTop = header.classList.contains(styles.atTop);

        if (window.scrollY < 50 && !headerAtTop) {
          header.classList.add(styles.atTop);
        } else if (window.scrollY >= 50 && headerAtTop) {
          header.classList.remove(styles.atTop);
        }
      } else if (header && !banner) {
        // Remove atTop class on pages without banner
        header.classList.remove(styles.atTop);
      }
    };

    handleScroll(); // Initial check

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>Logo</div>
        <nav className={styles.nav}>
          <Link to={ROUTES.HOME} className={styles.navLink}>
            Home
          </Link>
          <Link to={ROUTES.PROJECTS} className={styles.navLink}>
            Projects
          </Link>
          <Link
            to={ROUTES.CONTACT}
            className={`${styles.navLink} ${styles.contactButton}`}
          >
            Get in Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
