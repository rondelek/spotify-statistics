import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function MenuBox() {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Stack direction={{ xs: "column", sm: "column" }} spacing={3}>
        <a href="/artists">
          <Button
            variant="contained"
            color="success"
            sx={{ minWidth: "300px" }}
          >
            Artists
          </Button>
        </a>
        <a href="/tracks">
          <Button
            variant="contained"
            color="success"
            sx={{ minWidth: "300px" }}
          >
            Tracks
          </Button>
        </a>
        <a href="/genres">
          <Button
            variant="contained"
            color="success"
            sx={{ minWidth: "300px" }}
          >
            Genres
          </Button>
        </a>
      </Stack>
    </Box>
  );
}
