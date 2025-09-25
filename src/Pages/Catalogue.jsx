import React, { useState, useEffect } from 'react';
import './Catalogue.css';

export default function Catalogue() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('http://localhost:3000/api/products');
        if (!res.ok) throw new Error('Error loading products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = [
    { id: 'all', name: 'All products' },
    { id: 'tapis', name: 'Carpets' },
    { id: 'poterie', name: 'Pottery' },
    { id: 'textile', name: 'Textile' },
    { id: 'metal', name: 'Metal' },
    { id: 'decoration', name: 'Decoration' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All prices' },
    { id: 'low', name: 'Less than 500 DH' },
    { id: 'medium', name: '500 - 1000 DH' },
    { id: 'high', name: 'More than 1000 DH' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = selectedPrice === 'all' || 
      (selectedPrice === 'low' && product.price < 500) ||
      (selectedPrice === 'medium' && product.price >= 500 && product.price <= 1000) ||
      (selectedPrice === 'high' && product.price > 1000);
    return matchesSearch && matchesCategory && matchesPrice;
  });

  if (loading) return <div className="catalogue-container"><p>Loading products...</p></div>;
  if (error) return <div className="catalogue-container"><p style={{color:'red'}}>{error}</p></div>;

  return (
    <div className="catalogue-container">
      <div className="catalogue-hero">
        <h1>Our Catalogue</h1>
        <p>Discover our unique collection of Moroccan crafts</p>
      </div>

      <div className="filters-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a product..."
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
          <div key={product._id || product.id} className="product-card">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="artisan">{product.artisan ? `By ${product.artisan}` : ''}</p>
              <p className="description">{product.description}</p>
              <div className="product-details">
                <span className="price">{product.price} DH</span>
                {product.rating && (
                  <div className="rating">
                    <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
                    <span className="rating-value">{product.rating}</span>
                  </div>
                )}
              </div>
              <button className="add-to-cart">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
