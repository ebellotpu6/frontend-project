import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import { Header, Background } from './components';
import { Home, ObjectList, ObjectDetails } from './screens';

const App = () => {
  return (
    <>
    <Background />
    <React.StrictMode>
        <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:type" element={<ObjectList />} />
              <Route path="/:type/:id" element={<ObjectDetails />} />
          </Routes>
        </BrowserRouter>
    </React.StrictMode>
    </>
    
  )
}

export default App