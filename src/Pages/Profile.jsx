import React, { useEffect, useState } from "react";

const DEFAULT_IMAGE = ""; // Empty by default

function Profile() {
  const [profile, setProfile] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showUpdate, setShowUpdate] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [showProductForm, setShowProductForm] = useState(false);
  const [productForm, setProductForm] = useState({ name: "", description: "", price: "", image: null });
  const [editingProduct, setEditingProduct] = useState(null); // Stores product being edited
  const [successMessage, setSuccessMessage] = useState(""); // New state for success messages
 
  const handleProductChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files[0]) {
      setProductForm((prev) => ({ ...prev, image: files[0] }));
    } else {
      setProductForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("name", productForm.name);
    formData.append("description", productForm.description);
    formData.append("price", productForm.price);
    if (productForm.image) formData.append("image", productForm.image);

    try {
      const method = editingProduct ? "PUT" : "POST";
      const url = editingProduct ? `http://localhost:3000/api/products/${editingProduct._id}` : "http://localhost:3000/api/products";

      const res = await fetch(url, {
        method: method,
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data._id) {
        if (editingProduct) {
          setProducts((prev) => prev.map((p) => (p._id === data._id ? data : p)));
        } else {
          setProducts((prev) => [...prev, data]);
        }
        setShowProductForm(false);
        setEditingProduct(null); // Clear editing state
        setProductForm({ name: "", description: "", price: "", image: null });
      } else {
        setError(data.message || (editingProduct ? "Product update failed" : "Product upload failed"));
      }
    } catch {
      setError(editingProduct ? "Product update failed" : "Product upload failed");
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setProductForm({ 
      name: product.name,
      description: product.description,
      price: product.price,
      image: null // Image will be handled separately if updated
    });
    setShowProductForm(true); // Open the form
  };
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleImageUpload = async () => {
    if (!imageFile) return;
    setImageLoading(true);
    setError("");
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("image", imageFile);
    try {
      const res = await fetch("http://localhost:3000/api/profile/image", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.image) {
        setProfile((prev) => ({ ...prev, image: data.image }));
        setImageFile(null);
        setImagePreview(null);
      } else {
        setError(data.message || "Image upload failed");
      }
    } catch (err) {
      setError("Image upload failed");
    }
    setImageLoading(false);
  };

  const handleDeleteClick = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:3000/api/products/${productId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok && data.message === "Product removed") {
        setProducts((prev) => prev.filter((p) => p._id !== productId));
        setSuccessMessage("Product deleted successfully."); // Use success message state
        setTimeout(() => setSuccessMessage(""), 3000); // Clear success message after 3 seconds
      } else {
        setError(data.message || "Failed to delete product.");
      }
    } catch (err) {
      setError("Failed to delete product.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    setError("");
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:3000/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setProfile(prev => ({ ...prev, ...data }));
        setShowUpdate(false);
        // Show success message
        setSuccessMessage("Profile updated successfully!"); // Use success message state
        setTimeout(() => setSuccessMessage(""), 3000); // Clear success message after 3 seconds
      } else {
        setError(data.message || "Update failed");
      }
    } catch (err) {
      console.error("Update error:", err);
      setError("Failed to update profile. Please try again.");
    }
  };

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      const token = localStorage.getItem("token");
      console.log("Effect: Token status", token ? "Present" : "Missing");
      
      if (!token) {
        if (!mounted) return;
        setError("Please log in to view your profile");
        setLoading(false);
        console.log("Effect: No token, setting error and loading false.");
        return;
      }

      try {
        const res = await fetch("http://localhost:3000/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("Effect: Profile API Response Status:", res.status);

        if (!res.ok) {
          let msg = "Failed to fetch profile";
          try {
            const errData = await res.json();
            msg = errData.message || msg;
          } catch (_) {}
          if (!mounted) return;
          setError(msg);
          setLoading(false);
          console.log("Effect: API not OK, setting error and loading false:", msg);
          return;
        }

        const data = await res.json();
        console.log("Effect: Profile API Response Data:", data);
        if (data && data._id) {
          if (!mounted) return;
          setProfile(data);
          setForm({ name: data.name, email: data.email });
          console.log("Effect: Profile data set, profile:", data);

          // Fetch products for this user
          try {
            const pRes = await fetch(`http://localhost:3000/api/products?owner=${data._id}`);
            if (pRes.ok) {
              const prods = await pRes.json();
              if (!mounted) return;
              setProducts(Array.isArray(prods) ? prods.filter(p => String(p.owner) === String(data._id)) : []);
              console.log("Effect: Products set:", prods);
            }
          } catch (e) {
            console.warn("Effect: Product fetch error (ignored):", e);
            // ignore product fetch errors
          }
        } else {
          if (!mounted) return;
          setError(data.message || "Failed to fetch profile: No _id in data");
          console.log("Effect: No _id in data, setting error.");
        }

        if (mounted) setLoading(false);
        console.log("Effect: Loading set to false.");
      } catch (err) {
        if (!mounted) return;
        setError("Failed to fetch profile (catch block):");
        setLoading(false);
        console.error("Effect: Catch block error:", err);
      }
    };

    load();

    return () => { mounted = false; };
  }, []);

  // Added debug logs for render conditions
  console.log("Render: loading=", loading, "error=", error, "profile=", profile ? "present" : "absent");
  if (loading) {
    console.log("Render: Returning Loading state.");
    return <div className="p-8 text-center">Loading...</div>;
  }
  if (error) {
    console.log("Render: Returning Error state.");
    return <div className="p-8 text-center text-red-500">{error}</div>;
  }
  
  if (!profile) {
    console.log("Render: Returning No profile data state.");
    return <div className="p-8 text-center">No profile data</div>;
  }

  const isArtisan = (profile?.role === 'artisan') || (profile?.type === 'artisan');

  console.log("Render: Profile component rendering main JSX with profile:", profile);
  return (
    <div className="min-h-[60vh] flex flex-col items-center bg-blue-100 px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-0 md:p-8 flex flex-col items-center relative">
        {/* Cover section */}
        <div className="w-full h-32 md:h-40 bg-gradient-to-r from-orange-200 to-orange-400 rounded-t-xl relative flex items-end justify-center">
          <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
            {/* Always-present hidden input to trigger file selection from the camera icon */}
            <input
              id="profile-image-trigger"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            {imageLoading ? (
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg bg-white flex items-center justify-center text-gray-400 text-2xl animate-pulse">
                Uploading...
              </div>
            ) : imagePreview ? (
              <label htmlFor="profile-image-upload" className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg bg-white flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">
                <img src={imagePreview} alt="Preview" className="w-full h-full rounded-full object-cover" />
                <input
                  id="profile-image-upload"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </label>
            ) : profile.image ? (
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <img
                  src={profile.image?.startsWith('/uploads') ? `http://localhost:3000${profile.image}` : profile.image}
                  alt={profile.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover bg-white"
                  style={{ objectFit: "cover" }}
                  onError={e => { e.target.onerror=null; e.target.src='/img1.png'; }}
                />
                {/* Floating camera icon button at bottom-right of avatar */}
                <label
                  htmlFor="profile-image-trigger"
                  title="Change photo"
                  className="absolute -right-1 -bottom-1 md:right-0 md:bottom-0 p-2 rounded-full bg-white shadow-md cursor-pointer hover:shadow-lg transition"
                  style={{
                    backgroundImage: "linear-gradient(135deg, hsla(15,75%,95%,1) 0%, hsla(15,70%,90%,1) 100%)"
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-700">
                    <path d="M9 2a1 1 0 0 0-.894.553L7.382 4H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-2.382l-.724-1.447A1 1 0 0 0 14 2H9zm3 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                  </svg>
                </label>
              </div>
            ) : (
              <label htmlFor="profile-image-upload" className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg bg-white flex items-center justify-center text-gray-400 text-4xl cursor-pointer hover:bg-gray-100 transition">
                <span className="text-gray-300">+</span>
                <input
                  id="profile-image-upload"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </label>
            )}
            {/* Show Save button only if imageFile is selected and not uploading */}
            {imageFile && !imageLoading && (
              <button
                className="py-1 px-4 text-sm text-white rounded-lg shadow-md hover:opacity-90 transition mt-2"
                style={{backgroundImage:"linear-gradient(135deg, hsla(15,75%,55%,0.5) 0%, hsla(15,70%,25%,0.5) 100%)"}}
                onClick={handleImageUpload}
              >
                Save Image
              </button>
            )}
            {error && (
              <div className="text-red-500 text-sm mt-2">{error}</div>
            )}
            {successMessage && (
              <div className="text-green-500 text-sm mt-2">{successMessage}</div>
            )}
          </div>
        </div>
        <div className="mt-20 md:mt-24 text-center w-full">
          <h2 className="text-3xl font-bold text-orange-900 mb-1">{profile?.name}</h2>
          <p className="text-gray-600 mb-2">{profile?.email}</p>
          {profile?.type && <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">{profile.type}</span>}
          <div className="flex justify-center gap-4 mt-2 mb-4">
            <button
              onClick={() => setShowUpdate(true)}
              className="py-2 px-6 text-white rounded-lg shadow-md hover:opacity-90 transition"
              style={{backgroundImage:"linear-gradient(135deg, hsla(15,75%,55%,0.5) 0%, hsla(15,70%,25%,0.5) 100%)"}}
            >
              Update Details
            </button> 
          </div>
        </div>
        {showUpdate && (
          <div className="w-full max-w-md mx-auto mt-4 mb-8 bg-gray-50 rounded-lg p-6 shadow">
            <div className="space-y-4">
              <input
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div className="mt-6 flex gap-2 w-full">
              <button
                onClick={handleUpdate}
                className="flex-1 py-2 text-white rounded-lg shadow-md hover:opacity-90 transition"
                style={{backgroundImage:"linear-gradient(135deg, hsla(15,75%,55%,0.5) 0%, hsla(15,70%,25%,0.5) 100%)"}}
              >
                Save
              </button>
              <button
                onClick={() => setShowUpdate(false)}
                className="flex-1 py-2 text-gray-700 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        {/* Products Section */}
        <div className="w-full mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-orange-900 text-left">Products</h3>
            {isArtisan && (
              <button
                className="py-1 px-4 text-sm text-white rounded-lg shadow-md hover:opacity-90 transition"
                style={{backgroundImage:"linear-gradient(135deg, hsla(15,75%,55%,0.5) 0%, hsla(15,70%,25%,0.5) 100%)"}}
                onClick={() => setShowProductForm((v) => !v)}
              >
                {showProductForm ? "Cancel" : "Share Product"}
              </button>
            )}
          </div>
          {!isArtisan && (
            <div className="mb-4 text-sm text-gray-600">Only artisans can add items to the shop.</div>
          )}
          {isArtisan && showProductForm && (
            <form className="mb-6 bg-gray-50 rounded-lg p-6 shadow" onSubmit={handleProductSubmit} encType="multipart/form-data">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input name="name" placeholder="Product Name" value={productForm.name} onChange={handleProductChange} className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" required />
                <input name="price" placeholder="Price" value={productForm.price} onChange={handleProductChange} className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" required />
              </div>
              <textarea name="description" placeholder="Description" value={productForm.description} onChange={handleProductChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4" required />
              <input type="file" name="image" accept="image/*" onChange={handleProductChange} className="mb-4" />
              <button type="submit" className="py-2 px-6 text-white rounded-lg shadow-md hover:opacity-90 transition w-full" style={{backgroundImage:"linear-gradient(135deg, hsla(15,75%,55%,0.5) 0%, hsla(15,70%,25%,0.5) 100%)"}}>{editingProduct ? "Update Product" : "Share"}</button>
            </form>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.length === 0 ? (
              <div className="col-span-full text-gray-500 text-center">No products found.</div>
            ) : (
              products?.map((product) => (
                <div key={product._id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                  <img src={(product.image && product.image.startsWith('/uploads') ? `http://localhost:3000${product.image}` : product.image) || "/img1.png"} alt={product.name} className="w-28 h-28 object-cover rounded mb-2" />
                  <h4 className="font-semibold text-orange-900 mb-1">{product?.name}</h4>
                  <p className="text-gray-600 text-sm mb-1">{product?.description}</p>
                  <span className="text-orange-700 font-bold">{product?.price} DH</span>
                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={() => handleEditClick(product)}
                      className="py-1 px-3 text-xs text-white rounded-lg shadow-md hover:opacity-90 transition"
                      style={{backgroundImage:"linear-gradient(135deg, hsla(200,75%,55%,0.5) 0%, hsla(200,70%,25%,0.5) 100%)"}}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(product._id)}
                      className="py-1 px-3 text-xs text-white rounded-lg shadow-md hover:opacity-90 transition"
                      style={{backgroundImage:"linear-gradient(135deg, hsla(0,75%,55%,0.5) 0%, hsla(0,70%,25%,0.5) 100%)"}}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
