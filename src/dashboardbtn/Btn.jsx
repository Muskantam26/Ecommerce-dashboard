const Btn = ({
  label,
  variant = "primary", 
  size = "md",        
  onClick,
  className = "",
}) => {

  const base =
    "font-semibold rounded-lg transition-all duration-200 text-sm";

  const variants = {
    primary: "bg-(--primary) text-(--text-invert) hover:opacity-90",
    outline: "border border-(--primary) text-(--text-color) hover:bg-(--primary) hover:text-(--text-invert)",
  };

  const sizes = {
    sm: "px-3 py-1.5",
    md: "px-4 py-2",
    lg: "px-6 py-2.5",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {label}
    </button>
  );
};

export default Btn;
