const ProductsList = ({ product, onDeleteClick, onEdit }) => {
  const { name, imageUrl, category, description, price } = product;

  return (
    <div className="bg-[#0f0f1e] text-[#fff8e7] border border-[#ff4d00]/30 rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-40 object-contain mb-4 rounded"
      />
      <h3 className="text-xl font-semibold text-[#ff4d00] mb-1">{name}</h3>
      <p className="text-sm text-gray-300 mb-2">{category}</p>
      <p className="text-sm text-gray-400 mb-2 truncate">{description}</p>
      <p className="text-lg font-bold text-white mb-3">₱{price}</p>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(product)}
          className="px-3 py-1 text-sm rounded bg-gray-700 hover:bg-gray-600 text-white"
        >
          Edit
        </button>
        <button
          className="px-3 py-1 text-sm rounded bg-red-600 hover:bg-red-500 text-white"
          onClick={() => onDeleteClick(product)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductsList;
