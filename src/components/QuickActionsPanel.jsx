// src/components/QuickActionsPanel.jsx
const QuickActionsPanel = () => {
  return (
    <div className="bg-[#1f2937] p-4 rounded-xl shadow-md flex flex-col md:flex-row justify-between gap-4">
      <button className="bg-[#ff4d00] text-white px-4 py-2 rounded w-full md:w-auto">
        ➕ Add New Pizza
      </button>
      <button className="bg-[#4b5563] text-white px-4 py-2 rounded w-full md:w-auto">
        📦 Manage Stock
      </button>
      <button className="bg-[#4b5563] text-white px-4 py-2 rounded w-full md:w-auto">
        ⚙️ Settings
      </button>
    </div>
  );
};

export default QuickActionsPanel;
