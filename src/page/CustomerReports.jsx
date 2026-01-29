import React, { useState } from "react";
import { LuFileOutput } from "react-icons/lu";

import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

import ReactApexChart from "react-apexcharts";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);


const CustomerReports = () => {
  // 🔹 FUTURE BACKEND FRIENDLY STATES
  const [summary] = useState({
    totalOrders: 245,
    customerPercent: 63.7,
    guestPercent: 36.3,
  });

  const doughnutData = {
    labels: ["Customer", "Guest"],
    datasets: [
      {
        data: [summary.customerPercent, summary.guestPercent],
        backgroundColor: [ "#0CAF60","#f4b41a"],
        borderWidth: 3,
      },
    ],
  };

  const barData = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ],
    datasets: [
      {
        label: "Customer",
        data: [15, 22, 18, 30, 24, 41, 38, 28, 34, 46, 52, 40],
        backgroundColor:"#0CAF60",
      },
      {
        label: "Guest",
        data: [7, 12, 15, 10, 18, 22, 13, 19, 11, 16, 24, 20],
        backgroundColor: "#f4b41a",
        
      },
    ],
  };



const areaSeries = [
  {
    name: "Customer",
    data: [
      [new Date("2024-01-01").getTime(), 5],
      [new Date("2024-02-01").getTime(), 8],
      [new Date("2024-03-01").getTime(), 12],
      [new Date("2024-04-01").getTime(), 7],
      [new Date("2024-05-01").getTime(), 15],
      [new Date("2024-06-01").getTime(), 18],
      [new Date("2024-07-01").getTime(), 10],
      [new Date("2024-08-01").getTime(), 14],
      [new Date("2024-09-01").getTime(), 9],
      [new Date("2024-10-01").getTime(), 13],
      [new Date("2024-11-01").getTime(), 20],
      [new Date("2024-12-01").getTime(), 16],
    ],
  },
  {
    name: "Guest",
    data: [
      [new Date("2024-01-01").getTime(), 3],
      [new Date("2024-02-01").getTime(), 5],
      [new Date("2024-03-01").getTime(), 7],
      [new Date("2024-04-01").getTime(), 4],
      [new Date("2024-05-01").getTime(), 9],
      [new Date("2024-06-01").getTime(), 11],
      [new Date("2024-07-01").getTime(), 6],
      [new Date("2024-08-01").getTime(), 8],
      [new Date("2024-09-01").getTime(), 5],
      [new Date("2024-10-01").getTime(), 7],
      [new Date("2024-11-01").getTime(), 12],
      [new Date("2024-12-01").getTime(), 9],
    ],
  },
];

const areaOptions = {
  chart: {
    type: "area",
    stacked: true,
    toolbar: { show: false },
  },
  colors: ["#65D01E", "#F4B41A"],
  dataLabels: { enabled: false },
  stroke: {
    curve: "monotoneCubic",
    width: 3,
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.35,
      opacityTo: 0.8,
    },
  },
  legend: {
    position: "bottom",
  },
  xaxis: {
    type: "datetime",
    labels: { format: "MMM" },
  },
  grid: {
    borderColor: "#e5e7eb",
    strokeDashArray: 4,
  },
};



  

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Customer Reports</h1>
          <div className="flex items-center gap-1 text-sm">
            <button className="text-(--primary) cursor-pointer">Home &gt;</button>
            <span className="text-(--bs-gray-500)">Customer Reports</span>
          </div>
        </div>

        <button className="bg-(--primary) p-2 rounded-lg text-(--text-invert) cursor-pointer">
          <LuFileOutput size={20} />
        </button>
      </div>

      {/* ================= FILTER BAR ================= */}
      <div className="bg-(--bs-white) rounded-xl shadow p-4 flex flex-wrap gap-3 items-center">
        {["Year", "Last month", "This month", "Last 7 days"].map((item, i) => (
          <button
            key={i}
            className="px-4 py-2 rounded-lg border border-(--bs-gray-300) font-normal text-sm  hover:bg-(--primary) hover:text-(--text-invert) bg-(--bs-gray-200)"
              
            
          >
            {item}
          </button>
        ))}

        <input
          type="date"
          defaultValue="YYYY-MM-DD"
          className="border border-(--bs-gray-300) rounded-lg px-3 py-2 text-sm "
        />

        <button className="bg-(--primary) text-(--text-invert) px-5 py-2 rounded-lg">
          Generate
        </button>
      </div>

      {/* ================= CHART SECTION ================= */}
      <div className=" flex justify-between ">

        {/* ===== Doughnut Card ===== */}
       <div className="bg-(--bs-white) rounded-xl  p-2 w-100 shadow-2xl">
  <h3 className="font-semibold border-l-4  border-(--bg-border) pl-3 mb-3">
    {summary.totalOrders} orders
  </h3>


  <div className="h-56 flex items-center justify-center mt-10 ">
    <Doughnut
      data={doughnutData}
      options={{
        cutout: "65%",
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
             labels: {
        usePointStyle: true,
        pointStyle: "circle",
        boxWidth: 10,
        boxHeight: 10,
        padding: 20,
      },
            
          },
        },
      }}
    />
  </div>


        </div>

        {/* ===== Bar Chart Card ===== */}
        <div className="bg-(--bs-white) rounded-xl shadow-2xl p-5 w-200 ">
          <h3 className="font-semibold border-l-4  border-(--bg-border) pl-3 mb-4">
            Customer order Vs Guest order
          </h3>

          <div className="h-80 ">
           <Bar
  data={barData}
  options={{
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom",
             labels: {
        usePointStyle: true,
        pointStyle:"rect",
        boxWidth: 10,
        boxHeight: 10,
        padding: 20,
      },
       },
    },
    scales: {
      x: {
        stacked: true,        
        grid: { display: false },
      },
      y: {
        stacked: true,        
        beginAtZero: true,
      },
    },
  }}
/>

          </div>
        </div>

      </div>

      <div className="bg-(--bs-white) rounded-xl shadow-2xl  p-5 mt-6">
  <h3 className="font-semibold border-l-4  border-(--bg-border) pl-3 mb-4">Customer Vs Guest</h3>

  <ReactApexChart
    options={areaOptions}
    series={areaSeries}
    type="area"
    height={350}
  />
</div>

    </div>
  );
};

export default CustomerReports;
