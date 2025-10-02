import { useState, useEffect } from "react";
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
  const [skills] = useState([
    { subject: "Python", A: 95, fullMark: 100 },
    { subject: "SQL", A: 80, fullMark: 100 },
    { subject: "AWS", A: 75, fullMark: 100 },
    { subject: "React", A: 85, fullMark: 100 },
    { subject: "C#", A: 65, fullMark: 100 },
  ]);

  const [languages] = useState([
    { lang: "Turkish", emoji: "🇹🇷", level: 100 },
    { lang: "English", emoji: "🇬🇧", level: 70 },
    { lang: "German", emoji: "🇩🇪", level: 10 },
  ]);

  // API'den gelecek state'ler
  const [timeline, setTimeline] = useState([]);
  const [certificates, setCertificates] = useState([]);

  // API çağrıları
  useEffect(() => {
    fetch("/api/about/timeline")
      .then((res) => res.json())
      .then((data) => setTimeline(data));

    fetch("/api/about/certificates")
      .then((res) => res.json())
      .then((data) => setCertificates(data));
  }, []);

  return (
    <div className="main-content" style={{ color: "#fff", padding: "2rem" }}>
      {/* Skills */}
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

      {/* Languages */}
      <h3>Languages</h3>
      {languages.map((l, i) => (
        <div key={i}>
          {l.lang} - {l.level}%
        </div>
      ))}

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
    </div>
  );
}

export default App1;
