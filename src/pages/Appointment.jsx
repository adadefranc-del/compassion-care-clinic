import { useState } from "react";

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.phone || !form.date) {
      alert("Please fill in all required fields.");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1 style={{ color: "#1a3d7c" }}>Appointment Request Sent</h1>
        <p style={{ marginTop: "1rem", color: "#444" }}>
          Thank you, {form.name}. We will contact you soon to confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ color: "#1a3d7c", marginBottom: "1.5rem" }}>
        Book an Appointment
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gap: "1rem",
          maxWidth: "500px"
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={form.phone}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          style={inputStyle}
        />

        <textarea
          name="message"
          placeholder="Reason for visit (optional)"
          value={form.message}
          onChange={handleChange}
          rows="4"
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            padding: "0.8rem",
            background: "#1a3d7c",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "1rem"
          }}
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: "0.8rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "1rem"
};
