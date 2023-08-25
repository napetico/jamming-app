import React from "react";

import styles from './Track.module.css'

function Track(props) {
    const trackAction = (event) => props.onClick(props.track);

    return (
        <div className={styles.trackContainer} style={{backgroundColor: props.trackBgColor}}>
            <img className={styles.trackImage} src={props.track.image} alt={props.track.artist}/>
            <div className={styles.trackInfoBox}>
                <h3>{props.track.name}</h3>
                <p className={styles.trackArtistName}>{props.track.artist} | {props.track.album}</p>
            </div>
            <button className={styles.trackSaveButton} onClick={trackAction}>{props.trackBtnAction}</button>
        </div>
    );
}

export default Track;