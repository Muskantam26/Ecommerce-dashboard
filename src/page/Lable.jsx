import React, { useState } from 'react'
import DataTable from '../component/Datatable'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { TbFileImport } from 'react-icons/tb';
import { LuFileOutput } from 'react-icons/lu';
import { Plus } from 'lucide-react';
const Label = () => {
const [labels, setLabels] = useState([
  { id: 1, name: 'Vacation Mode', slug: 'vacation-mode', status: true },
  { id: 2, name: 'Limited Edition', slug: 'limited-edition', status: true },
  { id: 3, name: 'Today’s Special', slug: 'todays-special', status: true },
  { id: 4, name: 'Western Wear', slug: 'western-wear', status: true },
])

 
  const toggleStatus = (id) => {
  setLabels((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, status: !item.status }
        : item
    )
  )
}

 
  const columns = [
    { label: 'NAME',
       key: 'name' 
      },
    { label: 'SLUG',
       key: 'slug'
       },
   {
  label: 'STATUS',
  key: 'status',
  render: (row) => (
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
},



  ]

  return (
    <div>
       <div className="flex items-center justify-between mb-6 ">
                         
                         {/* LEFT SIDE */}
                         <div>
                           <h1 className="text-2xl font-semibold ">Product Label</h1>
                           <div className="flex items-center gap-1">
                             
                               <button className="text-sm text-(--primary) cursor-pointer">Home &gt;</button>
                            
                             <span className="text-(--bs-gray-500) text-sm">Product Label</span>
                           </div>
                         </div>
                   <div className="flex gap-2">
      
                         {/* RIGHT SIDE */}
                          <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert) cursor-pointer">
                          <TbFileImport size={22} />
                         </button>
                         <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert) cursor-pointer">
                          <LuFileOutput size={22} />
                         </button>
                         <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert) cursor-pointer">
                           <Plus  size={22} />
                         </button>
                         </div>
                   
                       </div>
      <DataTable
        columns={columns}
        data={labels}
        
      />
    </div>
  )
}

export default Label;
