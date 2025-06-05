import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function ProductSummaryViewModel() {
  console.log("ProductSummaryViewModel");
  const cartContext = useContext(CartContext);
  if (!cartContext)
    throw new Error("CartContext is not available. Please wrap in provider.");
  const { setCarts, useCart } = cartContext;

  const total = useCart.reduce((acc, item) => {
    console.log("Calculating item:", item.quantity);
    return acc + item.product.price * item.quantity;
  }, 0);

  const upQuantity = (productId: string) => {
    console.log("upQuantity", productId);
    setCarts((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === productId
      );
      const updatedCart = [...prevCart];
      updatedCart[existingIndex].quantity += 1;
      return updatedCart;
    });
  };
  const downQuantity = (productId: string) => {
    console.log("downQuantity", productId);
    setCarts((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === productId
      );
      const updatedCart = [...prevCart];
      if (updatedCart[existingIndex].quantity > 1) {
        updatedCart[existingIndex].quantity -= 1;
      } else {
        updatedCart.splice(existingIndex, 1);
      }
      return updatedCart;
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
