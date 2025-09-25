import React, { useEffect, useRef, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './ArtisanasCarousel.css';

export default function Artisanas() {
  const [showForm, setShowForm] = useState(false); 
  const [isLogin, setIsLogin] = useState(true); 
  const middleRowRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const handleJoinClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  const artisans = [
    {
      id: 1,
      name: "Fatima Zahra",
      specialty: "Traditional weaving",
      image: "Tissage.jpg",
      description: "Expert in traditional Moroccan weaving with over 15 years of experience.",
      products: ["Carpets", "Blankets", "Decorative textiles"]
    },
    {
      id: 2,
      name: "Mohammed Alami",
      specialty: "Pottery and Ceramics",
      image: "artisansCeramique.jpg",
      description: "Master craftsman specializing in traditional and modern pottery.",
      products: ["Vases", "Tableware", "Wall decorations"]
    },
    {
      id: 3,
      name: "Amina Benali",
      specialty: "Embroidery",
      image: "tarz.png",
      description: "Talented artisan creating unique pieces of Moroccan embroidery.",
      products: ["Caftans", "Embroidered tablecloths", "Decorative cushions"]
    },
    {
      id: 4,
      name: "Karim Mansouri",
      specialty: "Woodwork",
      image: "najar.jpg",
      description: "Artisan specializing in wood carving and traditional furniture making.",
      products: ["Furniture", "Sculptures", "Traditional doors"]
    },
    {
      id: 5,
      name: "Youssef Benjelloun",
      specialty: "Zellige",
      image: "zellige.jpg",
      description: "Master artisan specializing in traditional Moroccan zellige art.",
      products: ["Mosaics", "Fountains", "Decorative panels"]
    },
    {
      id: 6,
      name: "Hassan Tazi",
      specialty: "Artistic Ironwork",
      image: "hadid.jpg",
      description: "Artistic blacksmith creating unique pieces in wrought iron.",
      products: ["Lanterns", "Wrought iron doors", "Decorative objects"]
    },
    {
      id: 7,
      name: "Samira El Fassi",
      specialty: "Traditional Jewelry",
      image: "bijoux.jpg",
      description: "Creator of traditional Moroccan jewelry in silver and precious stones.",
      products: ["Necklaces", "Bracelets", "Earrings"]
    },
    {
      id: 8,
      name: "Youssef Benjelloun",
      specialty: "Leatherwork",
      image: "jald.png",
      description: "Leather craftsman specializing in traditional leatherwork.",
      products: ["Bags", "Poufs", "Leather accessories"]
    },
    {
      id: 9,
      name: "Nadir Ziani",
      specialty: "Calligraphy",
      image: "https://i.pinimg.com/originals/dd/48/e5/dd48e513b257c74a8e44a6453f912d7b.jpg",
      description: "Expert calligrapher in traditional Arabic art and modern design.",
      products: ["Paintings", "Custom objects", "Custom works"]
    }
  ];

  return (
    <>
      {/* Page */}
      <div className={`artisanas-container ${showForm ? "dimmed" : ""}`}>
        {/* Hero */}
        <div className="artisanas-hero" data-aos="fade-down">
          <h1>Our Exceptional Artisans</h1>
          <p>Discover the talent and craftsmanship of our Moroccan artisans</p>
        </div>

        {/* Grid */}
        <div className="artisans-grid">
          <div className="grid-row">
            {artisans.slice(0, 3).map((artisan, i) => (
              <div 
                key={artisan.id} 
                className="artisan-card" 
                data-aos={i === 0 ? "fade-right" : i === 1 ? "zoom-in" : "fade-left"}
                data-aos-delay={i * 200}
              >
                <div className="card-content">
                  <div className="artisan-image">
                    <img src={artisan.image} alt={artisan.name} />
                  </div>
                  <div className="artisan-info">
                    <h2>{artisan.name}</h2>
                    <h3>{artisan.specialty}</h3>
                    <p>{artisan.description}</p>
                    <div className="artisan-products">
                      <h4>Spécialités:</h4>
                      <ul>
                        {artisan.products.map((product, index) => (
                          <li key={index}>{product}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Row */}
          <div ref={middleRowRef} className="grid-row middle-row">
            {artisans.slice(3, 6).map((artisan, index) => (
              <div
                key={artisan.id}
                ref={index === 0 ? leftCardRef : index === 2 ? rightCardRef : null}
                className={`artisan-card ${index === 0 ? 'left' : index === 1 ? 'center' : 'right'}`}
                data-aos={index === 1 ? "flip-up" : index === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 200}
              >
                <div className="card-content">
                  <div className="artisan-image">
                    <img src={artisan.image} alt={artisan.name} />
                  </div>
                  <div className="artisan-info">
                    <h2>{artisan.name}</h2>
                    <h3>{artisan.specialty}</h3>
                    <p>{artisan.description}</p>
                    <div className="artisan-products">
                      <h4>Spécialités:</h4>
                      <ul>
                        {artisan.products.map((product, index) => (
                          <li key={index}>{product}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Last Row */}
          <div className="grid-row">
            {artisans.slice(6, 9).map((artisan, i) => (
              <div 
                key={artisan.id} 
                className="artisan-card" 
                data-aos={i === 0 ? "fade-right" : i === 1 ? "zoom-in" : "fade-left"}
                data-aos-delay={i * 200}
              >
                <div className="card-content">
                  <div className="artisan-image">
                    <img src={artisan.image} alt={artisan.name} />
                  </div>
                  <div className="artisan-info">
                    <h2>{artisan.name}</h2>
                    <h3>{artisan.specialty}</h3>
                    <p>{artisan.description}</p>
                    <div className="artisan-products">
                      <h4>Spécialités:</h4>
                      <ul>
                        {artisan.products.map((product, index) => (
                          <li key={index}>{product}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {showForm && (
          <div className="modal-overlay">
            <div className="modal-form" data-aos="zoom-in">
              <button className="close-btn" onClick={handleFormClose}>✖</button>
              <h2>{isLogin ? "Connexion" : "Inscription"}</h2>
              <form>
                {!isLogin && (
                  <div className="form-group">
                    <input type="text" placeholder="Nom complet" required />
                  </div>
                )}
                <div className="form-group">
                  <input type="text" placeholder="Nom utilisateur" required />
                </div>
                <div className="form-group">
                  <input type="password" placeholder="Mot de passe" required />
                </div>
                <button type="submit" className="submit-btn">
                  {isLogin ? "Se connecter" : "S'inscrire"}
                </button>
              </form>
              <p className="switch-form">
                {isLogin ? "Pas de compte ?" : "Déjà inscrit ?"}{" "}
                <span onClick={() => setIsLogin(!isLogin)}>
                  {isLogin ? "Inscription" : "Connexion"}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
