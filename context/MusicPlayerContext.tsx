'use client';

import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react'
import { Song, MusicPlayerContextType } from '@/types/music'

const SONGS: Song[] = [
  {
    id: 1,
    title: "Adrift",
    artist: "Teo Gerard",
    album: "Music from #Uppbeat (free for Creators!): https://uppbeat.io/t/theo-gerard/adrift",
    cover: "/music/Theo-Gerard_Avatar-Uppbeat_4341232014968361.jpg",
    url: "/music/adrift-theo-gerard-main-version-25168-02-17.mp3"
  },
  {
    id: 2,
    title: "Lefty",
    artist: "Blue Wednesday",
    album: "Music from #Uppbeat (free for Creators!): https://uppbeat.io/t/blue-wednesday/lefty",
    cover: "/music/Blue Wednesday Avatar 500x500.jpg",
    url: "/music/lefty-blue-wednesday-main-version-36162-02-38.mp3"
  },
  {
    id: 3,
    title: "Poco",
    artist: "Roo Walker",
    album: "Music from #Uppbeat (free for Creators!): https://uppbeat.io/t/roo-walker/poco",
    cover: "/music/roo-walker-avatar-v1_6433453453952445.jpg",
    url: "/music/poco-roo-walker-main-version-02-22-9624.mp3"
  }
]

const MusicPlayerContext = createContext<MusicPlayerContextType | null>(null)

export const MusicPlayerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [songs] = useState<Song[]>(SONGS)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [volume, setVolume] = useState<number>(0.3)
  const [audioData, setAudioData] = useState<number[]>(new Array(6).fill(0))
  
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const dataArrayRef = useRef<Uint8Array<ArrayBuffer> | null>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  useEffect(() => {
    if (!audioRef.current) return;

    const setupAudioContext = () => {
      if (!audioContextRef.current) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        audioContextRef.current = new AudioContextClass();
        analyserRef.current = audioContextRef.current.createAnalyser();
        analyserRef.current.fftSize = 256; // Increased for better frequency resolution
        
        const source = audioContextRef.current.createMediaElementSource(audioRef.current!);
        source.connect(analyserRef.current);
        analyserRef.current.connect(audioContextRef.current.destination);
        
        dataArrayRef.current = new Uint8Array(analyserRef.current.frequencyBinCount);
      }
    };

    const updateAudioData = () => {
      if (!analyserRef.current || !dataArrayRef.current) return;
      
      analyserRef.current.getByteFrequencyData(dataArrayRef.current);
      const bars = 6;
      const newData: number[] = [];
      
      // Only use the first 6 frequency bins (low frequencies)
      // Each bin represents a frequency range, lower indices = lower frequencies
      for (let i = 0; i < bars; i++) {
        const value = dataArrayRef.current[i] / 255;
        newData.push(value);
      }
      
      setAudioData(newData);
      animationRef.current = requestAnimationFrame(updateAudioData);
    };

    if (isPlaying) {
      setupAudioContext();
      updateAudioData();
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      setAudioData(new Array(6).fill(0));
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pause()
    } else {
      play()
    }
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % songs.length)
    setIsPlaying(true)
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length)
    setIsPlaying(true)
  };

  const currentSong = songs[currentIndex]

  return (
    <MusicPlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        volume,
        audioData,
        togglePlay,
        next,
        previous,
        setVolume,
        audioRef
      }}
    >
      {children}
      <audio
        ref={audioRef}
        src={currentSong.url}
        onEnded={next}
        autoPlay={isPlaying}
      />
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = (): MusicPlayerContextType => {
  const context = useContext(MusicPlayerContext)
  if (!context) {
    throw new Error('useMusicPlayer must be used within MusicPlayerProvider')
  }
  return context
};