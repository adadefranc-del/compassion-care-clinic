export default function Jobs() {
  return (
    <div style={pageContainer}>
      <h1 style={title}>Grow Your Career With Compassion Care Clinic</h1>

      <p style={introText}>
        At Compassion Care Clinic, we believe exceptional patient care begins
        with exceptional people. Our team is built on compassion, integrity,
        professionalism, and a shared commitment to serving our community with
        excellence. Even when we are not actively hiring, we are always excited
        to connect with talented individuals who share our mission.
      </p>

      {/* FUTURE OPPORTUNITIES */}
      <section style={section}>
        <h2 style={sectionTitle}>Future Opportunities</h2>

        <p style={missionText}>
          We are not currently listing open positions, but our clinic continues
          to grow — and we welcome strong candidates to submit their information
          for future consideration. Whether your background is in clinical care,
          administration, or patient support, we encourage you to reach out.
        </p>
      </section>

      {/* WHY WORK WITH US */}
      <section style={section}>
        <h2 style={sectionTitle}>Why Work With Us?</h2>

        <ul style={benefitsList}>
          <li style={benefitItem}>
            A supportive, team‑oriented environment where every role matters
          </li>
          <li style={benefitItem}>
            Opportunities for professional development and growth
          </li>
          <li style={benefitItem}>
            A mission‑driven workplace focused on patient empowerment
          </li>
          <li style={benefitItem}>
            A positive, respectful culture built on compassion and trust
          </li>
        </ul>
      </section>

      {/* HOW TO APPLY */}
      <section style={section}>
        <h2 style={sectionTitle}>Submit Your Resume</h2>

        <p style={missionText}>
          If you would like to be considered for future openings, please email
          your resume and contact information to:
        </p>

        <p style={applyEmail}>stacey@compassioncareclinics.com</p>

        <p style={missionText}>
          For questions, feel free to call our office at:
        </p>

        <p style={applyPhone}>(931) 542‑9010</p>

        <p style={missionText}>
          We appreciate your interest in joining the Compassion Care Clinic
          family. If a position becomes available that matches your experience,
          we will reach out to you directly.
        </p>
      </section>

      {/* EQUAL OPPORTUNITY */}
      <section style={section}>
        <h2 style={sectionTitle}>Equal Opportunity Employer</h2>
        <p style={missionText}>
          Compassion Care Clinic is an equal opportunity employer. We value
          diversity and are committed to creating an inclusive, welcoming
          workplace for all team members and applicants.
        </p>
      </section>
    </div>
  );
}

/* ================= STYLES ================= */

const pageContainer = {
  width: "100%",
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "2rem 1.5rem",
  lineHeight: "1.7",
  color: "#333"
};

const title = {
  fontSize: "2.2rem",
  fontWeight: "700",
  color: "#1a3d7c",
  marginBottom: "1.5rem",
  textAlign: "center"
};

const introText = {
  fontSize: "1.2rem",
  marginBottom: "2rem",
  textAlign: "center",
  maxWidth: "900px",
  marginLeft: "auto",
  marginRight: "auto"
};

const section = {
  marginTop: "2.5rem"
};

const sectionTitle = {
  fontSize: "1.8rem",
  fontWeight: "700",
  color: "#1a3d7c",
  marginBottom: "1rem"
};

const missionText = {
  fontSize: "1.15rem",
  marginBottom: "1rem"
};

const applyEmail = {
  fontSize: "1.2rem",
  fontWeight: "700",
  color: "#1a3d7c",
  marginBottom: "1rem"
};

const applyPhone = {
  fontSize: "1.2rem",
  fontWeight: "700",
  color: "#2e8b57",
  marginBottom: "1rem"
};

/* BENEFITS */
const benefitsList = {
  listStyle: "none",
  padding: 0,
  marginTop: "1rem"
};

const benefitItem = {
  background: "#e6f4ef",
  padding: "1rem",
  borderRadius: "8px",
  marginBottom: "0.8rem",
  fontSize: "1.1rem",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
};
