import { useState } from "react";
import "./app1.css";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { motion } from "framer-motion";

// Timeline component
function TimelineItem({ year, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ marginBottom: "1.5rem" }}
    >
      <h4 style={{ color: "#FFD700", textShadow: "0 0 5px #FFD700" }}>
        {year} – {title}
      </h4>
      <p style={{ color: "#ccc", margin: 0 }}>{desc}</p>
    </motion.div>
  );
}

function App1() {
  // Skills
  const [skills] = useState([
    { subject: "Python", A: 95, fullMark: 100 },
    { subject: "SQL", A: 80, fullMark: 100 },
    { subject: "AWS", A: 75, fullMark: 100 },
    { subject: "React", A: 85, fullMark: 100 },
    { subject: "C#", A: 65, fullMark: 100 },
  ]);

  // Languages
  const [languages] = useState([
    { lang: "Turkish", emoji: "🇹🇷", level: 100 },
    { lang: "English", emoji: "🇬🇧", level: 70 },
    { lang: "German", emoji: "🇩🇪", level: 10 },
  ]);

  // Timeline (statik veri)
  const [timeline] = useState([
    {
      year: "2025",
      title: "Kişisel React Web Sitesi",
      desc: "React, FastAPI, AWS EC2 ve Docker kullanarak CV ve portfolyo için geliştirdiğim web sitesi.",
    },
    {
      year: "2024",
      title: "Arabam.com Fiyat Tahmini",
      desc: "Araç verilerini scrape edip temizledim, ML modelleriyle fiyat tahmini pipeline kurdum.",
    },
    {
      year: "2024",
      title: "Ders Özetleme Projesi",
      desc: "Online ders videolarını dinleyip özetleyen ve önemli noktaları çıkartan Python tabanlı uygulama.",
    },
    {
      year: "2023",
      title: "İTÜ Deep Learning Datathon",
      desc: "CNN modelleriyle şehir yapılarını tahmin eden proje.",
    },
    {
      year: "2023",
      title: "YTÜ ML Datathon",
      desc: "XGBoost kullanarak makine bakım tahmini pipeline geliştirdim.",
    },
    {
      year: "2023",
      title: "OBSS AI Intern",
      desc: "Image Captioning üzerine LLM tabanlı proje deneyimi.",
    },
  ]);

  // Certificates (statik veri)
  const [certificates] = useState([
    { title: "AWS Certified Cloud Practitioner", year: "2025" },
    { title: "Deep Learning Specialization", year: "2024" },
    { title: "Data Science Bootcamp", year: "2024" },
  ]);

  return (
    <div
      className="main-content"
      style={{
        color: "#fff",
        padding: "2rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* About */}
      <p>
        İstanbul Üniversitesi Bilgisayar Bilimleri 3. sınıf öğrencisiyim. Makine
        öğrenmesi, derin öğrenme ve veri mühendisliği üzerine projeler
        geliştirdim. Python, SQL, AWS, .NET, React ve JavaScript konularında
        deneyimliyim. Datathon’lar ve sertifika programlarıyla pratik tecrübeler
        kazandım. Yapay zeka, otomasyon ve bulut tabanlı çözümlerle ilgili
        projelere özellikle ilgi duyuyorum.
      </p>
      <p>
        I am a 3rd-year Computer Science student at Istanbul University. I have
        hands-on experience in machine learning, deep learning, and data
        engineering. Skilled in Python, SQL, AWS, .NET, React, and JavaScript.
        Gained practical knowledge through datathons and certification programs.
        Passionate about projects involving AI, automation, and cloud-based
        solutions.
      </p>

      {/* Tags */}
      <div style={{ marginBottom: "2rem" }}>
        {["AI ⚡", "Cloud ☁️", "Automation 🤖", "MLOps 🔧"].map((tag, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            style={{
              display: "inline-block",
              margin: "0.25rem",
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              background: "#222",
              color: "#FFD700",
              fontSize: "0.9rem",
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>

      {/* Skills & Languages */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          marginTop: "2rem",
        }}
      >
        {/* Technical Skills */}
        <div style={{ flex: 1, minWidth: "250px" }}>
          <h3>Technical Skills</h3>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skills}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" stroke="#fff" />
                <PolarRadiusAxis stroke="#999" />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="#FFD700"
                  fill="#FFD700"
                  fillOpacity={0.6}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Languages */}
        <div style={{ flex: 1, minWidth: "250px" }}>
          <h3>Languages</h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {languages.map((l, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>{l.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.25rem",
                    }}
                  >
                    <span>{l.lang}</span>
                    <span>{l.level}%</span>
                  </div>
                  <div
                    style={{
                      height: "10px",
                      background: "#333",
                      borderRadius: "5px",
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${l.level}%` }}
                      transition={{
                        type: "spring",
                        stiffness: 60,
                        delay: i * 0.2,
                      }}
                      style={{
                        height: "100%",
                        background: "#FFD700",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <h3 style={{ marginTop: "2rem" }}>Experience Timeline</h3>
      <div>
        {timeline.map((item, i) => (
          <TimelineItem
            key={i}
            year={item.year}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>

      {/* Certificates */}
      <h3 style={{ marginTop: "2rem" }}>Certificates</h3>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {certificates.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            style={{
              background: "#222",
              padding: "0.5rem 1rem",
              borderRadius: "10px",
              boxShadow: "0 0 5px #FFD700",
              color: "#FFD700",
            }}
          >
            {c.title} ({c.year})
          </motion.div>
        ))}
      </div>

      {/* Download CV */}
      <motion.a
        href="/cv.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: "inline-block",
          marginTop: "4rem",
          padding: "0.75rem 1.5rem",
          background: "#FFD700",
          color: "#222",
          borderRadius: "25px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Download CV
      </motion.a>
    </div>
  );
}

export default App1;
