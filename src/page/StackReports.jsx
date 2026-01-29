import React, { useState } from "react";
import DataTable from "../component/Datatable";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

const StackReports = () => {
  const [activeTab, setActiveTab] = useState("out");

  const statusStyle = {
    "out of stock": "text-pink-600 bg-pink-100",
    "low stock": "text-yellow-600 bg-yellow-100",
    "in stock": "text-white bg-(--primary)",
  };

  const [stocks] = useState([
     {
            id:1,
            product_name:"Fresh Potato(5KG)",
            category:"Vegetables",
            stock_status:"out of stock",
            stock_quantity:"0",

        },
        {
            id:2,
            product_name:"Fresh Potato(5KG)",
            category:"Vegetables",
            stock_status:"out of stock",
            stock_quantity:"0",

        },
        {
            id:3,
            product_name:"Fresh Potato(5KG)",
            category:"Vegetables",
            stock_status:"out of stock",
            stock_quantity:"0",

        },
        {
            id:4,
            product_name:"Fresh Potato(5KG)",
            category:"Vegetables",
            stock_status:"out of stock",
            stock_quantity:"0",

        },
        {
            id:5,
            product_name:"Fresh Potato(5KG)",
            category:"Vegetables",
            stock_status:"out of stock",
            stock_quantity:"0",

        },
        {
            id:6,
            product_name:"Fresh Organic Pomegranate(5KG)",
            category:"Fruits",
            stock_status:"out of stock",
            stock_quantity:"0",
        },
        {
            id:7,
            product_name:"Fresh Mango, Alphonso Ratnagiri(4KG)",
            category:"Fruits",
            stock_status:"out of stock",
            stock_quantity:"0",
        },
        {
            id:8,
            product_name:"Fresh Mango, Alphonso Ratnagiri(5KG)",
            category:"Fruits",
            stock_status:"out of stock",
            stock_quantity:"0",
        },
        {
            id:9,
            product_name:"Fresh Organic Pomegranate(3KG)",
            category:"Fruits",
            stock_status:"out of stock",
            stock_quantity:"0",
        },
        {
            id:10,
            product_name:"Fresh Organic Pomegranate(4KG)",
            category:"Fruits",
            stock_status:"out of stock",
            stock_quantity:"0",

        },
        {
            id:11,
            product_name:"Fresh Organic Pomegranate(5KG)",
            category:"Fruits",
            stock_status:"out of stock",
            stock_quantity:"0",
        },
        {
            id:12,
            product_name:"Fresh Potato(5KG)",
            category:"Vegitables",
            stock_status:"out of stock",
            stock_quantity:"0",
        },

       
  ]);

  const [moststock] = useState([
    {
      id: 1,
      product_name: "Fresh Onion",
      category: "Vegetables",
      stock_status: "in stock",
      stock_quantity: "4989",
    },
    
  ]);

  const columns = [
    { label: "PRODUCT NAME", key: "product_name" },
    { label: "CATEGORY", key: "category" },
    {
      label: "STOCK STATUS",
      key: "stock_status",
      render: (row) => {
        const status = row.stock_status.toLowerCase();
        return (
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ${
              statusStyle[status] || "bg-gray-100 text-(--bs-gray-600)"
            }`}
          >
            {row.stock_status}
          </span>
        );
      },
    },
    { label: "STOCK QUANTITY", key: "stock_quantity" },
    {
      label: "ACTION",
      key: "action",
      render: (row) => (
        <button
          onClick={() => console.log("Edit", row)}
          className="p-2 bg-[#d1f3f9] text-(--bs-info) rounded-lg"
        >
          <PencilSquareIcon className="h-4 w-4" />
        </button>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Stock Reports</h1>
          <div className="flex items-center gap-1 text-sm">
            <button className="text-(--primary) cursor-pointer">Home &gt;</button>
            <span className="text-(--text-muted)">Stock Reports</span>
          </div>
        </div>
      </div>

      <div className="flex mt-10">
        {/* LEFT BUTTONS */}
        <div>
          <button
            onClick={() => setActiveTab("low")}
            className={`border border-(--bs-border-color) font-semibold p-4 w-70 rounded-sm
            ${
              activeTab === "low"
                ? "bg-(--primary) text-(--text-invert)"
                : "hover:bg-(--primary) hover:text-(--text-invert)"
            }`}
          >
            Low In Stock
          </button>

          <button
            onClick={() => setActiveTab("out")}
            className={`border border-(--bg-border-color) font-semibold p-4 w-70 rounded-sm mt-5
            ${
              activeTab === "out"
                ? "bg-(--primary) text-(--text-invert)"
                : "hover:bg-(--primary) hover:text-(--text-invert)"
            }`}
          >
            Out of Stock
          </button>

          <button
            onClick={() => setActiveTab("most")}
            className={`border border-(--bg-border-color) font-semibold p-4 w-70 rounded-sm mt-5
            ${
              activeTab === "most"
                ? "bg-(--primary) text-(--text-invert)"
                : "hover:bg-(--primary) hover:text-(--text-invert)"
            }`}
          >
            Most Stocked
          </button>
        </div>

        {/* RIGHT TABLE */}
        <div className="shadow-2xl  w-full ml-6 p-5">
          {activeTab === "out" && (
            <>
              <h3 className="font-semibold border-l-4 border-(--bg-border) pl-3 mb-4">
                Out of Stock Products
              </h3>
              <DataTable columns={columns} data={stocks} />
            </>
          )}

          {activeTab === "low" && (
            <>
              <h3 className="font-semibold border-l-4 border-(--bg-border) pl-3 mb-4">
                Low In Stock Products
              </h3>
              <DataTable columns={columns} data={[]} />
            </>
          )}

          {activeTab === "most" && (
            <>
              <h3 className="font-semibold border-l-4 border-(--bg-border) pl-3 mb-4">
                Most Stocked Products
              </h3>
              <DataTable columns={columns} data={moststock} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StackReports;
