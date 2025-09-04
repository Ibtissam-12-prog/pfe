import React from "react";
import "./ArtisansSection.css";

export default function InfoBox({ title, text }) {
  return (
    <div className="info-box">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}
