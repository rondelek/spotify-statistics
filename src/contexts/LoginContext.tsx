import { createContext, useState } from "react";

type IContextProps = {
  accessToken: string | any;
  setAccessToken: (accessToken: string | any) => void;
  alignment: string;
  setAlignment: (alignment: string) => void;
  artistsWeek: any;
  setArtistsWeek: (artistsWeek: any) => any;
};

export const LoginContext = createContext<IContextProps>({} as IContextProps);

export default function LoginContextProvider(props: any) {
  const [alignment, setAlignment] = useState("week");
  const [accessToken, setAccessToken] = useState<string>();
  const [artistsWeek, setArtistsWeek] = useState();

  return (
    <LoginContext.Provider
      value={{
        accessToken,
        setAccessToken,
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
