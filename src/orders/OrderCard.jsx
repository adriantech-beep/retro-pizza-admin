// OrderCard.jsx
import { format } from "date-fns";
import { useState } from "react";
import { useUpdateOrder } from "./useUpdateOrder";

const OrderCard = ({ order = [] }) => {
  console.log(order);
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState(order?.status);
  const { mutate: updateOrder } = useUpdateOrder();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateOrder({ id: order.id, status });
    setIsEditing(false);
  };

  return (
    <div className="bg-[#111] border-4 border-[#ff4d00] rounded-xl shadow-lg p-4 flex flex-col items-center text-center">
      {/* Images */}
      <div className="bg-[#222] flex items-center justify-center rounded-lg mb-4 border-2 border-[#ff4d00] p-2 gap-2 flex-wrap">
        {order.cartItems?.map((item, index) => (
          <img
            key={index}
            src={item.imageUrl}
            // alt={item.name}
            className="object-contain w-28 h-28 drop-shadow-[0_0_6px_#ff4d00]"
          />
        ))}
      </div>

      {/* Items */}
      {/* <div className="text-lg mb-2">
        {order.cartItems.map((item, index) => (
          <p className="flex gap-2" key={index}>
            {item.name}{" "}
            <span className="text-[#e24907]">Qty: {item.quantity}</span>
          </p>
        ))}
      </div> */}

      {/* Status */}
      <span
        className="px-3 py-1 rounded-full text-xs font-bold uppercase"
        style={{
          background:
            status === "pending"
              ? "#ffcc00"
              : status === "delivered"
              ? "#00ff99"
              : "#ff0044",
          color: "#000",
          fontFamily: "'Press Start 2P', cursive",
        }}
      >
        {status}
      </span>

      {/* Details */}
      <div className="mt-4 text-xs space-y-1">
        <p>👤 {order.customerName}</p>
        <p>📞 {order.phone}</p>
        <p>💳 {order.paymentMethod}</p>
        {/* <p>🗓 {format(new Date(order?.createdAt), "PP")}</p> */}
      </div>

      {/* Edit Form */}
      {isEditing ? (
        <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-2 py-1 border rounded"
          >
            <option value="pending">Pending</option>
            <option value="preparing">Preparing</option>
            <option value="out for delivery">Out for Delivery</option>
            <option value="delivered">Delivered</option>
          </select>
          <button
            type="submit"
            className="bg-[#ff4d00] text-white px-2 rounded"
          >
            Save
          </button>
        </form>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="mt-3 bg-[#ff4d00] text-white px-3 py-1 rounded"
        >
          Update Status
        </button>
      )}
    </div>
  );
};

export default OrderCard;
