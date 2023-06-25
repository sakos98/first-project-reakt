import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { toggleCardFavorite, removeCard } from '../../redux/cardsReducer';
import { useState } from 'react';

const Card = (props) => {
  const dispatch = useDispatch();
  const cardId = props.cardId;
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const toggle = (e) => {
    e.preventDefault();
    setIsButtonClicked(!isButtonClicked);
    dispatch(toggleCardFavorite(cardId));
  };

  const remove = (e) => {
    e.preventDefault();
    dispatch(removeCard(cardId));
  };

  return (
    <div className={styles.card}>
      {props.title}
      <div className={styles.positionButtons}>
      <button onClick={toggle}
      className={clsx(styles.button, { [styles.clicked]: isButtonClicked })}
      >
      <span className={clsx('fa fa-star-o', props.isFavorite)} />
      </button>
      <button className={styles.removebutton} onClick={remove} >
      <span className={clsx('fa fa-trash', styles.icon)} />
      </button>
      </div>
    </div>
  );
};

export default Card;