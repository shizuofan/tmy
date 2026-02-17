import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import ChapterEditor from './pages/ChapterEditor';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
          <Route path="/project/:projectId/chapter/:chapterId" element={<ChapterEditor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
