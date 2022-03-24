import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import SearchByIFSCPage from './pages/SearchByIFSCPage/SearchByIFSCPage';

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
          <Route path="/not-found" element={<ErrorPage statusCode={404} PageStatus="Page Not Found" />} />
          <Route path="/internal-server-error" element={<ErrorPage statusCode={500} PageStatus="Internal Server Error" />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
