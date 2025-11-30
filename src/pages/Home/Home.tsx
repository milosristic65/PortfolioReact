import styles from "./Home.module.scss";
import bannerImage from "../../assets/portrait.png";

const Home = () => {
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
        <div className={styles.bannerPortraitWrapper}>
          <img
            src={bannerImage}
            className={styles.bannerPortrait}
            alt="Milos Ristic portrait"
          />
        </div>
      </div>
      <div className={`content ${styles.content}`}>
        <h2>Welcome to my portfolio!</h2>
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
