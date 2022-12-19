import ReactAudioPlayer from "react-audio-player";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { useContext, useEffect } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { useQuery } from "@tanstack/react-query";

export default function TracksMonth() {
  const { accessToken, alignment } = useContext(LoginContext);

  const fetchData = async () => {
    return await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=medium_term",
      { headers: { Authorization: `Bearer ${accessToken}` } }
    )
      .then((response) => response.json())
      .catch(console.error);
  };

  const { data: dataTracksMonth, refetch } = useQuery(["items"], fetchData, {
    enabled: false,
  });

  function logTracks() {
    refetch();
  }

  useEffect(() => {
    logTracks();
  }, [alignment]);

  return (
    <>
      {dataTracksMonth?.items.map((item: any, index: number) => (
        <ListItem
          secondaryAction={
            <>
              {item.preview_url && (
                <ReactAudioPlayer
                  className="audioPlayer"
                  controlsList="nodownload"
                  src={item.preview_url}
                  controls
                />
              )}
            </>
          }
        >
          <p style={{ minWidth: "3rem" }}>{index + 1}.</p>
          <ListItemAvatar>
            <Avatar src={item.album.images[0].url} />
          </ListItemAvatar>
          <ListItemText primary={item.name} secondary={item.artists[0].name} />
        </ListItem>
      ))}
    </>
  );
}
