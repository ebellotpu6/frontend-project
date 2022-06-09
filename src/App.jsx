import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import { Header } from './components';
import { Home, ObjectList, ObjectDetails } from './screens';

const App = () => {
  return (
    <>
    <Header />
    <div className="stars"></div>
    <div className="twinkling"></div>
    <React.StrictMode>
        <BrowserRouter>
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