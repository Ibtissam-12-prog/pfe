import React, { useState } from 'react';
import './Customize.css';

export default function Customize() {
  const [selectedProduct, setSelectedProduct] = useState('tapis');
  const [customizations, setCustomizations] = useState({
    color: '#E8D5C4',
    size: 'medium',
    pattern: 'traditional',
    material: 'wool',
    additionalDetails: ''
  });

  const products = [
    { id: 'tapis', name: 'Tapis Personnalisé', image: 'https://i.pinimg.com/736x/1a/d8/83/1ad883137c2674405b120f7a1d8bf621.jpg' },
    { id: 'pottery', name: 'Poterie Sur Mesure', image: 'https://i.pinimg.com/1200x/21/8a/62/218a621a27b7bfa46f17ed58b68145f4.jpg' },
    { id: 'textile', name: 'Textile Personnalisé', image: 'https://i.pinimg.com/1200x/c2/c4/96/c2c496440dda26123bf80cd7880e7a24.jpg' },
    { id: 'leather', name: 'Articles en Cuir', image: 'https://i.pinimg.com/736x/b0/72/1b/b0721b9e90c995370b433171e8ef7bea.jpg' },
    { id: 'metal', name: 'Artisanat en Métal', image: 'https://i.pinimg.com/736x/42/5c/59/425c59b419c02ddfa00dcb3fcfc5be4e.jpg' },
    { id: 'lighting', name: 'Luminaires Traditionnels', image: 'https://i.pinimg.com/736x/ba/15/5b/ba155b1ad86324266fd505989b95a476.jpg' },
    { id: 'woodwork', name: 'Artisanat en Bois', image: 'https://i.pinimg.com/736x/7d/36/9f/7d369f1f5764973a57c1bf43658fb94f.jpg' },
    { id: 'mosaics', name: 'Mosaïque Zellige', image: 'https://i.pinimg.com/1200x/35/f5/a9/35f5a95487c77fd5cb6e209bfab356c7.jpg' },
    { id: 'jewellery', name: 'Bijoux Traditionnels', image: 'https://i.pinimg.com/736x/8a/a9/d7/8aa9d705b5e862ad5cf95db53d7a08e7.jpg' },
    { id: 'embroidery', name: 'Broderie Marocaine', image: 'https://i.pinimg.com/1200x/18/da/92/18da925338021feabbf6fdb32e9bfa65.jpg' },
    { id: 'poufs', name: 'Poufs en Cuir', image: 'https://i.pinimg.com/1200x/ac/96/11/ac96114f86d0dea4572f48a6bdfe0962.jpg' },
    { id: 'ceramics', name: 'Céramique Fassi', image: 'https://i.pinimg.com/736x/e8/7a/9a/e87a9a0a5b6cd8385c15f1e1bac215dd.jpg' }
  ];

  const customizationOptions = {
    tapis: {
      colors: ['#E8D5C4', '#EDDCD9', '#FFF1E6', '#F0E5CF', '#ECE5C7', '#CDC9C3'],
      sizes: ['small', 'medium', 'large', 'custom'],
      patterns: ['traditional', 'modern', 'geometric', 'floral', 'berbere', 'atlas'],
      materials: ['wool', 'cotton', 'silk', 'synthetic', 'mixed']
    },
    pottery: {
      colors: ['#F5EBE0', '#DED7C9', '#D6CCC2', '#E3D5CA', '#D5BDAF', '#E3CDC1'],
      sizes: ['small', 'medium', 'large'],
      patterns: ['traditional', 'modern', 'abstract', 'zellige', 'floral', 'calligraphie'],
      materials: ['ceramic', 'terracotta', 'porcelain', 'faience', 'stoneware']
    },
    textile: {
      colors: ['#F5EBE0', '#E3D5CA', '#D6CCC2', '#EDEDE9', '#D5BDAF', '#E3CDC1'],
      sizes: ['small', 'medium', 'large'],
      patterns: ['traditional', 'modern', 'geometric', 'floral', 'tribal', 'arabesque'],
      materials: ['cotton', 'silk', 'wool', 'linen', 'velvet', 'satin']
    },
    leather: {
      colors: ['#E3D5CA', '#D5BDAF', '#D6CCC2', '#EDEDE9', '#F5EBE0', '#E3CDC1'],
      sizes: ['small', 'medium', 'large'],
      patterns: ['plain', 'embossed', 'braided', 'tooled', 'painted', 'perforated'],
      materials: ['cowhide', 'goatskin', 'sheepskin', 'camel', 'synthetic']
    },
    metal: {
      colors: ['#F5EBE0', '#EDEDE9', '#E3D5CA', '#D6CCC2', '#D5BDAF', '#E3CDC1'],
      sizes: ['small', 'medium', 'large'],
      patterns: ['hammered', 'engraved', 'filigree', 'embossed', 'openwork', 'inlaid'],
      materials: ['brass', 'copper', 'silver', 'nickel', 'bronze', 'steel']
    },
    lighting: {
      colors: ['#F5EBE0', '#E3D5CA', '#D6CCC2', '#EDEDE9', '#D5BDAF', '#E3CDC1'],
      sizes: ['small', 'medium', 'large'],
      patterns: ['geometric', 'floral', 'stars', 'arabesque', 'modern', 'traditional'],
      materials: ['brass', 'copper', 'glass', 'wrought-iron', 'crystal', 'mixed']
    },
    woodwork: {
      colors: ['#F5EBE0', '#E3D5CA', '#D6CCC2', '#EDEDE9', '#D5BDAF', '#E3CDC1'],
      sizes: ['small', 'medium', 'large'],
      patterns: ['geometric', 'arabesque', 'floral', 'calligraphic', 'traditional', 'modern'],
      materials: ['cedar', 'walnut', 'olive', 'thuya', 'oak', 'pine']
    },
    mosaics: {
      colors: ['#F5EBE0', '#E3D5CA', '#D6CCC2', '#EDEDE9', '#D5BDAF', '#E3CDC1'],
      sizes: ['small', 'medium', 'large'],
      patterns: ['geometric', 'floral', 'star', 'octagonal', 'interlaced', 'arabian'],
      materials: ['ceramic', 'terracotta', 'marble', 'glass', 'stone', 'mixed']
    },
    jewellery: {
      colors: ['#F5EBE0', '#E3D5CA', '#D6CCC2', '#EDEDE9', '#D5BDAF', '#E3CDC1'],
      sizes: ['small', 'medium', 'large'],
      patterns: ['filigree', 'niello', 'enamel', 'berber', 'arabesque', 'geometric'],
      materials: ['silver', 'gold', 'brass', 'copper', 'mixed', 'precious-stones']
    },
    embroidery: {
      colors: ['#F5EBE0', '#E3D5CA', '#D6CCC2', '#EDEDE9', '#D5BDAF', '#E3CDC1'],
      sizes: ['small', 'medium', 'large'],
      patterns: ['floral', 'geometric', 'arabesque', 'traditional', 'modern', 'calligraphic'],
      materials: ['silk', 'cotton', 'wool', 'linen', 'metallic-thread', 'mixed']
    },
    poufs: {
      colors: ['#F5EBE0', '#E3D5CA', '#D6CCC2', '#EDEDE9', '#D5BDAF', '#E3CDC1'],
      sizes: ['small', 'medium', 'large'],
      patterns: ['traditional', 'geometric', 'moroccan', 'berber', 'arabesque', 'plain'],
      materials: ['leather', 'kilim', 'suede', 'velvet', 'cotton', 'mixed']
    },
    ceramics: {
      colors: ['#F5EBE0', '#E3D5CA', '#D6CCC2', '#EDEDE9', '#D5BDAF', '#E3CDC1'],
      sizes: ['small', 'medium', 'large'],
      patterns: ['fassi', 'floral', 'geometric', 'calligraphic', 'traditional', 'modern'],
      materials: ['ceramic', 'faience', 'earthenware', 'porcelain', 'terracotta', 'mixed']
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
          <div className="products-grid">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`product-card ${selectedProduct === product.id ? 'selected' : ''}`}
                onClick={() => setSelectedProduct(product.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} />
                  <div className="product-hover-effect"></div>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="customize-hint">Cliquez pour personnaliser</p>
                  <div className="customization-preview">
                    <span className="material-label">Matériaux disponibles:</span>
                    <div className="materials-preview">
                      {customizationOptions[product.id].materials.slice(0, 3).map((material) => (
                        <span key={material} className="material-tag">{material}</span>
                      ))}
                    </div>
                  </div>
                </div>
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
