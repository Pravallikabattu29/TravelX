import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Packages from "./components/Packages";
import Hotel from "./components/Hotel";
import HotelDetails from "./components/HotelDetails";
import Transport from "./components/Transport";
import Summary from "./components/Summary";
import Payment from "./components/Payment";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FlightBooking from "./components/FlightBooking";

import Dashboard from "./components/admin/Dashboard";
import PackageManager from "./components/admin/PackageManager";
import HotelManager from "./components/admin/HotelManager";
import TransportManager from "./components/admin/TransportManager";

import { useState } from "react";

function AppContent() {
  const location = useLocation();

  // 🆕 Booking Details State
  const [bookingDetails, setBookingDetails] = useState({
    packageName: "",
    hotelName: "",
    transportType: "",
    totalAmount: 0,
  });

  // Check if we are inside admin
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* Only show Navbar if NOT on admin routes */}
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* User Side */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/hotel-details" element={<HotelDetails />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/flight-booking" element={<FlightBooking />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Side */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/packages" element={<PackageManager />} />
        <Route path="/admin/hotels" element={<HotelManager />} />
        <Route path="/admin/transport" element={<TransportManager />} />
      </Routes>

      {/* Only show Footer if NOT on admin routes */}
      {!isAdminRoute && location.pathname === "/home" && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
