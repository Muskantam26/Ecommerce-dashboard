import React, { useState } from "react";
import ToggleSwitch from "../dashboardbtn/ToggleSwitch";
import { SaveButton } from "../dashboardbtn/StoreBtn";

const Loyality = () => {

  const [settings, setSettings] = useState({
    enabled: false,
    order_amount: 1000,
    reward_points: 10,
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  
  const handleToggle = () => {
    setSettings((prev) => ({
      ...prev,
      enabled: !prev.enabled,
    }));
  };

 

  return (
    <div className="bg-(--card-bg) rounded-xl">

      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-normal border-l-4 border-(--primary) pl-3">
          Loyalty Program Settings
        </h3>

        <ToggleSwitch
          checked={settings.enabled}
          onChange={handleToggle}
        />
      </div>

      <hr className="border border-(--bg-border-color) mt-5" />

      {/* ===== FORM ===== */}
      <div className="mt-5 p-5 space-y-3">

        <h4 className="font-semibold">
          Reward points on orders of ${settings.order_amount}
        </h4>

        <input
          type="number"
          name="reward_points"
          value={settings.reward_points}
          onChange={handleChange}
          className="input w-40"
          disabled={!settings.enabled}
        />

      </div>

      <hr className="border border-(--bg-border-color) mt-5" />

      {/* ===== ACTION ===== */}
      <div className="flex justify-end p-5">
        <SaveButton  />
      </div>

    </div>
  );
};

export default Loyality;
