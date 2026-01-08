import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGoogle,
  FaStar,
  FaLinkedin
} from "react-icons/fa";

export default function Home() {
  return (
    <div>
      {/* ================= GLOBAL ANIMATIONS & SLIDER CSS ================= */}
      <style>{`
        /* LOGO PULSE */
        @keyframes logoPulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.95; }
          100% { transform: scale(1); opacity: 1; }
        }
        .logo-loop {
          animation: logoPulse 6s ease-in-out infinite;
        }

        /* HERO SLIDER FADE */
        .fade-slider {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
        }

        .fade-slider .slide {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          animation: fadeSlide 12s infinite;
        }

        .fade-slider .slide:nth-child(1) { animation-delay: 0s; }
        .fade-slider .slide:nth-child(2) { animation-delay: 6s; }

        @keyframes fadeSlide {
          0% { opacity: 0; }
          10% { opacity: 1; }
          40% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 0; }
        }

        /* CARD GLOW ANIMATION */
        @keyframes cardGlow {
          0% {
            box-shadow:
              0 4px 12px rgba(0,0,0,0.1),
              0 0 0 rgba(46, 139, 87, 0.0);
          }
          50% {
            box-shadow:
              0 8px 28px rgba(46,139,87,0.45),
              0 0 18px rgba(46, 139, 87, 0.35);
          }
          100% {
            box-shadow:
              0 4px 12px rgba(0,0,0,0.1),
              0 0 0 rgba(46,139,87,0.0);
          }
        }
      `}</style>

      {/* ================= TOP LOGO & NAVIGATION ================= */}
      <header>
        {/* LOGO SECTION */}
        <div style={topLogoSection}>
          <div>
            <img
              src="https://lirp.cdn-website.com/d7b88a20/dms3rep/multi/opt/Compassion-Care-Clinic-LOGO-1070w.png"
              alt="Compassion Care Clinic Logo"
              className="logo-loop"
              style={{ width: "800px", height: "auto" }}
            />
            <p style={taglineText}>The Care You Deserve</p>
          </div>
        </div>

        {/* NAVIGATION BAR */}
        <nav style={mainNav}>
          <ul style={mainNavList}>
            <li><a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
<li><a href="/services" style={{ color: "white", textDecoration: "none" }}>Services</a></li>
<li><a href="/jobs" style={{ color: "white", textDecoration: "none" }}>Job Opportunities</a></li>
<li><a href="/forms" style={{ color: "white", textDecoration: "none" }}>Forms</a></li>
<li><a href="/about" style={{ color: "white", textDecoration: "none" }}>About Us</a></li>
<li><a href="/reviews" style={{ color: "white", textDecoration: "none" }}>Reviews</a></li>
<li><a href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact Us</a></li>
<li><a href="/staff" style={{ color: "white", textDecoration: "none" }}>Staff</a></li>

          </ul>
        </nav>
      </header>

      {/* ================= HERO SLIDER ================= */}
      <section style={sliderContainer}>
        <div className="fade-slider">
          {/* SLIDE 1 */}
          <div className="slide">
            <div style={gradientOverlay}></div>
            <div style={slideOverlay}>
              <h1 style={slideTitle}>THE BEST CARE YOU DESERVE</h1>

              <div style={contactBlock}>
                <div style={contactTitle}>CALL US TODAY!</div>
                <div style={contactLine}>Tel: (931) 266‑0077</div>
                <div style={contactLine}>Fax: (931) 266‑0088</div>
              </div>
            </div>

            <img
              src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg"
              alt="Health technology hands"
              style={slideImage}
            />
          </div>

          {/* SLIDE 2 */}
          <div className="slide">
            <div style={gradientOverlay}></div>
            <div style={slideOverlay}>
              <h1 style={slideTitle}>COMPASSION. UNITY. CARE.</h1>

              <div style={contactBlock}>
                <div style={contactTitle}>CALL US TODAY!</div>
                <div style={contactLine}>Tel: (931) 266‑0077</div>
                <div style={contactLine}>Fax: (931) 266‑0088</div>
              </div>
            </div>

            <img
              src="https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg"
              alt="Diverse hands together"
              style={slideImage}
            />
          </div>
        </div>
      </section>

      {/* ================= DIVIDER ================= */}
      <div style={dividerLine}></div>

      {/* ================= INTRO / PROVIDER SECTION ================= */}
      <section style={introSection}>
        <h2 style={providerHeading}>
          Primary Care Provider — Your Health, Our Priority
        </h2>

        <p style={insuranceLine}>
          We Accept Most Insurance Plans and HSA Cards
        </p>

        <h2 style={introHeading}>Welcome to Compassion Care Clinic</h2>

        <p style={introParagraph}>
          Compassion Care Clinic in Clarksville, TN provides comprehensive
          primary care and walk‑in acute care for individuals and families in
          a warm, patient‑focused environment. Our team is committed to
          delivering reliable, compassionate healthcare with easy access to
          providers who truly listen and care.
        </p>

        <p style={introParagraph}>
          Led by Stacey Michelin, FNP‑C — a highly experienced provider with
          over 20 years of clinical expertise — we focus on helping you feel
          better as quickly as possible while maintaining the highest standards
          of communication, comfort, and medical excellence.
        </p>

        <p style={introParagraph}>
          We proudly welcome patients of all income levels. For uninsured
          individuals, we offer an income‑based sliding scale without
          discrimination, ensuring that quality healthcare remains accessible
          to everyone in our community. We also accept HSA cards for your
          convenience.
        </p>
      </section>

      {/* ================= PRICING CARDS ================= */}
      <section style={cardsSection}>
        {/* CARD 1 */}
        <div style={card}>
          <div style={placeholderBox}>
            <span style={placeholderIcon}>🏥</span>
          </div>
          <h3 style={cardTitle}>Office Visits</h3>
          <p style={cardText}>
            Office visits start at <strong>$125</strong>
            <br />
            Sliding scale fees available based on household income for
            uninsured patients.
          </p>
        </div>

        {/* CARD 2 */}
        <div style={card}>
          <div style={placeholderBox}>
            <span style={placeholderIcon}>🩺</span>
          </div>
          <h3 style={cardTitle}>Annual Check‑Ups</h3>
          <p style={cardText}>
            Annual check‑ups start at <strong>$125</strong>
            <br />
            Labs start at <strong>$15</strong> additional.
          </p>
        </div>

        {/* CARD 3 */}
        <div style={card}>
          <div style={placeholderBox}>
            <span style={placeholderIcon}>👶</span>
          </div>
          <h3 style={cardTitle}>Children’s Well Check</h3>
          <p style={cardText}>
            Children’s well checks are <strong>$60</strong>
            <br />
            Labs start at <strong>$15</strong> additional.
          </p>
        </div>
      </section>

      {/* ================= WHAT WE TREAT ================= */}
      <section style={treatSection}>
        <h2 style={treatHeading}>What We Treat</h2>

        <div style={treatGrid}>
          {/* CATEGORY 1 — Primary Care */}
          <div style={treatCard}>
            <span style={treatIcon}>🩺</span>
            <h3 style={treatTitle}>Primary Care</h3>
            <a href="/services" style={treatLink}>
              Learn More →
            </a>
          </div>

          {/* CATEGORY 2 — Acute Illness */}
          <div style={treatCard}>
            <span style={treatIcon}>🤒</span>
            <h3 style={treatTitle}>Acute Illness</h3>
            <a href="/services" style={treatLink}>
              Learn More →
            </a>
          </div>

          {/* CATEGORY 3 — Skin, Hair & Nails */}
          <div style={treatCard}>
            <span style={treatIcon}>🌿</span>
            <h3 style={treatTitle}>Skin, Hair & Nails</h3>
            <a href="/services" style={treatLink}>
              Learn More →
            </a>
          </div>

          {/* CATEGORY 4 — Minor Injuries & Pain */}
          <div style={treatCard}>
            <span style={treatIcon}>💢</span>
            <h3 style={treatTitle}>Minor Injuries & Pain</h3>
            <a href="/services" style={treatLink}>
              Learn More →
            </a>
          </div>

          {/* CATEGORY 5 — Physicals */}
          <div style={treatCard}>
            <span style={treatIcon}>📋</span>
            <h3 style={treatTitle}>Physicals</h3>
            <a href="/services" style={treatLink}>
              Learn More →
            </a>
          </div>

          {/* CATEGORY 6 — Weight Management */}
          <div style={treatCard}>
            <span style={treatIcon}>⚖️</span>
            <h3 style={treatTitle}>Weight Management</h3>
            <a href="/services" style={treatLink}>
              Learn More →
            </a>
          </div>
        </div>
      </section>

      {/* ================= TRUST BADGES ================= */}
      <section style={{ marginTop: "3rem", textAlign: "center" }}>
        <div style={badgeRow}>
          {/* GOOGLE REVIEWS */}
          <a
            href="https://share.google/0elZZGrq6rQhsjMEl"
            target="_blank"
            rel="noreferrer"
            style={googleOuter}
          >
            <div style={googleInner}>
              <FaGoogle style={{ fontSize: "2.5rem", color: "#4285F4" }} />
              <span style={badgeText}>Review Us on Google</span>
              <div style={starRow}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </a>

          {/* FOLLOW ON FACEBOOK */}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            style={circleBadge("#1877F2")}
          >
            <FaFacebook style={{ fontSize: "2.5rem" }} />
            <span style={badgeText}>Follow Us on Facebook</span>
          </a>

          {/* FOLLOW ON INSTAGRAM */}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            style={instagramBadge}
          >
            <FaInstagram style={{ fontSize: "2.5rem" }} />
            <span style={badgeText}>Follow Us on Instagram</span>
          </a>

          {/* FOLLOW ON X */}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            style={circleBadge("#000000")}
          >
            <FaTwitter style={{ fontSize: "2.5rem" }} />
            <span style={badgeText}>Follow Us on X</span>
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer style={footerContainer}>
        <div style={footerGrid}>
          {/* LOCATION */}
          <div style={footerColumn}>
            <h3 style={footerTitle}>Location</h3>
            <p style={footerText}>2443 Old Russellville Pike</p>
            <p style={footerText}>Clarksville, TN 37040</p>
          </div>

          {/* CONTACT */}
          <div style={footerColumn}>
            <h3 style={footerTitle}>Contact</h3>
            <p style={footerText}>Phone: (931) 266‑0077</p>
            <p style={footerText}>Fax: (931) 266‑0088</p>
            <p style={footerText}>Email: compassioncareclinic01@gmail.com</p>
          </div>

          {/* BUSINESS HOURS */}
          <div style={footerColumn}>
            <h3 style={footerTitle}>Business Hours</h3>
            <p style={footerText}>Mon, Thu, Fri: 8:30 AM – 4:30 PM</p>
            <p style={footerText}>Tue – Wed: 8:30 AM – 7:00 PM</p>
            <p style={footerText}>Saturday: 8:30 AM – 12:00 PM</p>
            <p style={footerText}>Sunday: Closed</p>
            <p style={footerText}>Lunch: 12:00 PM – 1:00 PM</p>
          </div>

          {/* SHARE OUR WEBSITE */}
          <div style={footerColumn}>
            <h3 style={footerTitle}>Share Our Website</h3>
            <div style={socialRow}>
              {/* Facebook Share */}
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_WEBSITE_URL"
                target="_blank"
                rel="noreferrer"
                style={socialIcon}
              >
                <FaFacebook />
              </a>

              {/* X (Twitter) Share */}
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_WEBSITE_URL&text=Check%20out%20Compassion%20Care%20Clinic"
                target="_blank"
                rel="noreferrer"
                style={socialIcon}
              >
                <FaTwitter />
              </a>

              {/* LinkedIn Share */}
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_WEBSITE_URL"
                target="_blank"
                rel="noreferrer"
                style={socialIcon}
              >
                <FaLinkedin />
              </a>

              {/* WhatsApp Share */}
              <a
                href="https://api.whatsapp.com/send?text=Check%20out%20Compassion%20Care%20Clinic%20YOUR_WEBSITE_URL"
                target="_blank"
                rel="noreferrer"
                style={socialIcon}
              >
                💬
              </a>
            </div>
          </div>
        </div>

        <p style={footerCopyright}>
          © {new Date().getFullYear()} Compassion Care Clinic. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

/* ================= STYLES ================= */

/* TOP LOGO & NAV */
const topLogoSection = {
  width: "100%",
  padding: "3rem 3rem 2rem 3rem",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  background: "white",
  boxSizing: "border-box"
};

const taglineText = {
  marginTop: "1rem",
  fontSize: "1.6rem",
  color: "#1a3d7c",
  fontWeight: "600",
  letterSpacing: "0.5px"
};

const mainNav = {
  width: "100%",
  background: "#1a3d7c",
  padding: "0.7rem 0"
};

const mainNavList = {
  listStyle: "none",
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  margin: 0,
  padding: 0,
  color: "white",
  fontSize: "1.05rem",
  fontWeight: "bold",
  cursor: "pointer"
};

/* HERO SLIDER */
const sliderContainer = {
  width: "100%",
  marginTop: 0,
  background: "#f4f9ff"
};

const slideImage = {
  width: "100%",
  height: "500px",
  objectFit: "cover"
};

const gradientOverlay = {
  position: "absolute",
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(to right, rgba(26,61,124,0.55), rgba(46,139,87,0.55))",
  zIndex: 1
};

const slideOverlay = {
  position: "absolute",
  top: "50%",
  left: "10%",
  transform: "translateY(-50%)",
  background: "rgba(0, 0, 0, 0.35)",
  padding: "0.8rem 8rem",
  color: "white",
  zIndex: 2,
  width: "fit-content",
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
};

const slideTitle = {
  fontSize: "2.4rem",
  fontWeight: "700",
  marginBottom: "1rem",
  textShadow: "0 4px 10px rgba(0,0,0,0.4)"
};

/* CONTACT BLOCK (IN HERO) */
const contactBlock = {
  marginTop: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",
  fontSize: "1.2rem",
  fontWeight: "600"
};

const contactTitle = {
  fontSize: "1.4rem",
  fontWeight: "700",
  color: "white",
  textShadow: "0 3px 8px rgba(0,0,0,0.4)"
};

const contactLine = {
  color: "white",
  fontSize: "1.1rem",
  textShadow: "0 2px 6px rgba(0,0,0,0.4)"
};

/* DIVIDER */
const dividerLine = {
  width: "100%",
  height: "3px",
  background: "linear-gradient(to right, #1a3d7c, #2e8b57)",
  margin: "2rem 0"
};

/* INTRO SECTION */
const introSection = {
  width: "100%",
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "2rem 1.5rem",
  textAlign: "left",
  lineHeight: "1.7",
  color: "#333"
};

const providerHeading = {
  fontSize: "1.9rem",
  fontWeight: "700",
  color: "#4f6fae",
  marginBottom: "0.5rem",
  textAlign: "left"
};

const insuranceLine = {
  fontSize: "1.25rem",
  fontWeight: "600",
  color: "#2e8b57",
  marginBottom: "1.5rem",
  textAlign: "left"
};

const introHeading = {
  fontSize: "2rem",
  fontWeight: "700",
  color: "#1a3d7c",
  marginBottom: "1rem"
};

const introParagraph = {
  fontSize: "1.15rem",
  marginBottom: "1rem"
};

/* PRICING CARDS */
const cardsSection = {
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  flexWrap: "wrap",
  marginTop: "3rem",
  padding: "0 1rem"
};

const card = {
  width: "300px",
  background: "#e6f4ef",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  padding: "1.5rem",
  textAlign: "center",
  animation: "cardGlow 6s ease-in-out infinite"
};

const placeholderBox = {
  width: "100%",
  height: "180px",
  background: "#ffffff",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "1rem",
  border: "1px solid #cfe8df"
};

const placeholderIcon = {
  fontSize: "3rem",
  opacity: 0.6
};

const cardTitle = {
  fontSize: "1.3rem",
  fontWeight: "700",
  color: "#1a3d7c",
  marginBottom: "0.5rem"
};

const cardText = {
  fontSize: "1rem",
  lineHeight: "1.4",
  color: "#333"
};

/* WHAT WE TREAT */
const treatSection = {
  width: "100%",
  maxWidth: "1100px",
  margin: "4rem auto 0 auto",
  padding: "0 1.5rem",
  textAlign: "center"
};

const treatHeading = {
  fontSize: "2rem",
  fontWeight: "700",
  color: "#1a3d7c",
  marginBottom: "2rem"
};

const treatGrid = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1.5rem"
};

const treatCard = {
  width: "160px",
  background: "#e6f4ef",
  borderRadius: "12px",
  padding: "1.5rem 1rem",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  animation: "cardGlow 6s ease-in-out infinite",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "transform 0.3s ease"
};

const treatIcon = {
  fontSize: "2.2rem",
  marginBottom: "0.5rem"
};

const treatTitle = {
  fontSize: "1.1rem",
  fontWeight: "700",
  color: "#1a3d7c",
  marginBottom: "0.5rem"
};

const treatLink = {
  fontSize: "0.9rem",
  color: "#2e8b57",
  fontWeight: "600",
  textDecoration: "none",
  marginTop: "0.3rem"
};

/* TRUST BADGES */
const badgeRow = {
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  flexWrap: "wrap"
};

const googleOuter = {
  width: "160px",
  height: "160px",
  borderRadius: "50%",
  background:
    "conic-gradient(#4285F4, #DB4437, #F4B400, #0F9D58, #4285F4)",
  padding: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
};

const googleInner = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  background: "white",
  color: "#4285F4",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  fontWeight: "bold"
};

