import React, { useState } from 'react';
import styles from './SearchBar.module.css'

import searchIcon from './magnifying-glass-jammming.png';

//import mockResults from '../../mock/mock'

function SearchBar(props) {
    const [searchInput, setSearchInput] = useState('');

    const inputChange = (event) => {
        setSearchInput(event.target.value);
    }
    
    const search = () => {
        props.onSearch(searchInput);
    }

    return (
        <div className={styles.searchBarContainer}>
            <img className={styles.searchImage} src={searchIcon} alt='magnifying glass icon' />
            <input type='text' onChange={inputChange} placeholder='Search by song or artist...'/>
            <button className={styles.searchButton} onClick={search}>Search</button>
        </div>
    );
}

export default SearchBar;