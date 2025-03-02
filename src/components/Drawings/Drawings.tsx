import styles from './Drawings.module.css';
import drawing1 from '../../assets/drawings/drawing_1.png';
import drawing2 from '../../assets/drawings/drawing_2.png';
import drawing3 from '../../assets/drawings/drawing_3.png';
import drawing4 from '../../assets/drawings/drawing_4.png';

const drawings = [
  { title: 'Drawing 1', imageSrc: drawing1 },
  { title: 'Drawing 2', imageSrc: drawing2 },
  { title: 'Drawing 3', imageSrc: drawing3 },
  { title: 'Drawing 4', imageSrc: drawing4 },
];

export const Drawings = () => {
  return (
    <section className={styles.container} id='drawings'>
      <h2 className={styles.title}>My Drawings</h2>
      <div className={styles.content}>
        {drawings.map((drawing, index) => (
          <div key={index} className={styles.drawingItem}>
            <img src={drawing.imageSrc} alt={drawing.title} className={styles.drawingImage} />
          </div>
        ))}
      </div>
    </section>
  );
};