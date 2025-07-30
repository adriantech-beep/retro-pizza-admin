import DashboardMetrics from "../components/DashboardMetrics";
import RecentOrders from "../components/RecentOrders";
import LowStockPizzas from "../components/LowStockPizzas";
import TopSellingPizzas from "../components/TopSellingPizzas";
import QuickActionsPanel from "../components/QuickActionsPanel";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <DashboardMetrics />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RecentOrders />
        <LowStockPizzas />
      </div>
      <TopSellingPizzas />
      <QuickActionsPanel />
    </div>
  );
};

export default Dashboard;
