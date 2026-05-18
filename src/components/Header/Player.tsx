import { useRef, useState } from "react";

interface TrackPlayerProps {
  preview: string;
}

const TrackPlayer = ({ preview }: TrackPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const skip = (seconds: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime += seconds;
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <audio ref={audioRef} src={preview} />
      <button onClick={() => skip(-10)}>⏮</button>
      <button onClick={() => skip(-5)}>⏪</button>
      <button onClick={togglePlay}>{isPlaying ? "⏸" : "▶"}</button>
      <button onClick={() => skip(5)}>⏩</button>
      <button onClick={() => skip(10)}>⏭</button>
    </div>
  );
};

export default TrackPlayer;
