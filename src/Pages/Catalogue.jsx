import React, { useState } from 'react';
import './Catalogue.css';

export default function Catalogue() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');

  const products = [
    {
      id: 1,
      name: "Tapis Berbère",
      category: "tapis",
      price: 1200,
      image: "/img1.png",
      artisan: "Fatima Zahra",
      description: "Tapis berbère fait main avec des motifs traditionnels",
      rating: 4.8,
      dimensions: "200x150cm"
    },
    {
      id: 2,
      name: "Vase en Céramique",
      category: "poterie",
      price: 450,
      image: "/img2.png",
      artisan: "Mohammed Alami",
      description: "Vase en céramique peint à la main avec des motifs géométriques",
      rating: 4.9,
      dimensions: "30cm height"
    },
    {
      id: 3,
      name: "Coussin Brodé",
      category: "textile",
      price: 300,
      image: "/img3.png",
      artisan: "Amina Benali",
      description: "Coussin avec broderie traditionnelle marocaine",
      rating: 4.7,
      dimensions: "45x45cm"
    },
    {
      id: 4,
      name: "Plateau en Cuivre",
      category: "metal",
      price: 850,
      image: "/img4.png",
      artisan: "Hassan Mahmoud",
      description: "Plateau en cuivre ciselé à la main",
      rating: 4.9,
      dimensions: "60cm diameter"
    },
    {
      id: 5,
      name: "Lanterne Marocaine",
      category: "decoration",
      price: 600,
      image: "/img5.png",
      artisan: "Karim Idrissi",
      description: "Lanterne traditionnelle en métal et verre coloré",
      rating: 4.8,
      dimensions: "40cm height"
    },
    {
      id: 6,
      name: "Service à Thé",
      category: "poterie",
      price: 750,
      image: "/img6.png",
      artisan: "Mohammed Alami",
      description: "Service à thé complet en céramique peinte",
      rating: 5.0,
      dimensions: "Set of 6"
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les produits' },
    { id: 'tapis', name: 'Tapis' },
    { id: 'poterie', name: 'Poterie' },
    { id: 'textile', name: 'Textile' },
    { id: 'metal', name: 'Métal' },
    { id: 'decoration', name: 'Décoration' }
  ];

  const priceRanges = [
    { id: 'all', name: 'Tous les prix' },
    { id: 'low', name: 'Moins de 500 DH' },
    { id: 'medium', name: '500 - 1000 DH' },
    { id: 'high', name: 'Plus de 1000 DH' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = selectedPrice === 'all' || 
      (selectedPrice === 'low' && product.price < 500) ||
      (selectedPrice === 'medium' && product.price >= 500 && product.price <= 1000) ||
      (selectedPrice === 'high' && product.price > 1000);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="catalogue-container">
      <div className="catalogue-hero">
        <h1>Notre Catalogue</h1>
        <p>Découvrez notre collection unique d'artisanat marocain</p>
      </div>

      <div className="filters-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-options">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <select
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
          >
            {priceRanges.map(range => (
              <option key={range.id} value={range.id}>
                {range.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="quick-view">Aperçu rapide</div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="artisan">Par {product.artisan}</p>
              <p className="description">{product.description}</p>
              <div className="product-details">
                <span className="price">{product.price} DH</span>
                <div className="rating">
                  <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
                  <span className="rating-value">{product.rating}</span>
                </div>
              </div>
              <button className="add-to-cart">Ajouter au panier</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
