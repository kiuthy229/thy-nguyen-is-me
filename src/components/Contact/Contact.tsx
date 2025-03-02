import styles from './Contact.module.css';
import emailIcon from '../../assets/contact/emailIcon.png';
import linkedinIcon from '../../assets/contact/linkedinIcon.png';
import githubIcon from '../../assets/contact/githubIcon.png';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt='Email icon' />
          <a href='mailto:thynmk2209@gmail.com'>thynmk2209@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt='LinkedIn icon' />
          <a href='https://www.linkedin.com/in/thy-nguyen-2825991a5/'>
            linkedin.com/thy-nguyen
          </a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt='Github icon' />
          <a href='https://github.com/kiuthy229'>github.com/kiuthy229</a>
        </li>
      </ul>
    </footer>
  );
};
