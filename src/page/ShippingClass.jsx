import React, { useState } from 'react'
import DataTable from '../component/Datatable'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Plus } from 'lucide-react';
const ShippingClass = () => {
    const[classes]=useState([
        {
            id:1,
            name:"DTDC Courier",
            description:"The largest physical network of customer access points in the country.",
        },
        {
            id:2,
            name:"FedEx Courier",
            description:"Provides courteous and efficient delivery and pick-up of packages. Checks shipments for conformance to FedEx features of service and provides related customer.",

        },
        {
            id:3,
            name:"Blue Dart Courier",
            description:"Blue Dart Express is an Indian logistics company that provides courier delivery services.It has a subsidiary cargo airline, Blue Dart Aviation that operates in South Asian countries.",

        },
        {
            id:4,
            name:"	Delhivery Courier",
            description:"Delhivery courier is an Indian logistics company that provides courier delivery services.It has a subsidiary cargo airline, Delhivery Aviation that operates in South Asian countries.",
        },
    ])

    
  const columns = [
    { label: 'NAME', key: 'name' },
    { label: 'DESCRIPTION', key: 'description' },
    
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
      <div className="flex items-center justify-between mb-6">
      
      {/* LEFT SIDE */}
      <div>
        <h1 className="text-2xl font-semibold ">Shipping Class</h1>
        <div className="flex items-center gap-1">
          
            <button className="text-sm text-(--primary)">Home &gt;</button>
          
          <span className="text-(--text-muted) text-sm">Shipping Class</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert)">
        <Plus size={22} />
      </button>

    </div>
        <DataTable
        columns={columns}
          data={classes}/>
          </div>
  )
}

export default ShippingClass