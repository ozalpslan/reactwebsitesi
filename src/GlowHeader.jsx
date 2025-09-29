import { motion } from "framer-motion";

export function GlowHeader() {
  return (
    <motion.h1
      className="text-center"
      style={{ color: "#FFD700", cursor: "pointer" }}
      initial={{
        opacity: 0,
        scale: 0.95,
        textShadow: "0 0 1px #FFD700",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        textShadow: "0 0 3px #FFD700",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.8,
      }}
      whileHover={{
        scale: 1.06,
        color: "#fff",
        textShadow: "0 0 4px #FFD700, 0 0 6px #FFE55C",
      }}
    >
      Alper Özarslan
    </motion.h1>
  );
}
