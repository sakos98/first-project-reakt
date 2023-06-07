import ButtonInput from '../ButtonInput/ButtonInput';
import styles from '../ColumnForm/ColumnForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';


const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon});
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