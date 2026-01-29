const DashboardCard = ({
  title,
  count,
  icon,
  iconBg = "bg-blue-100",
  iconColor = "text-blue-600",
}) => {
  return (
    <div className="bg-(--card-bg) rounded-[5px] border shadow-2xs border-(--bg-border-color) px-6 p-4 flex items-center justify-between">
      
      
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg ${iconBg}`}>
          <span className={`text-2xl ${iconColor}`}>
            {icon}
          </span>
        </div>

        <div>
          <p className=" text-m font-medium sm:text-m">
            {title}
          </p>
          <h2 className="text-2xl font-bold text-(--text-main)">
            {count}
          </h2>
        </div>
      </div>

      
    </div>
  );
};

export default DashboardCard;
