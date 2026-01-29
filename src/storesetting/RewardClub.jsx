import React, { useState } from "react";
import ToggleSwitch from "../dashboardbtn/ToggleSwitch";
import { ChevronDown } from "lucide-react";
import { SaveButton } from "../dashboardbtn/StoreBtn";

const RewardClub = () => {
  const [activeSection, setActiveSection] = useState("orderReward");

  const [formData, setFormData] = useState({
    orderReward: { price: "", points: "" },
    rewardSetting: { price: "", points: "" },
    checkoutReward: { price: "", points: "" },
  });

  const toggleSection = (key) => {
    setActiveSection(activeSection === key ? null : key);
  };

  const handleChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const renderRewardBox = (sectionKey) => (
    <div className="p-6 bg-white space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="number"
          placeholder="Order Price"
          value={formData[sectionKey].price}
          onChange={(e) =>
            handleChange(sectionKey, "price", e.target.value)
          }
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400"
        />

        <input
          type="number"
          placeholder="Reward Points"
          value={formData[sectionKey].points}
          onChange={(e) =>
            handleChange(sectionKey, "points", e.target.value)
          }
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400"
        />
      </div>

      <p className="text-gray-700">
       So this is the example of how customer reward points will be counted : (Checkout Order Price (Ex. 100) * Reward Point(Ex. 10) / (Order Price(Ex. 40)) = (Customer Total Points : 25)
      </p>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-2xl shadow-gray-200 mt-5">
      {/* HEADER */}
      <div className="flex items-center justify-between p-6 border-b">
        <h3 className="text-lg font-semibold border-l-4 border-green-500 pl-3">
          Reward / Club Point Settings
        </h3>
        <ToggleSwitch />
      </div>

      <div className="p-6 space-y-4 ">

        {/* ORDER REWARD */}
        <div className="shadow-xl rounded-xl overflow-hidden">
          <button
            onClick={() => toggleSection("orderReward")}
            className="w-full flex justify-between px-5 py-4 bg-gray-100"
          >
            <span className="text-green-600">Order Reward Setting</span>
            <ChevronDown
              className={`transition-transform ${
                activeSection === "orderReward" ? "rotate-180" : ""
              }`}
            />
          </button>
          {activeSection === "orderReward" && renderRewardBox("orderReward")}
        </div>

        {/* REWARD SETTING */}
        <div className="shadow-xl rounded-xl overflow-hidden">
          <button
            onClick={() => toggleSection("rewardSetting")}
            className="w-full flex justify-between px-5 py-4 bg-gray-100"
          >
            <span className="text-green-600">Reward Setting</span>
            <ChevronDown
              className={`transition-transform ${
                activeSection === "rewardSetting" ? "rotate-180" : ""
              }`}
            />
          </button>
          {activeSection === "rewardSetting" &&
            renderRewardBox("rewardSetting")}
        </div>

        {/* CHECKOUT REWARD */}
        <div className="shadow-xl rounded-xl overflow-hidden">
          <button
            onClick={() => toggleSection("checkoutReward")}
            className="w-full flex justify-between px-5 py-4 bg-gray-100"
          >
            <span className="text-green-600">Checkout Reward Setting</span>
            <ChevronDown
              className={`transition-transform ${
                activeSection === "checkoutReward" ? "rotate-180" : ""
              }`}
            />
          </button>
          {activeSection === "checkoutReward" &&
            renderRewardBox("checkoutReward")}
        </div>
      </div>

      {/* SAVE */}
      <div className="flex justify-end p-6 ">
       <SaveButton/>
      </div>
    </div>
  );
};

export default RewardClub;
