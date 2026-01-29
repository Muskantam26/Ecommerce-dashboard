import React, { useState } from "react";
import { useNavigate } from "react-router";
import appLogo from "../assets/appLogo.png";

import {
  RiSearchLine,
  RiHome4Line,
  RiPaletteLine,
  RiSettings3Line,
  RiTeamLine,
  RiTruckLine,
  RiShoppingCartLine,
  RiShipLine,
  RiFileList3Line,
  RiUserLine,
  RiBarChartLine,
  RiArrowRightSLine,
  RiMegaphoneLine,
  RiCoupon3Line,
  RiMailSendLine,
  RiDiscountPercentLine,
} from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";

const menuItems = [
  {
    id: "dashboard",
    icon: RiHome4Line,
    label: "Dashboard",
    submenu: [
      { id: "dashboard", label: "Dashboard" },
      { id: "storyanalyst", label: "Story Analytics" },
    ],
  },
  {
    id: "themecustomize",
    icon: RiPaletteLine,
    label: "Theme Customize",
  },
  {
    id: "storesetting",
    icon: RiSettings3Line,
    label: "Store Setting",
  },
  {
    id: "staff",
    icon: RiTeamLine,
    label: "Staff",
    submenu: [
      { id: "roles", label: "Roles" },
      { id: "users", label: "Users" },
    ],
  },
  {
    id: "orders",
    icon: RiFileList3Line,
    label: "Orders",
    submenu: [
      { id: "orders", label: "Orders" },
      { id: "orderrefundrequest", label: "Order Refund Request" },
    ],
  },
  {
    id: "deliveryboy",
    icon: RiTruckLine,
    label: "Delivery Boy",
  },
  {
    id: "products",
    icon: RiShoppingCartLine,
    label: "Products",
    submenu: [
      { id: "brand", label: "Brand" },
      { id: "label", label: "Label" },
      { id: "category", label: "Category" },
      { id: "product", label: "Product" },
      { id: "attributes", label: "Attributes" },
      { id: "testimonial", label: "Testimonial" },
      { id: "questionanswer", label: "Question Answer" },
    ],
  },
  {
    id: "shipping",
    icon: RiShipLine,
    label: "Shipping",
    submenu: [
      { id: "shippingclass", label: "Shipping Class" },
      { id: "shippingzone", label: "Shipping Zone" },
    ],
  },
  {
    id: "customers",
    icon: RiUserLine,
    label: "Customers",
  },
  {
    id: "reports",
    icon: RiBarChartLine,
    label: "Reports",
    submenu: [
      { id: "customerreports", label: "Customer Reports" },
      { id: "orderreports", label: "Order Reports" },
      { id: "topsalereports", label: "Top Sales Reports" },
      { id: "stockreports", label: "Stock Reports" },
    ],
  },
  {
    id: "marketing",
    icon: RiArrowRightSLine,
    label: "Marketing",
    submenu: [
      { id: "coupon", label: "Coupon" },
      { id: "newsletter", label: "Newsletter" },
      { id: "flashsale", label: "Flash Sale" },
      { id: "wishlist", label: "Wishlist" },
      { id: "abandoncart", label: "Abandon Cart" },
    ],
  },
  {
    id: "supportticket",
    icon: RiMegaphoneLine,
    label: "Support Ticket",
  },
  {
    id: "pos",
    icon: RiCoupon3Line,
    label: "POS",
  },
  {
    id: "cms",
    icon: RiMailSendLine,
    label: "CMS",
    submenu: [
      { id: "menu", label: "Menu" },
      { id: "pages", label: "Pages" },
      { id: "blogsection", label: "Blog Section" },
      { id: "faqs", label: "Faqs" },
      { id: "tag", label: "Tag" },
      { id: "contactus", label: "Contact Us" },
    ],
  },
  {
    id: "plan",
    icon: RiDiscountPercentLine,
    label: "Plan",
  },
  {
    id: "sidebarcustom",
    icon: CiCirclePlus,
    label: "Sidebar Customization",
  },
  {
    id: "setting",
    icon: RiSettings3Line,
    label: "Setting",
  },
];

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-w-64 w-64 bg-(--bg-main) h-screen p-3 sticky top-0 overflow-y-scroll">
      {/* Logo */}
      <img src={appLogo} alt="logo" />

      {/* Search */}
      <div className="flex items-center gap-2 rounded-md px-2 py-3 border mt-5 border-(--bg-border-color)">
        <RiSearchLine className="text-xs" />
        <input
          type="text"
          placeholder="Search here..."
          className="w-full text-sm outline-none bg-transparent"
        />
      </div>

      {/* Menu */}
      <nav className="mt-4">
        {menuItems.map((item) => (
          <div key={item.id}>
            {/* MAIN MENU */}
            <button
              onClick={() => {
                if (item.submenu) {
                  setOpenMenu(openMenu === item.id ? null : item.id);
                } else {
                  navigate(`/${item.id}`);
                }
              }}
              className="w-full flex justify-between items-center text-(--text-main) font-bold
              p-4 mt-2 rounded-xl text-sm
              hover:bg-(--primary) hover:text-(--text-invert)"
            >
              <div className="flex gap-3 items-center">
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </div>

              {item.submenu && (
                <RiArrowRightSLine
                  className={`transition-transform ${
                    openMenu === item.id ? "rotate-90" : ""
                  }`}
                />
              )}
            </button>

            {/* SUBMENU */}
            {item.submenu && openMenu === item.id && (
              <div className="ml-8 space-y-2">
                {item.submenu.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => navigate(`/${sub.id}`)}
                    className="block text-sm font-semibold  hover:text-(--primary-hover) text-(--text-black)"
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;


