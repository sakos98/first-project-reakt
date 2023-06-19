import styles from '../Favorite/Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
  
    return (
      <div className={styles.favorite}>
        <h1 className={styles.title}>FAVORITE</h1>
        <PageTitle>Lorem Ipsum</PageTitle>  
      </div>
    );
}

export default Favorite;