// src/components/TopSellingPizzas.jsx
const topPizzas = [
  { name: "Turbo Hawaiian", sold: 120 },
  { name: "Neo Supreme", sold: 100 },
  { name: "Cosmic Pepperoni", sold: 85 },
];

const TopSellingPizzas = () => {
  return (
    <div className="bg-[#1f2937] p-4 rounded-xl shadow-md">
      <h3 className="text-xl text-white mb-4 font-semibold">
        Top Selling Pizzas
      </h3>
      <ul className="space-y-2">
        {topPizzas.map((pizza) => (
          <li key={pizza.name} className="flex justify-between text-gray-300">
            <span>{pizza.name}</span>
            <span className="text-green-400">{pizza.sold} sold</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSellingPizzas;
