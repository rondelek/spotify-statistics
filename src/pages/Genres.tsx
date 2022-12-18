import GenresWeek from "../components/GenresWeek";
import { useContext, useEffect } from "react";
import { LoginContext } from "./../contexts/LoginContext";
import TimeTabs from "../components/TimeTabs";
import { Box } from "@mui/material";
import GenresMonth from "../components/GenresMonth";
import GenresAll from "../components/GenresAll";

export default function Genres() {
  const { alignment } = useContext(LoginContext);

  return (
    <div className="top-wrapper--gap">
      <h2>Top genres</h2>
      <TimeTabs />
      <Box width={"70%"} display={"flex"} justifyContent={"center"}>
        {alignment === "week" && <GenresWeek />}
        {alignment === "month" && <GenresMonth />}
        {alignment === "all" && <GenresAll />}
      </Box>
    </div>
  );
}
