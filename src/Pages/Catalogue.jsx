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
      image: "https://i.pinimg.com/1200x/ca/78/17/ca7817d5d914e921dff2dbc2804d04b8.jpg",
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
      image: "https://i.pinimg.com/736x/0a/da/23/0ada23481917929756301f67553a7bb1.jpg",
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
      image: "https://i.pinimg.com/736x/8a/b2/12/8ab2125b896d5605a6bb11f5fb0cc449.jpg",
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
      image: "https://i.pinimg.com/736x/1f/35/da/1f35da911ffb7521bd3757a688daa162.jpg",
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
      image: "https://i.pinimg.com/1200x/a4/68/a0/a468a08a3c6d8413f345e23cb0032084.jpg",
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
      image: "https://i.pinimg.com/736x/a9/d9/de/a9d9de9874433e4535440b1fa5f4191b.jpg",
      artisan: "Mohammed Alami",
      description: "Service à thé complet en céramique peinte",
      rating: 5.0,
      dimensions: "Set of 6"
    },
    {
      id: 7,
      name: "Pouf en Cuir",
      category: "decoration",
      price: 800,
      image: "https://i.pinimg.com/1200x/5c/f1/3f/5cf13f9bb8e2f91834f40a0c8b57e741.jpg",
      artisan: "Ahmed Tazi",
      description: "Pouf marocain en cuir véritable avec broderies traditionnelles",
      rating: 4.9,
      dimensions: "50x35cm"
    },
    {
      id: 8,
      name: "Miroir Artisanal",
      category: "decoration",
      price: 1100,
      image: "https://i.pinimg.com/736x/8a/f5/5c/8af55c6a1dfb69c1339914e82a69ce11.jpg",
      artisan: "Sofia El Mansouri",
      description: "Miroir décoratif avec cadre en bois sculpté et métal ciselé",
      rating: 4.8,
      dimensions: "80x60cm"
    },
    {
      id: 9,
      name: "Théière Traditionnelle",
      category: "metal",
      price: 450,
      image: "https://i.pinimg.com/1200x/fa/d6/09/fad609b072ba03d4f4c7ee1fd47f53be.jpg",
      artisan: "Hassan Mahmoud",
      description: "Théière en métal argenté avec gravures artisanales",
      rating: 4.7,
      dimensions: "25cm height"
    },
    {
      id: 10,
      name: "Plat paon (Tabsil taws)",
      category: "tapis",
      price: 1500,
      image: "https://i.pinimg.com/736x/d9/7f/46/d97f46f7ec6424220d8ee79730c82899.jpg",
      artisan: "Fatima Zahra",
      description: "Plat traditionnel marocain en céramique avec motifs peints à la main",
      rating: 5.0,
      dimensions: "180x120cm"
    },
    {
      id: 11,
      name: "Tajin Marocain",
      category: "poterie",
      price: 380,
      image: "https://i.pinimg.com/1200x/db/e3/a7/dbe3a7634c9e389be89aa4d98b816c39.jpg",
      artisan: "Karim Idrissi",
      description: "Tajin traditionnel en céramique avec couvercle en forme de cône",
      rating: 4.6,
      dimensions: "15cm diameter each"
    },
    {
      id: 12,
      name: "Set de Bols en Céramique",
      category: "decoration",
      price: 950,
      image: "https://i.pinimg.com/736x/06/e7/2f/06e72f32e226882174938123bc3615ee.jpg",
      artisan: "Amina Ziani ",
      description: "Ensemble de 4 bols en céramique peints à la main",
      rating: 4.9,
      dimensions: "55cm height"
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
