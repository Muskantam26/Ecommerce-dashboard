import {
  RiTimeLine,
  RiArrowGoBackLine,
  RiCheckboxCircleLine,
  RiCloseCircleLine,
  RiTruckLine,
  RiBox3Line,
  RiShoppingCartLine,
  RiUser3Line,
} from "react-icons/ri";

import DashboardCard from "../component/DashboardCard";

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <DashboardCard
        title="Pending Orders"
        count={4}
        icon={<RiTimeLine />}
        iconBg="bg-indigo-100"
        iconColor="text-indigo-600"
      />

      <DashboardCard
        title="Order Return"
        count={0}
        icon={<RiArrowGoBackLine />}
        iconBg="bg-green-100"
        iconColor="text-green-600"
      />

      <DashboardCard
        title="Confirmed Order"
        count={2}
        icon={<RiCheckboxCircleLine />}
        iconBg="bg-purple-100"
        iconColor="text-purple-600"
      />

      <DashboardCard
        title="Cancel Order"
        count={3}
        icon={<RiCloseCircleLine />}
        iconBg="bg-yellow-100"
        iconColor="text-yellow-600"
      />

      <DashboardCard
        title="Order Shipped"
        count={3}
        icon={<RiTruckLine />}
        iconBg="bg-teal-100"
        iconColor="text-teal-600"
      />

      <DashboardCard
        title="Order Delivered"
        count={3}
        icon={<RiBox3Line />}
        iconBg="bg-blue-100"
        iconColor="text-blue-600"
      />

      <DashboardCard
        title="Total Orders"
        count={15}
        icon={<RiShoppingCartLine />}
        iconBg="bg-lime-100"
        iconColor="text-lime-600"
      />

      <DashboardCard
        title="Total Customers"
        count={11}
        icon={<RiUser3Line />}
        iconBg="bg-pink-100"
        iconColor="text-pink-600"
      />

    </div>
  );
};

export default DashboardStats;
