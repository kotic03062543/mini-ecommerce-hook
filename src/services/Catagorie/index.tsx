export const serviceGetCategorie = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  ).then((req) =>
    req.json().catch(() => {
      console.log("error");
    })
  );
  return response;
};
