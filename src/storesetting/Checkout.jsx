import React, { useState } from "react";
import ToggleSwitch from "../dashboardbtn/ToggleSwitch";
import { SaveButton } from "../dashboardbtn/StoreBtn";

const Checkout = () => {

 
  const [checkoutSettings, setCheckoutSettings] = useState({
    additionalNotes: false,
    checkoutLoginRequired: false,
  });


  const handleToggle = (key) => {
    setCheckoutSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };


  return (
      <div className="mt-6 bg-(--card-bg) rounded-xl p-6 shadow">
      {/* Header */}
      <div className="text-lg font-semibold mb-8 border-l-4 border-(--bg-border) pl-3">
        <h3>Checkout Settings</h3>
      </div>

      <hr className="border-(--bg-border-color)" />

      {/* Settings */}
      <div className="flex mt-10 justify-between gap-2">

        {/* Additional Notes */}
        <div className="flex-block">
          <h3 className="text-(--primary) font-semibold">
            Additional Notes
          </h3>
          <p className="text-xs text-gray-600 w-150">
            Note: Enable the Additional Notes functionality to allow users to
            provide extra order-specific information on the checkout page.
          </p>

          <ToggleSwitch
            checked={checkoutSettings.additionalNotes}
            onChange={() => handleToggle("additionalNotes")}
          />
        </div>

       
        <div className="flex-block">
          <h3 className="text-(--primary) font-semibold">
            Is Checkout Login Required
          </h3>
          <p className="text-xs text-(--text-muted) w-150">
            Note: Use the Is Checkout Required feature to prevent guest checkout,
            requiring users to log in before completing their purchase for added
            security.
          </p>

          <ToggleSwitch
            checked={checkoutSettings.checkoutLoginRequired}
            onChange={() => handleToggle("checkoutLoginRequired")}
          />
        </div>
      </div>

      <hr className="border-(--bg-border-color) mt-10" />

     
      <div className="flex gap-2 justify-end mt-10">
        <SaveButton />
      </div>
    </div>
  );
};

export default Checkout;
