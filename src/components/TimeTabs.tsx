import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState, useContext, lazy, Suspense } from "react";
import { LoginContext } from "../contexts/LoginContext";

export default function TimeTabs() {
  const { alignment, setAlignment } = useContext(LoginContext);

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
        style={{
          display: "flex",
          outline: "none",
          border: "none",
        }}
      >
        <ToggleButton value="week">
          <Typography>last 4 weeks</Typography>
        </ToggleButton>
        <ToggleButton value="month">
          <Typography>last 6 months</Typography>
        </ToggleButton>
        <ToggleButton value="all">
          <Typography>all time</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
