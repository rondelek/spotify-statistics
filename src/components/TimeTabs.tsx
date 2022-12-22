import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useContext } from "react";
import { AlignmentContext } from "../contexts/AlignmentContext";

export default function TimeTabs() {
  const { alignment, setAlignment } = useContext(AlignmentContext);

  const handleChange = (event: any, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <Box>
      <ToggleButtonGroup
        value={alignment}
        color="secondary"
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton
          value="week"
          sx={{ padding: { sm: "1rem 4rem", md: "1rem 5rem" } }}
        >
          <Typography>last 4 weeks</Typography>
        </ToggleButton>
        <ToggleButton
          value="month"
          sx={{ padding: { sm: "1rem 4rem", md: "1rem 5rem" } }}
        >
          <Typography>last 6 months</Typography>
        </ToggleButton>
        <ToggleButton
          value="all"
          sx={{ padding: { sm: "1rem 4rem", md: "1rem 5rem" } }}
        >
          <Typography>all time</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
