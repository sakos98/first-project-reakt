import styles from '../PageTitle/PageTitle.module.scss'

const PageTitle = props => {
  return (
    <h2 className={styles.subtitle}>{props.children}</h2>
  );
} 

export default PageTitle;