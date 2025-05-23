import { useEffect, useState } from "react";

interface Product {
  img: string;
  name: string;
  detail: string;
  price: number;
}

interface CartItemProps {
  product: Product;
  onClick: () => void;
  onAddToCart: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  product,
  onClick,
  onAddToCart,
}) => {
  console.log("reder cart");
  useEffect(() => {
    console.log("useEffect cartitem");
  }, []);

  return (
    <div
      onClick={onClick}
      className="flex flex-col max-w-[350px] items-center bg-gray-200 cursor-pointer m-2"
    >
      <img
        className="flex flex-1 h-80 object-cover"
        src={product.img}
        alt={product.name}
      />
      <div className="w-full flex flex-col p-3 items-start">
        <p className="font-bold text-xl">{product.name}</p>
        <p>{product.detail}</p>
        <p>
          Price : <span className="text-xl text-red-600">{product.price}</span>{" "}
          $
        </p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart(e);
        }}
        className="text-white rounded-lg p-2 my-2 bg-blue-500 hover:bg-blue-700 transition-all duration-300"
      >
        add to cart
      </button>
    </div>
  );
};

export default CartItem;
