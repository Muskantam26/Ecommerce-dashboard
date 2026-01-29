import { Plus, TrashIcon } from 'lucide-react'
import React, { useState } from 'react'
import DataTable from '../component/Datatable'
import { PencilSquareIcon } from '@heroicons/react/24/outline'

const PixelFields = () => {

    
    const [pixelfields]=useState([
        {
            id:1,
            platform:"FACEBOOK",
            pixelid:"*********",

        },
        {
            id:2,
            platform:"Twitter",
            pixelid:"********** ",

        },
        {
            id:3,
            platform:"Linkedin",
            pixelid:"*********",
        },

        
    ])

    const colomns=[
        {label:"PLATFORM",key:"platform"},
        {label:"PIXEL ID",key:"pixelid"},

        
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
        className="p-2 bg-[#ffd5e0] text-(--bs-red) rounded-lg"
      >
        <TrashIcon className="h-4 w-4" />
      </button>
    </div>
  ),
}


    ]
  return (
    <div>
        <div className='flex justify-between'>
            <div>
            <h3 className='text-lg font-normal  border-l-4 border-(--bg-border) pl-3'>Pixel Fields Settings</h3>
            <span className='ml-4 text-xs'>Enter Your Pixel Fields Settings</span>
            </div>
            <div>
                 <button className="bg-(--primary) p-2 rounded-lg text-(--text-invert)">
                        <Plus size={22} />
                      </button>
            </div>
        </div>


        <div>
            <DataTable
            columns={colomns}
            data={pixelfields}
            />
        </div>
    </div>
  )
}

export default PixelFields