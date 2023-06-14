import ButtonInput from '../ButtonInput/ButtonInput';
import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';

const CardForm = ({ columnId }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({ title, columnId }));
        setTitle('');
    };


    return (
        <form className={styles.CardForm} onSubmit={handleSubmit}>
            <TextInput className={styles.input} type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <ButtonInput>Add Card</ButtonInput>
        </form>
    );

	
};

export default CardForm;
