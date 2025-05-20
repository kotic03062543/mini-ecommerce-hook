import { useState, createContext } from "react";
import type { ReactNode } from "react";

interface CartContextType {
  useCart: string[];
  setCarts: React.Dispatch<React.SetStateAction<string[]>>;
}

export const CartContext = createContext<CartContextType | null>(null);

function CartContextProvider({ children }: { children: ReactNode }) {
  const [useCart, setCarts] = useState<string[]>(["1"]);
  return (
    <CartContext.Provider value={{ useCart, setCarts }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
