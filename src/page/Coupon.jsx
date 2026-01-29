import React, { useState } from 'react'
import DataTable from '../component/Datatable'
import { EyeIcon, Plus, TrashIcon } from 'lucide-react'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { LuFileOutput } from 'react-icons/lu'

const Coupon = () => {
    const [coupons]=useState([
        {
            id:1,
            name:"ALL-IN-ONE Discount",
            code:"V7A6TELRR6",
            discount:"2% Discount",
            limit:"2",
            expiry_date:"Feb 2, 2027",

        },
        {
            id:2,
            name:"Mega Sale Discount",
            code:"MEGASALE30",
            discount:"30% Discount",
            limit:"2",
            expiry_date:"July 15,2026",

        },
         {
            id:3,
            name:"Super Saver Deal",
            code:"SUPERSAVE100",
            discount:"100$ Discount",
            limit:"10",
            expiry_date:"Oct 20,2026",

        },
        {
            id:4,
            name:"Welcome Offer",
            code:"WELCOME5",
            discount:"5% Discount",
            limit:"5",
            expiry_date:"May 15,2027",

        },
        
    ])
    const column=[
        {label:"NAME",key:"name"},
        {label:"CODE",key:"code"},
        {label:"DISCOUNT",key:"discount"},
        {label:"LIMIT",key:"limit"},
        {label:"EXPIRY DATE", key:"expiry_date"},
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
                                <h1 className="text-2xl font-semibold app-text">Coupon</h1>
                                <div className="flex items-center gap-1">
                                 
                                    <button className="text-sm text-(--primary) cursor-pointer">Home &gt;</button>
                                 
                                  <span className="text-(--bs-gray-500) text-sm">Coupon</span>
                                </div>
                              </div>
                        <div className="flex gap-2">
           
                              {/* RIGHT SIDE */}
                              
                              <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert) cursor-pointer">
                               <LuFileOutput size={22} />
                              </button>
                              <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert) cursor-pointer">
                                <Plus  size={22} />
                              </button>
                              </div>
                        
                            </div>
        <DataTable
        columns={column}
        data={coupons}
        />
    </div>
  )
}

export default Coupon