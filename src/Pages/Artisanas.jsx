import React from 'react';
import '../Components/ArtisanCard.css';

export default function Artisanas() {
  const artisans = [
    {
      id: 1,
      name: "Fatima Zahra",
      specialty: "Tissage traditionnel",
      image: "/img1.png",
      description: "Experte en tissage traditionnel marocain avec plus de 15 ans d'expérience.",
      products: ["Tapis", "Couvertures", "Textiles décoratifs"]
    },
    {
      id: 2,
      name: "Mohammed Alami",
      specialty: "Poterie et Céramique",
      image: "/img2.png",
      description: "Maître artisan spécialisé dans la poterie traditionnelle et moderne.",
      products: ["Vases", "Services de table", "Décorations murales"]
    },
    {
      id: 3,
      name: "Amina Benali",
      specialty: "Broderie",
      image: "/img3.png",
      description: "Artisane talentueuse créant des pièces uniques de broderie marocaine.",
      products: ["Caftans", "Nappes brodées", "Coussins décoratifs"]
    }
  ];

  return (
    <div className="artisanas-container">
      <div className="artisanas-hero">
        <h1>Nos Artisans Exceptionnels</h1>
        <p>Découvrez le talent et le savoir-faire de nos artisans marocains</p>
      </div>

      <div className="artisans-grid">
        {artisans.map((artisan) => (
          <div key={artisan.id} className="artisan-card">
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
              <button className="contact-artisan">Contacter l'artisan</button>
            </div>
          </div>
        ))}
      </div>

      <div className="artisanas-cta">
        <h2>Vous êtes un artisan ?</h2>
        <p>Rejoignez notre communauté et partagez votre talent avec le monde</p>
        <button className="join-us-btn">Rejoignez-nous</button>
      </div>
    </div>
  );
}
