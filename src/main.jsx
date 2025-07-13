import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider, CssBaseline } from '@mui/material';
import customTheme from './theme/Theme.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
)
