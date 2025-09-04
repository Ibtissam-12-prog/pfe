import React, { useState } from 'react';
import './Shop.css';

export default function Shop() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Tapis Berbère Traditionnel",
      price: 1200,
      image: "/img1.png",
      category: "Tapis",
      stock: 5,
      description: "Tapis berbère authentique fait main avec des motifs traditionnels"
    },
    {
      id: 2,
      name: "Set de Poterie Artisanale",
      price: 450,
      image: "/img2.png",
      category: "Poterie",
      stock: 8,
      description: "Ensemble de poterie marocaine peinte à la main"
    },
    {
      id: 3,
      name: "Coussin Brodé à la Main",
      price: 300,
      image: "/img3.png",
      category: "Textile",
      stock: 12,
      description: "Coussin décoratif avec broderie traditionnelle"
    },
    {
      id: 4,
      name: "Lanterne Marocaine",
      price: 550,
      image: "/img4.png",
      category: "Décoration",
      stock: 6,
      description: "Lanterne artisanale en métal et verre coloré"
    },
    {
      id: 5,
      name: "Service à Thé Traditionnel",
      price: 850,
      image: "/img5.png",
      category: "Vaisselle",
      stock: 4,
      description: "Service à thé complet en métal ciselé"
    },
    {
      id: 6,
      name: "Plateau en Cuivre",
      price: 600,
      image: "/img6.png",
      category: "Vaisselle",
      stock: 7,
      description: "Plateau décoratif en cuivre gravé à la main"
    }
  ];

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    const product = products.find(p => p.id === productId);
    if (newQuantity > product.stock) return;

    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="shop-container">
      {/* Cart Overlay */}
      {isCartOpen && (
        <div className="cart-overlay">
          <div className="cart-content">
            <div className="cart-header">
              <h2>Votre Panier</h2>
              <button className="close-cart" onClick={() => setIsCartOpen(false)}>×</button>
            </div>
            {cart.length === 0 ? (
              <p className="empty-cart">Votre panier est vide</p>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} />
                      <div className="cart-item-details">
                        <h3>{item.name}</h3>
                        <p>{item.price} DH</p>
                        <div className="quantity-controls">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                      </div>
                      <button className="remove-item" onClick={() => removeFromCart(item.id)}>×</button>
                    </div>
                  ))}
                </div>
                <div className="cart-footer">
                  <div className="cart-total">
                    <span>Total:</span>
                    <span>{getTotalPrice()} DH</span>
                  </div>
                  <button className="checkout-button">Procéder au paiement</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="shop-hero">
        <h1>Notre Boutique</h1>
        <p>Découvrez notre collection d'artisanat marocain authentique</p>
      </div>

      <div className="shop-content">
        <div className="shop-header">
          <div className="shop-filters">
            <select defaultValue="all">
              <option value="all">Toutes les catégories</option>
              <option value="tapis">Tapis</option>
              <option value="poterie">Poterie</option>
              <option value="textile">Textile</option>
              <option value="decoration">Décoration</option>
              <option value="vaisselle">Vaisselle</option>
            </select>
            <select defaultValue="featured">
              <option value="featured">En vedette</option>
              <option value="price-low">Prix croissant</option>
              <option value="price-high">Prix décroissant</option>
              <option value="newest">Plus récents</option>
            </select>
          </div>
          <button className="cart-button" onClick={() => setIsCartOpen(true)}>
            Panier ({cart.reduce((total, item) => total + item.quantity, 0)})
          </button>
        </div>

        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button onClick={() => addToCart(product)}>Ajouter au panier</button>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price} DH</span>
                  <span className="product-stock">En stock: {product.stock}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
