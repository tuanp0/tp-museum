'use client';

import React from 'react'
import { useMusicPlayer } from '@/context/MusicPlayerContext'
import styles from './MusicPlayer.module.scss'

const MusicPlayer: React.FC = () => {
  const { currentSong, isPlaying, volume, audioData, togglePlay, next, previous, setVolume } = useMusicPlayer();

  return (
    <div className={styles.musicplayer}>
      {/* Album Cover & Info */}
      <div className={styles.playerinfo}>
        <img
          src={currentSong.cover}
          alt={currentSong.album}
          className={styles.albumcover}
        />
        <div className={styles.songdetails}>
          <h3 className={styles.songtitle}>{currentSong.title}</h3>
          <p className={styles.songartist}>{currentSong.artist}</p>
        </div>
        {/* Equalizer */}
        <div className={styles.equalizer}>
            {audioData.map((value, i) => (
            <div
                key={i}
                className={`${styles.eqbar} ${isPlaying ? styles.playing : ''}`}
                style={{
                height: `${Math.max(value * 100, 5)}%`
                }}
            />
            ))}
        </div>
      </div>

      

      {/* Controls */}
      <div className={styles.controls}>
        <button onClick={previous} className={styles.controlbtn} aria-label="Previous">
          <span className={styles.iconprevious}></span>
        </button>
        <button onClick={togglePlay} className={`${styles.controlbtn} ${styles.playbtn}`} aria-label={isPlaying ? 'Pause' : 'Play'}>
          <span className={isPlaying ? styles.iconpause : styles.iconplay}></span>
        </button>
        <button onClick={next} className={styles.controlbtn} aria-label="Next">
          <span className={styles.iconnext}></span>
        </button>
      </div>

      {/* Volume Control */}
      <div className={styles.volumecontrol}>
        <span className={styles.iconvolume}></span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className={styles.volumeslider}
          style={{
            background: `linear-gradient(to right, #b5e1ee 0%, #b5e1ee ${volume * 100}%, #006994 ${volume * 100}%, #006994 100%)`
          }}
        />
        <span className={styles.volumepercentage}>{Math.round(volume * 100)}</span>
      </div>
    </div>
  )
}

export default MusicPlayer