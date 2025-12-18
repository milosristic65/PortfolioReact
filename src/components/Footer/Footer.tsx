import { useEffect, useRef } from "react";
import styles from "./Footer.module.scss";
import { socials } from "../../data/socials";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && footerRef.current) {
          footerRef.current.classList.add(styles.visible);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef}>
      <div
        className={`${styles.footerInside} ${styles.footerRotatedBackground}`}
      >
        <div className={styles.footerBackground}></div>
        <div className={`content ${styles.content}`}>
          <h3 className={styles.branding}>
            Got a Project in Mind? Let's Talk :)
          </h3>

          <form
            className={styles.contactForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea rows={4} placeholder="Message" required />
            <button type="submit">Send</button>
          </form>

          <ul className={styles.socials}>
            {socials.map((social) => (
              <li key={social.name}>
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <img src={social.icon ?? ""} alt={social.name} />
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`${styles.footerPlaceholder} ${styles.footerRotatedBackground}`}
      >
        <div className={styles.footerBackground}></div>
      </div>
    </footer>
  );
};

export default Footer;
