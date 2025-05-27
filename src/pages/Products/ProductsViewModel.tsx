import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { debounce } from "lodash";

function ProductsViewModel() {
  const products = [
    {
      id: 1,
      name: "Syltherine",
      detail: "Syltherine cafe chaire",
      price: 100,
      img: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Lotito",
      detail: "Luxury big sofa",
      price: 200,
      img: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Respira",
      detail: "Outdoor bar table",
      price: 300,
      img: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Grifo",
      detail: "Outdoor bar table",
      price: 350,
      img: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Potty",
      detail: "Outdoor bar table",
      price: 500,
      img: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Potty",
      detail: "Outdoor bar table",
      price: 500,
      img: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Potty",
      detail: "Outdoor bar table",
      price: 500,
      img: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Muggo",
      detail: "Outdoor bar table",
      price: 500,
      img: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  //   const [useInput, setInput] = useState<string>("");

  // จัดการใน onChange ดีกว่า
  // useEffect(() => {
  //   test("test");

  //   return () => {
  //     // ทำ
  //     console.log("unmount");
  //   };
  // }, []);

  // console.log("useName", useName);

  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState(products);
  //
  // useEffect(() => {

  // }, [useInput]);

  // log ตอน component

  // add to cart
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    console.error("CartContext is null");
    return null;
  }
  const { setCarts } = cartContext;
  function updateCartWithProduct(id: string) {
    if (cartContext) {
      // ค้นหาสินค้าที่มี id เดียวกันในตะกร้า
      const existingProductIndex = cartContext.useCart.findIndex(
        (item) => item.id === id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...cartContext.useCart];
        updatedCart[existingProductIndex].quantity += 1;
        setCarts(updatedCart);
      } else {
        // ถ้าสินค้ายังไม่มี เพิ่มใหม่
        const updatedCart = [...cartContext.useCart, { id, quantity: 1 }];
        setCarts(updatedCart);
      }
    }
  }

  useEffect(() => {
    console.log("filteredProducts", filteredProducts);
  }, [filteredProducts]);

  function handleSearch(search: string) {
    console.log("search", search);
    // setInput(search); // ค่าไม่เปลี่ยนทันที
    if (!search.trim().toLocaleLowerCase()) {
      setFilteredProducts(products);
      return;
    }
    const rs = products.filter((p) => {
      return p.name.toLowerCase().includes(search.toLowerCase());
    });
    console.log("rs", rs);
    // console.log("useInput", useInput);
    // console.log("products filter :", products);
    setFilteredProducts(rs);
  }
  const debouncedSearch = debounce(handleSearch, 500);
  // const debouncedSearch = useCallback(debounce(handleSearch, 2000), []);

  return {
    debouncedSearch,
    filteredProducts,
    navigate,
    updateCartWithProduct,
  };
}

export default ProductsViewModel;
