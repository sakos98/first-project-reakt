import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import ButtonInput from '../ButtonInput/ButtonInput';

const SearchForm = () => {
    const dispatch = useDispatch();
  const [string, setString] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_SEARCHSTRING', payload:  string  });
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder='Search...' value={string} onChange={(e) => setString(e.target.value)} />
      <ButtonInput>
        <span className='fa fa-search' />
      </ButtonInput>
    </form>
  );
};

export default SearchForm;