"use client"

import React, { useState } from "react"; // Ajout de useState
import { WiCloudUp } from "react-icons/wi";

const ProductCard = () => {
  // État pour stocker l'image
  const [image, setImage] = useState(null); // Déclaration de useState ici

  // Fonction pour gérer la sélection de l'image
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Récupère le premier fichier
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Stocke l'URL de l'image dans le state
      };
      reader.readAsDataURL(file); // Convertit le fichier en Data URL
    }
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Image envoyée :", image);
    // Vous pouvez envoyer l'image au serveur ici
  };
  

  return (
    <div className="flex space-x-4 p-4 bg-gray-100">
      {/* Product Card */}
      <div className="w-1/3 bg-white p-4 rounded-md shadow-md">
        <div className="w-full h-40 bg-gray-200 rounded-md flex items-center justify-center">
          <img
            src="URL_DE_L_IMAGE" // Remplacez par le chemin de l'image
            alt="Men Black Slim Fit T-shirt"
            className="h-full object-contain"
          />
        </div>
        <h2 className="mt-4 text-lg font-semibold">
          Men Black Slim Fit T-shirt <span className="text-gray-500">(Fashion)</span>
        </h2>
        <p className="mt-2">
          <span className="line-through text-gray-400">$100</span>{" "}
          <span className="text-red-600 font-bold">$80</span>{" "}
          <span className="text-green-500">(30% Off)</span>
        </p>
        <p className="mt-2 font-semibold">Size:</p>
        <div className="flex space-x-2 mt-2">
          {["S", "M", "XL", "XXL"].map((size) => (
            <button
              key={size}
              className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              {size}
            </button>
          ))}
        </div>
        
       
      </div>

     
      <div className="w-2/3 bg-white p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold">Ajouter une photo de produit</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
    
      

          
          <div className="border-2 border-dashed p-8 mt-4 rounded-md flex flex-col items-center">
            <div className=" h-10 w-10 justify-center items-center flex">
                
            <label htmlFor="file-upload"
            className=" h-20 w-20 rounded-full justify-center items-center flex cursor-pointer"
            >
              <WiCloudUp className="text-orange-500 text-9xl "/>
            </label>
            <input 
            id="file-upload"  
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            
            />
          


          {image && (
            <div className="mt-4 h-40 w-56 ">
             
              <img 
                src={image} 
                alt="Aperçu" 
                className=" object-cover rounded-lg border border-gray-200 shadow "
              />
            </div>
          )}

          
              
            </div>
            <p className="text-gray-600">
              Déposez vos images ici, ou{" "}
              <span className="text-blue-500 cursor-pointer">cliquez pour parcourir</span>
            </p>
            <p className="text-sm text-gray-400 mt-2">
              1600 x 1200 (4:3) recommandé. PNG, JPG et GIF sont autorisés.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductCard;
