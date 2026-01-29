import React, { useState } from 'react'
import DataTable from '../component/Datatable'
import { FaRegEye } from 'react-icons/fa'


const OrdersRefund = () => {
    const[refunds]=useState([
        {
            id:1,
            order_id:"#3320250606155522",
            refund_request_date:"2025-06-06",
            refund_request_status:"Refunded",

        }
    ])
    const coloms=[
        {label:"ORDER ID", key:"order_id",
            render:(row)=> (
                <span className='bg-(--primary) text-(--text-invert) p-1 rounded-sm font-semibold'>
                    {row.order_id}
                </span>
            )

        },
        {label:"REFUND REQUEST DATE",key:"refund_request_date"},
        {
            label:"REFUND REQUEST STATUS",
            key:"refund_request_status",
            render: (row) => (
    <span className="bg-[#FFECD2] text-(--bs-yellow) text-xs p-1 rounded-sm">
      {row.refund_request_status}
    </span>
  ),
        },
        {
            label:"ACTION", key:"action",
             render: (row) => (
                <div className="flex items-center gap-2 flex-nowrap whitespace-nowrap">
                     <button
                            onClick={() => console.log('Show', row)}
                            className="p-2 bg-[#FFECD2] text-(--bs-yellow) rounded-lg hover:text-(--text-invert) hover:bg-(--primary) cursor-pointer"
                          >
                            <FaRegEye  className="h-4 w-4" />
                          </button>
                          </div>
             ),
        },

    ]

  return (
    <div>
         <div className="mb-6">
          <h1 className="text-2xl font-semibold app-text">Order Refund Request</h1>
         <button className="text-sm text-(--text-color) mt-1">Home &gt; </button><span className='text-gray-500 text-sm mt-1'>Order Refund Request</span>
        </div>
        <DataTable
        columns={coloms}
        data={refunds}
        />
    </div>
  )
}

export default OrdersRefund