import React, { useState } from 'react'
import DataTable from '../component/Datatable'
import { Plus, TrashIcon } from 'lucide-react'
import { PencilSquareIcon } from '@heroicons/react/24/outline'

const FlashSale = () => {
    const[sales,setSales]=useState([
        {
            id:1,
            name:"Deal Rush",
            discount_type:"percentage",
            start_date:"2025-06-21",
            end_date:"2025-10-30",
            status:false,

        },
        {
            id:2,
            name:"Flash Frenzy",
            discount_type:"Flat",
            start_date:"2025-06-04",
            end_date:"2025-08-31",
            status:false
        },
    ])



     const toggleValue = (id, key) => {
    setSales((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, [key]: !item[key] }
          : item
      )
    )
  }

    const colomn=[
        {label:"NAME",key:"name"},
        {label:"discount Type",key:"discount_type"},
        {label:"START DATE",key:"start_date"},
        {label:"END DATE",key:"end_date"},
        {
  label: 'STATUS',
  key: 'status',
  render: (row) => (
    <div
      onClick={() => toggleValue(row.id, 'status')}
      className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer
        ${row.status ? 'bg-(--primary)' : 'bg-(--bs-gray-300)'}`}
    >
      <div
        className={`bg-(--bs-white) w-4 h-4 rounded-full transition-transform
          ${row.status ? 'translate-x-5' : ''}`}
      />
    </div>
  ),
},


{
  label: 'ACTION',
  key: 'action',
  render: (row) => (
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
}




    ]
  return (
    <div>

 
        <div className="flex items-center justify-between mb-6 ">
                   
                   {/* LEFT SIDE */}
                   <div>
                     <h1 className="text-2xl font-semibold app-text">Flash Sale</h1>
                     <div className="flex items-center gap-1">
                      
                         <button className="text-sm text-(--primary) cursor-pointer">Home &gt;</button>
                     
                       <span className="text-(--bs-gray-500) text-sm">Flash Sale</span>
                     </div>
                   </div>
             <div className="flex gap-2">

                   {/* RIGHT SIDE */}
                   
                   <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert) cursor-pointer" >
                     <Plus  size={22} />
                   </button>
                   </div>
             
                 </div>

        <DataTable
        columns={colomn}
        data={sales}
        />
    </div>
  )
}

export default FlashSale