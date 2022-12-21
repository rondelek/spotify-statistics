import { createContext, useState } from "react";

type IContextProps = {
  accessToken: string | any;
  setAccessToken: (accessToken: string | any) => void;
  alignment: string;
  setAlignment: (alignment: string) => void;
  headers: any;
  setHeaders: (alignment: any) => void;
  dataArtists: any;
  setDataArtists: (dataArtists: any) => void;
  hasData: boolean;
  setHasData: (hasData: boolean) => void;
};

export const LoginContext = createContext<IContextProps>({} as IContextProps);

export default function LoginContextProvider(props: any) {
  const [alignment, setAlignment] = useState("week");
  const [accessToken, setAccessToken] = useState<string>();
  const [headers, setHeaders] = useState<any>();
  const [dataArtists, setDataArtists] = useState<any>();
  const [hasData, setHasData] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        accessToken,
        setAccessToken,
        alignment,
        setAlignment,
        headers,
        setHeaders,
        dataArtists,
        setDataArtists,
        hasData,
        setHasData,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
}
