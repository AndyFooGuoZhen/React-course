const LibrarySong = ({ song, songs, setCurrentSong, id, setSongs }) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id); //gives selected song
    setCurrentSong(selectedSong[0]);
    updatedSongs();
  };

  const updatedSongs = () => {
    setSongs(
      songs.map((targetSong) => {
        return {
          ...targetSong,
          active: targetSong.id === id,
        };
      })
    );
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover} alt="" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
