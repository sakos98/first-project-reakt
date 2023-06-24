import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/store';
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

  return (
    <div className={styles.card}>
      {props.title}
      <button onClick={toggle}
      className={clsx(styles.button, { [styles.clicked]: isButtonClicked })}
      >
      <span className={clsx('fa fa-star-o', props.isFavorite)} />
      </button>
    </div>
  );
};

export default Card;