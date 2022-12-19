import { createContext, useState } from "react";

type IContextProps = {
  accessToken: string | any;
  setAccessToken: (accessToken: string) => void;
  // getAccessToken: () => void;
  alignment: string;
  setAlignment: (alignment: string) => void;
  artistsWeek: object;
  setArtistsWeek: (artistsWeek: object) => void;
};

export const LoginContext = createContext<IContextProps>({} as IContextProps);

export default function LoginContextProvider(props: any) {
  const [alignment, setAlignment] = useState("");
  const [accessToken, setAccessToken] = useState<string>();
  const [artistsWeek, setArtistsWeek] = useState({});

  // function getAccessToken() {
  //   const clientId = "6f34cde57e614a869c1ecbf65754a090";
  //   const redirectUri = "http://localhost:3000/";

  //   if (accessToken) {
  //     return accessToken;
  //   }

  //   const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
  //   const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

  //   if (accessTokenMatch && expiresInMatch) {
  //     setAccessToken(accessTokenMatch[1]);
  //     let expiresIn = expiresInMatch[1];
  //     window.setTimeout(() => setAccessToken(""), Number(expiresIn) * 1000);
  //     window.history.pushState("Access Token", "/");
  //     return accessToken;
  //   } else {
  //     const redirect = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
  //     window.location.href = redirect;
  //   }
  // }

  return (
    <LoginContext.Provider
      value={{
        accessToken,
        setAccessToken,
        // getAccessToken,
        alignment,
        setAlignment,
        artistsWeek,
        setArtistsWeek,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
}
