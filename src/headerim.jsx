import "./headerim.css";

function Headerim({ activeSection, setActiveSection }) {
  const links = [
    { label: "About", section: "about" },
    { label: "Resume", section: "resume" },
    { label: "Portfolio", section: "portfolio" },
    { label: "Sertifikalar", section: "certificates" },
  ];

  return (
    <div className="headerim-container">
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav d-flex flex-row gap-3 m-0">
          {links.map((link) => (
            <li className="nav-item" key={link.section}>
              <a
                className="nav-link nav-sari"
                href={`#${link.section}`}
                style={{
                  color: activeSection === link.section ? "#FFD700" : "#D9D9D9",
                  fontWeight:
                    activeSection === link.section ? "bold" : "normal",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(link.section);
                }}
                onMouseEnter={(e) => (e.target.style.color = "#FFE55C")}
                onMouseLeave={(e) =>
                  (e.target.style.color =
                    activeSection === link.section ? "#FFD700" : "#D9D9D9")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Headerim;
