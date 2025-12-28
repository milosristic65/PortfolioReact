import styles from "./Projects.module.scss";

import { useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Dropdown, { type OptionType } from "../../components/Dropdown/Dropdown";

import bannerImage from "../../assets/Banner/undraw_programming.svg";

import { projects } from "../../data/projects";
import { technologies } from "../../data/technologies";
import { industries } from "../../data/industries";

const Projects = () => {
  const industryFilter = industries.map((industry) => ({
    value: industry.name,
    label: industry.name,
  }));

  const technologyFilter = technologies.map((tech) => ({
    value: tech.name,
    label: tech.name,
  }));

  const [industryValue, setIndustryValue] = useState<OptionType | null>(null);
  const [technologyValue, setTechnologyValue] = useState<OptionType | null>(
    null
  );

  const filteredProjects = projects.filter(
    (project) =>
      (technologyValue === null
        ? true
        : project.technologies.includes(technologyValue.value)) &&
      (industryValue === null
        ? true
        : project.industries.includes(industryValue.value))
  );

  const clearFilters = () => {
    setIndustryValue(null);
    setTechnologyValue(null);
  };

  return (
    <div className={styles.projects}>
      <div className={`banner ${styles.banner}`}>
        <div className={`bannerText ${styles.bannerText}`}>
          <h1>Projects</h1>
          <p>From experiments to <span className="highlight">client work</span></p>
          <div
            className={`${styles.bannerHeroWrapper}`}
          >
            <div className={`${styles.bannerHeroBackground}`}>
              <img
                src={bannerImage}
                className={styles.bannerHero}
                alt="Projects Hero"
              />
            </div>
          </div>
        </div>
      </div>
      <section className={styles.projectsSection}>
        <div className={`content ${styles.content}`}>
          <div className={styles.filters}>
            <span>Filter by:</span>
            <div className={styles.dropdowns}>
              <Dropdown
                options={industryFilter}
                placeholder="Industry"
                value={industryValue}
                onChange={setIndustryValue}
              />
              <Dropdown
                options={technologyFilter}
                placeholder="Technology"
                value={technologyValue}
                onChange={setTechnologyValue}
              />
            </div>
            <div
              className={`buttonLink ${styles.buttonLink} ${
                industryValue || technologyValue ? "" : "hidden"
              }`}
              onClick={clearFilters}
            >
              Clear Filters
            </div>
          </div>
        </div>
        <div className={`content ${styles.content}`}>
          {filteredProjects.length > 0 ? (
            <div className={styles.projectsGrid}>
              {filteredProjects.map((project) => (
                <ProjectCard
                  title={project.title}
                  snippet={project.snippet}
                  thumbnail={project.thumbnail}
                />
              ))}
            </div>
          ) : (
            <p>No projects match the selected filters.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
