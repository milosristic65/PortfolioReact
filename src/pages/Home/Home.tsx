import styles from "./Home.module.scss";
import bannerImage from "../../assets/portrait_blurred.png";
import reactLogo from "../../assets/react.svg";
import dotnetLogo from "../../assets/dotnet.svg";
import phpLogo from "../../assets/php.svg";
import drupalLogo from "../../assets/drupal.svg";
import { useParallax } from "../../hooks/useParallax";

const Home = () => {
  const bannerBackgroundRef = useParallax(0.2);
  const bannerLogosRef = useParallax(0.2);

  return (
    <div className={styles.home}>
      <div className={`banner ${styles.banner}`}>
        <div className={`bannerText ${styles.bannerText}`}>
          <h1>Milos Ristic</h1>
          <p>
            <span className="highlight">Full Stack Developer</span> (PHP • .NET
            • React)
          </p>
        </div>
        <div
          ref={bannerBackgroundRef}
          className={`${styles.bannerPortraitWrapper}`}
        >
          <img
            src={bannerImage}
            className={styles.bannerPortrait}
            alt="Milos Ristic portrait"
          />
        </div>
        <div ref={bannerLogosRef} className={styles.bannerLogos}>
          <img src={reactLogo} alt="React Logo" />
          <img src={phpLogo} alt="PHP Logo" />
          <img src={drupalLogo} alt="Drupal Logo" />
          <img src={dotnetLogo} alt="Dotnet Logo" />
        </div>
      </div>
      <div className={`content ${styles.content}`}>
        <h2>Something About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odio
          architecto eum similique temporibus aut id nulla! Architecto dolores
          iusto nesciunt ipsa, nobis excepturi laboriosam odio est. Illum, vitae
          dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Fugiat nostrum, obcaecati quidem ullam provident dolorum ipsa
          corporis, earum consectetur praesentium veniam dolores ratione, sequi
          reprehenderit quos error molestiae aperiam accusantium?
        </p>
      </div>
    </div>
  );
};

export default Home;
