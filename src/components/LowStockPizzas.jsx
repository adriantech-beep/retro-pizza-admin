// src/components/LowStockPizzas.jsx
const lowStock = [
  { name: "Galactic Veggie", remaining: 3 },
  { name: "Spicy Rocket", remaining: 2 },
  { name: "Retro Pepperoni", remaining: 5 },
];

const LowStockPizzas = () => {
  return (
    <div className="bg-[#1f2937] p-4 rounded-xl shadow-md">
      <h3 className="text-xl text-white mb-4 font-semibold">Low Stock</h3>
      <ul className="space-y-2">
        {lowStock.map((pizza) => (
          <li key={pizza.name} className="flex justify-between text-gray-300">
            <span>{pizza.name}</span>
            <span className="text-red-400">{pizza.remaining} left</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LowStockPizzas;
