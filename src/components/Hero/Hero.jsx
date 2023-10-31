import styles from "../Hero/Hero.module.css";
import { getImageUrl } from "../../utilis";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sugan</h1>
        <p className={styles.description}>
          Hello, my name is Sugan T, and I am excited to introduce myself as a
          front-end developer. Graduated at 2020, I have gained practical
          experience through various personal projects.
        </p>
        <a
          href="mailto:t.suganeeshwaran@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
