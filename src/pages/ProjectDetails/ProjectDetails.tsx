import styles from "./ProjectDetails.module.scss";
import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import slugify from "slugify";

const ProjectDetails = () => {
  const { projectSlug } = useParams();
  const currentProject = projects.find(
    (p) => slugify(p.title, { lower: true }) === projectSlug
  );

  return (
    <section>
      <div className={`content ${styles.content}`}>
        <img
          src={currentProject?.thumbnail}
          width="100%"
          alt="project-thumbnail"
        />
        <h1>{currentProject?.title}</h1>
        <p>{currentProject?.description}</p>
      </div>
    </section>
  );
};

export default ProjectDetails;
