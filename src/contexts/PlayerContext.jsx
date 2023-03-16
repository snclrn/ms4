import { AudioState, createAudio } from "@solid-primitives/audio";
import { createContext, createSignal, useContext } from "solid-js";
import hereWithMeMusic from "../assets/herewithme.mp3";

const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const [playing, setPlaying] = createSignal(false);
  const [volume, setVolume] = createSignal(1);
  const [player, { seek }] = createAudio(hereWithMeMusic, playing, volume);

  const playOrPause = () => {
    setPlaying(player.state === AudioState.PLAYING ? false : true);
  };

  const pause = () => setPlaying(false);
  const play = () => setPlaying(true);

  const changeVolume = (e) => setVolume(e.target.value);

  return (
    <PlayerContext.Provider
      value={{
        player,
        playOrPause,
        playing,
        seek,
        pause,
        play,
        volume,
        changeVolume,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;

export const usePlayerContext = () => useContext(PlayerContext);
