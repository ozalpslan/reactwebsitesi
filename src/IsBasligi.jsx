import { useState, useEffect } from "react";
import "./CategorySlider.css";

const categories = [
  "MLOPS",
  "Deep Learning",
  "Machine Learning",
  "Data Science",
  "Full Stack",
  "AI Engineering",
  "Data Engineering",
  "NLP",
  "Computer Vision",
  "Cloud Computing",
  "Reinforcement Learning",
  "Big Data",
];

export default function CategorySlider() {
  const [index, setIndex] = useState(0);
  const itemHeight = 2.8; // rem cinsinden

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % categories.length);
    }, 2500); // 2.5 saniye sabit kalacak
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="slider-container">
      <div className="category-wrapper">
        {/* Kayan kategoriler */}
        <div
          className="category-list"
          style={{
            transform: `translateY(-${index * itemHeight}rem)`,
            transition: "transform 0.7s ease-in-out",
          }}
        >
          {categories.map((cat, i) => (
            <div className="category-item" key={i}>
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* Knowledge sabit */}
      <span className="knowledge">Knowledge</span>
    </div>
  );
}
