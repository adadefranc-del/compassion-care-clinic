import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Primary Care",
      desc: "Comprehensive primary care for adults and families, including checkups, chronic condition support, and preventive care.",
      link: "/services/primary-care"
    },
    {
      title: "Acute Illness",
      desc: "Same‑day care for sudden illnesses such as flu, fever, infections, sore throat, stomach issues, and more.",
      link: "/services/acute-illness"
    },
    {
      title: "Skin, Hair & Nails",
      desc: "Evaluation and treatment for rashes, acne, eczema, hair loss, nail infections, and other dermatologic concerns.",
      link: "/services/skin-hair-nails"
    },
    {
      title: "Minor Injuries & Pain",
      desc: "Care for sprains, strains, minor cuts, joint pain, back pain, and non‑emergency injuries.",
      link: "/services/minor-injuries"
    },
    {
      title: "Physicals",
      desc: "Annual physicals, school physicals, sports physicals, employment physicals, and wellness exams.",
      link: "/services/physicals"
    },
    {
      title: "Weight Management",
      desc: "Personalized weight‑loss support, lifestyle guidance, and medical evaluation to help you reach your goals.",
      link: "/services/weight-management"
    }
  ];

  return (
    <div style={pageContainer}>
      <h1 style={pageTitle}>Our Services</h1>

      <div style={servicesGrid}>
        {services.map((service, index) => (
          <div key={index} style={serviceCard}>
            <h2 style={serviceTitle}>{service.title}</h2>
            <p style={serviceDesc}>{service.desc}</p>

            {/* LEARN MORE LINK */}
            <Link to={service.link} style={learnMoreStyle}>
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const pageContainer = {
  width: "100%",
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "2rem 1.5rem"
};

const pageTitle = {
  color: "#3A7CA5", // updated to match lighter brand blue
  fontSize: "2.2rem",
  fontWeight: "700",
  marginBottom: "2rem",
  textAlign: "center"
};

const servicesGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "1.8rem"
};

const serviceCard = {
  padding: "1.8rem",
  borderRadius: "12px",
  background: "#E8F5E9", // light green brand tone
  border: "1px solid #C8E6C9",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
};

const serviceTitle = {
  color: "#3A7CA5",
  fontSize: "1.3rem",
  fontWeight: "700",
  marginBottom: "0.6rem"
};

const serviceDesc = {
  color: "#444",
  fontSize: "1.05rem",
  lineHeight: "1.5",
  marginBottom: "1rem"
};

const learnMoreStyle = {
  color: "#3A7CA5",
  fontWeight: "700",
  textDecoration: "none",
  marginTop: "0.5rem",
  display: "inline-block"
};
