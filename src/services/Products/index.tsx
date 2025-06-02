export const serviceGetProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .catch(() => {
      console.log("error");
    });
  return response;
};
