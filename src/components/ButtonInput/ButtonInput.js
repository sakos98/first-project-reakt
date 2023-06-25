import styles from './ButtonInput.module.scss';

const ButtonInput = props => {
  return <button className={styles.button}>{props.children}</button>;
}

export default ButtonInput; 