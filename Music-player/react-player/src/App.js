import { useState } from "react";

import Player from "./component/Player";
import Song from "./component/Song";
import "./styles/app.scss";
import data from "./util";
function App() {
  //State
  const [songs, setSongs] = useState(data());
  //convert all songs in util.js to states
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  //grabs the first song
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
