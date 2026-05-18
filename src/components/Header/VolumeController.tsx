import { useState } from "react";

interface VolumeControllerProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const VolumeController = ({ audioRef }: VolumeControllerProps) => {
  const [volume, setVolume] = useState(1);

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) audioRef.current.volume = val;
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <span>🔈</span>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolume}
      />
      <span>🔊</span>
    </div>
  );
};

export default VolumeController;
