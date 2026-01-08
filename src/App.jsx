import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Staff from "./pages/Staff";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import Forms from "./pages/Forms";
import Reviews from "./pages/Reviews";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Layout>
  );
}

