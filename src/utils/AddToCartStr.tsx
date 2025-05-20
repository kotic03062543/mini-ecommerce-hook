import { useEffect, useState } from "react";

const CART_LOCAL_STORAGE_KEY = "kk1";

function AddToCartStr() {
  const [cartItems, setCartItems] = useState<number[]>([1]);

  const countNumberOnCart = (productId: number) => {
    setCartItems([...cartItems, productId]);
    console.log("cartItems", cartItems);
  };

  useEffect(() => {
    console.log("cartItems useEffect", cartItems);
    // const stored = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
    // console.log("stored", stored);
    // if (stored) {
    //   const parsedItems = JSON.parse(stored);
    //   setCartItems(parsedItems);
    localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cartItems));
    // }
  }, [cartItems]);

  return {
    cartItems,
    countNumberOnCart,
  };
}

export default AddToCartStr;
