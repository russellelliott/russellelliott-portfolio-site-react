// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/indexPage';
import ProjectPage from './pages/projectPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
};

export default App;
