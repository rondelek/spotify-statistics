import { useContext, useEffect } from "react";
import { LoginContext } from "./../contexts/LoginContext";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@mui/material";

export default function Login(props: any) {
  const {
    accessToken,
    setAccessToken,
    dataArtists,
    setDataArtists,
    hasData,
    setHasData,
  } = useContext(LoginContext);
  let headers: any = "";

  function getAccessToken() {
    const clientId = "6f34cde57e614a869c1ecbf65754a090";
    const redirectUri = "http://localhost:3000/";
    if (accessToken) {
      setAccessToken(accessToken);
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      setAccessToken(accessTokenMatch[1]);
      let expiresIn = expiresInMatch[1];
      window.setTimeout(() => setAccessToken(""), Number(expiresIn) * 1000);
      window.history.pushState("Access Token", "/");
    } else {
      const redirect = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public%20user-top-read&redirect_uri=${redirectUri}`;
      window.location.href = redirect;
    }
    props.closeAlert(false);
  }

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      headers = { Authorization: `Bearer ${accessToken}` };
    }
  }, [accessToken]);

  const fetchArtistsWeek = async () => {
    return await fetch(
      "https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term",
      { headers: headers }
    )
      .then((response) => response.json())
      .catch(console.error);
  };

  const fetchArtistsMonth = async () => {
    return await fetch(
      "https://api.spotify.com/v1/me/top/artists?limit=50&time_range=medium_term",
      { headers: headers }
    )
      .then((response) => response.json())
      .catch(console.error);
  };

  const fetchArtistsAll = async () => {
    return await fetch(
      "https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term",
      { headers: headers }
    )
      .then((response) => response.json())
      .catch(console.error);
  };

  const fetchTracksWeek = async () => {
    return await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=short_term",
      { headers: headers }
    )
      .then((response) => response.json())
      .catch(console.error);
  };

  const fetchTracksMonth = async () => {
    return await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=medium_term",
      { headers: headers }
    )
      .then((response) => response.json())
      .catch(console.error);
  };

  const fetchTracksAll = async () => {
    return await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term",
      { headers: headers }
    )
      .then((response) => response.json())
      .catch(console.error);
  };

  const { data: dataArtistsWeek, refetch: refetchArtistsWeek } = useQuery(
    ["dataArtistsWeek"],
    fetchArtistsWeek,
    {
      enabled: false,
    }
  );

  const { data: dataArtistsMonth, refetch: refetchArtistsMonth } = useQuery(
    ["dataArtistsMonth"],
    fetchArtistsMonth,
    {
      enabled: false,
    }
  );

  const { data: dataArtistsAll, refetch: refetchArtistsAll } = useQuery(
    ["dataArtistsAll"],
    fetchArtistsAll,
    {
      enabled: false,
    }
  );

  const { data: dataTracksWeek, refetch: refetchTracksWeek } = useQuery(
    ["dataTracksWeek"],
    fetchTracksWeek,
    {
      enabled: false,
    }
  );

  const { data: dataTracksMonth, refetch: refetchTracksMonth } = useQuery(
    ["dataTracksMonth"],
    fetchTracksMonth,
    {
      enabled: false,
    }
  );

  const { data: dataTracksAll, refetch: refetchTracksAll } = useQuery(
    ["dataTracksAll"],
    fetchTracksAll,
    {
      enabled: false,
    }
  );

  useEffect(() => {
    if (dataArtistsWeek !== undefined && dataArtistsWeek !== null) {
      localStorage.setItem(
        "dataArtistsWeek",
        JSON.stringify(dataArtistsWeek.items)
      );
      console.log(dataArtistsWeek);
    } else {
      props.closeAlert(true);
    }
  }, [dataArtistsWeek]);

  useEffect(() => {
    if (dataArtistsMonth !== undefined && dataArtistsMonth !== null) {
      localStorage.setItem(
        "dataArtistsMonth",
        JSON.stringify(dataArtistsMonth.items)
      );
    } else {
      props.closeAlert(true);
    }
  }, [dataArtistsMonth]);

  useEffect(() => {
    if (dataArtistsAll !== undefined && dataArtistsAll !== null) {
      localStorage.setItem(
        "dataArtistsAll",
        JSON.stringify(dataArtistsAll.items)
      );
    } else {
      props.closeAlert(true);
    }
  }, [dataArtistsAll]);

  useEffect(() => {
    if (dataTracksWeek !== undefined && dataTracksWeek !== null) {
      localStorage.setItem(
        "dataTracksWeek",
        JSON.stringify(dataTracksWeek.items)
      );
    } else {
      props.closeAlert(true);
    }
  }, [dataTracksWeek]);

  useEffect(() => {
    if (dataTracksMonth !== undefined && dataTracksMonth !== null) {
      localStorage.setItem(
        "dataTracksMonth",
        JSON.stringify(dataTracksMonth.items)
      );
    } else {
      props.closeAlert(true);
    }
  }, [dataTracksMonth]);

  useEffect(() => {
    if (dataTracksAll !== undefined && dataTracksAll !== null) {
      setHasData(true);
      localStorage.setItem(
        "dataTracksAll",
        JSON.stringify(dataTracksAll.items)
      );
    } else {
      props.closeAlert(true);
    }
  }, [dataTracksAll]);

  function fetchData() {
    refetchArtistsWeek();
    refetchArtistsMonth();
    refetchArtistsAll();
    refetchTracksWeek();
    refetchTracksMonth();
    refetchTracksAll();
  }

  useEffect(() => {
    fetchData();
  }, [accessToken]);

  useEffect(() => {
    console.log("data:", dataTracksAll);
  }, []);
  return (
    <div>
      <Button color="secondary" onClick={getAccessToken}>
        Log in to Spotify
      </Button>
      {/* <button onClick={tracks}>tracks</button> */}
    </div>
  );
}
