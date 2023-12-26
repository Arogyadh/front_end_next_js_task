"use client";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products when the component mounts
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error("Error fetching products:", error));
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="w-full h-full overflow-hidden bg-gray-200 pt-12 ">
      <div className="ml-10 text-6xl items-center font-dancing">
        All Products
      </div>

      <div className="flex flex-wrap justify-center p-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="m-4 p-4 border border-gray-300 rounded-md"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-cover mb-2"
            />
            <div className="text-lg font-bold">{product.title}</div>
            <div className="text-gray-600">${product.price.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
