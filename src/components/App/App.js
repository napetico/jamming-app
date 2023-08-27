import React, {useState} from 'react';

import styles from './App.module.css';

import jammmingLogo from './jammming-logo.png';
import jammingLetters from './jammming-letters-v.png';
import discordLogo from './discord-logo-jammming.png';
import githubLogo from './github-logo-jammming.png';
import gmailLogo from './gmail-logo-jammming.png';
import linkedinLogo from './linkedin-logo-jammming.png';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

import Spotify from '../../util/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [listName, setListName] = useState('');

  const search = (mockResults) => {
    setSearchResults(mockResults);
    //setSearchResults(searchInput);
  };

  const addTrack = (track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
      return;

    setPlaylistTracks((prev) => [...prev, track]);
  };
  
  const removeTrack = (track) => {
    setPlaylistTracks((prevTracks) => 
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  };

  const changeListName = (name) => {
    setListName(name);
  }

  const savePlaylist = () => {
    if (playlistTracks.length === 0) {
      return;
    }

    const uriArray = playlistTracks.map(track => track.uri);
    
    Spotify.printURI(uriArray);
    Spotify.getAccessToken();
    setPlaylistTracks([]);
    setListName('');
  }

  return (
    <main className={styles.appContainer}>
      <header className={styles.appHeader}>
        <img className={styles.jammmingLogo} src={jammmingLogo} alt='Jammming Logo'/>
        <img className={styles.jammmingLetters} src={jammingLetters} alt=''/>
      </header>
      <section className={styles.searchContainer}>
        <h1>Hello Sheldon 👋🏽</h1>
        <p>Ready to put your playlist together?</p>
        <SearchBar onSearch={search}/>
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
      </section>
      <aside className={styles.playlistContainer}>
        <Playlist
          listName={listName}
          playlistTracks={playlistTracks}
          onRemove={removeTrack}
          onChangeName={changeListName}
          onSave={savePlaylist}
        />
        <footer>
          <p className={styles.footerText}>Thanks for clicking around!  |  Made by Napoleon Bazan  -  @napetico </p>
          <ul>
            <li><a href=''><img className={styles.footerLink} src={gmailLogo} alt='Gmail Logo'/></a></li>
            <li><a href=''><img className={styles.footerLink} src={linkedinLogo} alt='LinkedIn Logo'/></a></li>
            <li><a href=''><img className={styles.footerLink} src={githubLogo} alt='GitHub Logo'/></a></li>
            <li><a href=''><img className={styles.footerLink} src={discordLogo} alt='Discord Logo'/></a></li>
          </ul>
        </footer>
      </aside>
    </main>
  );
};

export default App;
