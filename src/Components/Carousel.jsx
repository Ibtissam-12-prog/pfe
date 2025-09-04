import React, { useState, useEffect } from "react";

const Carousel = ({ autoPlay = true, autoPlayInterval = 4000 }) => {
  const images = [
    { url: "img2.png", title: "Traditional Moroccan Pottery" },
    { url: "img1.png", title: "Handmade Jewelry" },
    { url: "img4.png", title: "Artisan Carpets" },
    { url: "img6.png", title: "Wood Carvings" },
    { url: "img7.png", title: "Natural Scenery" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval]);

  return (
    <div style={styles.carouselContainer}>
      <button onClick={goToPrevious} style={styles.controlButton}>
        ❮
      </button>
      <div style={styles.slider}>
        {images.map((img, index) => {
          let position = "hidden";
          if (index === currentIndex) position = "center";
          else if (index === (currentIndex - 1 + images.length) % images.length)
            position = "left";
          else if (index === (currentIndex + 1) % images.length)
            position = "right";

          return (
            <div
              key={index}
              style={{ ...styles.imageWrapper, ...positionStyles[position] }}
            >
              <img src={img.url} alt={img.title} style={styles.image} />

              {/* العنوان يبان غير للصورة الرئيسية */}
              {position === "center" && (
                <div style={styles.titleOverlay}>{img.title}</div>
              )}
            </div>
          );
        })}
      </div>
      <button onClick={goToNext} style={styles.controlButton}>
        ❯
      </button>
    </div>
  );
};

const styles = {
  carouselContainer: {
    position: "relative",
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, hsla(15, 75%, 55%, 0.1), hsla(15, 70%, 25%, 0.1))", // <-- string
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    overflow: "hidden",
  },


  slider: {
    position: "relative",
    width: "90%",
    height: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    perspective: "1200px", // effet 3D
  },
  imageWrapper: {
    position: "absolute",
    transition: "all 0.6s ease",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "18px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
  },
  controlButton: {
    background: "rgba(255,255,255,0.8)",
    border: "none",
    borderRadius: "50%",
    padding: "12px 16px",
    cursor: "pointer",
    fontSize: "24px",
    zIndex: 2,
    transition: "all 0.3s ease",
  },
  titleOverlay: {
    position: "absolute",
    bottom: "0px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "10px",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
  },
};

// gestion des positions
const positionStyles = {
  center: {
    width: "750px",
    height: "450px",
    opacity: 1,
    zIndex: 3,
    transform: "translateX(0) scale(1) rotateY(0deg)",
  },
  left: {
    width: "400px",
    height: "280px",
    opacity: 0.8,
    zIndex: 2,
    transform: "translateX(-350px) scale(0.9) rotateY(20deg)",
  },
  right: {
    width: "400px",
    height: "280px",
    opacity: 0.8,
    zIndex: 2,
    transform: "translateX(350px) scale(0.9) rotateY(-20deg)",
  },
  hidden: {
    opacity: 0,
    transform: "scale(0.7)",
    zIndex: 1,
  },
};

export default Carousel;
