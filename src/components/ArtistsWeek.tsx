import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { useContext, useEffect } from "react";
import { LoginContext } from "./../contexts/LoginContext";
import { useQuery } from "@tanstack/react-query";

export default function ArtistsWeek() {
  const { accessToken, setAccessToken, alignment } = useContext(LoginContext);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, []);

  const fetchData = async () => {
    return await fetch(
      "https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term",
      { headers: { Authorization: `Bearer ${accessToken}` } }
    )
      .then((response) => response.json())
      .catch(console.error);
  };

  const { data: dataArtistsWeek, refetch } = useQuery(["items"], fetchData, {
    enabled: false,
  });

  function logArtists() {
    refetch();
  }

  useEffect(() => {
    logArtists();
  }, [alignment]);

  return (
    <Box
      display={"flex"}
      maxWidth={"100%"}
      flexWrap={"wrap"}
      gap={"5rem"}
      paddingTop={"3rem"}
      justifyContent={"center"}
    >
      {dataArtistsWeek?.items.map((item: any, index: any) => (
        <Box key={item.name}>
          <Avatar src={item.images[0].url} sx={{ width: 200, height: 200 }} />
          <div style={{ textAlign: "center", paddingTop: "1rem" }}>
            {item.name}
          </div>
        </Box>
      ))}
    </Box>
  );
}
