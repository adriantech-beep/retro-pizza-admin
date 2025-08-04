import { useProducts } from "../products/useProducts";
import Loader from "../components/Loader";
import ProductsList from "../components/ProductsList";

const Products = () => {
  const { products = [], isLoading } = useProducts();

  if (isLoading) return <Loader />;

  if (products?.length === 0)
    return <p className="text-center text-gray-400 mt-10">No pizzas found.</p>;

  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products?.map((product) => (
        <ProductsList key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
