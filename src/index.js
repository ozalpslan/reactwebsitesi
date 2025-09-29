import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import "./index.css";

// Component importları
import Headerim from "./headerim.jsx";
import ResumeBaslik from "./ResumeBaslik";
import App1 from "./app1";
import App2 from "./app2";
import App3 from "./app3";
import App5 from "./app5";
import { GlowHeader } from "./GlowHeader.jsx";
import CategorySlider from "./IsBasligi.jsx";

// İkonlar
import { Linkedin, Github, Globe, Mail, MapPin, Menu } from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobil için

  const sections = {
    about: <App1 />,
    resume: <App2 />,
    portfolio: <App3 />,
    certificates: <App5 />,
  };

  const bgColor = "#1a1a1a";
  const topPadding = "2rem";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container-fluid"
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div className="row" style={{ margin: 0, height: "100vh" }}>
        {/* Sol boş col-1 (desktop) */}
        <div
          className="col-1 d-none d-md-block"
          style={{ backgroundColor: "#000000" }}
        ></div>

        {/* Sidebar col-2 (desktop) */}
        <div
          className="col-2 d-none d-md-flex flex-column justify-content-between kenarlargidik"
          style={{
            backgroundColor: bgColor,
            height: "100vh",
            position: "fixed",
            top: 0,
            left: "8.33%",
            paddingTop: topPadding,
            overflowY: "auto",
          }}
        >
          <div className="d-flex flex-column align-items-center">
            <GlowHeader />
            <img
              src="/1745486526672.jpg"
              className="rounded-circle mb-3"
              style={{ width: "100px", heighct: "100px", marginTop: "10px" }}
            />
            <CategorySlider />
          </div>

          <div
            className="d-flex flex-column align-items-center mb-3 gap-3"
            style={{ color: "#fff", fontSize: "1.1rem" }}
          >
            <a
              href="https://www.linkedin.com/in/alper-ozarslan-821361201/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center gap-2 text-decoration-none link-hover"
              style={{ color: "#0A66C2" }}
            >
              <Linkedin size={20} /> <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/ozalpslan"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center gap-2 text-decoration-none link-hover"
              style={{ color: "#fff" }}
            >
              <Github size={20} /> <span>GitHub</span>
            </a>
            <a
              href="https://alper-ozarslan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center gap-2 text-decoration-none link-hover"
              style={{ color: "#FFD700" }}
            >
              <Globe size={20} /> <span>alper-ozarslan.com</span>
            </a>
            <a
              href="mailto:ozalpslan@gmail.com"
              className="d-flex align-items-center gap-2 text-decoration-none link-hover"
              style={{ color: "#fff" }}
            >
              <Mail size={20} /> <span>ozalpslan@gmail.com</span>
            </a>
            <div
              className="d-flex align-items-center gap-2"
              style={{ color: "#fff" }}
            >
              <MapPin size={20} /> <span>İstanbul / Fatih</span>
            </div>
          </div>
        </div>

        {/* Main content col */}
        <div
          className="col-12 col-md-7 offset-md-3 d-flex flex-column kenarlargidik custom-scroll"
          style={{
            backgroundColor: bgColor,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: topPadding,
            position: "relative",
            height: "100vh",
            overflowY: "auto",
          }}
        >
          {/* Mobilde ResumeBaslik + Menü bar */}
          <div
            className="d-md-none"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "60px",
              backgroundColor: bgColor,
              zIndex: 1001,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 50px",
              borderBottom: "1px solid #333",
            }}
          >
            {/* Menu düğmesi */}
            <div
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1002,
                cursor: "pointer",
                color: "#fff",
              }}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu size={30} />
            </div>

            {/* ResumeBaslik */}
            <ResumeBaslik
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>

          {/* Mobilde içerik margin */}
          <div style={{ marginTop: "6vh" }}>
            <Headerim
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />

            {/* Desktop ResumeBaslik */}
            <h3
              className="d-none d-md-block"
              style={{
                paddingLeft: "8rem",
                fontSize: "1.5rem",
                marginTop: "-3.7rem",
              }}
            >
              <ResumeBaslik
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
            </h3>

            <div
              style={{ marginTop: "4rem", color: "#fff", paddingLeft: "3rem" }}
            >
              {sections[activeSection]}
            </div>
          </div>
        </div>

        {/* Sağ boş col-1 (desktop) */}
        <div
          className="col-1 d-none d-md-block"
          style={{ backgroundColor: "#000000" }}
        ></div>

        {/* Mobil için sidebar toggle content */}
        <div className="d-md-none">
          {sidebarOpen && (
            <>
              {/* Overlay - sidebar dışına tıklandığında kapatmak için */}
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 998,
                }}
                onClick={() => setSidebarOpen(false)}
              />

              {/* Sidebar - Header'ın altında başlayacak şekilde */}
              <div
                style={{
                  position: "fixed",
                  top: "60px", // Header yüksekliği kadar aşağıdan başlat
                  left: 0,
                  width: "250px",
                  height: "calc(100vh - 60px)", // Header yüksekliği kadar azalt
                  backgroundColor: bgColor,
                  zIndex: 1000, // Header'dan düşük z-index
                  padding: "2rem 1rem",
                  overflowY: "auto",
                  transition: "all 0.3s",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRight: "1px solid #333",
                }}
              >
                <div className="d-flex flex-column align-items-center">
                  <GlowHeader />
                  <img
                    src="/1745486526672.jpg"
                    className="rounded-circle mb-3"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <CategorySlider />
                </div>

                <div
                  className="d-flex flex-column align-items-start gap-3"
                  style={{ color: "#fff", fontSize: "1rem" }}
                >
                  <a
                    href="https://www.linkedin.com/in/alper-ozarslan-821361201/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center gap-2 text-decoration-none link-hover"
                    style={{ color: "#0A66C2" }}
                  >
                    <Linkedin size={20} /> <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/ozalpslan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center gap-2 text-decoration-none link-hover"
                    style={{ color: "#fff" }}
                  >
                    <Github size={20} /> <span>GitHub</span>
                  </a>
                  <a
                    href="https://alper-ozarslan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center gap-2 text-decoration-none link-hover"
                    style={{ color: "#FFD700" }}
                  >
                    <Globe size={20} /> <span>alper-ozarslan.com</span>
                  </a>
                  <a
                    href="mailto:ozalpslan@gmail.com"
                    className="d-flex align-items-center gap-2 text-decoration-none link-hover"
                    style={{ color: "#fff" }}
                  >
                    <Mail size={20} /> <span>ozalpslan@gmail.com</span>
                  </a>
                  <div
                    className="d-flex align-items-center gap-2"
                    style={{ color: "#fff" }}
                  >
                    <MapPin size={20} /> <span>İstanbul / Fatih</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
