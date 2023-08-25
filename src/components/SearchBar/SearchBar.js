import React from 'react';
import styles from './SearchBar.module.css'

import searchIcon from './magnifying-glass-jammming.png';

import mockResults from '../../mock/mock'

function SearchBar(props) {
    const search = () => {
        props.onSearch(mockResults);
      }

    return (
        <div className={styles.searchBarContainer}>
            <img className={styles.searchImage} src={searchIcon} alt='magnifying glass icon' />
            <input type='text' placeholder='Search by song, artist, album...'/>
            <button className={styles.searchButton} onClick={search}>Search</button>
        </div>
    );
}

export default SearchBar;