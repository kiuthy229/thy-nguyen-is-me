import styles from './ThyNguyen.module.css';
import myImage from '../../assets/me/myImage.jpeg';

export const ThyNguyen = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Thy Nguyen</h1>
        <p className={styles.description}>
          I'm a full-stack developer with over 2 years of experience using React
          and NodeJS. I'm also a person who loves drawing
        </p>
        <a href='mailto:thynmk2209@gmail.com' className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={myImage} alt='Thy Nguyen image' className={styles.myImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
