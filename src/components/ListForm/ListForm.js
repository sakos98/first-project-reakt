import { useDispatch } from 'react-redux';
import { useState } from 'react';
import  {addList}  from '../../redux/listsRedux';
import ButtonInput from '../ButtonInput/ButtonInput';
import TextInput from '../TextInput/TextInput';

const ListForm = () => {

  const dispatch = useDispatch();
  const [title , setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({title, description}));
    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit}>
    Title: <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
    Description: <TextInput type="text" value={description}  onChange={e => setDescription(e.target.value)} />
   <ButtonInput>Add list</ButtonInput>
</form>
  );
}

export default ListForm;