export const Container = ({ children, className = "" }) => {
  return (
    <div className={`bg-(--bg-main) rounded-2xl shadow-xl  w-full ${className}`}>
      {children }
    </div>
  );
};