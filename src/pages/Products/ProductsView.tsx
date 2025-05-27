import SearchInput from "../../components/SearchInput";
import CartItem from "../CartItem";
import ProductsViewModel from "./ProductsViewModel";

function Products() {
  //เช็ค performance ว่า render ทุกครั้งไหม
  const viewModel = ProductsViewModel();
  if (!viewModel) {
    return <div>Error: Unable to load products.</div>;
  }
  const { debouncedSearch, filteredProducts, navigate, updateCartWithProduct } = viewModel;
  console.log("render");

  // ข้างบนเอาไปไว้ view model ให้หมดเลย จะได้เขียน test ง่าย
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
          <CartItem
            key={p.id}
            product={p}
            // setName={setName} // ไม่ควร
            // name={useName} // ระวัง side effect
            onClick={() => navigate(`/ProductDetail/${p.id}`)}
            onAddToCart={() => {
              // e.stopPropagation();
              // test();
              updateCartWithProduct(p.id.toString());
            }}
          />
          // <div
          //   onClick={() => navigate(`/ProductDetail/${p.id}`)}
          //   key={p.id}
          //   className="flex flex-col max-w-[350px] items-center bg-gray-200 cursor-pointer m-2"
          // >
          //   <img className="flex flex-1 h-80 object-cover" src={p.img} alt="" />
          //   <div className="w-full flex flex-col p-3 items-start">
          //     <p className="font-bold text-xl">{p.name}</p>
          //     <p>{p.detail}</p>
          //     <p>
          //       Price : <span className="text-xl text-red-600">{p.price}</span>{" "}
          //       $
          //     </p>
          //   </div>
          //   <button
          //     onClick={(e) => {
          //       e.stopPropagation(); // ป้องกันการ trigger navigate
          //       // updateCartWithProduct(p.id.toString());
          //       // console.log("update cart", p.id);
          //       test(p.name);
          //     }}
          //     className="text-white rounded-lg p-2 my-2 bg-blue-500 hover:bg-blue-700 transition-all duration-300"
          //   >
          //     add to cart
          //   </button>
          // </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
