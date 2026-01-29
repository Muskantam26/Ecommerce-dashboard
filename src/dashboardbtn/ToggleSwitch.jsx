import React from "react";

const ToggleSwitch = ({ label, checked, onChange }) => {
  return (
    <div className="flex flex-col ">
      {/* Label */}
      <label className="text-xs font-bold uppercase tracking-tight ">
        {label}
      </label>

      {/* Toggle */}
      <div
        onClick={onChange}
        className={`relative w-20 h-10 flex items-center border border-(--bg-border-color) rounded-sm p-1 cursor-pointer transition-all
          ${checked ? "bg-(--primary)" : "bg-(--primary)"}`}
      >
        {/* ON / OFF text */}
        <span
          className={`absolute text-[15px] font-semibold text-(--text-invert) transition-all duration-300
            ${checked ? "left-2" : "right-2"}`}
        >
          {checked ? "On" : "Off"}
        </span>

        {/* Slider */}
        <div
          className={`bg-(--bg-main) w-5 h-9 transition-transform duration-300
            ${checked ? "translate-x-13.5" : "translate-x-0"}`}
        />
      </div>
    </div>
  );
};

export default ToggleSwitch;
