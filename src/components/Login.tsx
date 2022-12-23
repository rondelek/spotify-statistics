import { useContext, useEffect } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@mui/material";

export default function Login(props: any) {
  const { accessToken, getToken } = useContext(LoginContext);
  let headers: any = "";

  function getAccessToken() {
    getToken();
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
      "https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term",
      { headers: headers }
    )
      .then((response) => response.json())
      .catch(console.error);
  };

  const fetchTracksMonth = async () => {
    return await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=medium_term",
      { headers: headers }
    )
      .then((response) => response.json())
      .catch(console.error);
  };

  const fetchTracksAll = async () => {
    return await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=long_term",
      { headers: headers }
    )
      .then((response) => response.json())
      .catch(console.error);
  };

  const fetchUser = async () => {
    return await fetch("https://api.spotify.com/v1/me", { headers: headers })
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

  const { data: dataUser, refetch: refetchUser } = useQuery(
    ["dataUser"],
    fetchUser,
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
    }
  }, [dataArtistsWeek]);

  useEffect(() => {
    if (dataArtistsMonth !== undefined && dataArtistsMonth !== null) {
      localStorage.setItem(
        "dataArtistsMonth",
        JSON.stringify(dataArtistsMonth.items)
      );
    }
  }, [dataArtistsMonth]);

  useEffect(() => {
    if (dataArtistsAll !== undefined && dataArtistsAll !== null) {
      localStorage.setItem(
        "dataArtistsAll",
        JSON.stringify(dataArtistsAll.items)
      );
    }
  }, [dataArtistsAll]);

  useEffect(() => {
    if (dataTracksWeek !== undefined && dataTracksWeek !== null) {
      localStorage.setItem(
        "dataTracksWeek",
        JSON.stringify(dataTracksWeek.items)
      );
    }
  }, [dataTracksWeek]);

  useEffect(() => {
    if (dataTracksMonth !== undefined && dataTracksMonth !== null) {
      localStorage.setItem(
        "dataTracksMonth",
        JSON.stringify(dataTracksMonth.items)
      );
    }
  }, [dataTracksMonth]);

  useEffect(() => {
    if (dataTracksAll !== undefined && dataTracksAll !== null) {
      localStorage.setItem(
        "dataTracksAll",
        JSON.stringify(dataTracksAll.items)
      );
    }
  }, [dataTracksAll]);

  useEffect(() => {
    if (dataUser !== undefined && dataUser !== null) {
      localStorage.setItem("dataUser", JSON.stringify(dataUser));
    }
  }, [dataUser]);

  function fetchData() {
    refetchArtistsWeek();
    refetchArtistsMonth();
    refetchArtistsAll();
    refetchTracksWeek();
    refetchTracksMonth();
    refetchTracksAll();
    refetchUser();
  }

  useEffect(() => {
    fetchData();
  }, [accessToken]);

  return (
    <div>
      <Button color="secondary" onClick={getAccessToken}>
        Log in to Spotify
      </Button>
    </div>
  );
}
