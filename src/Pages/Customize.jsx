import React, { useState } from 'react';
import './Customize.css';

export default function Customize() {
  const [selectedProduct, setSelectedProduct] = useState('tapis');
  const [customizations, setCustomizations] = useState({
    color: '#43cea2',
    size: 'medium',
    pattern: 'traditional',
    material: 'wool',
    additionalDetails: ''
  });

  const products = [
    { id: 'tapis', name: 'Tapis Personnalisé', image: '/img1.png' },
    { id: 'pottery', name: 'Poterie Sur Mesure', image: '/img2.png' },
    { id: 'textile', name: 'Textile Personnalisé', image: '/img3.png' }
  ];

  const customizationOptions = {
    tapis: {
      colors: ['#43cea2', '#185a9d', '#e74c3c', '#f1c40f', '#8e44ad'],
      sizes: ['small', 'medium', 'large', 'custom'],
      patterns: ['traditional', 'modern', 'geometric', 'floral'],
      materials: ['wool', 'cotton', 'silk', 'synthetic']
    },
    pottery: {
      colors: ['#43cea2', '#185a9d', '#e74c3c', '#f1c40f', '#8e44ad'],
      sizes: ['small', 'medium', 'large'],
      patterns: ['traditional', 'modern', 'abstract'],
      materials: ['ceramic', 'terracotta', 'porcelain']
    },
    textile: {
      colors: ['#43cea2', '#185a9d', '#e74c3c', '#f1c40f', '#8e44ad'],
      sizes: ['small', 'medium', 'large'],
      patterns: ['traditional', 'modern', 'geometric'],
      materials: ['cotton', 'silk', 'wool', 'linen']
    }
  };

  const handleCustomizationChange = (type, value) => {
    setCustomizations(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const getCustomizationDetails = () => {
    const sizeMap = {
      small: 'Petit',
      medium: 'Moyen',
      large: 'Grand',
      custom: 'Sur Mesure'
    };

    const patternMap = {
      traditional: 'Traditionnel',
      modern: 'Moderne',
      geometric: 'Géométrique',
      floral: 'Floral',
      abstract: 'Abstrait'
    };

    return {
      size: sizeMap[customizations.size],
      pattern: patternMap[customizations.pattern]
    };
  };

  const { size, pattern } = getCustomizationDetails();

  return (
    <div className="customize-container">
      <div className="customize-hero">
        <h1>Personnalisez Votre Produit</h1>
        <p>Créez une pièce unique qui correspond à vos goûts</p>
      </div>

      <div className="customize-content">
        <div className="product-selection">
          <h2>Choisissez votre produit</h2>
          <div className="product-options">
            {products.map(product => (
              <div
                key={product.id}
                className={`product-option ${selectedProduct === product.id ? 'selected' : ''}`}
                onClick={() => setSelectedProduct(product.id)}
              >
                <img src={product.image} alt={product.name} />
                <span>{product.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="customization-panel">
          <div className="preview-section">
            <h2>Aperçu</h2>
            <div className="product-preview" style={{ borderColor: customizations.color }}>
              <img
                src={products.find(p => p.id === selectedProduct)?.image}
                alt="Product Preview"
              />
              <div className="preview-overlay" style={{ backgroundColor: customizations.color + '20' }} />
            </div>
            <div className="selected-options">
              <p>Taille: {size}</p>
              <p>Motif: {pattern}</p>
              <p>Matériau: {customizations.material}</p>
            </div>
          </div>

          <div className="options-section">
            <h2>Options de Personnalisation</h2>
            
            <div className="option-group">
              <label>Couleur</label>
              <div className="color-options">
                {customizationOptions[selectedProduct].colors.map(color => (
                  <div
                    key={color}
                    className={`color-option ${customizations.color === color ? 'selected' : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleCustomizationChange('color', color)}
                  />
                ))}
              </div>
            </div>

            <div className="option-group">
              <label>Taille</label>
              <select
                value={customizations.size}
                onChange={(e) => handleCustomizationChange('size', e.target.value)}
              >
                {customizationOptions[selectedProduct].sizes.map(size => (
                  <option key={size} value={size}>
                    {size === 'small' ? 'Petit' :
                     size === 'medium' ? 'Moyen' :
                     size === 'large' ? 'Grand' : 'Sur Mesure'}
                  </option>
                ))}
              </select>
            </div>

            <div className="option-group">
              <label>Motif</label>
              <select
                value={customizations.pattern}
                onChange={(e) => handleCustomizationChange('pattern', e.target.value)}
              >
                {customizationOptions[selectedProduct].patterns.map(pattern => (
                  <option key={pattern} value={pattern}>
                    {pattern === 'traditional' ? 'Traditionnel' :
                     pattern === 'modern' ? 'Moderne' :
                     pattern === 'geometric' ? 'Géométrique' :
                     pattern === 'floral' ? 'Floral' : 'Abstrait'}
                  </option>
                ))}
              </select>
            </div>

            <div className="option-group">
              <label>Matériau</label>
              <select
                value={customizations.material}
                onChange={(e) => handleCustomizationChange('material', e.target.value)}
              >
                {customizationOptions[selectedProduct].materials.map(material => (
                  <option key={material} value={material}>
                    {material.charAt(0).toUpperCase() + material.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="option-group">
              <label>Détails supplémentaires</label>
              <textarea
                value={customizations.additionalDetails}
                onChange={(e) => handleCustomizationChange('additionalDetails', e.target.value)}
                placeholder="Ajoutez des instructions spécifiques pour votre commande..."
              />
            </div>

            <button className="submit-customization">
              Valider la personnalisation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
