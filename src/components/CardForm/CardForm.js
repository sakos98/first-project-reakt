import styles from './CardForm.module.scss';
import { useState } from 'react';
import ButtonInput from '../ButtonInput/ButtonInput'
import TextInput from '../TextInput/TextInput';
import Column from '../Column/Column';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title }, props.columnId);
        setTitle('');

        
    };


    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <ButtonInput columnId={props.id} action={Column.addCard}>Add Card</ButtonInput>
        </form>
    );

	
};

export default CardForm;
