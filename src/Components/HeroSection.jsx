import React from "react";
import heroImage from "/hero-artisans.jpg";

export default function HeroSection() {
  const heroSectionStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `linear-gradient(
      hsla(15, 75%, 55%, 0.5), 
      hsla(210, 45%, 45%, 0.5)
    ), url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    color: "white",
  };

  const overlayStyle = {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
  };

  const heroContentStyle = {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    padding: "0 2rem",
  };

  const heroTitles = [
    {
      text: "Authentic.",
      fontSize: "3rem",
      margin: "0.05rem 0",
      color: "hsla(15, 75%, 55%, 1)",
      fontFamily: "'Georgia', serif",
    },
    {
      text: "Handmade.",
      fontSize: "3rem",
      margin: "0.05rem 0",
      color: "hsla(40, 30%, 90%, 1)",
      fontFamily: "'Poppins', sans-serif",
    },
    {
      text: "From Morocco with Love.",
      fontSize: "3rem",
      margin: "0.05rem 0",
      color: "hsla(45, 40%, 60%, 1)",
      fontFamily: "'Playfair Display', serif",
    },
  ];

  const heroTextStyle = {
    fontSize: "1.2rem",
    margin: "1rem auto 1.5rem auto",
    maxWidth: "700px",
  };

  const heroButtonStyle = {
    padding: "0.8rem 1.5rem",
    borderRadius: "8px",
    backgroundImage:
      "linear-gradient(135deg, hsla(15, 75%, 55%, 1) 0%, hsla(40, 30%, 90%, 0.5) 100%)",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    transition: "all 0.3s ease",
  };

  return (
    <section style={heroSectionStyle}>
      <div style={overlayStyle}></div>
      <div style={heroContentStyle}>
        {heroTitles.map((title, idx) => (
          <h1
            key={idx}
            style={{
              fontSize: title.fontSize,
              margin: title.margin,
              color: title.color,
              fontFamily: title.fontFamily,
            }}
          >
            {title.text}
          </h1>
        ))}
        <p style={heroTextStyle}>
          Discover the timeless beauty of Moroccan craftsmanship. Each piece is
          lovingly handmade by skilled artisans, preserving centuries-old
          traditions while creating modern treasures for your home.
        </p>
        <button style={heroButtonStyle}>Show Our Collection</button>
      </div>
    </section>
  );
}
