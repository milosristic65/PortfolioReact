import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={`banner ${styles.banner}`}>
        <h1>Milos Ristic</h1>
        <p>Full Stack Developer (PHP • .NET • React)</p>
      </div>
      <div className={`content ${styles.content}`}>
        <h2>Welcome to my portfolio!</h2>
      </div>
    </div>
  );
};

export default Home;
