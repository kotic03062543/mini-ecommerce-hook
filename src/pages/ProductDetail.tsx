import { useParams } from "react-router-dom";
import { useState } from "react";
function ProductDetail() {
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      price: 100,
      description:
        "The Basic Tee is a classic wardrobe staple. Made from 100% cotton, it features a relaxed fit and a crew neckline. Available in a variety of colors.",
      image:
        "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      colors: ["#FFFFCC", "#FFCCCC"],
    },
  ];
  const params = useParams();
  const productId = params.id;
  const product = products.find((product) => product.id === Number(productId));
  if (!product)
    return <div className="text-center m-5 text-6xl">Product not found</div>;

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="p-5 md:p-20 grid md:flex gap-6">
      <img src={product.image} alt={product.name} className="w-full md:w-1/2" />
      <div className="w-full">
        <div className="flex flex-row justify-between items-center">
          <p className="text-2xl font-bold">{product.name}</p>
          <p className="text-2xl font-semibold">
            <span className="text-red-500">{product.price}</span> $
          </p>
        </div>

        <div className="mt-3">
          <h3 className="text-sm font-medium text-gray-900">Color</h3>
          <div className="flex gap-2 mt-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`h-10 w-10 rounded-full border-3 ${
                  selectedColor === color ? "border-black" : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <button
          onClick={() => alert("Added to cart")}
          className="mt-3 w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700"
        >
          Add to cart
        </button>

        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-900">Description</h3>
          <p className="mt-2 text-sm text-gray-700">{product.description}</p>
          {/* <p className="mt-2 text-sm text-gray-700">
            Looking to stock your closet? The Basic tee also comes in a 3-pack
            or 5-pack at a bundle discount.
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
