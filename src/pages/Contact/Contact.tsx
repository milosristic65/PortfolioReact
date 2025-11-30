import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={`content ${styles.content}`}>
        <h1>Contact</h1>
        <p>Contact me.</p>
      </div>
    </div>
  );
};

export default Contact;
