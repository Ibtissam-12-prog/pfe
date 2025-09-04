import React from "react";
import "./ArtisanCard.css";

export default function ArtisanCard({ image, name, role }) {
  return (
    <div className="artisan-card">
      <img src={image} alt={name} className="artisan-img" />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}
