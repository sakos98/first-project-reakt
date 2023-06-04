import styles from './Column.module.scss'
import Card from '../Card/Card'
import CardForm from '../CardForm/CardForm'
import List from '../List/List'


const Column = props => {
    
    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h2>
            <ul className={styles.cards}>
	        {props.cards.map(card => <Card key={props.id} title={card.title} />)}
            
            </ul>
            <CardForm columnId={props.id} action={List.addCard} />
        </article>
        
    );
};

export default Column;