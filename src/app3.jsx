import { useState } from "react";
import { motion } from "framer-motion";

function App3() {
  const [data] = useState([
    {
      title: "Kişisel React Web Sitesi",
      description:
        "React, FastAPI, AWS EC2 ve Docker kullanarak CV ve portfolyo için geliştirdiğim web sitesi.",
      link: "https://github.com/ozalpslan/websitesi",
      important: 1,
    },
    {
      title: "Streamlit Çalışmaları",
      description: "Streamlit ile yaptığım küçük ML/AI projeleri ve denemeler.",
      link: "https://github.com/ozalpslan/streamlit",
      important: 0,
    },
    {
      title: "Arabam.com Fiyat Tahmini",
      description:
        "Araç verilerini scrape edip temizledim, ML modelleriyle fiyat tahmini pipeline kurdum.",
      link: "https://github.com/ozalpslan/Araba-Deger-Tahmini-Projesi",
      important: 1,
    },
    {
      title: "Ses Kaydı & Transkripsiyon Sistemi",
      description:
        "Türkçe sesleri yazıya döken ve BART modeli ile özetleyen Python tabanlı LLM projesi.",
      link: "https://github.com/ozalpslan/Audio-Transcriber-and-Summerizer",
      important: 1,
    },
    {
      title: "Katıldığım Yarışmalar",
      description:
        "İTÜ Deep Learning Datathon (CNN), YTÜ ML Datathon (XGBoost), OBSS AI Intern (Image Captioning).",
      link: "https://github.com/ozalpslan/Katildigim-Yarismalar",
      important: 1,
    },
    {
      title: "Leetcode Çalışmaları",
      description:
        "Algoritma & problem çözme alıştırmaları. JavaScript/Python çözümleri.",
      link: "https://github.com/ozalpslan/Leetcode",
      important: 0,
    },
    {
      title: "Kredi Riski Analizi",
      description:
        "Derin öğrenme yöntemleriyle kredi riski tahmini modeli geliştirdim.",
      link: "https://github.com/ozalpslan/Derin-ogrenme-ile-kredi-riski-analizi",
      important: 0,
    },
    {
      title: "Ev Fiyat Tahmini",
      description:
        "Neural Networks ile ev fiyat tahmin modeli (HousePricingPredict).",
      link: "https://github.com/ozalpslan/HousePricingPredict",
      important: 0,
    },
    {
      title: "Akbank Python Bootcamp Projesi",
      description: "OOP tabanlı Python kütüphane sistemi geliştirdiğim proje.",
      link: "https://github.com/ozalpslan/Akbank-python-bootcamp-projesi",
      important: 0,
    },
  ]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ color: "#FFD700", marginBottom: "1.5rem" }}>Portfolio</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {data
          .sort((a, b) => b.important - a.important) // Önemliler üstte
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
