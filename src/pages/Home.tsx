import Box from "@mui/material/Box";
import Login from "../components/Login";
import MenuBox from "../components/MenuBox";
import { useContext } from "react";
import { LoginContext } from "./../contexts/LoginContext";

export default function Home() {
  const { accessToken } = useContext(LoginContext);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={".5rem"}
      paddingTop={".5rem"}
    >
      <h1 style={{ margin: ".5rem" }}>Spotify statistics</h1>
      <p>Choose what you want to see:</p>
      <MenuBox />
      <Login />
    </Box>
  );
}
