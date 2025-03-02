import styles from './About.module.css';
import aboutImage from '../../assets/about/aboutImage.jpg';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={aboutImage} alt='Me' className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutIcon}>🚀</div>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites using ReactJS, NextJS, and TailwindCSS
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutIcon}>🤠</div>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience with Nodejs, Expressjs</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutIcon}>👩🏽‍💻</div>
            <div className={styles.aboutItemText}>
              <h3>Gamer</h3>
              <p>
                I play everything, from RPGs to FPSs. Most of the time I have
                spent on watching live streams cause observing is also a
                technique to learn and develop 🫶
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutIcon}>🍵</div>
            <div className={styles.aboutItemText}>
              <h3>I like drawing pictures</h3>
              <p>
                I draw everything I like, sometimes I imagine and draw it out 🦕
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
