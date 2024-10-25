import styles from './About.module.css';
import AboutGrid from '../components/AboutGrid';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>About Us</h1>
        <AboutGrid />
      </div>
    </div>
  );
};

export default About;