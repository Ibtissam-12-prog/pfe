import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Award, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

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
    avatar: "👩‍🎨",
    products: 45,
    quote:
      "Every carpet tells a story. Mine speak of mountain mist, ancient paths, and the dreams we weave into tomorrow.",
    bio: "Born into a family of weavers, Fatima learned the ancient art of Berber carpet making from her grandmother. Her intricate patterns reflect the natural beauty of the Atlas Mountains.",
    achievements: ["UNESCO Heritage Keeper", "Royal Patronage Award"],
    languages: ["Arabic", "Berber", "French"],
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
    avatar: "👨‍🎨",
    products: 32,
    quote:
      "Leather has a soul. My hands simply guide it to reveal its true beauty and purpose.",
    bio: "Third-generation leather craftsman from the famous Fez tanneries. Mohammed's techniques have been passed down through his family for over a century.",
    achievements: ["Master Craftsman Certificate", "Export Excellence Award"],
    languages: ["Arabic", "French", "English"],
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
    avatar: "👩‍🎨",
    products: 67,
    quote:
      "Each piece of silver carries the songs of the desert and the dreams of the nomads who inspired it.",
    bio: "Aicha learned the ancient Tuareg silversmithing techniques from the desert nomads. Her jewelry reflects the mystique and beauty of the Sahara.",
    achievements: [
      "Cultural Heritage Ambassador",
      "Women Artisan Leadership Award",
    ],
    languages: ["Arabic", "Tamazight", "French"],
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
    avatar: "👨‍🎨",
    products: 28,
    quote:
      "Clay remembers everything - the rain, the earth, the hands that shaped it. My pottery carries the memory of Morocco.",
    bio: "Hassan's family has been crafting pottery in Safi for generations. His tagines and ceramics are known throughout Morocco for their quality and beauty.",
    achievements: [
      "National Pottery Excellence",
      "Traditional Craft Preservation Medal",
    ],
    languages: ["Arabic", "French"],
  },
];

export default function Artisans() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-sunset py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Meet the Artisans
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover the passionate masters behind every piece. Their stories,
              skills, and heritage bring authentic Moroccan craftsmanship to
              life.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Artisan Profiles */}
        <div className="grid gap-12">
          {artisans.map((artisan, index) => (
            <Card
              key={artisan.id}
              className={`overflow-hidden animate-fade-in ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                {/* Profile Image & Stats */}
                <div className="lg:col-span-4 p-8 bg-gradient-earth">
                  <div className="text-center">
                    <div className="text-8xl mb-4">{artisan.avatar}</div>
                    <h2 className="text-2xl font-bold mb-2">{artisan.name}</h2>
                    <p className="text-lg text-primary font-semibold mb-1">
                      {artisan.craft}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>{artisan.region}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {artisan.experience}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Years
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {artisan.products}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Products
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Star className="h-5 w-5 text-gold fill-gold" />
                      <span className="font-semibold">{artisan.rating}</span>
                      <span className="text-muted-foreground">
                        ({artisan.reviews} reviews)
                      </span>
                    </div>

                    <Badge variant="outline" className="mb-4">
                      {artisan.specialty}
                    </Badge>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="lg:col-span-8 p-8">
                  <blockquote className="accent-border text-xl italic mb-6 leading-relaxed">
                    "{artisan.quote}"
                  </blockquote>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {artisan.bio}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {artisan.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-center gap-2"
                          >
                            <span className="w-2 h-2 bg-gold rounded-full"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        {artisan.languages.map((language, i) => (
                          <Badge key={i} variant="secondary">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link to={`/catalogue?artisan=${artisan.id}`}>
                      <Button className="btn-hero">
                        View {artisan.name}'s Work
                      </Button>
                    </Link>
                    <Button variant="outline">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Visit
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <section className="mt-20 py-16 bg-gradient-moroccan rounded-2xl text-white text-center">
          <div className="max-w-3xl mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Support Local Artisans
            </h2>
            <p className="text-xl mb-8 text-white/90 animate-fade-in">
              Every purchase directly supports these talented artisans and helps
              preserve traditional Moroccan craftsmanship for future
              generations.
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
