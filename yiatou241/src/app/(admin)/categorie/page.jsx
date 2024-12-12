"use client";
import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

export default function Home() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const categories = [
    {
      id: "cat1",
      name: "Catégories de Mode",
      bgColor: "bg-gray-200",
    },
    {
      id: "cat2",
      name: "Casques Électroniques",
      bgColor: "bg-blue-200",
    },
    {
      id: "cat3",
      name: "Chaussures",
      Image: "assets/images/product/p-7.png",
      bgColor: "bg-yellow-200",
    },
    {
      id: "cat4",
      name: "Lunettes & Solaires",
      Image: "assets/images/product/p-9.png",
      bgColor: "bg-teal-200",
    },
  ];

  const products = [
    {
      id: "FS16276",
      name: "Mode Hommes, Femmes & Enfants",
      Image: "assets/images/product/p-1.png",
      price: "$80 à $400",
      createdBy: "Vendeur",
      stock: 46233,
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Grid des catégories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {categories.map((category) => (
          <div
            className="card bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            key={category.id}
          >
            <div className="p-4 text-center">
              <div
                className={`${category.bgColor} rounded-full p-6 mx-auto transition-all hover:bg-opacity-80`}
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-24 h-24 object-cover transition-transform transform hover:scale-110"
                />
              </div>
              <h4 className="mt-4 text-lg font-semibold text-gray-700 hover:text-orange-500">
                {category.name}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Liste des produits */}
      <div className="mt-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex justify-between items-center bg-gray-100 p-4">
            <h4 className="text-lg font-semibold">Liste de toutes les catégories</h4>
            <div className="flex items-center gap-4">
              <a
                href="product-add.html"
                className="btn bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700"
              >
                Ajouter un produit
              </a>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="btn bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Ce mois-ci
                </button>
                {dropdownVisible && (
                  <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48">
                    <a
                      href="#!"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Télécharger
                    </a>
                    <a
                      href="#!"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Exporter
                    </a>
                    <a
                      href="#!"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Importer
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Table des produits */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th>
                    <input type="checkbox" className="form-checkbox" />
                  </th>
                  <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                    Catégories
                  </th>
                  <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                    Prix de départ
                  </th>
                  <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                    Créé par
                  </th>
                  <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                    ID
                  </th>
                  <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                    Stock
                  </th>
                  <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td>
                      <input type="checkbox" className="form-checkbox" />
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex items-center">
                        <img
                          src={product.img}
                          alt={product.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <p className="ml-4 text-gray-800">{product.name}</p>
                      </div>
                    </td>
                    <td className="px-4 py-2">{product.price}</td>
                    <td className="px-4 py-2">{product.createdBy}</td>
                    <td className="px-4 py-2">{product.id}</td>
                    <td className="px-4 py-2">{product.stock}</td>
                    <td className="px-4 py-2">
                      <div className="flex gap-2">
                        <button className="btn bg-gray-200 hover:bg-gray-300">
                          <Icon icon="solar:eye-broken" />
                        </button>
                        <button className="btn bg-orange-500 hover:bg-orange-600">
                          <Icon icon="solar:pen-2-broken" />
                        </button>
                        <button className="btn bg-red-500 hover:bg-red-600">
                          <Icon icon="solar:trash-bin-minimalistic-2-broken" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
