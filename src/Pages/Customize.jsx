import React, { useState, useRef } from 'react';
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

  const customizationPanelRef = useRef(null);

  const products = [
    { id: 'tapis', name: 'Custom Carpet', image: 'tapis.jpg' },
    { id: 'pottery', name: 'Custom Pottery', image: 'poterie.jpg' },
    { id: 'textile', name: 'Customized Textile', image: 'borderie.jpg' },
    { id: 'leather', name: 'Articles en Cuir', image: 'pouf2.jpg' },
    { id: 'metal', name: 'Leather Articles', image: 'nhas.jpg' },
    { id: 'lighting', name: 'Traditional Lighting Fixtures', image: 'lampa.jpg' },
    { id: 'woodwork', name: 'Woodcraft', image: 'bois.jpg' },
    { id: 'mosaics', name: 'Zellige Mosaic', image: 'Mosaique.jpg' },
    { id: 'jewellery', name: 'Traditional Jewelry', image: 'bijoux2.jpg' },
    { id: 'embroidery', name: 'Moroccan Embroidery', image: 'bor.jpg' },
    { id: 'poufs', name: 'Leather Poufs', image: 'poufs.jpg' },
    { id: 'ceramics', name: 'Fassi Ceramics', image: 'ceramique.jpg' }
  ];

  const customizationOptions = {
    tapis: {
      colors: ['#E8D5C4', '#EDDCD9', '#FFF1E6', '#F0E5CF', '#ECE5C7', '#CDC9C3'],
      sizes: ['small', 'medium', 'large', 'custom'],
      patterns: ['traditional', 'modern', 'geometric', 'floral', 'berbere', 'atlas'],
      materials: ['wool', 'cotton', 'silk', 'synthetic', 'mixed']
    },
    pottery: { /* نفس config ديالك */ sizes: ['small','medium','large'], colors:['#F5EBE0','#DED7C9'], patterns:['traditional','modern'], materials:['ceramic','terracotta'] },
    textile: { /* نفس config ديالك */ sizes: ['small','medium','large'], colors:['#F5EBE0','#E3D5CA'], patterns:['traditional','modern'], materials:['cotton','linen'] },
    leather: { sizes:['small','medium','large'], colors:['#E3D5CA','#D5BDAF'], patterns:['plain','embossed'], materials:['cowhide','synthetic'] },
    metal: { sizes:['small','medium','large'], colors:['#F5EBE0','#EDEDE9'], patterns:['hammered','engraved'], materials:['brass','silver'] },
    lighting: { sizes:['small','medium','large'], colors:['#F5EBE0','#E3D5CA'], patterns:['geometric','floral'], materials:['brass','glass'] },
    woodwork: { sizes:['small','medium','large'], colors:['#F5EBE0','#E3D5CA'], patterns:['geometric','arabesque'], materials:['cedar','walnut'] },
    mosaics: { sizes:['small','medium','large'], colors:['#F5EBE0','#E3D5CA'], patterns:['geometric','floral'], materials:['ceramic','marble'] },
    jewellery: { sizes:['small','medium','large'], colors:['#F5EBE0','#E3D5CA'], patterns:['filigree','niello'], materials:['silver','gold'] },
    embroidery: { sizes:['small','medium','large'], colors:['#F5EBE0','#E3D5CA'], patterns:['floral','geometric'], materials:['silk','cotton'] },
    poufs: { sizes:['small','medium','large'], colors:['#F5EBE0','#E3D5CA'], patterns:['traditional','geometric'], materials:['leather','cotton'] },
    ceramics: { sizes:['small','medium','large'], colors:['#F5EBE0','#E3D5CA'], patterns:['fassi','floral'], materials:['ceramic','terracotta'] }
  };

  const handleCustomizationChange = (type, value) => {
    setCustomizations(prev => ({ ...prev, [type]: value }));
  };

  const getCustomizationDetails = () => {
    const sizeMap = { small:'Petit', medium:'Moyen', large:'Grand', custom:'Sur Mesure' };
    const patternMap = { traditional:'Traditionnel', modern:'Moderne', geometric:'Géométrique', floral:'Floral', abstract:'Abstrait' };
    return { size: sizeMap[customizations.size], pattern: patternMap[customizations.pattern] };
  };

  const { size, pattern } = getCustomizationDetails();

  const handleProductClick = (productId) => {
    setSelectedProduct(productId);
    if(customizationPanelRef.current){
      customizationPanelRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    const finalOrder = {
      product: products.find(p=>p.id===selectedProduct)?.name,
      ...customizations
    };
    console.log("🎨 Commande validée:", finalOrder);
    alert("✅ Votre personnalisation a été validée !");
  };

  return (
    <div className="customize-container">
      <div className="customize-hero">
        <h1>Customize Your Product</h1>
        <p>Create a unique piece that matches your taste</p>
      </div>

      <div className="customize-content">
        <div className="product-selection">
          <h2>Select your product</h2>
          <div className="products-grid">
            {products.map((product,index)=>(
              <div key={product.id}
                   className={`product-card ${selectedProduct===product.id?'selected':''}`}
                   onClick={()=>handleProductClick(product.id)}
                   style={{animationDelay:`${index*0.1}s`}}>
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name}/>
                  <div className="product-hover-effect"></div>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="customize-hint">Click to customize</p>
                  <div className="customization-preview">
                    <span className="material-label">Available materials:</span>
                    <div className="materials-preview">
                      {customizationOptions[product.id].materials.slice(0,3).map(m=>(
                        <span key={m} className="material-tag">{m}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="customization-panel" ref={customizationPanelRef}>
          <div className="preview-section">
            <h2>Preview</h2>
            <div className="product-preview" style={{borderColor:customizations.color}}>
              <img src={products.find(p=>p.id===selectedProduct)?.image} alt="Product Preview"/>
              <div className="preview-overlay" style={{backgroundColor: customizations.color+'20'}}/>
            </div>
            <div className="selected-options">
              <p>Size: {size}</p>
              <p>Pattern: {pattern}</p>
              <p>Material: {customizations.material}</p>
            </div>
          </div>

          <div className="options-section">
            <h2>Customization Options</h2>

            <div className="option-group">
              <label>Color</label>
              <div className="color-options">
                {customizationOptions[selectedProduct].colors.map(c=>(
                  <div key={c} className={`color-option ${customizations.color===c?'selected':''}`}
                       style={{backgroundColor:c}}
                       onClick={()=>handleCustomizationChange('color',c)}/>
                ))}
              </div>
            </div>

            <div className="option-group">
              <label>Size</label>
              <select value={customizations.size} onChange={e=>handleCustomizationChange('size',e.target.value)}>
                {customizationOptions[selectedProduct].sizes.map(s=>(
                  <option key={s} value={s}>
                    {s==='small'?'Small': s==='medium'?'Medium': s==='large'?'Large':'Custom'}
                  </option>
                ))}
              </select>
            </div>

            <div className="option-group">
              <label>Pattern</label>
              <select value={customizations.pattern} onChange={e=>handleCustomizationChange('pattern',e.target.value)}>
                {customizationOptions[selectedProduct].patterns.map(p=>(
                  <option key={p} value={p}>
                    {p==='traditional'?'Traditional':p==='modern'?'Modern':p==='geometric'?'Geometric':p==='floral'?'Floral':'Abstract'}
                  </option>
                ))}
              </select>
            </div>

            <div className="option-group">
              <label>Material</label>
              <select value={customizations.material} onChange={e=>handleCustomizationChange('material',e.target.value)}>
                {customizationOptions[selectedProduct].materials.map(m=>(
                  <option key={m} value={m}>{m.charAt(0).toUpperCase()+m.slice(1)}</option>
                ))}
              </select>
            </div>

            <div className="option-group">
              <label>Additional details</label>
              <textarea value={customizations.additionalDetails} onChange={e=>handleCustomizationChange('additionalDetails',e.target.value)} placeholder="Add specific instructions for your order..."/>
            </div>

            <button className="submit-customization" onClick={handleSubmit}>
              Confirm customization
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
