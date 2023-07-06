import Home from './Home'
import Login from './components/Login'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
