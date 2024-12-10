

// import React, { useState } from "react"; // Ajout de useState
// import { WiCloudUp } from "react-icons/wi";

// const ProductCard = () => {
//   // État pour stocker l'image
//   const [image, setImage] = useState(null); // Déclaration de useState ici

//   // Fonction pour gérer la sélection de l'image
//   const handleImageChange = (e) => {
//     const file = e.target.files[0]; // Récupère le premier fichier
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result); // Stocke l'URL de l'image dans le state
//       };
//       reader.readAsDataURL(file); // Convertit le fichier en Data URL
//     }
//   };

//   // Fonction pour soumettre le formulaire
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Image envoyée :", image);
//     // Vous pouvez envoyer l'image au serveur ici
//   };
//   const ProductInformation = () => {
//     const [productName, setProductName] = useState('');
//     const [productCategory, setProductCategory] = useState('');
//     const [productBrand, setProductBrand] = useState('');
//     const [productWeight, setProductWeight] = useState('');
//     const [gender, setGender] = useState('');
//     const [size, setSize] = useState([]);
//     const [colors, setColors] = useState([]);
//     const [description, setDescription] = useState('');
//     const [tagNumber, setTagNumber] = useState('');
//     const [stock, setStock] = useState('');
//     const [tags, setTags] = useState([]);
  
//     const handleSizeChange = (sizeSelected) => {
//       setSize((prevSize) =>
//         prevSize.includes(sizeSelected)
//           ? prevSize.filter((size) => size !== sizeSelected)
//           : [...prevSize, sizeSelected]
//       );
//     };
  
//     const handleColorChange = (colorSelected) => {
//       setColors((prevColors) =>
//         prevColors.includes(colorSelected)
//           ? prevColors.filter((color) => color !== colorSelected)
//           : [...prevColors, colorSelected]
//       );
//     };
  
//     const colorOptions = {
//       dark: '#1a202c',
//       yellow: '#fbbf24',
//       white: '#ffffff',
//       red: '#ef4444',
//       green: '#10b981',
//       blue: '#3b82f6',
//       sky: '#0ea5e9',
//       gray: '#9ca3af',
//     };
  
  

//   return (
//     <div className="flex space-x-4 p-4 bg-gray-100">
//       {/* Product Card */}
//       <div className="w-1/3 bg-white p-4 rounded-md  shadow-md">
//         <div className="w-full h-40 bg-gray-200  rounded-md flex items-center justify-center">
//           <img
//             src="URL_DE_L_IMAGE" // Remplacez par le chemin de l'image
//             alt="Men Black Slim Fit T-shirt"
//             className="h-full object-contain"
//           />
//         </div>
//         <h2 className="mt-4 text-lg font-semibold">
//         T-shirt Slim Fit Noir pour Homme <span className="text-gray-500">(Mode)</span>
//         </h2>
//         <p className="mt-2">
//           <span className="line-through text-gray-400">$100</span>{" "}
//           <span className="text-red-600 font-bold">$80</span>{" "}
//           <span className="text-green-500">(30% de reduction)</span>
//         </p>
//         <p className="mt-2 font-semibold">Taille:</p>
//         <div className="flex space-x-2 mt-2">
//           {["S", "M", "XL", "XXL"].map((size) => (
//             <button
//               key={size}
//               className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
//             >
//               {size}
//             </button>
//           ))}
//         </div>
//         <div>
//         <div className="mt-4">
//           <h5 className="text-lg text-gray-800 font-medium">Couleurs:</h5>
//           <div className="flex gap-2 mt-2">
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="color-dark"
//                 className="form-checkbox text-gray-800"
//               />
//               <label htmlFor="color-dark" className="ml-2 text-gray-700">
//                 <span className="w-6 h-6 inline-block rounded-full bg-gray-800"></span>
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="color-yellow"
//                 className="form-checkbox text-yellow-500"
//               />
//               <label htmlFor="color-yellow" className="ml-2 text-gray-700">
//                 <span className="w-6 h-6 inline-block rounded-full bg-yellow-500"></span>
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="color-white"
//                 className="form-checkbox text-white"
//               />
//               <label htmlFor="color-white" className="ml-2 text-gray-700">
//                 <span className="w-6 h-6 inline-block rounded-full bg-white border-2 border-gray-300"></span>
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="color-red"
//                 className="form-checkbox text-red-500"
//               />
//               <label htmlFor="color-red" className="ml-2 text-gray-700">
//                 <span className="w-6 h-6 inline-block rounded-full bg-red-500"></span>
//               </label>
//             </div>
//           </div>
//         </div>
//         <div className="px-6 py-4 bg-gray-100 flex justify-between items-center">
//         <button className="bg-gray-500 text-white px-6 py-2 rounded-lg text-sm hover:bg-gray-600 focus:outline-none">
//           Creer un produit
//         </button>
//         <button className="bg-orange-500 text-white px-6 py-2 rounded-lg text-sm hover:bg-orange-600 focus:outline-none">
//           supprimer
//         </button>
//       </div>
//         </div>
        
       
//       </div>

     
//       <div className="w-2/3 bg-white p-4 h-64 rounded-md shadow-md">
//         <h2 className="text-lg font-semibold">Ajouter une photo de produit</h2>
        
