import styles from './Experience.module.css';
import skillsData from '../../data/skills.json';
import experiencesData from '../../data/experiences.json';

// Import experiences images
import gyldImage from '../../assets/experiences/gyld.png';
import nabImage from '../../assets/experiences/nab.png';

// Import skills images
import htmlImage from '../../assets/skills/html.png';
import cssImage from '../../assets/skills/css.png';
import reactImage from '../../assets/skills/react.png';
import nodeImage from '../../assets/skills/node.png';
import graphqlImage from '../../assets/skills/graphql.png';
import nextImage from '../../assets/skills/next.png';

// Map skill titles to their respective images
const skillImages = {
  HTML: htmlImage,
  CSS: cssImage,
  React: reactImage,
  Node: nodeImage,
  GraphQL: graphqlImage,
  NextJS: nextImage,
};

// Update skills data to include the imported images
const skills = skillsData.map(skill => ({
  ...skill,
  imageSrc: skillImages[skill.title as keyof typeof skillImages],
}));

const experiences = experiencesData.map(experience => {
  switch (experience.organisation) {
    case 'Gyld Labs':
      return { ...experience, imageSrc: gyldImage };
    case 'National Australia Bank':
      return { ...experience, imageSrc: nabImage };
    default:
      return experience;
  }
});

export const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.experiencesContainer}>
        <ul className={styles.experiences}>
          {experiences.map((experiencesItem, id) => {
            return (
              <li key={id} className={styles.experiencesItem}>
                <img
                  src={experiencesItem.imageSrc}
                  alt={`${experiencesItem.organisation} Logo`}
                />
                <div className={styles.experiencesItemDetails}>
                  <h3>{`${experiencesItem.role}, ${experiencesItem.organisation}`}</h3>
                  <p>{`${experiencesItem.startDate} - ${experiencesItem.endDate}`}</p>
                  <ul>
                    {experiencesItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
