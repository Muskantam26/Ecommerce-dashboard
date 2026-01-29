import React, { useState } from "react";
import ToggleSwitch from "../dashboardbtn/ToggleSwitch";
import { SaveButton } from "../dashboardbtn/StoreBtn";

const WooCommercesetting = () => {

  const [settings, setSettings] = useState({
    enabled: false,
    store_url: "",
    consumer_key: "",
    consumer_secret: "",
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 
  const handleToggle = () => {
    setSettings((prev) => ({
      ...prev,
      enabled: !prev.enabled,
    }));
  };

  
  return (
    <div className="bg-white rounded-xl">

      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-normal border-l-4 border-(--primary) pl-3">
          WooCommerce Settings
        </h3>

        <ToggleSwitch
          checked={settings.enabled}
          onChange={handleToggle}
        />
      </div>

      <hr className="border border-(--bg-border-color) mt-8" />

      {/* ===== FORM ===== */}
      <div className="p-4 grid grid-cols-1 gap-6">

        {/* STORE URL */}
        <div>
          <h4 className="font-semibold mb-1">Store URL</h4>
          <input
            type="url"
            name="store_url"
            value={settings.store_url}
            onChange={handleChange}
            placeholder="woocommerce store url"
            className="input"
            disabled={!settings.enabled}
          />
        </div>

        {/* CONSUMER KEY */}
        <div>
          <h4 className="font-semibold mb-1">Consumer Key</h4>
          <input
            type="password"
            name="consumer_key"
            value={settings.consumer_key}
            onChange={handleChange}
            placeholder="WooCommerce Consumer Key"
            className="input"
            disabled={!settings.enabled}
          />
        </div>

        {/* CONSUMER SECRET */}
        <div>
          <h4 className="font-semibold mb-1">Consumer Secret</h4>
          <input
            type="password"
            name="consumer_secret"
            value={settings.consumer_secret}
            onChange={handleChange}
            placeholder="WooCommerce Consumer Secret"
            className="input"
            disabled={!settings.enabled}
          />
        </div>

      </div>

      <hr className="border border-(--bg-border-color) mt-5" />

      {/* ===== ACTION ===== */}
      <div className="flex justify-end p-5">
        <SaveButton  />
      </div>

    </div>
  );
};

export default WooCommercesetting;
