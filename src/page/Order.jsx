import React, { useState } from 'react'
import { LuFileOutput } from "react-icons/lu";
import { CiGrid41 } from "react-icons/ci";
import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon
} from '@heroicons/react/24/outline'
import DataTable from '../component/Datatable'

const Order = () => {

  const [orders] = useState([
    {
      orderId: '#1768645461',
      date: 'Jan 17, 2026',
      customer: 'Walk-in-customer',
      price: '$96.0',
      payment: 'POS',
      status: 'Pending',
    },
    {
      orderId: '#3320250606155522',
      date: 'Jun 6, 2025',
      customer: 'Stylique Example 9758996658',
      price: '$0.0',
      payment: 'Cash On Delivery',
      status: 'Delivered',
    },
    {
      orderId: '#3320250606154703',
      date: 'Jun 6, 2025',
      customer: 'Stylique Example 9758996658',
      price: '$70.0',
      payment: 'Cash On Delivery',
      status: 'Cancel',
    },
    {
      orderId: '#3320250606155522',
      date: 'Jun 6, 2025',
      customer: 'Stylique Example 9758996658',
      price: '$70.0',
      payment: 'Cash On Delivery',
      status: 'Shipped',
    },
    {
      orderId: '#2920250606123937',
      date: 'Jun 6, 2025',
      customer: 'Hayfa Kidd 8888758896',
      price: '$70.0',
      payment: 'POS',
      status: 'Pending',
    },
    
    {
      orderId: '#3320250606155522',
      date: 'Jun 6, 2025',
      customer: 'Stylique Example 9758996658',
      price: '$70.0',
      payment: 'Cash On Delivery',
      status: 'Delivered',
    },
    
    {
      orderId: '#3320250606155522',
      date: 'Jun 6, 2025',
      customer: 'Stylique Example 9758996658',
      price: '$70.0',
      payment: 'Cash On Delivery',
      status: 'Cancel',
    },
    

  ])

  const columns = [
    {
      key: 'orderId',
      label: 'ORDER ID',
      render: (row) => (
        <span className="bg-(--primary) text-(--text-invert) px-3 py-1 rounded-md text-sm font-semibold">
          {row.orderId}
        </span>
      ),
    },
    { key: 'date', label: 'DATE' },
    { key: 'customer', label: 'CUSTOMER INFO' },
    { key: 'price', label: 'PRICE' },
    { key: 'payment', label: 'PAYMENT TYPE' },

    {
      key: 'status',
      label: 'ORDER STATUS',
      render: (row) => {
        const base = 'px-4 py-2 rounded-md text-sm font-semibold inline-flex items-center gap-2'

        if (row.status === 'Pending')
          return <span className={`${base} bg-[#e8f7ff] text-(--bs-info)`}> Pending</span>

        if (row.status === 'Delivered')
          return <span className={`${base} bg-(--primary) text-(--text-invert)`}>Delivered</span>

        if (row.status === 'Shipped')
          return <span className={`${base} bg-gray-300 text-(--bs-gray-800)`}>Shipped</span>

        if (row.status === 'Cancel')
          return <span className={`${base} bg-[#ffd6d9] text-(--bs-red)`}>Cancel</span>
      },
    },

    {
      key: 'action',
      label: 'ACTION',
      render: () => (
        <div className="flex gap-2">
          <button className="p-2 bg-[#ffebd6] text-(--bs-yellow) rounded-lg cursor-pointer">
            <EyeIcon className="h-4 w-4" />
          </button>
          <button className="p-2 bg-[#d1f3f9] text-(--bs-info) rounded-lg cursor-pointer">
            <PencilSquareIcon className="h-4 w-4" />
          </button>
          <button className="p-2 bg-[#ffd5e0] text-(--bs-red) rounded-lg cursor-pointer">
            <TrashIcon className="h-4 w-4" />
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
               <h1 className="text-2xl font-semibold app-text">Orders</h1>
               <div className="flex items-center gap-1">
                 
                   <button className="text-sm text-(--primary) cursor-pointer">Home &gt;</button>
                
                 <span className="text-(--bs-gray-500) text-sm">Orders</span>
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
       data={orders} />
    </div>
  )
}

export default Order;
