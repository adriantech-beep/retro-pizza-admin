import OrderCard from "./OrderCard";
import { useGetOrders } from "./useGetOrders";

const OrderList = () => {
  const { orders } = useGetOrders();
  console.log(orders);

  return (
    <div className="bg-gradient-to-b from-black via-[#0f0f0f] to-black min-h-screen p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrderList;
