import ReactAudioPlayer from "react-audio-player";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../contexts/LoginContext";

export default function TracksWeek() {
  const [dataTracksWeek, setDataTracksWeek] = useState<any>();

  useEffect(() => {
    const dataTracks: any = localStorage.getItem("dataTracksWeek");
    setDataTracksWeek(JSON.parse(dataTracks));
  }, []);

  return (
    <>
      {dataTracksWeek?.map((item: any, index: number) => {
        return (
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
            <ListItemText
              primary={item.name}
              secondary={item.artists[0].name}
            />
          </ListItem>
        );
      })}
    </>
  );
}
