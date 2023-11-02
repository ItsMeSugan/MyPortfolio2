import styles from "./Contact.module.css";
import { getImageUrl } from "../../utilis";

function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to react out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="EmailIcon" />
          <a href="mailto:t.suganeeshwaran@gmai.com">
            t.suganeeshwaran@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedin Icon"
          />
          <a href="https://www.linkedin.com/in/suganeeshwaran-t/">
            linkedin.com/suganeeshwaran-t
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="github Icon" />
          <a href="https://github.com/ItsMeSugan">github.com/itsMeSugan</a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
