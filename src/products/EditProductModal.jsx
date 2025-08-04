import { useState } from "react";
import { useUpdateProduct } from "./useUpdateProduct";
import { useNavigate } from "react-router-dom";

const EditProductModal = ({ product, onCloseModal }) => {
  const {
    id,
    name: initialName,
    description: initialDescription,
    category: initialCategory,
    price: initialPrice,
  } = product;

  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);
  const [category, setCategory] = useState(initialCategory);
  const [price, setPrice] = useState(initialPrice);
  const [imageUrl, setImageUrl] = useState(null);

  const { mutate: updateProduct, isPending } = useUpdateProduct();
  const navigate = useNavigate();

  const handleCancel = () => {
    onCloseModal?.();
    navigate("/products");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    if (imageUrl) formData.append("image", imageUrl);

    updateProduct({ id, product: formData });
  };
  return (
    <div className=" border border-[#ff4d00]/30 text-white rounded-xl p-6 w-full max-w-xlshadow-lg animate-fadeIn">
      <h2 className="text-xl font-bold text-[#ff4d00] mb-4">
        Edit Product Info
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Product name</label>
          <input
            type="name"
            className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-600"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Product description</label>
          <input
            type="description"
            className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-600"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Product category</label>
          <input
            type="category"
            className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-600"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Product price</label>
          <input
            type="price"
            className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-600"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Product image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageUrl(e.target.files[0])}
            className="block w-full text-sm text-gray-300"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 rounded border border-gray-500 hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isPending}
            className="px-4 py-2 rounded bg-[#ff4d00] hover:bg-[#e94300] font-semibold"
          >
            {isPending ? "Updating..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductModal;
