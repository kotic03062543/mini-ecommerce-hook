import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { debounce } from "lodash";
import { useQuery } from "@tanstack/react-query";
import { serviceGetProducts } from "../../services/Products";
import { serviceGetCategorie } from "../../services/Catagorie";

function useProductsViewModel() {
  const { data, isLoading } = useQuery({
    queryKey: ["getProducts"],
    queryFn: async () => {
      // console.log("Fetching products...");
      return await serviceGetProducts();
    },
  });
  const { data: Catagorie, isLoading: CatagorieLoading } = useQuery({
    queryKey: ["getCategories"],
    queryFn: async () => {
      // console.log("Fetching categories...");
      return await serviceGetCategorie();
    },
  });

  const products = data || [];
  const categories = Catagorie || [];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  // add to cart
  const cartContext = useContext(CartContext);
  if (!cartContext)
    throw new Error("CartContext is not available. Please wrap in provider.");
  const { setCarts } = cartContext;
  function updateCartWithProduct(product: any) {
    console.log("Adding product to cart:", product);
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
  const debouncedSearch = useMemo(
    () =>
      debounce((search: string) => {
        console.log("Search input updated:", search);
        setSearchTerm(search.toLowerCase().trim());
      }, 500),
    []
  );

  const filteredProducts = useMemo(() => {
    console.log("Filter products");
    return products
      .filter((p: any) =>
        selectedCategory ? p.category === selectedCategory : true
      )
      .filter((p: any) =>
        searchTerm ? p.title.toLowerCase().includes(searchTerm) : true
      );
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
