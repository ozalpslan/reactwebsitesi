import { motion } from "framer-motion";

export default function ResumeAnimation({ activeSection }) {
  // Başlığı düzgün göstermek için mapping
  const sectionTitles = {
    resume: "Resume",
    about: "About",
    portfolio: "Portfolio",
    blog: "Blog",
    certificates: "Certificates",
  };

  return (
    <motion.h1
      key={activeSection} // section değişince animasyon tetiklenir
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{
        duration: 0.2,
        scale: { type: "spring", bounce: 0.3 },
      }}
      style={{
        display: "inline-block",
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#FFD700",
        margin: 0,
        lineHeight: 1,
        cursor: "pointer",
      }}
      whileHover={{
        scale: 1.05,
        rotate: 0.2,
        color: "#FFE55C",
      }}
    >
      {sectionTitles[activeSection]}
    </motion.h1>
  );
}
