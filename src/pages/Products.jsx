import { useCallback, useState } from "react";
import { useProducts } from "../products/useProducts";
import { useNavigate } from "react-router-dom";
import { useSoftDeleteProduct } from "../products/useSoftDeleteProduct";

import Loader from "../components/Loader";
import ProductsList from "../components/ProductsList";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import EditProductModal from "../products/EditProductModal";

const Products = () => {
  const { products, isLoading } = useProducts();

  const navigate = useNavigate();
  const { mutate: softDeleteProduct } = useSoftDeleteProduct();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleDelete = useCallback(
    (product) => {
      navigate(`/products/delete/${product.id}`);
      setSelectedProduct(product);
      setShowModal(true);
    },
    [navigate]
  );
  const handleEditClick = useCallback((product) => {
    setSelectedProduct(product);
    setIsEditOpen(true);
  }, []);

  const confirmDelete = useCallback(() => {
    softDeleteProduct(selectedProduct.id);
    setShowModal(false);
  }, [softDeleteProduct, selectedProduct]);

  const closeModal = useCallback(() => {
    navigate("/products");
    setShowModal(false);
  }, [navigate]);

  if (isLoading) return <Loader />;

  if (products?.length === 0)
    return <p className="text-center text-gray-400 mt-10">No pizzas found.</p>;

  return (
    <>
      <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products?.map((product) => (
          <ProductsList
            key={product.id}
            product={product}
            onDeleteClick={handleDelete}
            onEdit={handleEditClick}
          />
        ))}
      </div>

      <ConfirmDeleteModal
        isOpen={showModal}
        onClose={closeModal}
        onConfirm={confirmDelete}
        productName={selectedProduct?.name}
      />

      {isEditOpen && (
        <EditProductModal
          product={selectedProduct}
          onClose={() => setIsEditOpen(false)}
        />
      )}
    </>
  );
};

export default Products;
