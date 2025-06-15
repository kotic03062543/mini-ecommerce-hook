import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { debounce } from "lodash";
import { useQuery } from "@tanstack/react-query";
import { serviceGetProducts } from "../../services/Products";
import { serviceGetCategorie } from "../../services/Catagorie";
import type { IProduct } from "./Type";

function useProductsViewModel() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["getProducts"],
    queryFn: async () => {
      // console.log("Fetching products...");
      return await serviceGetProducts();
    },
  });
  const { data: categories = [], isLoading: CatagorieLoading } = useQuery({
    queryKey: ["getCategories"],
    queryFn: async () => {
      // console.log("Fetching categories...") ;
      return await serviceGetCategorie();
    },
  });

  // const products = data || [];
  // const categories = Catagorie || [];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const cartContext = useContext(CartContext);
  if (!cartContext)
    throw new Error("CartContext is not available. Please wrap in provider.");

  const navigate = useNavigate();

  // add to cart
  // ย้ายไปไว้ใน context จะได้ใช้ได้หลายหน้า
  const { setCarts } = cartContext;
  function updateCartWithProduct(product: IProduct) {
    // console.log("Adding product to cart:", product);
    setCarts((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  }

  // Update set search term
  const debouncedSearch = debounce((search: string) => {
    console.log("Search input updated:", search);
    setSearchTerm(search.toLowerCase().trim());
  }, 500);

  //จัดให้เหลือรอบเดียว
  const filteredProducts = useMemo(() => {
    return products.filter((p: IProduct) => {
      if (selectedCategory && p.category !== selectedCategory) {
        return false; // ถ้าเลือกหมวดหมู่ และสินค้าหมวดหมู่ไม่ตรง → ไม่เอา
      }
      if (
        searchTerm &&
        !p.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false; // ถ้าค้นหาแล้วชื่อสินค้าไม่เจอคำค้น → ไม่เอา
      }
      return true; // ผ่านเงื่อนไขทั้งหมด → เอาไว้
    });
  }, [products, selectedCategory, searchTerm]);

  return {
    debouncedSearch,
    filteredProducts,
    navigate,
    updateCartWithProduct,
    isLoading,
    selectedCategory,
    setSelectedCategory,
    categories,
    products,
    CatagorieLoading,
  };
}

export default useProductsViewModel;
