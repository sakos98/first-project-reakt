import styles from '../About/About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
  
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>ABOUT</h1>
      <PageTitle>Lorem Ipsum</PageTitle>  
    </div>
  );
}

export default About;