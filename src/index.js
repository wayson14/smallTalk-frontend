import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navigation from './dashboard/Navigation';
import Chat from './dashboard/Chat';
import Home from './dashboard/Home'
import Contact from './dashboard/Contact'
import About from './dashboard/About'
import './index.scss'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation/>
      <div className="main container">
        <Routes>
            <Route path="/login"element={<App />}/>
            <Route path="/chat" element={<Chat />} />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

