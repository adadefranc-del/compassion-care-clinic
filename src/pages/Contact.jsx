import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";

export default function Contact() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "1rem" }}>
      
      {/* HERO MESSAGE */}
      <div style={heroBox}>
        <h1 style={heroTitle}>We’re Here to Help You Feel Your Best</h1>
        <p style={heroSubtitle}>
          Contact us today to book your appointment, ask questions, or get the support you need.
        </p>
      </div>

      {/* CALL TO ACTION BOX */}
      <div style={ctaBox}>
        <h2 style={ctaTitle}>Book Your Appointment</h2>
        <p style={ctaText}>Our team is ready to assist you with scheduling and general inquiries.</p>
        <a href="tel:+19312660077" style={ctaPhone}>(931) 266‑0077</a>
      </div>

      {/* Phone */}
      <div style={sectionStyle}>
        <FaPhoneAlt style={iconStyle} />
        <div>
          <h3 style={titleStyle}>Call Us</h3>
          <a href="tel:+19312660077" style={linkStyle}>
            (931) 266‑0077
          </a>
        </div>
      </div>

      {/* Email */}
      <div style={sectionStyle}>
        <FaEnvelope style={iconStyle} />
        <div>
          <h3 style={titleStyle}>Email Us</h3>
          <a href="mailto:compassioncareclinic01@gmail.com" style={linkStyle}>
            compassioncareclinic01@gmail.com
          </a>
        </div>
      </div>

      {/* Address */}
      <div style={sectionStyle}>
        <FaMapMarkerAlt style={iconStyle} />
        <div>
          <h3 style={titleStyle}>Visit Us</h3>
          <p style={textStyle}>
            2443 Old Russellville Pike<br />
            Clarksville, TN 37040
          </p>
        </div>
      </div>

      {/* Hours */}
      <div style={sectionStyle}>
        <FaClock style={iconStyle} />
        <div>
          <h3 style={titleStyle}>Hours of Operation</h3>
          <p style={textStyle}>
            Mon, Thu, Fri: 8:30 AM – 4:30 PM<br />
            Tue – Wed: 8:30 AM – 7:00 PM<br />
            Saturday: 8:30 AM – 12:00 PM<br />
            Sunday: Closed<br />
            Lunch: 12:00 PM – 1:00 PM
          </p>
        </div>
      </div>

      {/* Google Map */}
      <div style={{ marginTop: "2rem" }}>
        <iframe
          title="Clinic Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.018497512!2d-87.359!3d36.529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886514abcd12345%3A0x123456789abcd!2s2443%20Old%20Russellville%20Pike%2C%20Clarksville%2C%20TN%2037040!5e0!3m2!1sen!2sus!4v1700000000000"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Social Media */}
      <h2 style={{ color: "#3A7CA5", marginTop: "2.5rem" }}>Follow Us</h2>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <a href="#" style={socialIconStyle}><FaFacebook /></a>
        <a href="#" style={socialIconStyle}><FaInstagram /></a>
        <a href="#" style={socialIconStyle}><FaTwitter /></a>
      </div>

      {/* FAQ Section */}
      <h2 style={{ color: "#3A7CA5", marginTop: "3rem" }}>
        Frequently Asked Questions
      </h2>

      <div style={faqBoxStyle}>
        <h4 style={faqQuestionStyle}>Do I need an appointment?</h4>
        <p style={faqAnswerStyle}>
          Walk‑ins are welcome, but appointments help reduce wait times.
        </p>
      </div>

      <div style={faqBoxStyle}>
        <h4 style={faqQuestionStyle}>Do you accept insurance?</h4>
        <p style={faqAnswerStyle}>
          Yes, we accept most major insurance providers. Please call to confirm.
        </p>
      </div>

      <div style={faqBoxStyle}>
        <h4 style={faqQuestionStyle}>Where are you located?</h4>
        <p style={faqAnswerStyle}>
          We are located at 2443 Old Russellville Pike, Clarksville, TN.
        </p>
      </div>

      <div style={faqBoxStyle}>
        <h4 style={faqQuestionStyle}>What are your hours?</h4>
        <p style={faqAnswerStyle}>
          Mon–Fri 8:30am–4:30pm, Tue–Wed extended hours, Saturday half‑day.
        </p>
      </div>
    </div>
  );
}

/* ========== STYLES ========== */

const heroBox = {
  background: "#E8F5E9", // Light green background
  padding: "2rem",
  borderRadius: "10px",
  textAlign: "center",
  marginBottom: "2rem",
  border: "1px solid #C8E6C9"
};

const heroTitle = {
  color: "#3A7CA5", // Light medical blue
  fontSize: "1.9rem",
  marginBottom: "0.5rem",
  fontWeight: "700"
};

const heroSubtitle = {
  color: "#333",
  fontSize: "1.1rem",
  maxWidth: "600px",
  margin: "0 auto"
};

const ctaBox = {
  background: "#3A7CA5", // Light medical blue
  color: "white",
  padding: "1.5rem",
  borderRadius: "10px",
  textAlign: "center",
  marginBottom: "2rem"
};

const ctaTitle = {
  margin: 0,
  fontSize: "1.5rem",
  fontWeight: "700"
};

const ctaText = {
  marginTop: "0.5rem",
  fontSize: "1rem"
};

const ctaPhone = {
  display: "inline-block",
  marginTop: "1rem",
  fontSize: "1.4rem",
  fontWeight: "700",
  color: "white",
  textDecoration: "none"
};

const sectionStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "1rem",
  marginBottom: "1.5rem"
};

const iconStyle = {
  fontSize: "1.8rem",
  color: "#3A7CA5",
  minWidth: "30px"
};

const titleStyle = {
  margin: 0,
  fontSize: "1.1rem",
  color: "#3A7CA5"
};

const textStyle = {
  margin: "0.3rem 0",
  color: "#333"
};

const linkStyle = {
  color: "#3A7CA5",
  textDecoration: "none",
  fontWeight: "bold"
};

const socialIconStyle = {
  fontSize: "1.8rem",
  color: "#3A7CA5",
  textDecoration: "none"
};

const faqBoxStyle = {
  background: "#F5F9FC",
  padding: "1rem",
  borderRadius: "8px",
  marginTop: "1rem"
};

const faqQuestionStyle = {
  margin: 0,
  color: "#3A7CA5"
};

const faqAnswerStyle = {
  marginTop: "0.5rem",
  color: "#333"
};
