import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( 
  <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
    <Suspense fallback={<CircularProgress color="success" />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </Box>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
