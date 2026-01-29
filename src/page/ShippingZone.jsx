import React, { useState } from 'react'
import DataTable from '../component/Datatable'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { FaRegEye } from "react-icons/fa";
import { Plus } from 'lucide-react';
const ShippingZone = () => {
    const[zone]=useState([
        {
            id:1,
            name:"	Locations not covered by your other zones",
            country:"-",
            state:"-",
            shipping_method:"Flat Rate,Free shipping,Local pickup",
          
        },
        {
            id:2,
             name:"India Zone",
            country:"India",
            state:"-",
            shipping_method:"Flat Rate,Free shipping,Local pickup",
        },
        {
            id:3,
            name:"Gujarat Zone",
            country:"India",
            state:"Gujrat",
            shipping_method:"Flat Rate,Free shipping,Local pickup",
        },
       
    ])

    
  const columns = [
    { label: 'NAME', key: 'name' },
    { label: 'COUNTRY', key: 'country' },
    {label:"STATE",key:"state"},
    {label:"SHIPPING METHOD",key:"shipping_method"},
    
{
  label: 'ACTION',
  key: 'action',
  render: (row) => (
    <div className="flex items-center gap-2 flex-nowrap whitespace-nowrap">
       <button
        onClick={() => console.log('Shipping methood', row)}
        className="p-2 bg-[#f2e2be] text-(--bs-yellow) rounded-lg hover:text-(--text-invert) hover:bg-(--primary) cursor-pointer"
      >
        <FaRegEye  className="h-4 w-4" />
      </button>
      <button
        onClick={() => console.log('Edit', row)}
        className="p-2 bg-[#d1f3f9] text-(--bs-info) rounded-lg cursor-pointer"
      >
        <PencilSquareIcon className="h-4 w-4" />
      </button>

      {row.id !== 1 && (
        <button
          onClick={() => console.log('Delete', row)}
          className="p-2 bg-[#ffd5e0] text-(--bs-red) rounded-lg cursor-pointer" 
        >
          <TrashIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  ),
}

  ]

  return (
    <div>
     <div className="flex items-center justify-between mb-6">
      
      {/* LEFT SIDE */}
      <div>
        <h1 className="text-2xl font-semibold">Shipping Zone</h1>
        <div className="flex items-center gap-1">
          
            <button className="text-sm text-(--primary)">Home &gt;</button>
          
          <span className="text-(--text-muted) text-sm">Shipping Zone</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <button className="bg-(--primary) p-1 rounded-lg text-(--text-muted)">
        <Plus size={22} />
      </button>

    </div>
        <DataTable
        columns={columns}
          data={zone}/>
          </div>
  )
}

export default ShippingZone;