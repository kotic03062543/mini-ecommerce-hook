import Breadcrumb from "../../components/Breadcrumb";
import useProductDetailViewModel from "./ProductDetailViewModel";

function ProductDetail() {
  // console.log("ProductDetail");
  const viewModel = useProductDetailViewModel();
  if (!viewModel) {
    return <div>Error: Unable to load products.</div>;
  }
  const { updateCartWithProduct, product, isLoading, breadcrumbItems }: any =
    viewModel;

  if (isLoading) {
    return (
      <div className="p-5 md:p-20 grid md:flex gap-6 animate-pulse">
        <div className="w-full md:w-1/2 h-[300px] bg-gray-300 rounded-lg"></div>
        <div className="flex flex-col gap-4 w-full">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>
          <div className="h-24 bg-gray-300 rounded"></div>
          <div className="h-12 bg-gray-400 rounded w-full mt-4"></div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="p-5 md:p-20 grid md:flex gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full px-5 md:w-1/2 espect-[4/3] object-fit rounded-lg mb-5 md:mb-0 md:aspect-[4/3] md:h-full md:max-w-[400px] mx-auto"
        />
        <div className="w-full flex flex-col gap-3">
          <p className="text-2xl font-bold">{product.title}</p>
          <p className="text-2xl font-semibold">
            <span className="text-red-500">{product.price}</span> $
          </p>
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Description</h3>
            <p className="mt-2 text-sm text-gray-700">{product.description}</p>
          </div>
          <button
            onClick={() => updateCartWithProduct(product)}
            className="mt-5 cursor-pointer w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
