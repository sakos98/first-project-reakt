import styles from '../Favorite/Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getStarCards } from '../../redux/store';
import Card from '../Card/Card';

const Favorite = () => {

  const starCards = useSelector(getStarCards);

  if (starCards.length !== 0) {
    return (
      <div className={styles.favorite}>
        <h1 className={styles.title}>FAVORITE</h1>
        <ul className={styles.cards}>
          {starCards.map((card) => (
            <Card key={card.id} {...card} isFavorite={card.isFavorite} />
          ))}
        </ul>
      </div>
    );
  }
  
    return (
      <div className={styles.favorite}>
         <h1 className={styles.title}>FAVORITE</h1>
        <PageTitle>Empty Favorite Card</PageTitle>  
      </div>
    );
}

export default Favorite;