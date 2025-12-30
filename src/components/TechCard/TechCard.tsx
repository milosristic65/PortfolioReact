import styles from "./TechCard.module.scss";
import "./filterColors.scss";
import { TechCardColor } from "./types.ts";

interface TechCardProps {
  title: string;
  projectCount: number;
  logo: string;
  color?: TechCardColor;
}

const TechCard = ({ title, projectCount, logo, color }: TechCardProps) => {
  return (
    <div className={styles.techCard}>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>Projects: <span className="highlight">{projectCount}</span></p>
      </div>
      <img className={color} src={logo} alt={title} />
      {/* 3 text lines icon */}
      <div className={styles.textIcon}>
        <div className={styles.textLine}></div>
        <div className={styles.textLine}></div>
        <div className={styles.textLine}></div>
      </div>
    </div>
  );
};

export default TechCard;
