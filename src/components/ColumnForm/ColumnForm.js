import ButtonInput from '../ButtonInput/ButtonInput';
import styles from '../ColumnForm/ColumnForm.module.scss';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';


const ColumnForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon }));
        setTitle('');
        setIcon('');
    };

	return (
        <form onSubmit={handleSubmit}>
             Title: <TextInput type="text" value={title} className={styles.input} onChange={e => setTitle(e.target.value)} />
            Icon: <TextInput type="text" value={icon} className={styles.input} onChange={e => setIcon(e.target.value)} />
            <ButtonInput className={styles.button}>Add column</ButtonInput>
        </form>
	);
};

export default ColumnForm;