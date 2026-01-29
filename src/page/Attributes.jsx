import React, { useState } from 'react'
import DataTable from '../component/Datatable'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Plus } from 'lucide-react';

const Attributes = () => {

  const [attributes] = useState([
    {
      id: 1,
      name: "Color",
      slug: "color",
      terms: "Red,Green,Blue,Yellow,Orange,Purple,Pink,Brown,Black,White,Gray,Cyan (Aqua)",
    },
    {
      id: 2,
      name: "Size",
      slug: "size",
      terms: "S,M,L,XL,XXL",
    },
  ])

  const columns = [
    {
      label: 'Name',
      key: 'name',
    },
    {
      label: 'Slug',
      key: 'slug',
    },
    {
      label: 'Terms',
      key: 'terms',
      render: (row) => {
        const termsArray = row.terms.split(',')

        return (
          <div className="flex flex-wrap gap-2">
            {termsArray.map((term, index) => (
              <span
                key={index}
                className="px-3 py-2 text-xs font-medium bg-(--primary) text-white rounded-full"
              >
                {term}
              </span>
            ))}

            <button className="text-(--primary) text-sm font-medium ml-2 cursor-pointer">
              Configure terms
            </button>
          </div>
        )
      }
    },
    
    {
      label: 'ACTION',
      key: 'action',
      render: (row) => (
        <div className="flex items-center gap-2 flex-nowrap whitespace-nowrap">
          <button
            onClick={() => console.log('Edit', row)}
            className="p-2 bg-[#d1f3f9] text-(--bs-indigo) rounded-lg cursor-pointer"
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
       
    <div className="flex items-center justify-between mb-6">
      
      {/* LEFT SIDE */}
      <div>
        <h1 className="text-2xl font-semibold app-text">Attributes</h1>
        <div className="flex items-center gap-1">
          <button>
            <button className="text-sm text-(--primary) cursor-pointer">Home &gt;</button>
          </button>
          <span className="text-(--text-muted) text-sm">Attributes</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert)">
        <Plus size={22} />
      </button>

    </div>
    <DataTable
      columns={columns}
      data={attributes}
      onEdit={(row) => console.log('Edit', row)}
      onDelete={(row) => console.log('Delete', row)}
    />
    </div>
  )
}

export default Attributes
