import { useState } from "react";

export default function Connexion() {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState(null);

  return (
    <div>
      {/* Connexion Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-2xl shadow-md transition"
      >
        Connexion
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-[400px] relative">
            
            {/* Close Button */}
            <button
              onClick={() => {
                setOpen(false);
                setRole(null);
              }}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-xl font-bold text-center mb-4">Choisissez votre rôle</h2>

            {/* Step 1: choisir rôle */}
            {!role && (
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => setRole("acheteur")}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                >
                  Je suis Acheteur
                </button>
                <button
                  onClick={() => setRole("vendeur")}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
                >
                  Je suis Vendeur
                </button>
              </div>
            )}

            {/* Step 2: formulaire acheteur */}
            {role === "acheteur" && (
              <form className="flex flex-col gap-3 mt-3">
                <input type="text" placeholder="Nom" className="border p-2 rounded" />
                <input type="email" placeholder="Email" className="border p-2 rounded" />
                <input type="password" placeholder="Mot de passe" className="border p-2 rounded" />
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                  S'inscrire comme Acheteur
                </button>
              </form>
            )}

            {/* Step 2: formulaire vendeur */}
            {role === "vendeur" && (
              <form className="flex flex-col gap-3 mt-3">
                <input type="text" placeholder="Nom de l’artisan" className="border p-2 rounded" />
                <input type="email" placeholder="Email" className="border p-2 rounded" />
                <input type="password" placeholder="Mot de passe" className="border p-2 rounded" />
                <input type="text" placeholder="Spécialité" className="border p-2 rounded" />
                <button className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg">
                  S'inscrire comme Vendeur
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
