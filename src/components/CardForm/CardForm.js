import ButtonInput from '../ButtonInput/ButtonInput';
import styles from '../CardForm/CardForm.module.scss'
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsReducer';

const CardForm = ({ columnId }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({ title, columnId }));
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} className={styles.title}/>
            <ButtonInput>Add Card</ButtonInput>
        </form>
    );
};

export default CardForm;
