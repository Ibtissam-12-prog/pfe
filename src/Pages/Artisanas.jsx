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
      specialty: "Tissage traditionnel",
      image: "Tissage.jpg",
      description: "Experte en tissage traditionnel marocain avec plus de 15 ans d'expérience.",
      products: ["Tapis", "Couvertures", "Textiles décoratifs"]
    },
    {
      id: 2,
      name: "Mohammed Alami",
      specialty: "Poterie et Céramique",
      image: "artisansCeramique.jpg",
      description: "Maître artisan spécialisé dans la poterie traditionnelle et moderne.",
      products: ["Vases", "Services de table", "Décorations murales"]
    },
    {
      id: 3,
      name: "Amina Benali",
      specialty: "Broderie",
      image: "tarz.png",
      description: "Artisane talentueuse créant des pièces uniques de broderie marocaine.",
      products: ["Caftans", "Nappes brodées", "Coussins décoratifs"]
    },
    {
      id: 4,
      name: "Karim Mansouri",
      specialty: "Travail du Bois",
      image: "najar.jpg",
      description: "Artisan spécialisé dans la sculpture sur bois et la création de meubles traditionnels.",
      products: ["Meubles", "Sculptures", "Portes traditionnelles"]
    },
    {
      id: 5,
      name: "Youssef Benjelloun",
      specialty: "Zellige",
      image: "zellige.jpg",
      description: "Maître artisane spécialisée dans l'art du zellige marocain traditionnel.",
      products: ["Mosaïques", "Fontaines", "Tableaux décoratifs"]
    },
    {
      id: 6,
      name: "Hassan Tazi",
      specialty: "Ferronnerie d'art",
      image: "hadid.jpg",
      description: "Ferronnier d'art créant des pièces uniques en métal forgé.",
      products: ["Lanternes", "Portes en fer forgé", "Objets décoratifs"]
    },
    {
      id: 7,
      name: "Samira El Fassi",
      specialty: "Bijouterie traditionnelle",
      image: "bijoux.jpg",
      description: "Créatrice de bijoux traditionnels marocains en argent et pierres précieuses.",
      products: ["Colliers", "Bracelets", "Boucles d'oreilles"]
    },
    {
      id: 8,
      name: "Youssef Benjelloun",
      specialty: "Maroquinerie",
      image: "jald.png",
      description: "Artisan maroquinier spécialisé dans le travail du cuir traditionnel.",
      products: ["Sacs", "Poufs", "Accessoires en cuir"]
    },
    {
      id: 9,
      name: "Nadir Ziani",
      specialty: "Calligraphie",
      image: "https://i.pinimg.com/originals/dd/48/e5/dd48e513b257c74a8e44a6453f912d7b.jpg",
      description: "Calligraphe experte en art traditionnel arabe et design moderne.",
      products: ["Tableaux", "Objets personnalisés", "Œuvres sur mesure"]
    }
  ];

  return (
    <>
      {/* Page */}
      <div className={`artisanas-container ${showForm ? "dimmed" : ""}`}>
        {/* Hero */}
        <div className="artisanas-hero" data-aos="fade-down">
          <h1>Nos Artisans Exceptionnels</h1>
          <p>Découvrez le talent et le savoir-faire de nos artisans marocains</p>
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

        {/* CTA */}
        <div className="artisanas-cta" data-aos="flip-up">
          <h2>Vous êtes un artisan ?</h2>
          <p>Rejoignez notre communauté et partagez votre talent avec le monde</p>
          <button 
            className="join-us-btn" 
            onClick={handleJoinClick}
          >
            Rejoignez-nous
          </button>
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
    </>
  );
}
