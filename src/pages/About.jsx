export default function About() {
  return (
    <div style={pageContainer}>
      <h1 style={title}>About Compassion Care Clinic</h1>

      <p style={introText}>
        Compassion Care Clinic was founded with a simple mission — to provide
        high‑quality, patient‑centered healthcare to individuals and families in
        Clarksville and the surrounding communities. We believe every person
        deserves access to compassionate, reliable medical care delivered with
        respect, dignity, and understanding.
      </p>

      {/* PROVIDERS SECTION */}
      <section style={section}>
        <h2 style={sectionTitle}>Meet Our Providers</h2>

        {/* PROVIDER 1 — STACEY MICHELIN */}
        <div style={providerCard}>
          <img
            src="https://via.placeholder.com/180"
            alt="Stacey Michelin, FNP-C"
            style={providerImage}
          />

          <div style={{ flex: 1 }}>
            <h3 style={providerName}>Stacey Michelin, FNP‑C</h3>
            <p style={providerBio}>
              With over 20 years of clinical experience, Stacey Michelin, FNP‑C,
              leads Compassion Care Clinic with a commitment to excellence,
              empathy, and patient empowerment. Her approach blends advanced
              medical knowledge with genuine compassion, ensuring every patient
              feels heard, supported, and cared for.
            </p>

            <p style={providerBio}>
              Stacey specializes in primary care, acute illness management,
              chronic disease support, preventive health, and family medicine.
              Her goal is to help patients achieve long‑term wellness through
              personalized care and strong patient‑provider relationships.
            </p>
          </div>
        </div>

        {/* PROVIDER 2 — DENESHIA CLAYTON */}
        <div style={providerCard}>
          <img
            src="https://via.placeholder.com/180"
            alt="Deneshia Clayton, FNP"
            style={providerImage}
          />

          <div style={{ flex: 1 }}>
            <h3 style={providerName}>Deneshia Clayton, FNP</h3>

            <p style={providerBio}>
              Deneshia is a South Mississippi native with over a decade of
              experience in direct patient care, case management, and wellness
              services. She earned her Master of Science in Nursing from South
              University and is currently advancing her training through the
              Vanderbilt University Nurse Practitioner Fellowship, where she is
              focused on improving healthcare access in rural communities.
            </p>

            <p style={providerBio}>
              She shares, “As a nurse and provider, I'm committed to providing
              the highest quality of healthcare and giving patients the tools
              they need to feel empowered about their health — whether through
              education, medicine, or an empathetic ear.”
            </p>
          </div>
        </div>

        {/* PROVIDER 3 — HAILEY BROWNING */}
        <div style={providerCard}>
          <img
            src="https://via.placeholder.com/180"
            alt="Hailey Browning, FNP-BC"
            style={providerImage}
          />

          <div style={{ flex: 1 }}>
            <h3 style={providerName}>Hailey Browning, FNP‑BC</h3>

            <p style={providerBio}>
              Hailey is a Board‑Certified Family Nurse Practitioner with a
              Master of Science in Nursing from Vanderbilt University, where she
              completed extensive clinical training in both Primary Care and
              Dermatology. Her background includes cosmetic and medical
              dermatology, plastic surgery wound care, and long‑term acute care
              nursing.
            </p>

            <p style={providerBio}>
              These diverse experiences have shaped her commitment to preventive
              medicine and holistic patient care. Hailey is passionate about
              empowering patients to achieve their healthiest lives and is
              dedicated to promoting wellness while serving and supporting her
              community.
            </p>
          </div>
        </div>

        {/* PROVIDER 4 — DR. DAVIS HUNTER */}
        <div style={providerCard}>
          <img
            src="https://via.placeholder.com/180"
            alt="Dr. Davis W. Hunter, M.D."
            style={providerImage}
          />

          <div style={{ flex: 1 }}>
            <h3 style={providerName}>Davis W. Hunter, M.D.</h3>
            <p style={{ fontWeight: "600", color: "#2e8b57", marginBottom: "0.8rem" }}>
              Supervising Medical Doctor
            </p>

            <p style={providerBio}>
              Dr. Davis Hunter serves as the supervising medical doctor for
              Compassion Care Clinic. A general family medicine physician, he
              graduated from the University of Louisville School of Medicine in
              2008 and has practiced in both Clarksville, TN and Hopkinsville,
              KY for more than 12 years.
            </p>

            <p style={providerBio}>
              His clinical experience includes family medicine, general surgery,
              and work with Jennie Stuart Medical Center, Pennyroyal Mental
              Health Center, Tennova Hospital, Nashville General Hospital, Fast
              Pace Urgent Care, and Premise Health. Dr. Hunter is known for his
              clinical knowledge, professionalism, and genuine compassion for
              his patients.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section style={section}>
        <h2 style={sectionTitle}>Our Mission</h2>
        <p style={missionText}>
          Our mission is to deliver accessible, affordable, and compassionate
          healthcare to every member of our community. We strive to create a
          welcoming environment where patients feel comfortable discussing their
          health concerns and confident in the care they receive.
        </p>
      </section>

      {/* VALUES SECTION */}
      <section style={section}>
        <h2 style={sectionTitle}>Our Core Values</h2>

        <ul style={valuesList}>
          <li style={valueItem}>
            <strong>Compassion:</strong> We treat every patient with kindness,
            empathy, and respect.
          </li>
          <li style={valueItem}>
            <strong>Quality Care:</strong> We provide evidence‑based medical
            care tailored to each patient’s needs.
          </li>
          <li style={valueItem}>
            <strong>Accessibility:</strong> We welcome all patients, including
            those without insurance, offering income‑based sliding scale fees.
          </li>
          <li style={valueItem}>
            <strong>Community:</strong> We are committed to improving the health
            and well‑being of our local community.
          </li>
          <li style={valueItem}>
            <strong>Trust:</strong> We build long‑term relationships through
            transparency, communication, and integrity.
          </li>
        </ul>
      </section>

      {/* COMMUNITY SECTION */}
      <section style={section}>
        <h2 style={sectionTitle}>Serving Our Community</h2>
        <p style={missionText}>
          Compassion Care Clinic proudly serves patients of all ages, income
          levels, and backgrounds. Whether you need routine check‑ups, acute
          care, chronic disease management, or preventive services, our team is
          here to support your health journey every step of the way.
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

const providerCard = {
  display: "flex",
  gap: "1.5rem",
  flexWrap: "wrap",
  alignItems: "flex-start",
  background: "#e6f4ef",
  padding: "1.5rem",
  borderRadius: "12px",
  marginBottom: "1.5rem",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
};

const providerImage = {
  width: "180px",
  height: "180px",
  borderRadius: "10px",
  objectFit: "cover",
  background: "#ddd"
};

const providerName = {
  fontSize: "1.4rem",
  fontWeight: "700",
  color: "#1a3d7c",
  marginBottom: "0.5rem"
};

const providerBio = {
  fontSize: "1.1rem",
  marginBottom: "1rem"
};

const missionText = {
  fontSize: "1.15rem",
  marginBottom: "1rem"
};

const valuesList = {
  listStyle: "none",
  padding: 0,
  marginTop: "1rem"
};

const valueItem = {
  background: "#e6f4ef",
  padding: "1rem",
  borderRadius: "8px",
  marginBottom: "0.8rem",
  fontSize: "1.1rem",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
};
