import React, { useState } from 'react'
import DataTable from '../component/Datatable'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { Plus, TrashIcon } from 'lucide-react'

const Menu = () => {
    const [menus]=useState([
        {
            id:1,
            name:"Quick Links",
            created_at:"2025-06-03 10:09:24",
        },
        {
            id:2,
            name:"Footer",
            created_at:"2025-06-03 10:09:10",

        },
        {
            id:3,
            name:"Header",
            created_at:"2025-06-03 10:08:55"
        },
    ])

    const coloumn=[
        {label:"NAME",key:"name"},
        {label:"CREATED AT",key:"created_at"},
        {
            label:"ACTION",
            key:"action",
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
        <h1 className="text-2xl font-semibold ">Menus</h1>
        <div className="flex items-center gap-1">
        
            <button className="text-sm text-(--primary)">Home &gt;</button>
         
          <span className="text-(--bs-gray-500) text-sm">Menus</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert)">
        <Plus size={22} />
      </button>

    </div>
        <DataTable
        columns={coloumn}
        data={menus}
        />

    </div>
  )
}

export default Menu