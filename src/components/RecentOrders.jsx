// src/components/RecentOrders.jsx
const orders = [
  {
    id: "#001",
    name: "Adrian Fajardo",
    pizza: "Turbo Hawaiian",
    status: "Preparing",
    total: "₱450",
  },
  {
    id: "#002",
    name: "Buzz Lightyear",
    pizza: "Cosmic Pepperoni",
    status: "Delivered",
    total: "₱320",
  },
  {
    id: "#003",
    name: "Neo Matrix",
    pizza: "Neo Supreme",
    status: "Pending",
    total: "₱600",
  },
];

const statusColors = {
  Preparing: "text-yellow-400",
  Delivered: "text-green-400",
  Pending: "text-red-400",
};

const RecentOrders = () => {
  return (
    <div className="bg-[#1f2937] p-4 rounded-xl shadow-md">
      <h3 className="text-xl text-white mb-4 font-semibold">Recent Orders</h3>
      <table className="w-full text-sm text-left text-gray-300">
        <thead className="text-xs uppercase text-gray-400">
          <tr>
            <th className="py-2">Order ID</th>
            <th className="py-2">Customer</th>
            <th className="py-2">Pizza</th>
            <th className="py-2">Status</th>
            <th className="py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="border-t border-gray-700">
              <td className="py-2">{o.id}</td>
              <td className="py-2">{o.name}</td>
              <td className="py-2">{o.pizza}</td>
              <td className={`py-2 ${statusColors[o.status]}`}>{o.status}</td>
              <td className="py-2">{o.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
