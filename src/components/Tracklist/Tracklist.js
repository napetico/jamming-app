import React from 'react';
import Track from '../Track/Track'

import styles from './Tracklist.module.css';

function Tracklist(props) {
    if(props.tracks.length > 0) {
        return (
            <div className={styles.tracklist}>
                {props.tracks.map((track) => {
                    return (
                        <Track 
                            trackBgColor={props.trackBgColor}
                            trackBtnAction={props.trackBtnAction}
                            track={track}
                            key={track.id}
                            onClick={props.onClick}
                            inPlaylist={props.inPlaylist} 
                        />
                    );
                })}
            </div>
        )
    } else {
        return (
            <div className={styles.emptyStateBox}>
                <h3 className={styles.emptyResults} style={{color: props.emptyFontColor}}>{props.emptyState}</h3>
            </div>
        )
    };
}

export default Tracklist;