import { createContext, useState } from "react";

type IContextProps = {
  accessToken: string | any;
  setAccessToken: (accessToken: string | any) => void;
  getToken: any;
};

export const LoginContext = createContext<IContextProps>({} as IContextProps);

export default function LoginContextProvider(props: any) {
  const [accessToken, setAccessToken] = useState<string>();

  const clientId = "6f34cde57e614a869c1ecbf65754a090";
  const redirectUri = "http://localhost:3000/";

  function getToken() {
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

  return (
    <LoginContext.Provider
      value={{
        accessToken,
        setAccessToken,
        getToken,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
}
