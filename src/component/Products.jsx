import Filterbar from "../dashboardbtn/Filterbar";
import StatsBox from "../component/StatsBox";
import { Navigate, useNavigate } from "react-router";


const adminData = {
  name: "Admin",
  message:
    "Have a nice day! Did you know that you can quickly add your favorite product or category to the theme?",
};

const storageData = {
  used: 50.36,
  total: 100,
};


const products = [
  {
    image: "https://ecom-demo.workdo.io/uploads/2/12_1749031192_3.png",
    name: "Raffia Wide Brim Hat Cap",
    price: "In Variant",
  },
  {
    image: "https://ecom-demo.workdo.io/uploads/2/23_1749021926_2.png",
     name: "Dakota Cashmere Men's Scarf",
   
     price: "In Variant",
   
  },
  {
    image: "https://ecom-demo.workdo.io/uploads/2/62_1749022339_2.png",
   name: "Classic Unisex Straw Boater cap",
   price: "$ 59.0",
  },
 
];

const orders = [
  { id: "#3320250606155522", date: "Jun 6, 2025", status: "Delivered" },
  { id: "#3320250606154821", date: "Jun 6, 2025", status: "Shipped" },
  { id: "#3320250606154703", date: "Jun 6, 2025", status: "Cancel" },
  { id: "#3320250606154626", date: "Jun 6, 2025", status: "Pending" },
];

/* ===================== STATUS COLORS ===================== */
const statusClass = {
  Delivered: "bg-(--bg-hover) text-(--primary)",
  Shipped: "bg-(--bg-border-color) text-(--text-main)",
  Cancel: "bg-[rgba(255,58,110,0.1)] text-[rgb(255,58,110)]",
  Pending: "bg-[rgba(62,201,214,0.12)] text-[rgb(62,201,214)]",
  
};


/* ===================== MAIN COMPONENT ===================== */
const Products = () => {

  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-12 gap-4 bg-(--bg-main) w-full">

      {/* ================= LEFT COLUMN ================= */}
      <div className="col-span-4 space-y-2">

        {/* Admin Card */}
        <div className="h-half">
        <StatsBox>
          <div className="flex gap-4 items-start">
            <div className="h-14 w-14 rounded-full bg-(--bg-hover) flex items-center justify-center">
              👤
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{adminData.name}</h2>
              <p className="text-sm app-text-muted mt-1">
                {adminData.message}
              </p>

              <div className="flex-col gap-2 space-y-2 mt-4">
                <button className="
  bg-(--primary)
  hover:bg-(--primary-hover)
  text-(--text-invert)
  px-3 py-1
  rounded-md
  text-sm
">

                  + Quick Add
                </button>
               <button className="
  border border-(--primary)
  text-(--primary)
  hover:bg-(--bg-hover)
  px-3 py-1
  rounded-md
  text-sm
  flex gap-2 items-center
">

                  Theme Link
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
                 className="w-5 "
                 >
                 
                 <path fill="#37b373" d="M480 400L288 400C279.2 400 272 392.8 272 384L272 128C272 119.2 279.2 112 288 112L421.5 112C425.7 112 429.8 113.7 432.8 116.7L491.3 175.2C494.3 178.2 496 182.3 496 186.5L496 384C496 392.8 488.8 400 480 400zM288 448L480 448C515.3 448 544 419.3 544 384L544 186.5C544 169.5 537.3 153.2 525.3 141.2L466.7 82.7C454.7 70.7 438.5 64 421.5 64L288 64C252.7 64 224 92.7 224 128L224 384C224 419.3 252.7 448 288 448zM160 192C124.7 192 96 220.7 96 256L96 512C96 547.3 124.7 576 160 576L352 576C387.3 576 416 547.3 416 512L416 496L368 496L368 512C368 520.8 360.8 528 352 528L160 528C151.2 528 144 520.8 144 512L144 256C144 247.2 151.2 240 160 240L176 240L176 192L160 192z"/></svg>
                </button>
              </div>
              
            </div>

            <div className="h-16 w-16 bg-(--bg-hover) rounded-md" />
          </div>
        </StatsBox>
        </div>

        {/* Storage Card */}
       <div className="h-half">
  <StatsBox>
    <h2 className="font-semibold mb-4">
      Storage Status ({storageData.used}MB / {storageData.total}MB)
    </h2>

   
    <div className="relative w-full flex justify-center mb-6">
      <svg viewBox="0 0 200 100">
    
        <path
          d="M10 100 A90 90 0 0 1 190 100"
          fill="none"
          stroke="var(--bg-hover)"
          strokeWidth="20"
        />

        {/* Progress arc */}
        <path
          d="M10 100 A90 90 0 0 1 190 100"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="20"
          strokeDasharray="283"
          strokeDashoffset={
            283 - (283 * storageData.used) / storageData.total
          }
          strokeLinecap="round"
        />
      </svg>

      {/* CENTER TEXT */}
      <div className="absolute bottom-0 text-center">
        <p className="text-2xl font-bold text-(--primary)">
          {Math.round(
            (storageData.used / storageData.total) * 100
          )}%
        </p>
        <p className="app-text-muted">Used</p>
      </div>
    </div>
  </StatsBox>
</div>


      </div>

     {/* ================= MIDDLE COLUMN ================= */}
<div className="col-span-4 ">
  <StatsBox>

    {/* HEADER */}
    <div className="flex items-center justify-between mb-5">
      <h2 className="text-xl font-semibold">Latest Products</h2>
      <button className="text-sm text-(--primary) cursor-pointer"  onClick={()=>navigate("/product")}>View All</button>
    </div>

    {/* FILTER BAR */}
    <div className="flex items-center justify-between mb-4 gap-3">
      

      <Filterbar/>

      <input
        type="text"
        placeholder="Search..."
       className="
  border border-(--bg-border-color-input)
  bg-(--card-bg)
  text-(--text-main)
  rounded-md px-3 py-2 text-sm
  w-40
  outline-none
"

      />
    </div>

    {/* TABLE HEADER */}
    <div className="grid grid-cols-3 bg-(--bg-hover) px-4 py-3 rounded-md text-sm font-semibold items-center gap-2 justify-between text-center">
      <div className="flex items-center gap-2 justify-between text-center text-xs font-bold">
        IMAGE
      
      </div>
      <div className="flex items-center gap-2 text-xs font-bold">
        PRODUCT
       
      </div>
      <div className="flex items-right text-right gap-2 justify-end text-xs font-bold">
        PRICE
       
      </div>
    </div>

    {/* TABLE ROWS */}
    <div className="divide-y divide-(--bg-border-color)">
      {products.map((item, i) => (
        <div
          key={i}
          className="grid grid-cols-3 items-center px-4 py-4 text-sm"
        >
          {/* IMAGE */}
          <div
            className="
              h-14 w-14 rounded-md overflow-hidden
              border-2 border-(--primary)
            "
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* PRODUCT */}
          <p className="text-sm w-30 font-semibold leading-snug">
            {item.name}
          </p>

          {/* PRICE */}
          <span className="font-semibold text-sm flex-col justify-items-end text-right">
            {item.price}
          </span>
        </div>
      ))}
    </div>

    {/* FOOTER */}
    <div className="text-sm mt-4">
      Showing 1 to {products.length} of {products.length} entries
    </div>

  </StatsBox>
