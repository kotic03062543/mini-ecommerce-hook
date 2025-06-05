import { useState, createContext } from "react";
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
}

export const CartContext = createContext<CartContextType | null>(null);

function CartContextProvider({ children }: { children: ReactNode }) {
  const [useCart, setCarts] = useState<CartItem[]>([]);
  console.log("useCart", useCart);
  return (
    <CartContext.Provider value={{ useCart, setCarts }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
