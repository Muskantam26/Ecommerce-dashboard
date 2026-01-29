import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


 const sellingproduct = {
  labels: ['Premium E-book Collection', 'Fresh onion', 'series-3', 'series-5', 'series-4'],
  datasets: [
    {
     
      data: [17, 19, 7, 5,  3],
      backgroundColor: [
        '#3ec9d6',
        '#20c997',
        '#ffa21d',
        '#ff3a6e',
        '#6610f2',
        '#20c997',
      ],
      borderColor: [
       "white"
      ],
      borderWidth: 1,
    },
  ],
};






const sellincategory = {
  labels: ['Groceries', 'Snacks', 'Vegetables'],
  datasets: [
    {
     
      data: [10,12,40],
      backgroundColor: [
        '#3ec9d6',
        '#20c997',
        '#ffa21d',
       
      ],
      borderColor: [
       "white"
      ],
      borderWidth: 1,
    },
  ],
};



 const sellingbrand = {
  labels: ['DailyDrop Supplies', 'EcoGro Partners', 'Farmlio Foods', 'Fresh Nest', 'GoodCart Co'],
  datasets: [
    {
     
      data: [17, 19, 7, 9,  8],
      backgroundColor: [
        '#3ec9d6',
        '#20c997',
        '#ffa21d',
        '#ff3a6e',
        '#6610f2',
        '#20c997',
      ],
      borderColor: [
       "white"
      ],
      borderWidth: 1,
    },
  ],
};




 const paymentmethod = {
  labels: ['POS', 'cod', 'lottery', 'Lottery Product', 'Stripe'],
  datasets: [
    {
     
      data: [6, 5, 15, 18,  6],
      backgroundColor: [
        '#3ec9d6',
        '#20c997',
        '#ffa21d',
        '#ff3a6e',
        '#6610f2',
        '#20c997',
      ],
      borderColor: [
       "white"
      ],
      borderWidth: 1,
    },
  ],
};

const TopSaleReports = () => {


    
  return (
    <div>
    <div className="flex items-center justify-between mb-6 ">
                   
                   {/* LEFT SIDE */}
                   <div>
                     <h1 className="text-2xl font-semibold app-text">Top Sales Report</h1>
                     <div className="flex items-center gap-1">
                       
                         <button className="text-sm text-(--primary) cursor-pointer">Home &gt;</button>
                      
                       <span className="text-(--text-muted) text-sm">Top Sales Report</span>
                     </div>
                   </div>
             <div className="flex gap-2">

                   {/* RIGHT SIDE */}
                    <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert)">
                    <MdOutlineFileDownload size={22} />
                   </button>
                  
                   </div>
                  </div>
                      


               <div className='grid grid-cols-2 gap-3'>
                <div className='shadow-xl p-2 rounded-xl '>
                    <h3 className=' font-semibold border-l-4 border-(--bg-border) pl-3'>Top Selling Products</h3>
                    
  <div className=" flex items-center justify-center mt-10 h-100">
                    <Pie data={sellingproduct} 
                   
                    options={{
       
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

                
                <div className='shadow-xl p-2  rounded-xl'>
                    <h3 className='font-semibold border-l-4 border-(--bg-border) pl-3'>Top Selling Category</h3>

                  <div className=" flex items-center justify-center mt-10 h-100">
                    <Pie data={sellincategory} 
                   
                    options={{
       
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
                <div className='shadow-xl  p-2  rounded-xl mt-10'>
                    <h3 className='font-semibold border-l-4 border-(--bg-border) pl-3'>Top Selling Brand</h3>

 <div className=" flex items-center justify-center mt-10 h-100">
                    <Pie data={sellingbrand} 
                   
                    options={{
       
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
                <div className='shadow-xl p-2  rounded-xl mt-10'>
                    <h3 className='font-semibold border-l-4 border-(--bg-border) pl-3'>Top Payment Method</h3>

                       <div className=" flex items-center justify-center mt-10 h-100">
                    <Pie data={paymentmethod} 
                   
                    options={{
       
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
                 </div>

 
             
                 </div>
  )
}

export default TopSaleReports;