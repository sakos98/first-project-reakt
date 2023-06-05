import styles from './CardForm.module.scss';
import { useState } from 'react';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({title: title}, props.columnId);
        setTitle('');
    };


    return (
        <form className={styles.CardForm} onSubmit={handleSubmit}>
            <input className={styles.input} type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <button className={styles.button}>Add column</button>
        </form>
    );

	
};

export default CardForm;
