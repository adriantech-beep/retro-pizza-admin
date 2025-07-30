import DashboardMetricsList from "./DashboardMetricsList";
import {
  BanknoteArrowDown,
  ShoppingCart,
  Pizza,
  Hourglass,
} from "lucide-react";

const metrics = [
  {
    label: "Total Sales",
    value: "₱54,230",
    icon: <BanknoteArrowDown />,
    color: "bg-green-500",
  },
  {
    label: "Orders Today",
    value: "127",
    icon: <ShoppingCart />,
    color: "bg-blue-500",
  },
  {
    label: "Available Pizzas",
    value: "23",
    icon: <Pizza />,
    color: "bg-yellow-500",
  },
  {
    label: "Pending Orders",
    value: "5",
    icon: <Hourglass />,
    color: "bg-red-500",
  },
];

const DashboardMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <DashboardMetricsList key={metric.label} metric={metric} />
      ))}
    </div>
  );
};

export default DashboardMetrics;
