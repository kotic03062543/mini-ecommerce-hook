import { useParams } from "react-router-dom";
import { serviceGetProductDetails } from "../../services/ProductDetails/index";
import { useQuery } from "@tanstack/react-query";
import useProductsViewModel from "../Products/ProductsViewModel";

function ProductDetailViewModel() {
  const viewModel = useProductsViewModel();

  if (!viewModel) {
    return <div>Error: Unable to load products.</div>;
  }
  const { updateCartWithProduct } = viewModel;

  const { id: productId } = useParams();
  const { data: product, isLoading } = useQuery({
    queryKey: ["getProductDetails", productId],
    queryFn: async () => {
      return await serviceGetProductDetails(productId || "");
    },
    enabled: !!productId,
  });

  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "ProductDetail", link: `/ProductDetail/${productId}` },
  ];

  return {
    updateCartWithProduct,  
    product,
    isLoading,
    breadcrumbItems,
  };
}

export default ProductDetailViewModel;
