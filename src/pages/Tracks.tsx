import TracksWeek from "../components/TracksWeek";
import TracksMonth from "../components/TracksMonth";
import TracksAll from "../components/TracksAll";
import TimeTabs from "../components/TimeTabs";
import { useContext } from "react";
import { AlignmentContext } from "../contexts/AlignmentContext";
import { Box } from "@mui/system";

export default function Tracks() {
  const { alignment } = useContext(AlignmentContext);

  return (
    <div className="top-wrapper--no-gap">
      <h2>Top tracks</h2>
      <TimeTabs />
      <Box
        paddingTop={"1rem"}
        sx={{ minWidth: { lg: "790px", md: "770px", sm: "550px" } }}
      >
        {alignment === "week" && <TracksWeek />}
        {alignment === "month" && <TracksMonth />}
        {alignment === "all" && <TracksAll />}
      </Box>
    </div>
  );
}
