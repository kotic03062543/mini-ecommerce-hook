import ProductSummaryViewModel from "./ProductSummaryViewModel";

function ProductSummary({ onClose }: { onClose: () => void }) {
  const { useCart, total, upQuantity, downQuantity } =
    ProductSummaryViewModel();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-40 w-full p-4 bg-white shadow-lg"
      aria-labelledby="drawer-top-label"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Summaries</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-black text-lg"
        >
          ❌
        </button>
      </div>

      {useCart.length === 0 ? (
        <p className="text-gray-500">No product found!</p>
      ) : (
        <div className="space-y-4">
          {useCart.map((item) => (
            <div
              key={item.product.id}
              className="flex items-center justify-between border-b pb-2"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h4 className="font-semibold">{item.product.title}</h4>
                  <p className="text-sm text-gray-500">
                    {item.product.price.toFixed(2)} บาท
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => downQuantity(item.product.id)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() => upQuantity(item.product.id)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-4">
            <p className="text-lg font-bold">ยอดรวม: {total.toFixed(2)} บาท</p>
          </div>
        </div>
      )}

      <div className="mt-6 text-right">
        <a
          href="/checkout"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded"
        >
          Check out
        </a>
      </div>
    </div>
  );
}

export default ProductSummary;
