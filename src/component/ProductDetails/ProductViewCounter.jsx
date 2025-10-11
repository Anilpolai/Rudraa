import React, { useState, useEffect } from "react";

export default function ProductViewCounter({ min = 5, max = 50, interval = 2000 }) {
  // min & max = range of viewers
  const [viewers, setViewers] = useState(getRandom(min, max));

  // Helper to get random number in range
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Auto update viewers every `interval` milliseconds
  useEffect(() => {
    const timer = setInterval(() => {
      setViewers(getRandom(min, max));
    }, interval);

    return () => clearInterval(timer);
  }, [min, max, interval]);

  return (
    <div className="view-counter">
      <span>{viewers}</span> people are viewing this product
    </div>
  );
}
