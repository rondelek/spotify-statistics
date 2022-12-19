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

  const fetchData = async () => {
    return await fetch(
      "https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term",
      { headers: { Authorization: `Bearer ${accessToken}` } }
    )
      .then((response) => response.json())
      .catch(console.error);
  };

  const { data: dataArtistsWeek, refetch } = useQuery(
    ["dataArtistsWeek"],
    fetchData,
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

  function logArtists() {
    refetch();
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
