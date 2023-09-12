import React, {useState, useEffect} from 'react';

import styles from './App.module.css';

import jammmingLogo from './jammming-logo.png';
import jammmingLettersV from './jammming-letters-v.png';
import jammmingLettersH from './jammming-letters-h.png'
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
  const [logged, setLogged] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const authenticated = Spotify.checkAuth();
    if (authenticated) {
      Spotify.getUserName()
        .then((fetchName) => {
          setUserName(fetchName);
          setLogged(authenticated);
        })
        .catch((error) => {
          console.error('Error fetching user name:', error);
        });
    } else {
      console.log('Login failed');
    }
  }, [])

  const loginHandler = () => {
    Spotify.getAuth();
  };

  const search = (searchInput) => {
    Spotify.searchTracks(searchInput)
      .then((tracksArray) => {
        setSearchResults(tracksArray);
      })
      .catch((error) => {
        console.error('Error searching tracks:', error);
      });
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
    const urisArray = playlistTracks.map(track => track.uri);
    Spotify.createPlaylist(listName, urisArray)
      .then((res) => {
        if(res) {
          alert('Playlist saved successfully :)')
          setPlaylistTracks([]);
          setListName('');
        }
      })
      .catch((error) => {
        console.error('Error saving playlist:', error);
      });
  }

  if (!logged) {
    return (
      <main className={styles.appContainer}>
        <section className={styles.loggingHeader}>
          <img className={styles.jammmingLoginLogo} src={jammmingLogo} alt='Jammming Logo'/>
          <img className={styles.jammmingLoginLettersH} src={jammmingLettersH} alt=''/>
          <p className={styles.logSmallP}>Playlist Maker</p>
          <button className={styles.loginButton} onClick={loginHandler}>Log in with Spotify</button>
          <footer className={styles.loginFooter}>
            <p className={styles.loginfooterText}>Thanks for clicking around!  |  Made by Napoleon Bazan  -  @napetico </p>
            <ul>
              <li><a href='mailto:enabaro@gmail.com' target='_blank' rel='noreferrer'><img className={styles.footerLink} src={gmailLogo} alt='Gmail Logo'/></a></li>
              <li><a href='https://www.linkedin.com/in/napoleon-bazan/' target='_blank' rel='noreferrer'><img className={styles.footerLink} src={linkedinLogo} alt='LinkedIn Logo'/></a></li>
              <li><a href='https://github.com/napetico' target='_blank' rel='noreferrer'><img className={styles.footerLink} src={githubLogo} alt='GitHub Logo'/></a></li>
              <li><a href='http://discordapp.com/users/1114347606756294687' target='_blank' rel='noreferrer'><img className={styles.footerLink} src={discordLogo} alt='Discord Logo'/></a></li>
            </ul>
          </footer>
        </section>
      </main>
    )
  } else {
    return (
      <main className={styles.appContainer}>
        <header className={styles.appHeader}>
          <img className={styles.jammmingLogo} src={jammmingLogo} alt='Jammming Logo'/>
          <img className={styles.jammmingLettersV} src={jammmingLettersV} alt=''/>
          <img className={styles.jammmingLettersH} src={jammmingLettersH} alt=''/>
        </header>
        <section className={styles.searchContainer}>
          <h1>Hello {userName} 👋🏽</h1>
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
        </aside>
      </main>
    )
  };
};

export default App;