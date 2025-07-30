import Loader from "../components/Loader";
import { useGetTrashedProducts } from "../products/useGetTrashedProducts";
import { useRestoreProduct } from "../products/useRestoreProduct";

const TrashItems = () => {
  const { products, isLoading } = useGetTrashedProducts();
  const { mutate: restoreProduct, isPending } = useRestoreProduct();

  const handleRestore = (id) => {
    restoreProduct(id);
  };

  if (isLoading) return <Loader />;

  if (!products?.length) return <p>No products to show</p>;

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold text-[#ff4d00] mb-4">Trash Bin</h2>

      {products?.length === 0 ? (
        <p className="text-gray-400">No deleted products.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#1a1a2e] p-4 rounded shadow border border-[#ff4d00]/20"
            >
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <button
                onClick={() => handleRestore(product.id)}
                className="mt-2 px-3 py-1 text-sm bg-green-600 rounded hover:bg-green-500"
              >
                {isPending ? "Restoring..." : "Restore"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrashItems;
