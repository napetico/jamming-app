import styles from './App.module.css';

import jammmingLogo from './jammming-logo.png';
import jammingLetters from './jammming-letters-v.png';
import discordLogo from './discord-logo-jammming.png';
import githubLogo from './github-logo-jammming.png';
import gmailLogo from './gmail-logo-jammming.png';
import linkedinLogo from './linkedin-logo-jammming.png';

import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <main className={styles.appContainer}>
      <header className={styles.appHeader}>
        <img className={styles.jammmingLogo} src={jammmingLogo} alt='Jammming Logo'/>
        <img className={styles.jammmingLetters} src={jammingLetters} alt=''/>
      </header>
      <section className={styles.searchContainer}>
        <h1>Hello Sheldon 👋🏽</h1>
        <p>Ready to put your playlist together?</p>
        {<SearchBar />}
        {/*<SearchResults /<*/}
      </section>
      <aside className={styles.playlistContainer}>
        {/*<Playlist /<*/}
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
}

export default App;
