import { useEffect, useState } from "react";
import getNowPlayingItem from "./SpotifyAPI";

const CurrentlyPlaying = (props) => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState({});
    useEffect(() => {
        Promise.all([
            getNowPlayingItem(
                props.client_id,
                props.client_secret,
                props.refresh_token
            ),
        ]).then((results) => {
            setResult(results[0]);
            setLoading(false);
        });
    });
    return (
        <div>
        {loading && <p>Loading...</p>}
        {!loading &&
            <div>
                <span>Currently offline"</span>
            </div>
        }
        {!loading &&
            <div>
                <div>
                    <span>Now playing</span>
                </div>
                <div>
                    <img src={result.albumImageUrl} alt={`${result.title} album art`}/>
                    <a href={result.songUrl} target="_blank" rel="noreferrer">{result.title}</a>
                    <p>{result.artist}</p>
                </div>
            </div>
        }
    </div>
    )
};

export default CurrentlyPlaying;