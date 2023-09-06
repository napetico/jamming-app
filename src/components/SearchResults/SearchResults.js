import React from 'react';
import Tracklist from '../Tracklist/Tracklist';

import styles from './SearchResults.module.css';

function SearchResults(props) {
    return (
        <div className={styles.searchResultsContainer}>
            <h2>Search Results</h2>
            <Tracklist 
                trackBgColor='#fff7d9b4'
                trackBtnAction='Add to playlist'
                emptyState='Nothing to show here :( Try writing something in the search bar...'
                emptyFontColor='#686868'
                tracks={props.searchResults}
                onClick={props.onAdd}
                inPlaylist={false}
            />
        </div>
    );
}

export default SearchResults;