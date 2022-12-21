import { createContext, useState } from "react";

type IContextProps = {
  accessToken: string | any;
  setAccessToken: (accessToken: string | any) => void;
  alignment: string;
  setAlignment: (alignment: string) => void;
  headers: any;
  setHeaders: (alignment: any) => void;
};

export const LoginContext = createContext<IContextProps>({} as IContextProps);

export default function LoginContextProvider(props: any) {
  const [alignment, setAlignment] = useState("week");
  const [accessToken, setAccessToken] = useState<string>();
  const [headers, setHeaders] = useState<any>();

  return (
    <LoginContext.Provider
      value={{
        accessToken,
        setAccessToken,
        alignment,
        setAlignment,
        headers,
        setHeaders,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
}
