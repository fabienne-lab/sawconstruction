import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import Supp1App from './supp1App/supp1App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from "./components/Signup";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/supp1App/supp1App/*" element={<Supp1App />} />
        <Route path="/signup/*" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App;