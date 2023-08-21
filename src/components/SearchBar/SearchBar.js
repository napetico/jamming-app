import React from 'react';
import styles from './SearchBar.module.css'

import searchIcon from './magnifying-glass-jammming.png'

function SearchBar() {
    return (
        <div className={styles.searchBarContainer}>
            <img className={styles.searchImage} src={searchIcon} alt='magnifying glass icon' />
            <input type='text' placeholder='Search by song, artist, album...'/>
            <button className={styles.searchButton}>Search</button>
        </div>
    );
}

export default SearchBar;