import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "./Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import LoginContextProvider from "../contexts/LoginContext";
import CircularProgress from "@mui/material/CircularProgress";
import AlignmentContextProvider from "../contexts/AlignmentContext";

const Artists = lazy(() => import("../pages/Artists"));
const Tracks = lazy(() => import("../pages/Tracks"));
const Genres = lazy(() => import("../pages/Genres"));

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "hsl(114,43%,34%)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "600",
          "&:hover": {},
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          borderRadius: "0",
          "&.Mui-selected": {
            borderBottom: "1px solid transparent",
            borderTop: "rgba(0, 0, 0, 0.12)",
            borderLeft: "rgba(0, 0, 0, 0.12)",
            borderRight: "rgba(0, 0, 0, 0.12)",
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          cursor: "pointer",
          "&:hover": {
            scale: "1.03",
            transition: "scale .2s ease-in-out",
          },
        },
      },
    },
  },
});

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <AlignmentContextProvider>
          <LoginContextProvider>
            <Suspense fallback={<CircularProgress color="success" />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/tracks" element={<Tracks />} />
                <Route path="/genres" element={<Genres />} />
              </Routes>
            </Suspense>
          </LoginContextProvider>
        </AlignmentContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
