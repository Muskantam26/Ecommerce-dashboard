import React, { useState } from 'react'
import DataTable from '../component/Datatable'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { Plus, TrashIcon } from 'lucide-react'

const Faqs = () => {
    const [faqs]=useState([
        {
            id:1,
            topic:"Refund & Request",

        },
        {
            id:2,
            topic:"Account & payment",
        },
        {
            id:3,
            topic:"Ordering & Delivery"
        }
    ])

    const column=[
        {label:"TOPIC", key:"topic" },
        {
            label:"ACTION",
            key:"action",

            render : (row)=>(
                        <div className="flex items-center gap-2 flex-nowrap whitespace-nowrap">
      <button
        onClick={() => console.log('Edit', row)}
        className="p-2 bg-[#d1f3f9] text-(--bs-info) rounded-lg cursor-pointer"
      >
        <PencilSquareIcon className="h-4 w-4" />
      </button>

      <button
        onClick={() => console.log('Delete', row)}
        className="p-2 bg-[#ffd5e0] text-(--bs-red) rounded-lg cursor-pointer"
      >
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
                     <h1 className="text-2xl font-semibold app-text">FAQs</h1>
                     <div className="flex items-center gap-1">
                      
                         <button className="text-sm text-(--primary) cursor-pointer">Home &gt;</button>
                      
                       <span className="text-(--bs-gray-500) text-sm">FAQs</span>
                     </div>
                   </div>
             <div className="flex gap-2">

                   {/* RIGHT SIDE */}
                   
                   <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert) cursor-pointer">
                     <Plus  size={22} />
                   </button>
                   </div>
             
                 </div>


        <DataTable
        columns={column}
        data={faqs}
        />
    </div>
  )
}

export default Faqs