import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM correctly
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import { AuthProvider } from './context/AuthContext';
import App from './App.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login';
import Navbar from './components/Navbar.jsx';
import Employee from './components/Employee.jsx';
import About from './components/About.jsx'; // Ensure correct file extension
import Contact from './components/Contact.jsx'; // Ensure correct file extension

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
