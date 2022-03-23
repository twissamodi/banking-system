import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SearchByIFSCPage from './pages/SearchByIFSCPage/SearchByIFSCPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route path="search-by-ifsc" element={<SearchByIFSCPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
