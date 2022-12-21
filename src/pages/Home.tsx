import Box from "@mui/material/Box";
import AlertDialogSlide from "../components/AlertDialogSlide";
import MenuBox from "../components/MenuBox";
import { useContext, useEffect, useState } from "react";
import LoginContextProvider from "../contexts/LoginContext";
import { LoginContext } from "./../contexts/LoginContext";

export default function Home() {
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    const data: any = localStorage.getItem("dataTracksAll");
    if (data !== null && data !== undefined) {
      setHasData(true);
      //   alert(`has data: ${data}`);
    } else {
      setHasData(false);
      //   alert("doesn't have data");
    }
  }, []);
  console.log(hasData);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={".5rem"}
      paddingTop={".5rem"}
    >
      <h1 style={{ margin: ".5rem" }}>Spotify statistics</h1>
      {!hasData && <AlertDialogSlide />}

      <p>Choose what you want to see:</p>
      <MenuBox />
    </Box>
  );
}
