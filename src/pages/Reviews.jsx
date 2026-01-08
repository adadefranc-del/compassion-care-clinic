export default function Reviews() {
  return (
    <div style={pageContainer}>
      <h1 style={title}>Patient Reviews</h1>

      <p style={introText}>
        We are honored to care for our community, and nothing means more to us
        than the trust our patients place in our team. Here are a few words from
        the people we proudly serve.
      </p>

      {/* GOOGLE REVIEW BUTTON */}
      <div style={buttonContainer}>
        <a
          href="https://share.google/0elZZGrq6rQhsjMEl"
          target="_blank"
          rel="noopener noreferrer"
          style={googleButton}
        >
          ⭐ Leave a Review on Google
        </a>
      </div>

      {/* REAL REVIEWS */}
      <section style={sectionGray}>
        <h2 style={sectionTitle}>What Our Patients Are Saying</h2>

        <div style={reviewGrid}>

          {/* Christina C. */}
          <div style={reviewCard}>
            <p style={reviewStars}>★★★★★</p>
            <p style={reviewText}>
              “Everyone is so friendly! Makes going to the doctor easy and everyone is so easy to talk to when addressing health issues.”
            </p>
            <p style={reviewAuthor}>— Christina C.</p>
          </div>

          {/* Simone M. */}
          <div style={reviewCard}>
            <p style={reviewStars}>★★★★★</p>
            <p style={reviewText}>
              “Stacey Michelin is the best provider I have been to in my entire life. She provides care for my whole family and always finds time to offer advice and encouragement. She is truly compassionate and puts her patients first.”
            </p>
            <p style={reviewAuthor}>— Simone M.</p>
          </div>

          {/* Angela M. */}
          <div style={reviewCard}>
            <p style={reviewStars}>★★★★★</p>
            <p style={reviewText}>
              “Dr. Michelin is a wonderful, educated doctor who knows her job very well. I never feel rushed, and she answers every question with a smile. I always leave knowing I will be fine. She is definitely a keeper.”
            </p>
            <p style={reviewAuthor}>— Angela M.</p>
          </div>

          {/* Destiny E. */}
          <div style={reviewCard}>
            <p style={reviewStars}>★★★★★</p>
            <p style={reviewText}>
              “They are a great office — sweet bunch of ladies. My favorite doctor’s office ever because they actually care and listen to their patients. Highly recommend them.”
            </p>
            <p style={reviewAuthor}>— Destiny E.</p>
          </div>

          {/* Betty S. */}
          <div style={reviewCard}>
            <p style={reviewStars}>★★★★★</p>
            <p style={reviewText}>
              “The staff is kind and very helpful. Miss Stacey takes her time with patients and genuinely cares. She manages my complicated medical history carefully and fully. She is a highly intelligent provider.”
            </p>
            <p style={reviewAuthor}>— Betty S.</p>
          </div>

          {/* Sheila K. */}
          <div style={reviewCard}>
            <p style={reviewStars}>★★★★★</p>
            <p style={reviewText}>
              “Compassionate Care Clinic and Dr. Stacey Michelin are amazing. The environment is clean and welcoming. Ms. Stacey always takes special care of all my concerns and goes the extra mile to make sure I leave feeling better. She is truly compassionate and caring.”
            </p>
            <p style={reviewAuthor}>— Sheila K.</p>
          </div>

        </div>
      </section>

      {/* INVITE MORE REVIEWS */}
      <section style={sectionGray}>
        <h2 style={sectionTitle}>Share Your Experience</h2>
        <p style={missionText}>
          Your feedback helps us continue improving and ensures we provide the
          best possible care to our community.
        </p>

        <div style={buttonContainer}>
          <a
            href="https://share.google/0elZZGrq6rQhsjMEl"
            target="_blank"
            rel="noopener noreferrer"
            style={googleButton}
          >
            ⭐ Write a Review
          </a>
        </div>
      </section>
    </div>
  );
}

/* ================= STYLES ================= */

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
  fontSize: "2.2rem",
  fontWeight: "700",
  color: "#006D77", // dark teal
  textAlign: "center",
  marginBottom: "1.5rem"
};

const introText = {
  fontSize: "1.2rem",
  textAlign: "center",
  maxWidth: "900px",
  margin: "0 auto 2rem auto"
};

const sectionGray = {
  background: lightGray,
  padding: "1.8rem",
  borderRadius: "12px",
  border: `1px solid ${borderGray}`,
  marginBottom: "2.5rem"
};

const section = {
  marginTop: "2.5rem"
};

const sectionTitle = {
  fontSize: "1.8rem",
  fontWeight: "700",
  color: "#006D77",
  marginBottom: "1rem"
};

const missionText = {
  fontSize: "1.15rem",
  marginBottom: "1rem"
};

const buttonContainer = {
  textAlign: "center",
  marginBottom: "2rem"
};

const googleButton = {
  display: "inline-block",
  background: "#4285F4",
  color: "white",
  padding: "0.8rem 1.5rem",
  borderRadius: "6px",
  fontSize: "1.1rem",
  fontWeight: "600",
  textDecoration: "none",
  boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
};

/* REVIEWS GRID */
const reviewGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "1.5rem",
  marginTop: "1rem"
};

const reviewCard = {
  background: "#FFFFFF",
  padding: "1.5rem",
  borderRadius: "12px",
  border: `1px solid ${borderGray}`,
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
};

const reviewStars = {
  fontSize: "1.3rem",
  color: "#FFD700",
  marginBottom: "0.5rem"
};

const reviewText = {
  fontSize: "1.1rem",
  marginBottom: "0.8rem",
  fontStyle: "italic"
};

const reviewAuthor = {
  fontSize: "1rem",
  fontWeight: "600",
  color: "#006D77"
};
