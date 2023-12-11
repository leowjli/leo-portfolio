const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = "2fdf0ed449df49379f24cdda51b32372";
const redirectURI = "https://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`; 