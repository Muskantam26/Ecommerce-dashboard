import React, { useState } from "react";
import { SaveButton } from "../dashboardbtn/StoreBtn";
import ToggleSwitch from "../dashboardbtn/ToggleSwitch";

const Shopify = () => {
  
  const [shopifySettings, setShopifySettings] = useState({
    storeName: "",
    domain: "myshopify.com",
    accessToken: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShopifySettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  
  return (
    <div>
        <div  className="flex justify-between">
      <h3 className="text-lg font-normal border-l-4 border-(--primary) pl-3">
        Shopify Settings
      </h3>
      <ToggleSwitch/>
      </div>

      <hr className="border border-(--bg-border-color) mt-5" />

      {/* Store URL */}
      <div>
        <h4 className="font-semibold mt-5">Shopify Store URL</h4>

        <div className="flex gap-3 mt-3">
          <input
            type="text"
            name="storeName"
            value={shopifySettings.storeName}
            onChange={handleChange}
            placeholder="Shopify Store url"
            className=" input "
          />

          <input
            type="text"
            value={`.${shopifySettings.domain}`}
            disabled
            className=" input "
          />
        </div>

      
      
      </div>

      {/* Access Token */}
      <div>
        <h4 className="font-semibold mt-5">Shopify Access Token</h4>
        <input
          type="password"
          name="accessToken"
          value={shopifySettings.accessToken}
          onChange={handleChange}
          placeholder="Shopify Access Token"
          className=" input rounded-xl p-2 w-full mt-3"
        />
      </div>

      <hr className="border border-(--bg-border-color) mt-10" />

      <div className="flex justify-end p-5">
        <SaveButton  />
      </div>
    </div>
  );
};

export default Shopify;
