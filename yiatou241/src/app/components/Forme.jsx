// import React, { useState } from "react";

// const App = () => {
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [selectedColors, setSelectedColors] = useState([]);

//   const sizes = ["XS", "S", "M", "XL", "XXL", "3XL"];
//   const colors = ["#2D3E50", "#F1C40F", "#F39C12", "#1ABC9C", "#E74C3C", "#1DA7DD"];

//   const toggleSize = (size) => {
//     setSelectedSizes((prev) =>
//       prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
//     );
//   };

//   const toggleColor = (color) => {
//     setSelectedColors((prev) =>
//       prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
//     );
//   };

//   return (
//     <div className="p-6 bg-gray-50 rounded-md shadow-md max-w-4xl mx-auto">
//       <div className="grid grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Product Name</label>
//           <input
//             type="text"
//             placeholder="Items Name"
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Categories</label>
//           <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
//             <option>Choose a category</option>
//             <option>Clothing</option>
//           </select>
//         </div>
//       </div>

//       <div className="mt-6">
//         <h3 className="text-sm font-medium text-gray-700">Size:</h3>
//         <div className="flex flex-wrap gap-4 mt-2">
//           {sizes.map((size) => (
//             <button
//               key={size}
//               onClick={() => toggleSize(size)}
//               className={`px-3 py-1.5 rounded-lg border ${
//                 selectedSizes.includes(size)
//                   ? "bg-blue-500 text-white border-blue-500"
//                   : "bg-gray-100 text-gray-700 border-gray-300"
//               }`}
//             >
//               {size}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="mt-6">
//         <h3 className="text-sm font-medium text-gray-700">Colors:</h3>
//         <div className="flex flex-wrap gap-4 mt-2">
//           {colors.map((color) => (
//             <button
//               key={color}
//               onClick={() => toggleColor(color)}
//               style={{ backgroundColor: color }}
//               className={`w-10 h-10 rounded-full ${
//                 selectedColors.includes(color)
//                   ? "ring-2 ring-blue-500"
//                   : "ring-1 ring-gray-300"
//               }`}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
"use client";
import React, { useState } from 'react';

const ProduitInformation = () => {
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
  const [tags, setTags] = useState([]);

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

  return (
    <div className="max-w-4xl mx-auto p-6  bg-white shadow-lg rounded-xl">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-semibold text-gray-800">Product Information</h4>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="form-group mb-4">
            <label htmlFor="productName" className="block text-gray-700 font-semibold">
              Nom du produit
            </label>
            <input
              type="text"
              id="productName"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="category" className="block text-gray-700 font-semibold">
              Tag
            </label>
            <select id="category" className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Sélectionner une catégorie</option>
              <option value="vetements">Vêtements</option>
              <option value="chaussures">Chaussures</option>
              <option value="accessoires">Accessoires</option>
            </select>
          </div>

          <div className="form-group mb-4">
            <label htmlFor="brand" className="block text-gray-700 font-semibold">
              Marque
            </label>
            <input
              type="text"
              id="brand"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="brand" className="block text-gray-700 font-semibold">
              Marque
            </label>
            <input
              type="text"
              id="brand"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          
          <div className="form-group mb-4">
            <label className="block text-gray-700 font-semibold">Genre</label>
            <select id="gender" className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Sélectionner</option>
              <option value="homme">Homme</option>
              <option value="femme">Femme</option>
              <option value="unisexe">Unisexe</option>
            </select>
          </div>
        </div>
        

        <div>
          <h5 className="text-sm font-medium text-gray-700">Size</h5>
          <div className="flex gap-4 flex-wrap">
            {['XS', 'S', 'M', 'XL', 'XXL', '3XL'].map((sizeOption) => (
              <button
                key={sizeOption}
                onClick={() => handleSizeChange(sizeOption)}
                className={`px-4 py-2 rounded-lg text-white ${size.includes(sizeOption) ? 'bg-blue-500' : 'bg-gray-300'} transition duration-300 transform hover:scale-105`}
              >
                {sizeOption}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-sm font-medium text-gray-700">Colors</h5>
          <div className="flex gap-4 flex-wrap">
            {Object.entries(colorOptions).map(([colorName, colorHex]) => (
              <button
                key={colorName}
                onClick={() => handleColorChange(colorName)}
                className={`w-10 h-10 rounded-full transition duration-300 transform hover:scale-110 ${colors.includes(colorName) ? 'border-4 border-blue-500' : 'border-2 border-gray-300'}`}
                style={{ backgroundColor: colorHex }}
              />
            ))}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter product description"
            rows="4"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="form-group">
            <label htmlFor="product-id" className="block text-sm font-medium text-gray-700">Tag Number</label>
            <input
              type="number"
              id="product-id"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={tagNumber}
              onChange={(e) => setTagNumber(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="product-stock" className="block text-sm font-medium text-gray-700">Stock</label>
            <input
              type="number"
              id="product-stock"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          {/* select */}
          
          <div className="form-group h-64 mb-4">
            <label htmlFor="category" className="block text-gray-700 font-semibold">
              Tag
            </label>
            <select id="category" className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Sélectionner une catégorie</option>
              <option value="vetements">Vêtements</option>
              <option value="chaussures">Chaussures</option>
              <option value="accessoires">Accessoires</option>
            </select>
          </div>
          {/* <div className='bg-slate-500 '>
            <button className="w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
              Enregistrer
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProduitInformation;
