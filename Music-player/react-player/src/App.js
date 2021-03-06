import { useState } from "react";

import Player from "./component/Player";
import Song from "./component/Song";
import "./styles/app.scss";
import data from "./util";
import Library from "./component/Library";
import { library } from "@fortawesome/fontawesome-svg-core";
import Nav from "./component/nav";
function App() {
  //State
  const [songs, setSongs] = useState(data());
  //convert all songs in util.js to states
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  //grabs the first song
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        songs={songs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
    </div>
  );
}

export default App;
