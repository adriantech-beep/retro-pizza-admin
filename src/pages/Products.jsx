import { useProducts } from "../products/useProducts";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { useSoftDeleteProduct } from "../products/useSoftDeleteProduct";
import Loader from "../components/Loader";
import ProductsList from "../components/ProductsList";
import ModalWindow from "../components/ModalWindow";
import EditProductModal from "../products/EditProductModal";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";

const Products = () => {
  const { products = [], isLoading } = useProducts();
  const [productDetails, setProductDetails] = useState(null);
  const { mutate: softDeleteProduct } = useSoftDeleteProduct();

  const navigate = useNavigate();

  const handleEditItem = useCallback(
    (product) => {
      setProductDetails(product);
      navigate(`/products/${product.id}/edit`);
    },
    [navigate]
  );

  const handleDeleteItem = useCallback(
    (product) => {
      setProductDetails(product);
      navigate(`/products/${product.id}/soft-delete`);
    },
    [navigate]
  );

  if (isLoading) return <Loader />;

  if (products?.length === 0)
    return <p className="text-center text-gray-400 mt-10">No pizzas found.</p>;

  return (
    <ModalWindow>
      <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products?.map((product) => (
          <ProductsList
            key={product.id}
            product={product}
            handleEditItem={handleEditItem}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </div>
      <ModalWindow.Window name="edit-product">
        <EditProductModal product={productDetails} />
      </ModalWindow.Window>
      <ModalWindow.Window name="delete-product">
        <ConfirmDeleteModal
          item={productDetails}
          identifierKey="name"
          onConfirmDelete={(productDetails) =>
            softDeleteProduct(productDetails?.id)
          }
        />
      </ModalWindow.Window>
    </ModalWindow>
  );
};

export default Products;
