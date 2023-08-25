import React from 'react';
import Tracklist from '../Tracklist/Tracklist';

import styles from './Playlist.module.css';

import PlaylistIcon from './playlist-icon-jammming.png'

function Playlist(props) {
    const changeListName = (event) => {
        props.onChangeName(event.target.value);
    };

    return (
        <div className={styles.playlistContainer}>
            <h2>Your Playlist</h2>
            <div className={styles.playlistNameBox}>
                <img className={styles.albumImage} src={PlaylistIcon} />
                <input onChange={changeListName} value={props.listName} placeholder='Set a name for you playlist...' />
            </div>
            <Tracklist 
                trackBgColor='#FFF7D9'
                trackBtnAction='Remove'
                emptyState='Nothing in your playlist yet! Add tracks from the search results...'
                emptyFontColor='#EDD98E'
                tracks={props.playlistTracks}
                onClick={props.onRemove}
                inPlaylist={true}
            />
            <div className={styles.saveBtnBox}>
                <button onClick={props.onSave} className={styles.spotifyButton}>Save to Spotify</button>    
            </div>
            
        </div>
    );
}

export default Playlist;