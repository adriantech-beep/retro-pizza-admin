import { useSoftDeleteProduct } from "../products/useSoftDeleteProduct";

const ConfirmDeleteModal = ({ product, onCloseModal }) => {
  const { id, name } = product;
  const { mutate: softDeleteProduct } = useSoftDeleteProduct();
  return (
    <div className="bg-[#0f0f1e] border border-[#ff4d00]/30 text-white rounded-xl p-6 w-full max-w-sm shadow-lg animate-fadeIn">
      <h2 className="text-xl font-bold text-[#ff4d00] mb-3">
        Confirm Deletion
      </h2>
      <p className="mb-4 text-sm">
        Are you sure you want to delete{" "}
        <span className="font-semibold text-red-400">{name}</span>? This action
        cannot be undone.
      </p>
      <div className="flex justify-end gap-3">
        <button
          onClick={() => onCloseModal?.()}
          className="px-4 py-2 rounded border border-gray-500 hover:bg-gray-700"
        >
          Cancel
        </button>
        <button
          onClick={() => softDeleteProduct(id)}
          className="px-4 py-2 rounded bg-[#ff4d00] hover:bg-[#e94300] font-semibold"
        >
          Yes, Delete
        </button>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
