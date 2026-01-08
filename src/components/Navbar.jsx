import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#f0f4ff" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/services" style={{ marginRight: "1rem" }}>Services</Link>
      <Link to="/staff" style={{ marginRight: "1rem" }}>Staff</Link>
      <Link to="/appointment" style={{ marginRight: "1rem" }}>Appointment</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
