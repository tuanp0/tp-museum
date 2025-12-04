export interface Song {
  id: number
  title: string
  artist: string
  album: string
  cover: string
  url: string
}

export interface MusicPlayerContextType {
  currentSong: Song
  isPlaying: boolean
  volume: number
  audioData: number[]
  togglePlay: () => void
  next: () => void
  previous: () => void
  setVolume: (volume: number) => void
  audioRef: React.RefObject<HTMLAudioElement | null>
}