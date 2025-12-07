import styles from "./Home.module.scss";

import bannerImage from "../../assets/portrait_color.png";
import reactLogo from "../../assets/TechStack/react.svg";
import jqueryLogo from "../../assets/TechStack/jquery.svg";
import dotnetLogo from "../../assets/TechStack/dotnet.svg";
import phpLogo from "../../assets/TechStack/php.svg";
import drupalLogo from "../../assets/TechStack/drupal.svg";
import mysqlLogo from "../../assets/TechStack/mysql.svg";
import sqlserverLogo from "../../assets/TechStack/sqlserver.svg";

import TechCard from "../../components/TechCard/TechCard";
import { useParallax } from "../../hooks/useParallax";
import { TechCardColor } from "../../components/TechCard/types";

const Home = () => {
  const bannerBackgroundRef = useParallax(0.2);
  const bannerLogosRef = useParallax(0.16);

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
        <section>
          <h2>Something About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odio
            architecto eum similique temporibus aut id nulla! Architecto dolores
            iusto nesciunt ipsa, nobis excepturi laboriosam odio est. Illum,
            vitae dolor. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Fugiat nostrum, obcaecati quidem ullam provident dolorum ipsa
            corporis, earum consectetur praesentium veniam dolores ratione,
            sequi reprehenderit quos error molestiae aperiam accusantium?
          </p>
        </section>
        <section className={styles.techStackSection}>
          <h2>Tech Stack</h2>
          <div className={styles.techStackGrid}>
            <TechCard
              title="PHP"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              logo={phpLogo}
              color={TechCardColor.BLUE}
            />
            <TechCard
              title="Drupal"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              logo={drupalLogo}
              color={TechCardColor.CYAN}
            />
            <TechCard
              title="React"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              logo={reactLogo}
              color={TechCardColor.CYAN}
            />
            <TechCard
              title="jQuery"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              logo={jqueryLogo}
              color={TechCardColor.BLUE}
            />
            <TechCard
              title=".NET"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              logo={dotnetLogo}
              color={TechCardColor.GREEN}
            />
            <TechCard
              title="MySQL"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              logo={mysqlLogo}
            />
            <TechCard
              title="Microsoft SQL Server"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              logo={sqlserverLogo}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
