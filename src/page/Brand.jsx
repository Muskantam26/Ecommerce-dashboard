import React, { useState } from 'react'
import DataTable from '../component/Datatable'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

import { TbFileImport } from "react-icons/tb";
import { LuFileOutput } from 'react-icons/lu';
import { CiGrid41 } from 'react-icons/ci';
import { Plus } from 'lucide-react';


const Brand = () => {

  const [brands, setBrands] = useState([
    {
      id: 1,
      name: 'P&B',
      slug: 'pb',
      logo: 'https://ecom-demo.workdo.io/uploads/2/11_1749014078_partner-logo1.png',
      status: true,
      popular: true,
    },
    {
      id: 2,
      name: 'GILDAN',
      slug: 'gildan',
      logo: 'https://ecom-demo.workdo.io/uploads/2/87_1749014050_partner-logo2.png',
      status: true,
      popular: true,
    },
    {
      id: 3,
      name: 'SSENSE',
      slug: 'ssense',
      logo: 'https://ecom-demo.workdo.io/uploads/2/60_1749014019_partner-logo3.png',
      status: true,
      popular: true,
    },
    {
      id: 4,
      name: 'NIKE',
      slug: 'nike',
      logo: 'https://ecom-demo.workdo.io/uploads/2/26_1749013974_partner-logo5.png',
      status: true,
      popular: true,
    },
    {
      id: 5,
      name: 'BURBERRY',
      slug: 'burberry',
      logo: 'https://ecom-demo.workdo.io/uploads/2/75_1749013918_partner-logo4.png',
      status: true,
      popular: true,
    },
  ])

    const toggleValue = (id, key) => {
    setBrands((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, [key]: !item[key] }
          : item
      )
    )
  }



  const columns = [
    { label: 'NAME', key: 'name' },
    { label: 'SLUG', key: 'slug' },
    {
      label: 'LOGO',
      key: 'logo',
      render: (row) =>
        row.logo ? (
          <img src={row.logo} className="h-6" />
        ) : (
          <span className="font-semibold">{row.name}</span>
        ),
    },
   {
  label: 'STATUS',
  key: 'status',
  render: (row) => (
    <div
      onClick={() => toggleValue(row.id, 'status')}
      className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer
        ${row.status ? 'bg-(--primary)' : 'bg-(--bs-gray)'}`}
    >
      <div
        className={`bg-(--bg-card) w-4 h-4 rounded-full transition-transform
          ${row.status ? 'translate-x-5' : ''}`}
      />
    </div>
  ),
},


  {
  label: 'POPULAR',
  key: 'popular',
  render: (row) => (
    <div
      onClick={() => toggleValue(row.id, 'popular')}
      className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer
        ${row.popular ? 'bg-(--primary)' : 'bg-(--bs-gray)'}`}
    >
      <div
        className={`bg-(--bs-light) w-4 h-4 rounded-full transition-transform
          ${row.popular ? 'translate-x-5' : ''}`}
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
        className="p-2 bg-[#d1f3f9] text-(--bs-cyan) rounded-lg"
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
<>
  
   
    <div>
       <div className="flex items-center justify-between mb-6 ">
                   
                   {/* LEFT SIDE */}
                   <div>
                     <h1 className="text-2xl font-semibold app-text">Product Brand</h1>
                     <div className="flex items-center gap-1">
                       <button>
                         <p className="text-sm text-(--primary) cursor-pointer">Home &gt;</p>
                       </button>
                       <span className="text-(--bs-gray-500) text-sm">Product Brand</span>
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
        data={brands}
       
      />
    </div>
    </>
  )
}

export default Brand
