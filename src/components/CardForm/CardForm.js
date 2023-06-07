import ButtonInput from '../ButtonInput/ButtonInput';
import TextInput from '../TextInput/TextInput';
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
            <TextInput className={styles.input} type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <ButtonInput>Add column</ButtonInput>
        </form>
    );

	
};

export default CardForm;
