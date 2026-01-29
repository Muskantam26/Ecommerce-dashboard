import React, { useState } from 'react'
import DataTable from '../component/Datatable'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { FaRegEye } from 'react-icons/fa';
import { IoCartOutline } from "react-icons/io5";
import { LuFileOutput, LuNotepadText } from "react-icons/lu";
import { CiGrid41 } from 'react-icons/ci';
const Customers = () => {
const [customers, setCustomers] = useState([
  {
    id: 1,
    customer_info: {
      name: "Stylique Example",
      phone: "9758996658",
    },
    email: "stylique@example.com",
    last_active: "June 06, 2025",
    date_registered: "June 06, 2025",
    orders: "4",
    total_spend: "500",
    aov: "125.00",
    status: true,
  },
  {
    id: 2,
    customer_info: {
      name: "Roary Cameron",
      phone: "9198778584",
    },
    email: "Roary@gmail.com",
    last_active: "June 06, 2025",
    date_registered: "June 06, 2025",
    orders: "0",
    total_spend: "0",
    aov: "0",
    status: true,
  },
  {
    id:3,
    customer_info:{
        name:"Hayfa Kidd",
        phone:"8888758896",

    },
    email:"hayfa@gmail.com",
    last_active:"June 06, 2025",
    date_registered:"June 06,2025",
    orders:"1",
    total_spend:"84",
    aov:"84.00",
    status:true,
  },
  {
    id:4,
    customer_info:{
        name:"Rhea Velez",
        phone:"98758996588",
    },
    email:"rhea@gmail.com",
    last_active:"June 06, 2025",
    date_registered:" ",
    orders:"1",
    total_spend:"74",
    aov:"74.00",
    status:"",
  },
  {
    id:5,
    customer_info:{
        name:"Destiny Warner",
        phone:"422"
    },
    email:"destiny@gmail.com",
    last_active:"June 06, 2025",
    date_registered:" ",
    orders:"1",
    total_spend:"55",
    aov:"55.00",
    status:"",
  },
  {
    id:6,
    customer_info:{
        name:"Robert Bray",
        phone:"414"
    },
    email:"robert@gmail.com",
    last_active:"June 06, 2025",
    date_registered:" ",
    orders:"1",
    total_spend:"140",
    aov:"140.00",
    status:"",
  },
  {
    id:7,
    customer_info:{
        name:"Shubham Ghori",
        phone:"9875589998"
    },
    email:"shubham@gmail.com",
    last_active:"June 06, 2025",
    date_registered:"June 06, 2025",
    orders:"2",
    total_spend:"1400",
    aov:"700.00",
    status:true,
  },
  {
    id:8,
    customer_info:{
        name:"Varsha Nilmadhav",
        phone:"9879958685"
    },
    email:"versha@gmail.com",
    last_active:"June 06, 2025",
    date_registered:" ",
    orders:"1",
    total_spend:"70",
    aov:"70.00",
    status:"",
  },
  {
    id:9,
    customer_info:{
        name:"Zenia Burris",
        phone:"85274165"
    },
    email:"Zenia@gmail.com",
    last_active:"June 06, 2025",
    date_registered:" ",
    orders:"1",
    total_spend:"70",
    aov:"70.00",
    status:"",
  },
  {
    id:10,
    customer_info:{
        name:"Evan Burris",
        phone:"8958554785"
    },
    email:"Evan@gmail.com",
    last_active:"June 06, 2025",
    date_registered:"June 06, 2025",
    orders:"3",
    total_spend:"211",
    aov:"70.00",
    status:true,
  },
  {
    id:11,
    customer_info:{
        name:"Zayan Trellis",
        phone:"6353558270"
    },
    email:"zyan@gmail.com",
    last_active:"June 06, 2025",
    date_registered:"JUNE 04, 2025 ",
    orders:"0",
    total_spend:"0",
    aov:"0",
    status:true,
  },
 

])


 
  const toggleStatus = (id) => {
  setCustomers((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, status: !item.status }
        : item
    )
  )
}

 
  const columns = [
    {
  label: 'CUSTOMER INFO',
  key: 'customer_info',
  render: (row) => (
    <div className="flex flex-col">
      {/* Name */}
      <span className="text-(--primary) font-normal cursor-pointer hover:underline">
        {row.customer_info.name}
      </span>

      {/* Phone */}
      <span className="text-(--bs-gray-500) text-sm">
        {row.customer_info.phone}
      </span>
    </div>
  ),
},

    { label: 'Email',
       key: 'email'
       },
       {
        label:"LAST ACTIVE",
        key:"last_active"
       },
       {
        label:"DATE REGISTERED",
        key:"date_registered"
       },
      {
  label: "ORDERS",
  key: "orders",
  render: (row) => (
    <span className="text-(--primary) font-medium">
      {row.orders}
    </span>
  ),
},

       {
        label:"TOTAL SPEND",
        key:"total_spend"
       },
       {
        label:"AOV",
        key:"aov"
       },

   {
  label: 'STATUS',
  key: 'status',
  render: (row) => {
    
    const hideStatusIds = [4, 5, 6, 8, 9];

    if (hideStatusIds.includes(row.id)) {
      return null; 
    }

    return (
      <div
        onClick={() => toggleStatus(row.id)}
        className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer
          ${row.status ? 'bg-(--primary)' : 'bg-(--bs-gray-300)'}`}
      >
        <div
          className={`bg-(--bs-white) w-4 h-4 rounded-full transition-transform
            ${row.status ? 'translate-x-5' : ''}`}
        />
      </div>
    );
  },
},

{
  label: 'ACTION',
  key: 'action',
  render: (row) => (
    <div className="flex items-center gap-2 flex-nowrap whitespace-nowrap">
         <button
                onClick={() => console.log('Customer timeline', row)}
                className="p-2 bg-[#FFECD2] text-(--bs-yellow) rounded-lg hover:text-(--text-invert) hover:bg-(--primary) cursor-pointer"
              >
                <FaRegEye  className="h-4 w-4" />
              </button>
      <button
        onClick={() => console.log('Cart', row)}
        className="p-2 bg-[#d1f3f9] text-(--bs-info) rounded-lg hover:bg-(--primary) hover:text-(--text-invert) hover:font-bold cursor-pointer"
      >
        <IoCartOutline className="h-4 w-4" />
      </button>

      <button
        onClick={() => console.log('History', row)}
        className="p-2 bg-(--primary) text-(--text-invert) rounded-lg cursor-pointer"
      >
        <LuNotepadText className="h-4 w-4" />           
      </button>
    </div>
  ),
},



  ]

  return (
    <div>
         <div className="flex items-center justify-between mb-6 ">
                    
                    {/* LEFT SIDE */}
                    <div>
                      <h1 className="text-2xl font-semibold app-text">Customer</h1>
                      <div className="flex items-center gap-1">
                       
                          <button className="text-sm text-(--primary) cursor-pointer">Home &gt;</button>
                       
                        <span className="text-(--bs-gray-500) text-sm">Customer</span>
                      </div>
                    </div>
              <div className="flex gap-2">
                    {/* RIGHT SIDE */}
                    <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert)">
                     <LuFileOutput size={22} />
                    </button>
                    <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert)">
                      <CiGrid41  size={22} />
                    </button>
                    </div>
              
                  </div>
      <DataTable
        columns={columns}
        data={customers}
        
      />
    </div>
  )
}

export default Customers;
