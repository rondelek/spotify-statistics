import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "./../contexts/LoginContext";
import { useQuery } from "@tanstack/react-query";

export default function ArtistsWeek() {
  const { accessToken, setAccessToken } = useContext(LoginContext);

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

  const { data, isLoading, isError, refetch } = useQuery(["items"], fetchData, {
    enabled: false,
  });

  function logArtists() {
    refetch();
    console.log(data.items);
  }

  return (
    <Box
      display={"flex"}
      maxWidth={"100%"}
      flexWrap={"wrap"}
      gap={"2rem"}
      justifyContent={"center"}
    >
      <button onClick={logArtists}>artists</button>
      {data?.items.map((item: any, index: any) => (
        <Box key={index}>
          <Avatar src={item.images[0].url} sx={{ width: 200, height: 200 }} />
          <div style={{ textAlign: "center", paddingTop: "1rem" }}>
            {item.name}
          </div>
        </Box>
      ))}
    </Box>
  );
}
