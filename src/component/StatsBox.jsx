
const StatsBox = ({ children }) => {
  return (
    <div className="bg-(--card-bg) rounded-xl border border-(--bg-border-color) p-5 h-full">
      {children}
    </div>
  );
};

export default StatsBox;
