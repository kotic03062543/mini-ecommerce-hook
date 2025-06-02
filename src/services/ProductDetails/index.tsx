export const serviceGetProductDetails = async (id: string) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .catch(() => {
      console.log("error");
    });
  return response;
};
