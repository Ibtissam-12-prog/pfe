import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Star } from 'lucide-react';
import './ArtisanCarousel.css';

const artisans = [
  {
    id: 1,
    name: "Fatima Al-Zahra",
    craft: "Master Carpet Weaver",
    region: "High Atlas Mountains",
    experience: 30,
    specialty: "Berber Patterns",
    rating: 4.9,
    reviews: 234,
    image: "https://i.pinimg.com/564x/8c/96/f7/8c96f7f1c93f6b85d68111a6d8767e4d.jpg",
    products: 45,
    quote: "Every carpet tells a story. Mine speak of mountain mist, ancient paths, and the dreams we weave into tomorrow.",
    achievements: ["UNESCO Heritage Keeper", "Royal Patronage Award"],
  },
  {
    id: 2,
    name: "Mohammed Ben Ali",
    craft: "Leather Master",
    region: "Fez Medina",
    experience: 28,
    specialty: "Traditional Bags",
    rating: 4.8,
    reviews: 189,
    image: "https://i.pinimg.com/564x/27/c1/2d/27c12d2f23035c16b5c8e5cc3553dd74.jpg",
    products: 32,
    quote: "Leather has a soul. My hands simply guide it to reveal its true beauty and purpose.",
    achievements: ["Master Craftsman Certificate", "Export Excellence Award"],
  },
  {
    id: 3,
    name: "Aicha Tamesna",
    craft: "Silver Jewelry Artisan",
    region: "Sahara Desert",
    experience: 22,
    specialty: "Tuareg Jewelry",
    rating: 5.0,
    reviews: 156,
    image: "https://i.pinimg.com/564x/d7/96/93/d796937b8390b43d0963dcb2226cecd7.jpg",
    products: 67,
    quote: "Each piece of silver carries the songs of the desert and the dreams of the nomads who inspired it.",
    achievements: ["Cultural Heritage Ambassador", "Women Artisan Leadership Award"],
  },
  {
    id: 4,
    name: "Hassan El-Fassi",
    craft: "Master Potter",
    region: "Safi",
    experience: 25,
    specialty: "Traditional Tagines",
    rating: 4.7,
    reviews: 203,
    image: "https://i.pinimg.com/564x/63/c1/48/63c148ecef1603173274aa8436c6f366.jpg",
    products: 28,
    quote: "Clay remembers everything - the rain, the earth, the hands that shaped it. My pottery carries the memory of Morocco.",
    achievements: ["National Pottery Excellence", "Traditional Craft Preservation Medal"],
  },
  {
    id: 5,
    name: "Amira Zouaoui",
    craft: "Zellige Mosaic Artist",
    region: "Tetouan",
    experience: 20,
    specialty: "Geometric Patterns",
    rating: 4.9,
    reviews: 178,
    image: "https://i.pinimg.com/564x/6c/94/5f/6c945f437762d2ac65ae27e90408a4ed.jpg",
    products: 55,
    quote: "In each tile lies a universe of patterns, a language written in color and geometry.",
    achievements: ["Artisan Excellence Award", "Heritage Preservation Honor"],
  },
  {
    id: 6,
    name: "Karim Benjelloun",
    craft: "Wood Carving Master",
    region: "Essaouira",
    experience: 35,
    specialty: "Traditional Doors",
    rating: 4.8,
    reviews: 245,
    image: "https://i.pinimg.com/564x/8c/2f/84/8c2f84e9ee9a90c60bc309d68741b899.jpg",
    products: 40,
    quote: "Wood speaks to those who listen. I simply help it tell its story.",
    achievements: ["Master Artisan Award", "Cultural Heritage Medal"],
  },
  {
    id: 7,
    name: "Leila Benomar",
    craft: "Embroidery Artist",
    region: "Rabat",
    experience: 28,
    specialty: "Gold Thread Work",
    rating: 4.9,
    reviews: 167,
    image: "https://i.pinimg.com/564x/0b/8e/0f/0b8e0f158659d62ff6abe2f8068d2a3b.jpg",
    products: 89,
    quote: "Each stitch is a letter, each pattern a poem written in thread and light.",
    achievements: ["Royal Craftsmanship Award", "Innovation in Tradition Prize"],
  },
  {
    id: 8,
    name: "Omar El Alami",
    craft: "Metal Work Master",
    region: "Marrakech",
    experience: 32,
    specialty: "Brass Lanterns",
    rating: 4.7,
    reviews: 198,
    image: "https://i.pinimg.com/564x/97/62/c5/9762c5f5f75de557114fb9d3d33a5cd7.jpg",
    products: 62,
    quote: "Metal is like light - it can be shaped into dreams that illuminate the darkness.",
    achievements: ["Craft Innovation Award", "Excellence in Metalwork"],
  },
  {
    id: 9,
    name: "Sofia Meknassi",
    craft: "Textile Weaver",
    region: "Meknes",
    experience: 24,
    specialty: "Silk Fabrics",
    rating: 4.8,
    reviews: 156,
    image: "https://i.pinimg.com/564x/c2/c4/96/c2c496440dda26123bf80cd7880e7a24.jpg",
    products: 73,
    quote: "In the dance of threads, we weave not just fabric, but stories of our heritage.",
    achievements: ["Textile Arts Excellence", "Traditional Craft Preservation"],
  },
  {
    id: 10,
    name: "Youssef Tahiri",
    craft: "Calligraphy Master",
    region: "Fez",
    experience: 40,
    specialty: "Arabic Scripts",
    rating: 5.0,
    reviews: 223,
    image: "https://i.pinimg.com/564x/27/7a/97/277a97b771c9b62656177a947890417c.jpg",
    products: 95,
    quote: "Each letter is a melody, each word a symphony of our cultural heritage.",
    achievements: ["Master Calligrapher Award", "Islamic Arts Excellence"],
  }
];

import { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Star } from 'lucide-react';
import './ArtisanCarousel.css';

export default function Artisans() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prev) => (prev + 1) % artisans.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prev) => (prev - 1 + artisans.length) % artisans.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const getCardClassName = (index) => {
    const diff = (index - activeIndex + artisans.length) % artisans.length;
    if (diff === 0) return 'artisan-card active';
    if (diff === 1 || diff === -2) return 'artisan-card right';
    return 'artisan-card left';
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
            Rencontrez Nos Artisans
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les maîtres passionnés derrière chaque pièce. Leur savoir-faire 
            et leur patrimoine donnent vie à l'artisanat marocain authentique.
          </p>
        </header>

        <div className="artisans-carousel">
          <div className="carousel-container">
            {artisans.map((artisan, index) => (
              <div
                key={artisan.id}
                className={getCardClassName(index)}
                style={{
                  transform: `translateX(${(index - activeIndex) * 120}%) 
                             scale(${index === activeIndex ? 1.1 : 0.8}) 
                             rotateY(${(index - activeIndex) * 10}deg)`
                }}
              >
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="artisan-image"
                />
                <div className="artisan-content">
                  <h3 className="artisan-name">{artisan.name}</h3>
                  <p className="artisan-craft">{artisan.craft}</p>
                  
                  <div className="artisan-stats">
                    <span className="stat">
                      <MapPin size={16} />
                      {artisan.region}
                    </span>
                    <span className="stat">
                      <Star size={16} />
                      {artisan.rating} ({artisan.reviews})
                    </span>
                  </div>

                  <p className="artisan-quote">"{artisan.quote}"</p>

                  <div className="artisan-achievements">
                    {artisan.achievements.map((achievement, i) => (
                      <span key={i} className="achievement-badge">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="navigation-buttons">
            <button className="nav-button" onClick={handlePrev}>
              <ChevronLeft size={24} />
            </button>
            <button className="nav-button" onClick={handleNext}>
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="carousel-controls">
            {artisans.map((_, index) => (
              <div
                key={index}
                className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        <section className="mt-20 py-16 bg-gradient-moroccan rounded-2xl text-white text-center">
          <div className="max-w-3xl mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Support Local Artisans
            </h2>
            <p className="text-xl mb-8 text-white/90 animate-fade-in">
              Every purchase directly supports these talented artisans and helps
              preserve traditional Moroccan craftsmanship for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Link to="/catalogue">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Shop Artisan Collection
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Visit Workshops
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
