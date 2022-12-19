import { useContext, useEffect } from "react";
import { LoginContext } from "./../contexts/LoginContext";
import { useQuery } from "@tanstack/react-query";

export default function Login() {
  const { accessToken, setAccessToken } = useContext(LoginContext);

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
  }

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
    }
  }, [accessToken]);

  const fetchArtistsWeek = async () => {
    return await fetch(
      "https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term",
      { headers: { Authorization: `Bearer ${accessToken}` } }
    )
      .then((response) => response.json())
      .catch(console.error);
  };

  const fetchArtistsMonth = async () => {
    return await fetch(
      "https://api.spotify.com/v1/me/top/artists?limit=50&time_range=medium_term",
      { headers: { Authorization: `Bearer ${accessToken}` } }
    )
      .then((response) => response.json())
      .catch(console.error);
  };

  const fetchArtistsAll = async () => {
    return await fetch(
      "https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term",
      { headers: { Authorization: `Bearer ${accessToken}` } }
    )
      .then((response) => response.json())
      .catch(console.error);
  };

  const fetchTracksWeek = async () => {
    return await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=short_term",
      { headers: { Authorization: `Bearer ${accessToken}` } }
    )
      .then((response) => response.json())
      .catch(console.error);
  };

  const fetchTracksMonth = async () => {
    return await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=medium_term",
      { headers: { Authorization: `Bearer ${accessToken}` } }
    )
      .then((response) => response.json())
      .catch(console.error);
  };

  const fetchTracksAll = async () => {
    return await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term",
      { headers: { Authorization: `Bearer ${accessToken}` } }
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
    if (dataArtistsWeek) {
      localStorage.setItem(
        "dataArtistsWeek",
        JSON.stringify(dataArtistsWeek.items)
      );
    }
  }, [dataArtistsWeek]);

  useEffect(() => {
    if (dataArtistsMonth) {
      localStorage.setItem(
        "dataArtistsMonth",
        JSON.stringify(dataArtistsMonth.items)
      );
    }
  }, [dataArtistsMonth]);

  useEffect(() => {
    if (dataArtistsAll) {
      localStorage.setItem(
        "dataArtistsAll",
        JSON.stringify(dataArtistsAll.items)
      );
    }
  }, [dataArtistsAll]);

  useEffect(() => {
    if (dataTracksWeek) {
      localStorage.setItem(
        "dataTracksWeek",
        JSON.stringify(dataTracksWeek.items)
      );
    }
  }, [dataTracksWeek]);

  useEffect(() => {
    if (dataTracksMonth) {
      localStorage.setItem(
        "dataTracksMonth",
        JSON.stringify(dataTracksMonth.items)
      );
    }
  }, [dataTracksMonth]);

  useEffect(() => {
    if (dataTracksAll) {
      localStorage.setItem(
        "dataTracksAll",
        JSON.stringify(dataTracksAll.items)
      );
    }
  }, [dataTracksAll]);

  function logArtists() {
    refetchArtistsWeek();
    refetchArtistsMonth();
    refetchArtistsAll();
    refetchTracksWeek();
    refetchTracksMonth();
    refetchTracksAll();
  }

  useEffect(() => {
    logArtists();
  }, [accessToken]);

  return (
    <div>
      <button onClick={getAccessToken}>login</button>
    </div>
  );
}
