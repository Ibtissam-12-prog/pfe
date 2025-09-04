import React from "react";
import ArtisanCard from "./ArtisanCard";
import InfoBox from "./InfoBox";
import "./ArtisansSection.css";

export default function ArtisansSection() {
  return (
    <section className="artisans-section">
      <div className="container">
        <div className="left">
          <ArtisanCard
            image="image3.jpg"
            name="Zeinab El-Maârif"
            role="Master Artisan"
          />
        </div>

        <div className="right">
          <h2 className="kicker">Meet Our</h2>
          <h1 className="title">
            <span>Master</span> Artisans
          </h1>

          <p className="lead">
            Behind every handcrafted piece lies generations of knowledge,
            skill, and passion. Our artisans are the guardians of Morocco's rich
            cultural heritage.
          </p>

          <div className="infos">
            <InfoBox
              title="Heritage Keepers"
              text="Each artisan has learned their craft through years of apprenticeship."
            />
            <InfoBox
              title="Sustainable Practices"
              text="Working with natural materials and time-honored methods."
            />
            <InfoBox
              title="Personal Touch"
              text="Every piece can be customized while maintaining authenticity."
            />
          </div>

          <div className="actions">
            <button className="btn primary">Meet Our Team</button>
            <button className="btn ghost">Learn Our Story</button>
          </div>
        </div>
      </div>
    </section>
  );
}
