import React from 'react';
import Tracklist from '../Tracklist/Tracklist';

import styles from './Playlist.module.css';

import PlaylistIcon from './playlist-icon-jammming.png'
import discordLogo from '../App/discord-logo-jammming.png';
import githubLogo from '../App/github-logo-jammming.png';
import gmailLogo from '../App/gmail-logo-jammming.png';
import linkedinLogo from '../App/linkedin-logo-jammming.png';

function Playlist(props) {
    const changeListName = (event) => {
        props.onChangeName(event.target.value);
    };

    return (
        <div className={styles.playlistContainer}>
            <h2>Your Playlist</h2>
            <div className={styles.playlistNameBox}>
                <img className={styles.albumImage} src={PlaylistIcon} alt='' />
                <input onChange={changeListName} value={props.listName} placeholder='Name your playlist...' />
            </div>
            <Tracklist 
                trackBgColor='#fff2c2dc'
                trackBtnAction='Remove'
                emptyState='Nothing in your playlist yet! Add tracks from the search results...'
                emptyFontColor='#918C7C'
                tracks={props.playlistTracks}
                onClick={props.onRemove}
                inPlaylist={true}
            />
            <div className={styles.saveBtnBox}>
                <button onClick={props.onSave} className={styles.spotifyButton}>Save to Spotify</button>    
            </div>
            <footer>
                <p className={styles.footerText}>Thanks for clicking around!  |  Made by Napoleon Bazan  -  @napetico </p>
                <ul>
                    <li><a href="mailto:enabaro@gmail.com" target="_blank" rel='noreferrer'><img className={styles.footerLink} src={gmailLogo} alt='Gmail Logo'/></a></li>
                    <li><a href="https://www.linkedin.com/in/napoleon-bazan/" target="_blank" rel='noreferrer'><img className={styles.footerLink} src={linkedinLogo} alt='LinkedIn Logo'/></a></li>
                    <li><a href="https://github.com/napetico" target="_blank" rel='noreferrer'><img className={styles.footerLink} src={githubLogo} alt='GitHub Logo'/></a></li>
                    <li><a href="http://discordapp.com/users/1114347606756294687" target="_blank" rel='noreferrer'><img className={styles.footerLink} src={discordLogo} alt='Discord Logo'/></a></li>
                </ul>
            </footer>
        </div>
    );
}

export default Playlist;