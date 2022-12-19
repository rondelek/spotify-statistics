import ReactAudioPlayer from "react-audio-player";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";

export default function TracksMonth() {
  const [dataTracksMonth, setDataTracksMonth] = useState<any>();
  const [testTracksMonth, setTestTracksMonth] = useState<any>();

  useEffect(() => {
    const dataTracks: any = localStorage.getItem("dataTracksMonth");
    setTestTracksMonth(JSON.parse(dataTracks));
  }, []);

  useEffect(() => {
    setDataTracksMonth(testTracksMonth);
  }, [testTracksMonth]);

  return (
    <>
      {dataTracksMonth?.map((item: any, index: number) => (
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
