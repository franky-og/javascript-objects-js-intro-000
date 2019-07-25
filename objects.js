var playlist = {
  artist: "song",
}
function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
}
function removeFromPlaylist(playlist, artist) {
  delete artist.playlist
  return playlist;
}