//         <form onSubmit={handleSubmit} className="space-y-4">
    
      

          
//           <div className="border-2 border-dashed p-8 mt-4 rounded-md flex flex-col items-center">
//             <div className=" h-10 w-10 justify-center items-center flex">
                
//             <label htmlFor="file-upload"
//             className=" h-20 w-20 rounded-full justify-center items-center flex cursor-pointer"
//             >
//               <WiCloudUp className="text-orange-500 text-9xl "/>
//             </label>
//             <input 
//             id="file-upload"  
//               type="file" 
//               accept="image/*" 
//               onChange={handleImageChange} 
//               className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            
//             />
          


//           {image && (
//             <div className="mt-4 h-40 w-56 ">
             
//               <img 
//                 src={image} 
//                 alt="Aperçu" 
//                 className=" object-cover rounded-lg border border-gray-200 shadow "
//               />
//             </div>
//           )}

          
              
//             </div>
//             <p className="text-gray-600">
//               Déposez vos images ici, ou{" "}
//               <span className="text-blue-500 cursor-pointer">cliquez pour parcourir</span>
//             </p>
//             <p className="text-sm text-gray-400 mt-2">
//               1600 x 1200 (4:3) recommandé. PNG, JPG et GIF sont autorisés.
//             </p>
//           </div>
//         </form>
//       </div>
     
  
    
//     </div>
//   );
// };

// export default ProductCard;
"use client";

import React, { useState } from "react";
import { WiCloudUp } from "react-icons/wi";
import ProduitInformation from "../../components/Forme.jsx";




