import Box from "@mui/material/Box";
import AlertDialogSlide from "../components/AlertDialogSlide";
import Login from "../components/Login";
import MenuBox from "../components/MenuBox";
import { LoginContext } from "../contexts/LoginContext";
import { useContext, useEffect } from "react";

export default function Home() {
  const { accessToken, setAccessToken } = useContext(LoginContext);
  useEffect(() => {
    if (accessToken) {
      setAccessToken(localStorage.getItem("accessToken"));
    }
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={".5rem"}
      paddingTop={".5rem"}
    >
      <h1 style={{ margin: ".5rem" }}>Spotify statistics</h1>
      <AlertDialogSlide />

      <p>Choose what you want to see:</p>
      <MenuBox />
    </Box>
  );
}
