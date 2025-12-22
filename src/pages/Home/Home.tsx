import styles from "./Home.module.scss";
import { useState } from "react";
import { motion } from "motion/react";

import bannerImage from "../../assets/portrait_color.png";
import reactLogo from "../../assets/TechStack/react.svg";
import dotnetLogo from "../../assets/TechStack/dotnet.svg";
import phpLogo from "../../assets/TechStack/php.svg";
import drupalLogo from "../../assets/TechStack/drupal.svg";

import TechCard from "../../components/TechCard/TechCard";
import { useParallax } from "../../hooks/useParallax";

import { projects } from "../../data/projects";
import { experiences } from "../../data/experiences";
import { technologies } from "../../data/technologies";

const Home = () => {
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const bannerBackgroundRef = useParallax(0.2);
  const bannerLogosRef = useParallax(0.16);

  const experienceInitialCount = 1;
  const hasMoreExperiences = experiences.length > experienceInitialCount;

  const calculateMonthsDuration = (start: Date, end: Date | null) => {
    const endDate = end || new Date(); // Use current date if end is null
    const monthsDiff =
      (endDate.getFullYear() - start.getFullYear()) * 12 +
      (endDate.getMonth() - start.getMonth());

    const dayDiff = endDate.getDate() - start.getDate();

    return monthsDiff + (dayDiff > 0 ? 1 : 0);
  };

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

      <section className={styles.aboutSection}>
        <div className={`content ${styles.content}`}>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odio
            architecto eum similique temporibus aut id nulla! Architecto dolores
            iusto nesciunt ipsa, nobis excepturi laboriosam odio est. Illum,
            vitae dolor. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Fugiat nostrum, obcaecati quidem ullam provident dolorum ipsa
            corporis, earum consectetur praesentium veniam dolores ratione,
            sequi reprehenderit quos error molestiae aperiam accusantium?
          </p>
        </div>
      </section>

      <section className={styles.techStackSection}>
        <div className={`content ${styles.content}`}>
          <h2>Tech Stack</h2>
          <div className={styles.techStackGrid}>
            {technologies.map((tech) => (
              <TechCard
                key={tech.name}
                title={tech.name}
                description={tech.snippet}
                logo={tech.icon!}
                color={tech.color}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.highlightedProjectsSection}>
        <div className={`content ${styles.content}`}>
          <h2>Featured Projects</h2>
          <div className={styles.highlightedProjectsGrid}>
            {projects
              .filter((project) => project.featured === true)
              .map((project) => (
                <a href="">
                  <div key={project.title} className={styles.projectCard}>
                    <img src={project.thumbnail} alt={project.title} />
                    <div className={styles.projectInfo}>
                      <h3>{project.title}</h3>
                      <p>{project.snippet}</p>
                    </div>
                  </div>
                </a>
              ))}
          </div>
          <a className={`buttonLink ${styles.buttonLink}`} href="/projects">
            All Projects
          </a>
        </div>
      </section>

      <section className={styles.experienceSection}>
        <div className={`content ${styles.content}`}>
          <h2>Experience</h2>
          <div className={styles.experienceList}>
            {/* Initial list */}
            {experiences.slice(0, experienceInitialCount).map((experiences) => (
              <div key={experiences.company} className={styles.experienceCard}>
                <h3>{experiences.company}</h3>
                <h4>{experiences.position}</h4>
                <p>{experiences.description}</p>
                <p>
                  <strong>Duration:</strong>{" "}
                  {experiences.duration.start.toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  -{" "}
                  {experiences.duration.end
                    ? experiences.duration.end.toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })
                    : "Present"}{" "}
                  (
                  {calculateMonthsDuration(
                    experiences.duration.start,
                    experiences.duration.end
                  )}{" "}
                  months)
                </p>
                {experiences.relatedProjects &&
                  experiences.relatedProjects.length > 0 && (
                    <p>
                      <strong>Related projects:</strong>{" "}
                      {experiences.relatedProjects.join(", ")}
                    </p>
                  )}
              </div>
            ))}
            {/* Revealed list */}
            <motion.div
              className={styles.revealedExperienceList}
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: showAllExperiences ? "auto" : 0,
                opacity: showAllExperiences ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                overflow: "hidden",
                margin: "-10px -10px",
                padding: "10px 10px",
                pointerEvents: showAllExperiences ? "auto" : "none",
              }}
            >
              {experiences
                .slice(experienceInitialCount)
                .map((experiences, index) => (
                  <motion.div
                    key={experiences.company}
                    className={styles.experienceCard}
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <h3>{experiences.company}</h3>
                    <h4>{experiences.position}</h4>
                    <p>{experiences.description}</p>
                    <p>
                      <strong>Duration:</strong>{" "}
                      {experiences.duration.start.toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}{" "}
                      -{" "}
                      {experiences.duration.end
                        ? experiences.duration.end.toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })
                        : "Present"}{" "}
                      (
                      {calculateMonthsDuration(
                        experiences.duration.start,
                        experiences.duration.end
                      )}{" "}
                      months)
                    </p>
                    {experiences.relatedProjects &&
                      experiences.relatedProjects.length > 0 && (
                        <p>
                          <strong>Related projects:</strong>{" "}
                          {experiences.relatedProjects.join(", ")}
                        </p>
                      )}
                  </motion.div>
                ))}
            </motion.div>
          </div>
          {/* Show More button */}
          {hasMoreExperiences && (
            <button
              className={`buttonLink ${styles.buttonLink}`}
              onClick={() => setShowAllExperiences(!showAllExperiences)}
              style={{
                marginTop: showAllExperiences ? "20px" : undefined,
              }}
            >
              {showAllExperiences ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