const ProductInformation = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productBrand, setProductBrand] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [gender, setGender] = useState('');
  const [size, setSize] = useState([]);
  const [colors, setColors] = useState([]);
  const [description, setDescription] = useState('');
  const [tagNumber, setTagNumber] = useState('');
  const [stock, setStock] = useState('');

  const colorOptions = {
    dark: '#1a202c',
    yellow: '#fbbf24',
    white: '#ffffff',
    red: '#ef4444',
    green: '#10b981',
    blue: '#3b82f6',
    sky: '#0ea5e9',
    gray: '#9ca3af',
  };

  const handleSizeChange = (sizeSelected) => {
    setSize((prevSize) =>
      prevSize.includes(sizeSelected)
        ? prevSize.filter((size) => size !== sizeSelected)
        : [...prevSize, sizeSelected]
    );
  };

  const handleColorChange = (colorSelected) => {
    setColors((prevColors) =>
      prevColors.includes(colorSelected)
        ? prevColors.filter((color) => color !== colorSelected)
        : [...prevColors, colorSelected]
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h4 className="text-2xl font-semibold text-gray-800 text-center mb-8">Product Information</h4>

      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label htmlFor="product-brand" className="block text-sm font-medium">Brand</label>
            <input
              type="text"
              id="product-brand"
              className="w-full p-3 border rounded-lg"
              value={productBrand}
              onChange={(e) => setProductBrand(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="product-weight" className="block text-sm font-medium">Weight</label>
            <input
              type="text"
              id="product-weight"
              className="w-full p-3 border rounded-lg"
              value={productWeight}
              onChange={(e) => setProductWeight(e.target.value)}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

const ProductCard = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Image envoyée :", image);
  };

  return (
    <div className="flex space-x-4 p-4 bg-gray-100">
      {/* Product Card */}
      <div className="w-1/3 bg-white p-4 rounded-md shadow-md">
        <div className="w-full h-40 bg-gray-200 rounded-md flex items-center justify-center">
          <img
            src={image || "URL_DE_L_IMAGE"}
            alt="Men Black Slim Fit T-shirt"
            className="h-full object-contain"
          />
        </div>
        <h2 className="mt-4 text-lg font-semibold">
          T-shirt Slim Fit Noir pour Homme <span className="text-gray-500">(Mode)</span>
        </h2>
        <p className="mt-2">
          <span className="line-through text-gray-400">$100</span>{" "}
          <span className="text-red-600 font-bold">$80</span>{" "}
          <span className="text-green-500">(30% de réduction)</span>
        </p>
        <div>
  {/* Section Size */}
  <h5 className="text-sm font-medium text-gray-700">Size</h5>
  <div className="flex gap-4 flex-wrap mt-2">
    {['XS', 'S', 'M', 'XL', 'XXL', '3XL'].map((sizeOption) => (
      <button
        key={sizeOption}
        className="px-4 py-2 rounded-lg text-white bg-blue-500 transition duration-300 transform hover:scale-105 hover:bg-blue-600"
      >
        {sizeOption}
      </button>
    ))}
  </div>

  {/* Section Colors */}
  <h5 className="text-sm font-medium text-gray-700 mt-6">Colors</h5>
  <div className="flex gap-4 flex-wrap mt-2">
    {[
      { name: 'Red', hex: '#EF4444' }, 
      { name: 'Green', hex: '#10B981' }, 
      { name: 'Blue', hex: '#3B82F6' }, 
      { name: 'Yellow', hex: '#F59E0B' }, 
      { name: 'Purple', hex: '#8B5CF6' }
    ].map((color) => (
      <button
        key={color.name}
        className="w-10 h-10 rounded-full border-2 border-gray-300 transition duration-300 transform hover:scale-110"
        style={{ backgroundColor: color.hex }}
      />
    ))}
  </div>
</div>
<div className="flex justify-evenly mt-10">
  {/* Bouton Ajouter au panier */}
  <button className="w-32 py-3 bg-blue-500 text-white rounded-md transition duration-300 transform hover:scale-105 hover:bg-blue-600">
    Ajouter au panier
    </button>
    <button className="w-32 py-3 bg-orange-400 text-white rounded-md transition duration-300 transform hover:scale-105 hover:bg-orange-600">
    Annuler
    </button>
</div>

      </div>

      {/* Formulaire d'ajout d'image */}
      
      <div className="w-2/3  p-4  rounded-md shadow-md">
        <h2 className="text-lg font-semibold">Ajouter une photo de produit</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="border-2 border-dashed p-8 mt-4 rounded-md flex flex-col items-center">
            <label htmlFor="file-upload" className="h-20 w-20 flex items-center justify-center cursor-pointer">
              <WiCloudUp className="text-orange-500 text-6xl" />
            </label>
            <input 
              id="file-upload" 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
              className="hidden"
            />
            {image && (
              <div className="mt-4 h-40 w-56">
                <img src={image} alt="Aperçu" className="object-cover rounded-lg border h-44 w-72" />
              </div>
            )}
              <p className="text-gray-600">
               Déposez vos images ici, ou{" "}
               <span className="text-blue-500 cursor-pointer">cliquez pour parcourir</span>
             </p>
             <p className="text-sm text-gray-400 mt-2">
               1600 x 1200 (4:3) recommandé. PNG, JPG et GIF sont autorisés.
             </p>
          </div>
          

          
          
        
           

        </form>
        <div className="mt-6">
        <ProduitInformation/>
        </div>
      </div>
     
      

      {/* Product Information */}
      
      
    </div>
  );
};


    

export default ProductCard;
