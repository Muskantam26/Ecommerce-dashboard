import React, { useState } from 'react'
import DataTable from '../component/Datatable'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { TbFileImport } from 'react-icons/tb';
import { LuFileOutput } from 'react-icons/lu';
import { Plus } from 'lucide-react';


const Category = () => {
const[categories]=useState([
    {    id:1,
        name:"Dresses",
        image:"https://ecom-demo.workdo.io/uploads/2/87_1749204252_Dresses.png",
        icon:"https://ecom-demo.workdo.io/uploads/2/82_1749016263_Group-1707487981.png",
        parent_category:"-",
        trending:"Yes",
        status:"Active",
    },
    {
         id:2,
        name:"Mens Store",
        image:"https://ecom-demo.workdo.io/uploads/2/54_1749192230_Men.png",
        icon:"https://ecom-demo.workdo.io/uploads/2/73_1749016213_mens.png",
        parent_category:"-",
        trending:"Yes",
        status:"Active",
    },
    {
         id:3,
        name:"Hats",
        image:"https://ecom-demo.workdo.io/uploads/2/95_1749203987_Hat.png",
        icon:"https://ecom-demo.workdo.io/uploads/2/47_1749016153_hats.png",
        parent_category:"-",
        trending:"Yes",
        status:"Active",
    },
    {
         id:4,
        name:"Scarf",
        image:"https://ecom-demo.workdo.io/uploads/2/15_1749204017_Scaff.png",
        icon:"https://ecom-demo.workdo.io/uploads/2/23_1749016053_scarf.png",
        parent_category:"-",
        trending:"Yes",
        status:"Active",
    },
    {
         id:5,
        name:"Jackets",
        image:"https://ecom-demo.workdo.io/uploads/2/76_1749204033_Jacket.png",
        icon:"https://ecom-demo.workdo.io/uploads/2/57_1749015719_jackats.png",
        parent_category:"-",
        trending:"Yes",
        status:"Active",
    },
    {
         id:6,
        name:"Coats",
        image:"https://ecom-demo.workdo.io/uploads/2/23_1749204067_Coat.png",
        icon:"https://ecom-demo.workdo.io/uploads/2/66_1749015646_coats.png",
        parent_category:"-",
        trending:"Yes",
        status:"Active",
    },
    {
         id:7,
        name:"Womens Store",
        image:"https://ecom-demo.workdo.io/uploads/2/76_1749204207_Dresses-1.png",
        icon:"https://ecom-demo.workdo.io/uploads/2/35_1749015528_women--store.png",
        parent_category:"-",
        trending:"Yes",
        status:"Active",
    }
])



const columns = [
    { label: 'NAME', key: 'name' },
    {
      label: 'IMAGE',
      key: 'image',
      render: (row) => <img src={row.image} className="h-10" />
    },
    {
      label: 'ICON',
      key: 'icon',
      render: (row) => <img src={row.icon} className="h-10" />
    },
    { label: 'PARENT CATEGORY', key: 'parent_category' },
    { label: 'TRENDING', key: 'trending' },
    {
      label: 'STATUS',
      key: 'status',
      render: (row) => (
        <button className="px-6 py-2 text-xs  bg-(--primary) text-(--text-invert)">
          {row.status}
        </button>
      )
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
    <div className="flex items-center justify-between mb-6  ">
                      
                      {/* LEFT SIDE */}
                      <div>
                        <h1 className="text-2xl font-semibold app-text">Category</h1>
                        <div className="flex items-center gap-1">
                          <button>
                            <p className="text-sm text-(--primary) cursor-pointer">Home &gt;</p>
                          </button>
                          <span className="text-(--bs-gray-500) text-sm">Category</span>
                        </div>
                      </div>
                <div className="flex gap-2">
   
                      {/* RIGHT SIDE */}
                       <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert)">
                       <TbFileImport size={22} />
                      </button>
                      <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert)">
                       <LuFileOutput size={22} />
                      </button>
                      <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert)">
                        <Plus  size={22} />
                      </button>
                      </div>
                
                    </div>

      <DataTable
    
        columns={columns}
        data={categories}
      
      />
    </div>
  )
}

export default Category