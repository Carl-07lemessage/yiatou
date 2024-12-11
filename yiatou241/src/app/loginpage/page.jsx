"use client"
import React from "react";

export default function LoginPage() {
  const handleGoogleLogin = () => {
    console.log("Connexion avec Google");
  };

  const handleFacebookLogin = () => {
    console.log("Connexion avec Facebook");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Connexion classique");
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Connectez-vous à votre compte
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Adresse email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Adresse email"
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              placeholder="Mot de passe"
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Se connecter
          </button>
        </form>

        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-sm text-gray-500">Ou continuez avec</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleGoogleLogin}
            className="flex-1 flex items-center justify-center bg-white-500 text-black py-2 rounded-lg hover:bg-white-600 transition"
          >
              <img src="/google-remove.png" alt="/google.png" className="w-[24px] h-[24px]" />

          </button>

          <button
            onClick={handleFacebookLogin}
            className="flex-1 flex items-center justify-center bg-white-600 text-white py-2 rounded-lg hover:bg-white-700 transition"
          >
            <img src="/facebook-circle-fill.svg" alt="/google.png" className="w-[24px] h-[24px]" />
            
            Facebook
          </button>
        </div>

        <p className="text-sm text-center text-blue-600 mt-6 hover:underline cursor-pointer">
          Mot de passe oublié?
        </p>
      </div>
    </div>
  );
}

