import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Pages
import Home from "./Pages/Home";
import Artisans from "./Pages/Artisanas";
import Catalogue from "./Pages/Catalogue";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Customize from "./Pages/Customize";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artisans" element={<Artisans />} />
        <Route path="/collection" element={<Catalogue />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/customize" element={<Customize />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
