import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Tours from "./pages/Tours";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import TourGuides from "./pages/TourGuides";
import Blog from "./pages/Blog";
import CompanyInfo from "./pages/CompanyInfo";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Pricing from './pages/Pricing';
import FreeWalkingTour from "./pages/FreeWalkingTour";
import TenmaTour from "./pages/TenmaTour";
import "./App.css";

// ScrollToTop function — ensures the page resets position on route change
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavbarComponent />
      <div style={{ marginTop: "90px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/tourguides" element={<TourGuides />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/company" element={<CompanyInfo />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/pricing" element={<Pricing />} />

          <Route path="/tours/free-walking-tour" element={<FreeWalkingTour />} />
          <Route path="/tours/tenma" element={<TenmaTour />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
