import React, { useEffect, useState } from "react";
import "./loader.css";
import loader from "../../img/Rudraalogo.png";

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
      <div className="loader-circle">
        <div className="circle-border"></div>
        <img src={loader} alt="Ketchup Loader" className="ketchup-img" />
      </div>
    </div>
  );
}
