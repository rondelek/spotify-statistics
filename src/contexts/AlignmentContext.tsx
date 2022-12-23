import { createContext, useState } from "react";

type IContextProps = {
  alignment: string;
  setAlignment: (alignment: string) => void;
};

export const AlignmentContext = createContext<IContextProps>(
  {} as IContextProps
);

export default function AlignmentContextProvider(props: any) {
  const [alignment, setAlignment] = useState("week");

  return (
    <AlignmentContext.Provider
      value={{
        alignment,
        setAlignment,
      }}
    >
      {props.children}
    </AlignmentContext.Provider>
  );
}
