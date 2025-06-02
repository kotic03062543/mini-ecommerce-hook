import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function ProductSummaryViewModel() {
  const cartContext = useContext(CartContext);
  if (!cartContext)
    throw new Error("CartContext is not available. Please wrap in provider.");
  const { setCarts, useCart } = cartContext;

  const total = useCart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const upQuantity = (productId: string) => {
    setCarts((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === productId
      );
      if (existingIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += 1;
        return updatedCart;
      } else {
        return [
          ...prevCart,
          { product: { id: productId } as any, quantity: 1 },
        ];
      }
    });
  };
  const downQuantity = (productId: string) => {
    setCarts((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === productId
      );
      if (existingIndex !== -1) {
        const updatedCart = [...prevCart];
        if (updatedCart[existingIndex].quantity > 1) {
          updatedCart[existingIndex].quantity -= 1;
        } else {
          updatedCart.splice(existingIndex, 1); // ลบรายการถ้าจำนวนเป็น 1
        }
        return updatedCart;
      }
      return prevCart;
    });
  };

  return {
    total,
    upQuantity,
    downQuantity,
    useCart,
  };
}

export default ProductSummaryViewModel;
