const DashboardMetricsList = ({ metric }) => {
  return (
    <div
      key={metric.label}
      className="flex items-center gap-4 bg-[#1f2937] p-4 rounded-xl shadow-md"
    >
      <div className={`text-white text-2xl p-3 rounded-full ${metric.color}`}>
        {metric.icon}
      </div>
      <div>
        <p className="text-sm text-gray-400">{metric.label}</p>
        <p className="text-lg font-semibold text-white">{metric.value}</p>
      </div>
    </div>
  );
};

export default DashboardMetricsList;
