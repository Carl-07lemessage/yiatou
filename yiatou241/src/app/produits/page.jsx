import React, { useState } from "react";
import { FaStar, FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";

const ProductTable = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Black T-shirt",
      size: ["S", "M", "L", "XL"],
      price: 80,
      stock: 486,
      sold: 155,
      category: "Fashion",
      rating: 4.5,
      reviews: 55,
    },
  ]);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Edit product with ID: ${id}`);
  };

  const handleView = (id) => {
    alert(`View details for product with ID: ${id}`);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">All Product List</h1>
        <div className="flex items-center gap-4">
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Add Product
          </button>
          <select className="border px-3 py-2 rounded">
            <option value="this-month">This Month</option>
            <option value="last-month">Last Month</option>
            <option value="all-time">All Time</option>
          </select>
        </div>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">
              <input type="checkbox" />
            </th>
            <th className="border p-2">Product Name & Size</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Stock</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Rating</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="text-center">
              <td className="border p-2">
                <input type="checkbox" />
              </td>
              <td className="border p-2 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-md"></div>
                  <div>
                    <p className="font-bold">{product.name}</p>
                    <p className="text-sm text-gray-500">
                      Size: {product.size.join(", ")}
                    </p>
                  </div>
                </div>
              </td>
              <td className="border p-2">${product.price.toFixed(2)}</td>
              <td className="border p-2">
                <p>{product.stock} Item Left</p>
                <p className="text-sm text-gray-500">{product.sold} Sold</p>
              </td>
              <td className="border p-2">{product.category}</td>
              <td className="border p-2">
                <div className="flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-400" />
                  {product.rating} ({product.reviews})
                </div>
              </td>
              <td className="border p-2">
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => handleView(product.id)}
                    className="text-blue-500"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => handleEdit(product.id)}
                    className="text-orange-500"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="text-red-500"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
