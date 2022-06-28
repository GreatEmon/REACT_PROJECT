
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route, Navigate } from "react-router-dom";
import './style.css';
import Home from './home';
import About from './about';
import Services from './service';
import Contact from './contact';
import Navbar from './Navbar';
import Footer from './footer';


function App() {
  return (
    <>
       <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/services" element={<Services />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
