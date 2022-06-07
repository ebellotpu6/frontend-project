import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import { Home, MovieDetails } from './screens/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
