import { useState } from 'react'
import './App.css'
import './index.css'; 
import NavBar from './componets/NavBar';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App