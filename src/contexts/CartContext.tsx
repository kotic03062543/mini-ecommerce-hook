import { useState, createContext, useMemo } from "react";
import type { ReactNode } from "react";

interface CartItem {
  product: item;
  quantity: number;
}
interface item {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface CartContextType {
  useCart: CartItem[];
  setCarts: React.Dispatch<React.SetStateAction<CartItem[]>>;
  total: number;
}

export const CartContext = createContext<CartContextType | null>(null);

function CartContextProvider({ children }: { children: ReactNode }) {
  const [useCart, setCarts] = useState<CartItem[]>([]);

  const total = useMemo(() => {
    // console.log("Calculating total in context");
    return useCart.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  }, [useCart]);

  // console.log("useCart", useCart);
  return (
    <CartContext.Provider value={{ useCart, setCarts, total }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
