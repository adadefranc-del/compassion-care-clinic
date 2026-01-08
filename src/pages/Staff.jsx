export default function Staff() {
  return (
    <div style={pageContainer}>
      <h1 style={title}>Meet the Compassion Care Clinic Family</h1>

      <p style={introText}>
        Our team is dedicated to creating a warm, welcoming, and supportive
        environment for every patient who walks through our doors. From our
        medical providers to our front‑office staff, each member of the
        Compassion Care Clinic family plays an essential role in delivering
        exceptional care to our community.
      </p>

      {/* PROVIDERS SECTION */}
      <section style={section}>
        <h2 style={sectionTitle}>Our Providers</h2>

        <div style={providerGrid}>
          {/* Stacey */}
          <div style={providerCard}>
            <img
              src="https://via.placeholder.com/180"
              alt="Stacey Michelin, FNP-C"
              style={providerImage}
            />
            <h3 style={providerName}>Stacey Michelin, FNP‑C</h3>
            <p style={providerRole}>Family Nurse Practitioner</p>
            <a href="/about" style={bioLink}>Read Full Bio</a>
          </div>

          {/* Deneshia */}
          <div style={providerCard}>
            <img
              src="https://via.placeholder.com/180"
              alt="Deneshia Clayton, FNP"
              style={providerImage}
            />
            <h3 style={providerName}>Deneshia Clayton, FNP</h3>
            <p style={providerRole}>Family Nurse Practitioner</p>
            <a href="/about" style={bioLink}>Read Full Bio</a>
          </div>

          {/* Hailey */}
          <div style={providerCard}>
            <img
              src="https://via.placeholder.com/180"
              alt="Hailey Browning, FNP-BC"
              style={providerImage}
            />
            <h3 style={providerName}>Hailey Browning, FNP‑BC</h3>
            <p style={providerRole}>Family Nurse Practitioner</p>
            <a href="/about" style={bioLink}>Read Full Bio</a>
          </div>

          {/* Dr. Hunter */}
          <div style={providerCard}>
            <img
              src="https://via.placeholder.com/180"
              alt="Dr. Davis W. Hunter, M.D."
              style={providerImage}
            />
            <h3 style={providerName}>Davis W. Hunter, M.D.</h3>
            <p style={providerRole}>Supervising Medical Doctor</p>
            <a href="/about" style={bioLink}>Read Full Bio</a>
          </div>
        </div>
      </section>

      {/* STAFF GRID */}
      <section style={section}>
        <h2 style={sectionTitle}>Clinic Staff</h2>

        <p style={missionText}>
          These are the friendly faces who help keep our clinic running smoothly
          every day. Their dedication ensures that every patient receives timely,
          compassionate, and professional care.
        </p>

        <div style={staffGrid}>

          {/* Delni */}
          <div style={staffCard}>
            <img
              src="https://via.placeholder.com/200"
              alt="Delni"
              style={staffImage}
            />
            <h4 style={staffName}>Delni</h4>
            <p style={staffRole}>Clinical Supervisor</p>
          </div>

          {/* Dawn */}
          <div style={staffCard}>
            <img
              src="https://via.placeholder.com/200"
              alt="Dawn"
              style={staffImage}
            />
            <h4 style={staffName}>Dawn</h4>
            <p style={staffRole}>Staff Role</p>
          </div>

          {/* Randi */}
          <div style={staffCard}>
            <img
              src="https://via.placeholder.com/200"
              alt="Randi"
              style={staffImage}
            />
            <h4 style={staffName}>Randi</h4>
            <p style={staffRole}>Staff Role</p>
          </div>

          {/* Shyanne */}
          <div style={staffCard}>
            <img
              src="https://via.placeholder.com/200"
              alt="Shyanne"
              style={staffImage}
            />
            <h4 style={staffName}>Shyanne</h4>
            <p style={staffRole}>Staff Role</p>
          </div>

          {/* Patricia */}
          <div style={staffCard}>
            <img
              src="https://via.placeholder.com/200"
              alt="Patricia"
              style={staffImage}
            />
            <h4 style={staffName}>Patricia</h4>
            <p style={staffRole}>Staff Role</p>
          </div>

          {/* Kayden */}
          <div style={staffCard}>
            <img
              src="https://via.placeholder.com/200"
              alt="Kayden"
              style={staffImage}
            />
            <h4 style={staffName}>Kayden</h4>
            <p style={staffRole}>Staff Role</p>
          </div>

          {/* Chantrel */}
          <div style={staffCard}>
            <img
              src="https://via.placeholder.com/200"
              alt="Chantrel"
              style={staffImage}
            />
            <h4 style={staffName}>Chantrel</h4>
            <p style={staffRole}>Staff Role</p>
          </div>

        </div>
      </section>
    </div>
  );
}

/* ================= STYLES ================= */

const darkGreen = "#145A32";
const lightGreen = "#DFF2E4";
const lightGray = "#F5F5F5";

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
  color: darkGreen,
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
  marginTop: "2.5rem",
  background: lightGray,
  padding: "1.5rem",
  borderRadius: "12px"
};

const sectionTitle = {
  fontSize: "1.8rem",
  fontWeight: "700",
  color: darkGreen,
  marginBottom: "1rem"
};

/* PROVIDERS */
const providerGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "1.5rem"
};

const providerCard = {
  background: lightGreen,
  padding: "1.5rem",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
};

const providerImage = {
  width: "160px",
  height: "160px",
  borderRadius: "10px",
  objectFit: "cover",
  marginBottom: "1rem",
  background: "#ddd"
};

const providerName = {
  fontSize: "1.3rem",
  fontWeight: "700",
  color: darkGreen,
  marginBottom: "0.3rem"
};

const providerRole = {
  fontSize: "1rem",
  color: "#444",
  marginBottom: "0.8rem"
};

const bioLink = {
  color: darkGreen,
  fontWeight: "600",
  textDecoration: "none"
};

/* STAFF GRID */
const staffGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "1.5rem",
  marginTop: "1.5rem"
};

const staffCard = {
  background: "#FFFFFF",
  padding: "1rem",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
};

const staffImage = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "0.8rem",
  background: "#ddd"
};

const staffName = {
  fontSize: "1.1rem",
  fontWeight: "700",
  color: darkGreen,
  marginBottom: "0.3rem"
};

const staffRole = {
  fontSize: "0.95rem",
  color: "#555"
};

const missionText = {
  fontSize: "1.15rem",
  marginBottom: "1rem"
};
