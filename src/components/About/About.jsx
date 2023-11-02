import { getImageUrl } from "../../utilis";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with the laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Proficient understanding of web markup, including HTML5, CSS3.
                Proficient understanding of client-side scripting and JavaScript
                frameworks, including jQuery
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/atom.png")}
              alt="cursor Icon"
              className={styles.reactIcon}
            />
            <div className={styles.aboutItemText}>
              <h3>React Developer</h3>
              <p>
                developing user interface components and implementing them with
                React.js workflows (such as Redux). Experience with common
                front-end development tools such as Babel, Webpack, NPM, etc..
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>UX/UI Designer</h3>
              <p>
                Translate concepts into user flows, wireframes, mockups and
                prototypes that lead to intuitive user experiences.Make
                strategic design and new, functions and features.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
