import { useEffect, useState } from "react";

function App5() {
  const [certs, setCerts] = useState(null);
  const [openCertId, setOpenCertId] = useState(null);

  useEffect(() => {
    const exampleData = [
      {
        id: 1,
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2025",
        important: 1,
        description:
          "EC2, S3, RDS, Lambda, VPC, IAM gibi temel AWS servislerinde yetkinlik. Cloud uygulamalarını tasarlama, güvenlik ve maliyet optimizasyonu deneyimi.",
      },
      {
        id: 2,
        title: "AI Engineer for Data Scientists Associate",
        issuer: "DataCamp",
        date: "2025",
        important: 1,
        description:
          "Python ile veri hazırlama, modelleme ve görselleştirme. MLOps ve LLMOps kavramlarına giriş, ETL/ELT pipeline hazırlama.",
      },
      {
        id: 3,
        title: "Full-Stack Web Development Bootcamp",
        issuer: "Dr. Angela Yu (Udemy)",
        date: "2025",
        important: 1,
        description:
          "HTML, CSS, Bootstrap, JavaScript, React, Node.js, Express.js, PostgreSQL ile web uygulamaları geliştirme. Git & GitHub ile proje yönetimi.",
      },
      {
        id: 4,
        title: "Advanced Excel Certificate",
        issuer: "BilgeAdam",
        date: "2025",
        important: 0,
        description:
          "Excel formülleri, pivot tablolar, dashboardlar ve makrolar ile ileri seviye analizler.",
      },
      {
        id: 5,
        title: "Python Bootcamp",
        issuer: "Akbank",
        date: "2024",
        important: 0,
        description:
          "OOP, sınıflar, dosya işlemleriyle özel Python kütüphane sistemi geliştirme deneyimi.",
      },
      {
        id: 6,
        title: "Geleceği Yazanlar 401",
        issuer: "Turkcell",
        date: "2024",
        important: 0,
        description:
          "Python’da veri yapıları, algoritmalar, nesne yönelimli programlama ve dosya işlemleri temelleri.",
      },
    ];
    setCerts(exampleData);
  }, []);

  if (!certs) return <p>Yükleniyor...</p>;

  const sortedCerts = certs.sort((a, b) => b.important - a.important);

  const toggleCert = (id) => {
    setOpenCertId(openCertId === id ? null : id);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2
        style={{ textAlign: "center", marginBottom: "1rem", color: "#FFD700" }}
      >
        Sertifikalarım
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {sortedCerts.map((cert) => (
          <div
            key={cert.id}
            style={{
              border: cert.important ? "2px solid #FFD700" : "1px solid #ccc",
              borderRadius: "12px",
              padding: "1rem",
              boxShadow: cert.important
                ? "0 6px 12px rgba(255,215,0,0.3)"
                : "0 4px 6px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              backgroundColor: "transparent",
            }}
            onClick={() => toggleCert(cert.id)}
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
            <small style={{ color: "#777" }}>{cert.date}</small>

            {/* Açılır detay kısmı */}
            <div
              style={{
                maxHeight: openCertId === cert.id ? "200px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
                marginTop: openCertId === cert.id ? "0.5rem" : "0",
              }}
            >
              {openCertId === cert.id ? (
                <p style={{ color: "#555" }}>{cert.description}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App5;
