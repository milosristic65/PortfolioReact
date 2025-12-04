import styles from "./TechCard.module.scss";
import "./filterColors.scss";
import { TechCardColor } from "./types.ts";

interface TechCardProps {
  title: string;
  description: string;
  logo: string;
  color?: TechCardColor;
}

function TechCard({ title, description, logo, color }: TechCardProps) {
  return (
    <div className={styles.techCard}>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <img className={color} src={logo} alt={title} />
      <div className={styles.textIcon}>
        <div className={styles.textLine}></div>
        <div className={styles.textLine}></div>
        <div className={styles.textLine}></div>
      </div>
    </div>
  );
}

export default TechCard;
