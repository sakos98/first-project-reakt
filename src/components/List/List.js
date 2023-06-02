import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
  return (
    <div className={styles.list}>
        <header className={styles.header}>
            <p className={styles.title}>Things to do<span>soon!</span></p>
        </header>
        <p className={styles.description}>Interesting things I want to check out</p>
        <section className={styles.columns}>
    <Column icon="book" title="Books" />
    <Column icon="film" title="Movies" />
    <Column icon="gamepad" title="Games" />
</section>
    </div>
  );
};

export default List;