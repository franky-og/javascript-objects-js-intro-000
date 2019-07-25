var playlist = {
  artist: "song",
}
function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
}
function removeFromPlaylist(playlist, artist) {
  playlist = delete playlist.artist;
  return playlist;
}