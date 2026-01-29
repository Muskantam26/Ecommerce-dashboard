import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";


const StoreSettingButton = ({ label, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`h-15 w-full rounded-sm border border-(--bg-border-color) 
        text-sm font-medium transition
        ${
          active
            ? "bg-(--primary) text-(--text-invert)"
            : "text-(--text-black) hover:bg-(--primary) hover:text-(--text-invert)"
        }`}
    >
      {label}
    </button>
  );
};

const AppSetting = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const storeButtons = [
    { key: "store", label: "Store Settings", path: "store-settings" },
    { key: "seo", label: "SEO Settings", path: "seo-settings" },
    { key: "custom", label: "Custom Settings", path: "custom-settings" },
    { key: "checkout", label: "Checkout Settings", path: "checkout-settings" },
    { key: "shipping", label: "Shipping Label Settings", path: "shipping-label" },
    { key: "boost", label: "Boost Sale Settings", path: "boost-sale-settings" },
    { key: "count_down", label: "Count-Down Timer Setting", path: "count-down-timer" },
    { key: "donation", label: "Donation Setting", path: "donation-settings" },
    { key: "manage_duo", label: "Manage Duo2FA", path: "manage-duo2fa" },
    { key: "free_shipping_popup", label: "Free Shipping Pop-Up Setting", path: "free-shipping-popup-settings" },
    { key: "hours_setting", label: "Hours Setting", path: "hours-settings" },
    { key: "pdf_voucher", label: "PDF Voucher Mail Setting", path: "pdf-voucher-mail-settings" },
    { key: "partial_payment", label: "Partial Payments Setting", path: "partial-payments-settings" },
    { key: "product_catelog", label: "Product Catelog Setting", path: "product-catelog-settings" },
    { key: "product_enquiry", label: "Product Enquiry Setting", path: "product-enquiry-settings" },
    { key: "product-pricing", label: "Product Pricing Setting", path: "product-pricing-settings" },
    { key: "purchase_notification", label: "Purchase Notification Setting", path: "purchase-notification-settings" },
    { key: "quick_checkout", label: "Quick Checkout Setting", path: "quick-checkout-settings" },
    { key: "recent_order", label: "Recent Order Setting", path: "recent-order-settings" },
    { key: "review_reminder", label: "Review Reminder Setting", path: "review-reminder-settings" },
    { key: "reward_club", label: "Reward/Club Point Setting", path: "reward-club-point-settings" },
    { key: "skip_cart", label: "Skip Cart Setting", path: "skip-cart-setting" },
    { key: "winner", label: "Winner Customer Setting", path: "winner-customer-setting" },
    { key: "spin", label: "Spin To Win Label Setting", path: "spin-to-win-label-settings" },
    
  ];

  const isActive = (path) => location.pathname.endsWith(path);

  return (
    <>
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold app-text">Store Setting</h1>
          <div className="flex items-center gap-1">
            <button className="text-sm text-(--primary) cursor-pointer">Home &gt;</button>
            <span className="text-(--text-muted) text-sm">Store Setting</span>
          </div>
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="pl-4 py-3 border border-(--bg-border-color) rounded-lg text-sm w-48"
        />
      </div>

      {/* BUTTON BOX */}
      <div className="w-full bg-(--card-bg) rounded-2xl shadow-2xl p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {storeButtons.map((item) => (
            <StoreSettingButton
              key={item.key}
              label={item.label}
              active={isActive(item.path)}
              onClick={() => navigate(`/storesetting/${item.path}`)}
            />
          ))}
        </div>
      </div>

     
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default AppSetting;
