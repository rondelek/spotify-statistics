import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "./Navbar";
// import Artists from '../pages/Artists';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import LoginContextProvider from "../contexts/LoginContext";
import CircularProgress from "@mui/material/CircularProgress";

const Artists = lazy(() => import("../pages/Artists"));
// const Tracks = lazy(() => import('../pages/Tracks'))
// const Genres = lazy(() => import('../pages/Genres'))
// const Podcasts = lazy(() => import('../pages/Podcasts'))

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
          border: "none",
          padding: ".5rem 1rem",
          margin: "2rem",
        },
      },
    },
  },
});

function App() {
  const client = new QueryClient();

  return (
    <Box minWidth={"100%"}>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <LoginContextProvider>
            <Navbar />
            <Suspense fallback={<CircularProgress color="success" />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/artists" element={<Artists />} />
                {/* <Route path='/tracks' element={<Tracks />}/>
                  <Route path='/podcasts' element={<Podcasts />}/>
                  <Route path='/genres' element={<Genres />}/> */}
              </Routes>
            </Suspense>
          </LoginContextProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Box>
  );
}

export default App;