</div>

      {/* ================= RIGHT COLUMN ================= */}
    <div className="col-span-4 " >
  <StatsBox>

    {/* HEADER */}
    <div className="flex items-center justify-between mb-5">
      <h2 className="text-xl font-semibold">Recent Orders</h2>
       <button className="text-sm text-(--primary) cursor-pointer"  onClick={()=>navigate("/orders")}>View All</button>
    </div>

    {/* FILTER BAR */}
    <div className="flex items-center justify-between mb-4 gap-3">
     <Filterbar/>

      <input
        type="text"
        placeholder="Search..."
        className="
          border border-(--bg-border-color-input)
          rounded-md px-3 py-2 text-sm
          w-40 
          outline-none
        "
      />
    </div>

    {/* TABLE HEADER */}
    <div className="grid grid-cols-3 bg-(--bg-hover) px-4 py-3 rounded-md justify-baseline text-center text-xs font-bold">
      <span>ORDERS</span>
      <span>DATE</span>
      <span>STATUS</span>
    </div>

    {/* TABLE ROWS */}
    <div className="divide-y divide-(--bg-border-color) flex-col align-middle text-center justify-between ">
      {orders.map((order, i) => (
        <div
          key={i}
          className="grid grid-cols-3 items-center px-1 py-4 text-sm "
        >
          {/* ORDER ID */}
          <span
  className="
    bg-(--primary)
    text-(--text-invert)
    px-2 py-2
    rounded-md
    w-fit
    text-xs  
  "
>
  {order.id}
</span>


          {/* DATE */}
          <span className="font-medium w-10 ml-10">
            {order.date}
          </span>

          {/* STATUS */}
          <span
            className={`px-3 py-1 rounded-md w-fit ${statusClass[order.status]}`}
          >
            {order.status}
          </span>
        </div>
      ))}
    </div>

    <div className="text-sm mt-4">
      Showing 1 to {orders.length} of {orders.length} entries
    </div>

  </StatsBox>
</div>

    </div>
  );
};

export default Products;
