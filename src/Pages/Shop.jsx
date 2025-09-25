import React, { useState } from 'react';
import './Shop.css';

export default function Shop() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Traditional Berber Carpet",
      price: 400,
      image: "tapis2.jpg",
      category: "Carpets",
      stock: 5,
      description: "Authentic handmade Berber carpet with traditional patterns"
    },
    {
      id: 2,
      name: "Handmade Pottery Set",
      price: 200,
      image: "article10.jpg",
      category: "Pottery",
      stock: 8,
      description: "Set of Moroccan pottery hand-painted"
    },
    {
      id: 3,
      name: "Hand-Embroidered Cushion",
      price: 300,
      image: "article11.jpg",
      category: "Textile",
      stock: 12,
      description: "Decorative cushion with traditional embroidery"
    },
    {
      id: 4,
      name: "Moroccan Lantern",
      price: 450,
      image: "article12.jpg",
      category: "Decoration",
      stock: 6,
      description: "Handcrafted lantern in metal and colored glass"
    },
    {
      id: 5,
      name: "Traditional Tea Set",
      price: 300,
      image: "arcticl13.jpg",
      category: "Tableware",
      stock: 4,
      description: "Complete tea set in engraved metal"
    },
    {
      id: 6,
      name: "Copper Tray",
      price: 300,
      image: "article14.jpg",
      category: "Tableware",
      stock: 7,
      description: "Decorative copper tray hand-engraved"
    },
    {
      id: 7,
      name: "Berber Silver Necklace",
      price: 750,
      image: "article15.jpg",
      category: "Jewelry",
      stock: 10,
      description: "Traditional Berber necklace in silver, handmade"
    },
    {
      id: 8,
      name: "Copper and Bead Bracelet",
      price: 450,
      image: "article16.jpg",
      category: "Jewelry",
      stock: 15,
      description: "Artisan bracelet in copper with colorful beads"
    },
    {
      id: 9,
      name: "Moroccan Tekhmal Necklace",
      price: 650,
      image: "article17.jpg",
      category: "Jewelry",
      stock: 20,
      description: "Traditional Moroccan 'Tekhmal' necklace in golden filigree, adorned with crafted beads and elegant black stones, symbol of refinement and artisanal heritage."
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
              <h2>Your Cart</h2>
              <button className="close-cart" onClick={() => setIsCartOpen(false)}>×</button>
            </div>
            {cart.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
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
                  <button className="checkout-button">Checkout</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="shop-hero">
        <h1>Our Shop</h1>
        <p>Discover our collection of authentic Moroccan crafts</p>
      </div>

      <div className="shop-content">
        <div className="shop-header">
          <div className="shop-filters">
            <select defaultValue="all">
              <option value="all">All categories</option>
              <option value="tapis">Carpets</option>
              <option value="poterie">Pottery</option>
              <option value="textile">Textile</option>
              <option value="decoration">Decoration</option>
              <option value="vaisselle">Tableware</option>
              <option value="bijoux">Jewelry</option>
            </select>
            <select defaultValue="featured">
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
          <button className="cart-button" onClick={() => setIsCartOpen(true)}>
            Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
          </button>
        </div>

        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button onClick={() => addToCart(product)}>Add to cart</button>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price} DH</span>
                  <span className="product-stock">In stock: {product.stock}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
