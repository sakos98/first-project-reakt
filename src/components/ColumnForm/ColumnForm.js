import styles from '../ColumnForm/ColumnForm.module.scss';

import { useState } from 'react';


const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
    };

	return (
        <form onSubmit={handleSubmit}>
            Title: <input type="text" value={title} className={styles.input} onChange={e => setTitle(e.target.value)} />
            Icon: <input type="text" value={icon} className={styles.input} onChange={e => setIcon(e.target.value)} />
            <button className={styles.button}>Add column</button>
        </form>
	);
};

export default ColumnForm;