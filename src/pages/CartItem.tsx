interface Product {
  image: string;
  title: string;
  description: string;
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
  return (
    <div
      onClick={onClick}
      className="flex flex-col max-w-[350px] items-center bg-gray-200 cursor-pointer m-2"
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="w-full flex flex-col p-3 items-start">
        <p className="font-bold text-xl line-clamp-1">{product.title}</p>
        <p className="line-clamp-3">{product.description}</p>
        <p>
          Price : <span className="text-xl text-red-600">{product.price}</span>
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
