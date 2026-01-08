export default function Forms() {
  return (
    <div style={pageContainer}>
      <h1 style={title}>Fill Out Your Forms in Advance</h1>

      <p style={introText}>
        Completing your forms before your appointment helps us serve you faster
        and ensures your visit goes smoothly. Once completed, please email them to:
      </p>

      <p style={emailText}>compassioncareclinic01@gmail.com</p>

      {/* MESSAGE BOX (NOT CLICKABLE) */}
      <div style={messageBox}>
        Fill Out Forms Here (Coming Soon)
      </div>

      {/* NEW PATIENT PACKET */}
      <section style={sectionGray}>
        <h2 style={sectionTitle}>New Patient Packet</h2>
        <ul style={formList}>
          <li style={formItem}><a href="#" style={formLink}>Welcome Letter</a></li>
          <li style={formItem}><a href="#" style={formLink}>New Patient Registration Form</a></li>
          <li style={formItem}><a href="#" style={formLink}>Consent to Disclosure of Health Information</a></li>
          <li style={formItem}><a href="#" style={formLink}>Notice of Privacy Practices (HIPAA)</a></li>
          <li style={formItem}><a href="#" style={formLink}>Financial Policy</a></li>
          <li style={formItem}><a href="#" style={formLink}>Pain Management Agreement</a></li>
          <li style={formItem}><a href="#" style={formLink}>Telehealth Consent Form</a></li>
        </ul>
      </section>

      {/* DOCUMENTS */}
      <section style={sectionGray}>
        <h2 style={sectionTitle}>Documents</h2>
        <ul style={formList}>
          <li style={formItem}><a href="#" style={formLink}>Medication List</a></li>
          <li style={formItem}><a href="#" style={formLink}>Advance Directive Form (English)</a></li>
          <li style={formItem}><a href="#" style={formLink}>Advance Directive Form (Spanish)</a></li>
          <li style={formItem}><a href="#" style={formLink}>Advance Directive Information Handout</a></li>
          <li style={formItem}><a href="#" style={formLink}>Biopsy Instructions</a></li>
          <li style={formItem}><a href="#" style={formLink}>Botox Aftercare</a></li>
          <li style={formItem}><a href="#" style={formLink}>IUD Insertion Instructions</a></li>
          <li style={formItem}><a href="#" style={formLink}>IUD Removal Instructions</a></li>
          <li style={formItem}><a href="#" style={formLink}>Joint Injection Aftercare</a></li>
          <li style={formItem}><a href="#" style={formLink}>Nexplanon Insertion Instructions</a></li>
          <li style={formItem}><a href="#" style={formLink}>Nexplanon Removal Instructions</a></li>
          <li style={formItem}><a href="#" style={formLink}>Work/School Excuse Request</a></li>
          <li style={formItem}><a href="#" style={formLink}>Medical Records Release Form</a></li>
        </ul>
      </section>

      {/* SCREENINGS */}
      <section style={sectionGray}>
        <h2 style={sectionTitle}>Screenings</h2>
        <ul style={formList}>
          <li style={formItem}><a href="#" style={formLink}>ADHD Screening</a></li>
          <li style={formItem}><a href="#" style={formLink}>Anxiety Screening</a></li>
          <li style={formItem}><a href="#" style={formLink}>Depression Screening</a></li>
          <li style={formItem}><a href="#" style={formLink}>Fall Risk Screening</a></li>
          <li style={formItem}><a href="#" style={formLink}>Cognition Assessment</a></li>
          <li style={formItem}><a href="#" style={formLink}>COVID Screening</a></li>
          <li style={formItem}><a href="#" style={formLink}>TB Test Form</a></li>
          <li style={formItem}><a href="#" style={formLink}>Annual Physical Questionnaire</a></li>
          <li style={formItem}><a href="#" style={formLink}>Preventive Care Checklist</a></li>
        </ul>
      </section>

      {/* EDUCATIONAL HANDOUTS */}
      <section style={sectionGray}>
        <h2 style={sectionTitle}>Educational Handouts</h2>
        <ul style={formList}>
          <li style={formItem}><a href="#" style={formLink}>Safe Medications During Pregnancy</a></li>
          <li style={formItem}><a href="#" style={formLink}>Managing High Blood Pressure</a></li>
          <li style={formItem}><a href="#" style={formLink}>Diabetes Care Basics</a></li>
          <li style={formItem}><a href="#" style={formLink}>Healthy Lifestyle Tips</a></li>
          <li style={formItem}><a href="#" style={formLink}>Understanding Cholesterol</a></li>
        </ul>
      </section>
    </div>
  );
}

/* ================= STYLES ================= */

const darkTeal = "#006D77";
const lightTeal = "#E0F4F5";
const lightGray = "#F5F5F5";
const borderGray = "#D9D9D9";

const pageContainer = {
  width: "100%",
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "2rem 1.5rem",
  lineHeight: "1.7",
  color: "#333"
};

const title = {
  fontSize: "2.4rem",
  fontWeight: "700",
  color: darkTeal,
  textAlign: "center",
  marginBottom: "1.5rem",
  textTransform: "uppercase"
};

const introText = {
  fontSize: "1.2rem",
  textAlign: "center",
  maxWidth: "900px",
  margin: "0 auto 1rem auto"
};

const emailText = {
  fontSize: "1.2rem",
  fontWeight: "700",
  color: darkTeal,
  textAlign: "center",
  marginBottom: "2rem"
};

const messageBox = {
  background: darkTeal,
  color: "white",
  padding: "1rem 1.5rem",
  borderRadius: "8px",
  textAlign: "center",
  fontSize: "1.2rem",
  fontWeight: "600",
  marginBottom: "2rem",
  opacity: 0.95
};

const sectionGray = {
  background: lightGray,
  padding: "1.5rem",
  borderRadius: "10px",
  border: `1px solid ${borderGray}`,
  marginBottom: "2rem"
};

const sectionTitle = {
  fontSize: "1.8rem",
  fontWeight: "700",
  color: darkTeal,
  marginBottom: "1rem"
};

const formList = {
  listStyle: "none",
  padding: 0,
  marginTop: "1rem"
};

const formItem = {
  background: lightTeal,
  padding: "1rem",
  borderRadius: "10px",
  marginBottom: "0.8rem",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  fontSize: "1.1rem"
};

const formLink = {
  color: darkTeal,
  textDecoration: "none",
  fontWeight: "600"
};
