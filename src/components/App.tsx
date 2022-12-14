import { Box } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from './Navbar';
// import Artists from '../pages/Artists';
import { lazy } from 'react';

const Artists = lazy(() => import('../pages/Artists'))

const theme = createTheme({
  palette: {
    primary: {
      main:'#fff'
    },
    secondary: {
      main: 'hsl(114,43%,34%)',
    },
  },
  components: {
      MuiButton: {
        styleOverrides: {
          root: {
            // minWidth: '300px',
            fontWeight: '600',
            '&:hover': {
           },
          },
        },
      },
    },
});

function App() {
  return (
    <Box minWidth={'100%'}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/artists' element={<Artists />}/>
        </Routes>
      </ThemeProvider>
    </Box>
  );
}

export default App;