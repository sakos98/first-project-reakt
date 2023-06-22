import ButtonInput from '../ButtonInput/ButtonInput';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';


const ColumnForm = ({listId}) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId }));
        setTitle('');
        setIcon('');
    };

	return (
        <form onSubmit={handleSubmit}>
             Title: <TextInput type="text" value={title}  onChange={e => setTitle(e.target.value)} />
            Icon: <TextInput type="text" value={icon}  onChange={e => setIcon(e.target.value)} />
            <ButtonInput>Add column</ButtonInput>
        </form>
	);
};

export default ColumnForm;