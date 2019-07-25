var playlist = {
  artistName: "song",
}
function updatePlaylist(playlist, artistName, song) {
  playlist[artistName] = song;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}