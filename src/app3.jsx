import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function App3() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((projects) => setData(projects))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {data
          .sort((a, b) => b.important - a.important)
          .map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: item.important
                  ? "0 10px 25px rgba(255,215,0,0.5)"
                  : "0 10px 20px rgba(0,0,0,0.4)",
              }}
              style={{
                background: "linear-gradient(135deg, #1a1a1a, #2c2c2c)",
                color: "#fff",
                padding: "1.5rem",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "180px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: item.important ? "2px solid #FFD700" : "1px solid #444",
              }}
            >
              <div>
                <h3
                  style={{
                    marginBottom: "0.5rem",
                    color: item.important ? "#FFD700" : "#fff",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.9rem", lineHeight: "1.3" }}>
                  {item.description}
                </p>
              </div>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: "1rem",
                    alignSelf: "flex-start",
                    color: "#FFD700",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  Görüntüle →
                </a>
              )}
            </motion.div>
          ))}
      </div>
    </div>
  );
}

export default App3;
