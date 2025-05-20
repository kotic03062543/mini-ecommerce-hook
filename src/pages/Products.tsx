import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import { CartContext } from "../contexts/CartContext";
import { debounce, update } from "lodash";

function Products() {
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
  const [useInput, setInput] = useState<string>("");
  const navigate = useNavigate();
  // const [useInput, setInput] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (useInput.trim().toLocaleLowerCase()) {
      setFilteredProducts(products);
    }
    const rs = products.filter((p) => {
      return p.name.toLowerCase().includes(useInput.toLowerCase());
    });
    // console.log("rs", rs);
    // console.log("useInput", useInput);
    // console.log("products filter :", products);
    setFilteredProducts(rs);
  }, [useInput]);

  // add to cart
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    console.error("CartContext is null");
    return null;
  }
  const { setCarts } = cartContext;
  function handleSearch(search: string) {
    setInput(search);
  }
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
  const debouncedSearch = debounce(handleSearch, 500);
  // const debouncedSearch = useCallback(debounce(handleSearch, 2000), []);

  return (
    <div className="flex flex-col items-center justify-start bg-white p-10 gap-3">
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Our Products</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="w-full flex justify-center m-2">
          <SearchInput
            // value={useInput}
            onChange={(e) => {
              debouncedSearch(e.target.value);
            }}
            placeholder="Search by name"
          />
        </div>
        {filteredProducts.map((p) => (
          <div
            onClick={() => navigate(`/ProductDetail/${p.id}`)}
            key={p.id}
            className="flex flex-col items-center bg-gray-200 cursor-pointer"
          >
            <img className="flex flex-1 h-80 object-cover" src={p.img} alt="" />
            <div className="w-full flex flex-col p-3 items-start">
              <p className="font-bold text-xl">{p.name}</p>
              <p>{p.detail}</p>
              <p>
                Price : <span className="text-xl text-red-600">{p.price}</span>{" "}
                $
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation(); // ป้องกันการ trigger navigate
                updateCartWithProduct(p.id.toString());
                console.log("update cart", p.id);
              }}
              className="text-white rounded-lg p-2 my-2 bg-blue-500 hover:bg-blue-700 transition-all duration-300"
            >
              add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
