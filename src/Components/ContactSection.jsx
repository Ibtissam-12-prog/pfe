import React from "react";

const ContactSection = () => {
  const sectionStyle = {
    padding: "5rem 1rem",
    background: "linear-gradient(135deg, hsla(15, 75%, 55%, 0.1), hsla(15, 70%, 25%, 0.1))",
  };

  const cardStyle = (color) => ({
    borderLeft: `4px solid ${color}`,
    background: "rgba(255,255,255,0.5)",
    borderRadius: "8px",
    padding: "1rem",
    marginBottom: "1rem",
  });

  return (
    <section id="contact" style={sectionStyle}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Commission Your <span style={{ color: "#b9482a" }}>Custom Piece</span>
          </h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto" }}>
            Work directly with artisans to create a unique piece. Whether for home or as a meaningful gift, we'll make your vision a reality.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
          {/* Contact Form */}
          <div style={{ background: "white", padding: "2rem", borderRadius: "12px", boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Start Your Custom Order</h3>
            <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <input type="text" placeholder="Your full name" style={{ padding: "0.6rem", borderRadius: "6px", border: "1px solid #ccc" }} />
              <input type="email" placeholder="your@email.com" style={{ padding: "0.6rem", borderRadius: "6px", border: "1px solid #ccc" }} />
              <select style={{ padding: "0.6rem", borderRadius: "6px", border: "1px solid #ccc" }}>
                <option value="">Select product type</option>
                <option value="carpet">Hand-Woven Carpet</option>
                <option value="pottery">Ceramic & Pottery</option>
                <option value="leather">Leather Goods</option>
                <option value="jewelry">Silver Jewelry</option>
                <option value="textile">Embroidered Textiles</option>
                <option value="wood">Wooden Crafts</option>
                <option value="other">Other</option>
              </select>
              <textarea placeholder="Describe your custom piece: colors, size, patterns..." rows={4} style={{ padding: "0.6rem", borderRadius: "6px", border: "1px solid #ccc" }} />
              <button
                style={{
                  padding: "0.8rem",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, hsla(15, 75%, 55%, 0.5) 0%, hsla(15, 70%, 25%, 0.5) 100%)",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Request Now
              </button>
            </form>
          </div>

          {/* Why Choose Custom + Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Why Choose Custom?</h3>

            <div style={cardStyle("#b9482a")}>
              <h4 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>🎨 Personalized Design</h4>
              <p style={{ fontSize: "0.9rem" }}>Choose colors, patterns, and motifs that reflect your style and story.</p>
            </div>

            <div style={cardStyle("#6b21a8")}>
              <h4 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>🏺 Authentic Craftsmanship</h4>
              <p style={{ fontSize: "0.9rem" }}>Made by skilled artisans using traditional techniques and quality materials.</p>
            </div>

            <div style={cardStyle("#0ea5e9")}>
              <h4 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>🌍 Direct Connection</h4>
              <p style={{ fontSize: "0.9rem" }}>Connect with the artisan creating your piece and follow the progress.</p>
            </div>

            {/* Contact Info */}
            <div style={{ marginTop: "2rem" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Contact Information</h3>
              <p>Email: orders@artisanmorocco.com</p>
              <p>Phone: +212 (0) 524 123 456</p>
              <p>Response within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