const starRow = {
  marginTop: "0.3rem",
  display: "flex",
  gap: "0.1rem",
  color: "#F4B400"
};

const circleBadge = (color) => ({
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  background: color,
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  padding: "1rem",
  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  fontWeight: "bold",
  textAlign: "center"
});

const instagramBadge = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  background:
    "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  padding: "1rem",
  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  fontWeight: "bold",
  textAlign: "center"
};

const badgeText = {
  marginTop: "0.5rem",
  fontSize: "0.9rem",
  lineHeight: "1.1rem"
};

/* FOOTER */
const footerContainer = {
  width: "100%",
  background: "linear-gradient(to right, #e8f3ff, #f0fff7)",
  color: "#1a3d7c",
  padding: "3rem 1.5rem 2rem 1.5rem",
  marginTop: "4rem",
  backgroundImage:
    "url('https://www.transparenttextures.com/patterns/diagmonds-light.png')",
  backgroundSize: "300px"
};

const footerGrid = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  maxWidth: "1100px",
  margin: "0 auto",
  gap: "2rem"
};

const footerColumn = {
  flex: "1 1 220px",
  minWidth: "200px"
};

const footerTitle = {
  fontSize: "1.4rem",
  fontWeight: "700",
  marginBottom: "1rem",
  color: "#1a3d7c"
};

const footerText = {
  fontSize: "1.15rem",
  margin: "0.3rem 0",
  color: "#333"
};

const socialRow = {
  display: "flex",
  gap: "1rem",
  marginTop: "0.5rem"
};

const socialIcon = {
  fontSize: "1.8rem",
  color: "#1a3d7c",
  cursor: "pointer",
  transition: "0.2s",
  textDecoration: "none"
};

const footerCopyright = {
  textAlign: "center",
  marginTop: "2rem",
  fontSize: "1rem",
  opacity: 0.8,
  color: "#1a3d7c"
};
