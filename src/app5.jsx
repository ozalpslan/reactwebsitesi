import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App5() {
  const [certs, setCerts] = useState([]);
  const [openCertId, setOpenCertId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/about/certificates")
      .then((res) => res.json())
      .then((data) => setCerts(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Yükleniyor...</p>;

  const sortedCerts = [...certs].sort((a, b) => b.important - a.important);

  const toggleCert = (id) => {
    setOpenCertId(openCertId === id ? null : id);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {sortedCerts.map((cert) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              scale: 1.02,
              boxShadow: cert.important
                ? "0 10px 25px rgba(255,215,0,0.5)"
                : "0 8px 20px rgba(0,0,0,0.2)",
            }}
            onClick={() => toggleCert(cert.id)}
            style={{
              border: cert.important ? "2px solid #FFD700" : "1px solid #ccc",
              borderRadius: "12px",
              padding: "1rem",
              cursor: "pointer",
              backgroundColor: "transparent",
              transition: "all 0.2s ease",
            }}
          >
            <h3
              style={{
                margin: "0 0 0.5rem 0",
                color: cert.important ? "#FFD700" : "#444",
              }}
            >
              {cert.title}
            </h3>
            <p
              style={{
                margin: "0 0 0.25rem 0",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              {cert.issuer}
            </p>
            <small style={{ color: "#777" }}>{cert.year}</small>

            {/* Açılır detay */}
            <div
              style={{
                maxHeight: openCertId === cert.id ? "250px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
                marginTop: openCertId === cert.id ? "0.5rem" : "0",
              }}
            >
              {openCertId === cert.id && (
                <p style={{ color: "#555" }}>{cert.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App5;
