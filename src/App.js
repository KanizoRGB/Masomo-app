import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Responses from './pages/Responses';
import Scholarships from './pages/Scholarships';
import Login from './pages/Login';
import Adminpanel from './pages/Adminpanel';
import { BrowserRouter as Router,Route,Routes, Navigate } from 'react-router-dom';
// import { useState } from 'react';



function App() {

   const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

   const handleLogin = () => {
      setIsAuthenticated(true);
      window.location.href = '/adminpanel'; // Redirect to admin panel after login
      // window.location.href = '/responses';
    };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/responses" element={isAuthenticated? <Responses />: <Navigate to="/login"/>} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/adminpanel" element={isAuthenticated? <Adminpanel />: <Navigate to="/login"/>} />

          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </Router>
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
