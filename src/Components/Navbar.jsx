import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const loggedInLinks = [
    { name: "Home", path: "/" },
    { name: "Artisans", path: "/artisans" },
    { name: "Customize", path: "/customize" },
    { name: "Collection", path: "/collection" },
    { name: "Contact", path: "/contact" },
    { name: "Profile", path: "/profile" },
  ];

  const loggedOutLinks = [
    { name: "Home", path: "/" },
    { name: "Artisans", path: "/artisans" },
    { name: "Customize", path: "/customize" },
    { name: "Collection", path: "/collection" },
    { name: "Contact", path: "/contact" },
    { name: "Login / Register", path: "/auth" },
  ];

  const currentLinks = isLoggedIn ? loggedInLinks : loggedOutLinks;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1
              className="text-2xl font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsla(15, 75%, 55%, 0.5) 0%, hsla(15, 70%, 25%, 0.5) 100%)",
              }}
            >
              <img src="/logo1.png" alt="Logo" className="h-10 w-auto mt-1 inline-block align-middle" />
              <span className="align-middle">-Easy</span>
            </h1>
          </div>

          {/* Desktop Navigation - centered */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {currentLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-medium transition-colors duration-300 text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-700"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions - right aligned */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/shop"
              className="px-4 mx-2 py-2 text-white rounded-lg text-sm font-medium shadow-md hover:opacity-90 transition"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsla(15, 75%, 55%, 0.5) 0%, hsla(15, 70%, 25%, 0.5) 100%)",
              }}
            >
              Shop Now
            </Link>
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-white rounded-lg text-sm font-medium shadow-md hover:opacity-90 transition"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, hsla(15, 75%, 55%, 0.5) 0%, hsla(15, 70%, 25%, 0.5) 100%)",
                }}
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-orange-500 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {currentLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-800 hover:text-orange-500 transition-colors font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link
                  to="/shop"
                  className="block text-center text-white rounded-lg text-sm font-medium shadow-md hover:opacity-90 transition px-4 py-2"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, hsla(15, 75%, 55%, 0.5) 0%, hsla(15, 70%, 25%, 0.5) 100%)",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shop Now
                </Link>
                {isLoggedIn && (
                  <button
                    onClick={() => {handleLogout(); setIsMenuOpen(false);}}
                    className="block text-center text-white rounded-lg text-sm font-medium shadow-md hover:opacity-90 transition px-4 py-2 mt-2"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, hsla(15, 75%, 55%, 0.5) 0%, hsla(15, 70%, 25%, 0.5) 100%)",
                    }}
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
