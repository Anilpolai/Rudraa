import React, { useEffect, useState } from "react";
import "./loader.css";

export default function Loader({ onComplete }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
      if (onComplete) onComplete();
    }, 3500); // show loader for 3.5s

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`rudraa-loader ${hide ? "loader-hide" : ""}`}>
      <div className="loader-circle"></div>
      <h1 className="loader-text">
        {"RUDRAA FOODS".split("").map((char, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}
