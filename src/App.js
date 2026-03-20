// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import IndexPage from './pages/indexPage';
import AllProjectsPage from './pages/AllProjectsPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A1929',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/projects" element={<AllProjectsPage />} />
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
