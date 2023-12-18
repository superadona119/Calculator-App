import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '../src/styles/index.css';
import { ThemeProvider } from './contexts/themeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

