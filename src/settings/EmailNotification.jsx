import React, { useState } from "react";
import { SaveButton } from "../dashboardbtn/StoreBtn";
import ToggleSwitch from "../dashboardbtn/ToggleSwitch";

const EmailNotification = () => {

  const [notifications, setNotifications] = useState({
    orderCreated: false,
    orderStatus: false,
    orderCreatedOwner: false,
    stockStatus: false,
    abandonCart: false,
    abandonWishlist: false,
  });


  const notificationList = [
    { key: "orderCreated", label: "Order Created" },
    { key: "orderStatus", label: "Status" },
    { key: "orderCreatedOwner", label: "Order Created For Owner" },
    { key: "stockStatus", label: "Stock Status" },
    { key: "abandonCart", label: "Abandon Cart" },
    { key: "abandonWishlist", label: "Abandon Wishlist" },
  ];

  const handleToggle = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

 

  return (
    <div>
      <h3 className="text-lg font-semibold border-l-4 border-(--bg-border) pl-3">
        Email Notification Settings
      </h3>

      <div className="grid grid-cols-3 gap-5 font-semibold mt-10">
        {notificationList.map((item) => (
          <div
            key={item.key}
            className="w-full border border-(--bg-border-color) rounded-xl p-3"
          >
            <div className="flex justify-between items-center">
              <h4>{item.label}</h4>
              <ToggleSwitch
                checked={notifications[item.key]}
                onChange={() => handleToggle(item.key)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end p-5 mt-5">
        <SaveButton />
      </div>
    </div>
  );
};

export default EmailNotification;
