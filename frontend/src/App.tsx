import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
          {/* 其他路由将在后续实现 */}
          {/* <Route path="/project/:id/chapter/:chapterId" element={<ChapterPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
