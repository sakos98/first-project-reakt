import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import ButtonInput from '../ButtonInput/ButtonInput';


const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search…" />
            <ButtonInput>
            <span className="fa fa-search" />
            </ButtonInput>
            <ButtonInput>Create</ButtonInput>
        </form>
    );
};

export default SearchForm;