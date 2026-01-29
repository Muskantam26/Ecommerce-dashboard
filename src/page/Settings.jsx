import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";


const StoreSettingButton = ({ label, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`h-15 w-full rounded-sm border border-(--bs-gray-200) 
        text-sm font-medium transition
        ${
          active
            ? "bg-(--primary) text-(--text-invert)"
            : "text-(text-black) hover:bg-(--primary) hover:text-(--text-invert)"
        }`}
    >
      {label}
    </button>
  );
};

const Settings = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const storeButtons = [
    { key: "email", label: "Email Setting", path: "email-setting" },
    { key: "brand", label: "Brand Settings", path: "brand-settings" },
    { key: "system", label: "System Settings", path: "system-settings" },
    { key: "payment", label: "Payment Settings", path: "payment-settings" },
    { key: "currency", label: "Currency Settings", path: "currency-settings" },
    { key: "email-notification", label: "Emial Notification Settings", path: "email-notification-settings" },
    { key: "shopify-settings", label: "Shopify Settings", path: "shopify-settings" },
    { key: "woocommerce", label: "WooCommerce Setting", path: "woocommerce-settings" },
    { key: "webhook", label: "Webhook Settings", path: "webhook-settings" },
    { key: "loyality-program", label: "Loyality Program Settings", path: "loyality-program-settings" },
    { key: "whatsapp_setting", label: "Whatsapp Settings", path: "whatsapp-settings" },
    { key: "whatsapp-massage", label: "Whatsapp Message Settings", path: "whatsapp-massage-settings" },
    { key: "twilio", label: "Twilio Settings", path: "twilio-settings" },
    { key: "pixel-fields", label: "Pixel fields Settings", path: "pixel-fields-settings" },
    { key: "stock", label: "Stock Settings", path: "stock-settings" },
    { key: "tax-option", label: "Tax Option Settings", path: "tax-option-settings" },
    { key: "pwa", label: "PWA Settings", path: "pwa-settings" },
    { key: "refund", label: "Refund Settings", path: "refund-settings" },
    { key: "whatsapp-business", label: "Whatsapp Business Settings", path: "whatsapp-business-settings" },
    { key: "print", label: "Print Settings", path: "print-settings" },
    { key: "coupon-email", label: "Coupon Email Settings", path: "coupon-email-settings" },
    { key: "manage-frequently", label: "Manage Frequently Product", path: "manage-frequently-product" },
    { key: "manage-google", label: "Manage Google", path: "manage-google-setting" },
    { key: "hubspot", label: "HubSpot Settings", path: "hubspot-settings" },

    {key:"badge",label:"Badge Settings",path:"badge-settings"},
    {key:"manage_recently",label:"Manage Recently Viewed",path:"manage-recently-settings"},
    {key:"manage_Bitbucket",label:"Manage BitBucket ",path:"manage-bitbucket-settings"},
    {key:"manage_facebook",label:"Manage Facebook",path:"manage-facebook-settings"},
    {key:"manage-linkedin",label:"Manage LinkedIn",path:"manage-linkedin-settings"},
    {key:"manage-outlook",label:"Manage Outlook",path:"manage-outlook-settings"},
    {key:"manage-slack",label:"Manage Slack",path:"manage-slack-settings"},
    {key:"manage-twitter",label:"Manage Twitter",path:"manage-twitter-settings"},
    {key:"manage-github",label:"Manage GitHub",path:"manage-github"},
    {key:"store_locate-settings",label:"Store Locate Settings",path:"store-locate-settings"},
    {key:"manage_tawk.to",label:"Manage Tawk.to",path:"manage-tawk.to"},
    {key:"manage_wizzchat",label:"Manage Wizzchat",path:"manage-wizzchat-settings"}
    
  ];

  const isActive = (path) => location.pathname.endsWith(path);

  return (
    <>
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold app-text"> Setting</h1>
          <div className="flex items-center gap-1">
            <button className="text-sm text-(--primary) cursor-pointer">Home &gt;</button>
            <span className="text-(--bs-gray-500) text-sm"> Setting</span>
          </div>
        </div>

      
      </div>

      {/* BUTTON BOX */}
      <div className="w-full bg-(--bs-white) rounded-2xl shadow-xl p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {storeButtons.map((item) => (
            <StoreSettingButton
              key={item.key}
              label={item.label}
              active={isActive(item.path)}
              onClick={() => navigate(`/setting/${item.path}`)}
            />
          ))}
        </div>
      </div>

     
      <div className="shadow-2xl mt-5 p-5 rounded-2xl">
        <Outlet />
      </div>
    </>
  );
};

export default Settings;
