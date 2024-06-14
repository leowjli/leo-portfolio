// const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
// const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
// const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
// const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
// const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

// const getAccessToken = async () => {
//     const basic = btoa(`${client_id}:${client_secret}`);
//     const requestBody = `grant_type=refresh_token&refresh_token=${encodeURIComponent(refresh_token)}`;

//     const response = await fetch(TOKEN_ENDPOINT, {
//         method: "POST",
//         headers: {
//             Authorization: `Basic ${basic}`,
//             "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: requestBody,
//     });
    
//     return response.json();
// };

// export const getNowPlaying = async (client_id, client_secret, refresh_token) => {
//   const { access_token } = await getAccessToken(
//       client_id,
//       client_secret,
//       refresh_token
//   );
//   return fetch(NOW_PLAYING_ENDPOINT, {
//       headers: {
//           Authorization: `Bearer ${access_token}`,
//       },
//   });
// };

// export default async function getNowPlayingItem(client_id, client_secret, refresh_token) {
//   const response = await getNowPlaying(client_id, client_secret, refresh_token);
//   if (response.status === 204 || response.status > 400) {
//       return false;
//   }
//   const song = await response.json();
//   const albumImageUrl = song.item.album.images[0].url;
//   const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
//   const isPlaying = song.is_playing;
//   const songUrl = song.item.external_urls.spotify;
//   const title = song.item.name;
  
//   return {
//       albumImageUrl,
//       artist,
//       isPlaying,
//       songUrl,
//       title,
//   };
// }


const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async () => {
    try {
        const basic = btoa(`${client_id}:${client_secret}`);
        const requestBody = `grant_type=refresh_token&refresh_token=${encodeURIComponent(refresh_token)}`;

        const response = await fetch(TOKEN_ENDPOINT, {
            method: "POST",
            headers: {
                Authorization: `Basic ${basic}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: requestBody,
        });

        if (!response.ok) {
            console.error(`Failed to fetch access token: ${response.status} ${response.statusText}`);
            return null;
        }

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error("Error fetching access token:", error);
        return null;
    }
};

export const getNowPlaying = async () => {
    try {
        const accessToken = await getAccessToken();

        if (!accessToken) {
            console.error("Failed to obtain access token.");
            return null;
        }

        const response = await fetch(NOW_PLAYING_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            console.error(`Failed to fetch currently playing: ${response.status} ${response.statusText}`);
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching currently playing:", error);
        return null;
    }
};

export default async function getNowPlayingItem() {
    try {
        const response = await getNowPlaying();

        if (!response || !response.item) {
            console.error("No currently playing item found.");
            return null;
        }

        const song = response.item;
        const albumImageUrl = song.album.images[0].url;
        const artist = song.artists.map((_artist) => _artist.name).join(", ");
        const isPlaying = response.is_playing;
        const songUrl = song.external_urls.spotify;
        const title = song.name;

        return {
            albumImageUrl,
            artist,
            isPlaying,
            songUrl,
            title,
        };
    } catch (error) {
        console.error("Error processing currently playing item:", error);
        return null;
    }
}
