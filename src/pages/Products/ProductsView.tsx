import { useMemo } from "react";
import SearchInput from "../../components/SearchInput";
import CartItem from "../CartItem";
import useProductsViewModel from "./ProductsViewModel";

function Products() {
  //เช็ค performance ว่า render ทุกครั้งไหม
  // console.log("Products render");

  const viewModel = useProductsViewModel();

  if (!viewModel) {
    return <div>Error: Unable to load products.</div>;
  }
  const {
    debouncedSearch,
    filteredProducts,
    navigate,
    updateCartWithProduct,
    isLoading,
    selectedCategory,
    categories,
    setSelectedCategory,
  } = viewModel;

  const catchData = useMemo(() => {
    return filteredProducts.map((p : any) => (
      <CartItem
        key={p.id}
        product={p}
        onClick={() => navigate(`/ProductDetail/${p.id}`)}
        onAddToCart={() => {
          updateCartWithProduct(p);
        }}
      />
    ));
  }, [filteredProducts]);

  return (
    <div className="flex flex-col items-center justify-start bg-white p-10 gap-3">
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Our Products</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-3 ">
        {categories && categories.length > 0 ? (
          categories.map((cat : any) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded border cursor-pointer ${
                selectedCategory === cat
                  ? "bg-purple-500 text-white"
                  : "bg-white"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))
        ) : (
          <p className="text-gray-500">No categories available</p>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        <div className="w-full flex justify-center m-2">
          <SearchInput
            onChange={(search) => {
              debouncedSearch(search.target.value);
            }}
            placeholder="Search by name"
          />
        </div>
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col max-w-[350px] w-[300px] h-[400px] animate-pulse bg-gray-200 m-2 rounded-md"
              >
                <div className="aspect-[4/3] w-full bg-gray-300 rounded-t-md"></div>
                <div className="p-3 flex flex-col gap-2">
                  <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  {/* <div className="h-10 bg-gray-400 rounded mt-4"></div> */}
                </div>
              </div>
            ))
          : catchData}
      </div>
    </div>
  );
}

export default Products;
