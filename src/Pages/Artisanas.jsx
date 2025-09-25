import React, { useEffect, useRef, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './ArtisanasCarousel.css';

export default function Artisanas() {
  const [showForm, setShowForm] = useState(false); 
  const [isLogin, setIsLogin] = useState(true); 
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const middleRowRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
    // Fetch artisans from backend
    const fetchArtisans = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/users?role=artisan');
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || 'Failed to load artisans');
        }
        // Map to the structure used in cards
        const mapped = (Array.isArray(data) ? data : []).map(u => ({
          id: u._id,
          name: u.name,
          specialty: u.specialty || '—',
          sector: u.sector || '—',
          description: u.description || '',
          image: u.image ? (u.image.startsWith('/uploads') ? `http://localhost:3000${u.image}` : u.image) : '/img1.png',
        }));
        setArtisans(mapped);
      } catch (e) {
        setError(e.message || 'Failed to load artisans');
      } finally {
        setLoading(false);
      }
    };
    fetchArtisans();
  }, []);

  const handleJoinClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  if (loading) {
    return <div className="p-8 text-center">Loading artisans...</div>;
  }
  if (error) {
    return <div className="p-8 text-center text-red-500">{error}</div>;
  }

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
                    {artisan.sector && <p className="text-sm text-gray-600">Sector: {artisan.sector}</p>}
                    <p>{artisan.description}</p>
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
                    {artisan.sector && <p className="text-sm text-gray-600">Sector: {artisan.sector}</p>}
                    <p>{artisan.description}</p>
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
                    {artisan.sector && <p className="text-sm text-gray-600">Sector: {artisan.sector}</p>}
                    <p>{artisan.description}</p>
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
