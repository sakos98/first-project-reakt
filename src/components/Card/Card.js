import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/store';

const Card = (props) => {
  const dispatch = useDispatch();
  const cardId = props.cardId;

  const toggle = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(cardId));
  };

  return (
    <div className={styles.card}>
      {props.title}
      <button onClick={toggle} className={styles.button}>
      <span className={clsx('fa fa-star-o', props.isFavorite)} />
      </button>
    </div>
  );
};

export default Card;