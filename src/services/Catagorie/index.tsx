export const serviceGetCategorie = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((req) =>
    req.json().catch(() => {
      console.log("error");
    })
  );
  return response;
};
