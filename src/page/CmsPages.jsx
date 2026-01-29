import React, { useState } from 'react'
import DataTable from '../component/Datatable'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { Plus, TrashIcon } from 'lucide-react'

const CmsPages = () => {
    const[pages,setPages]=useState([
        {
            id:1,
            page_name:"About Us",
            page_slug:"about",
            page_status:true,

        },
        {
            id:2,
            page_name:"Blog",
            page_slug:"blog",
            page_status:true,

        },
        {
            id:3,
            page_name:"Category Collection",
            page_slug:"collections",
            page_status:true,
        },
        {
            id:4,
            page_name:"Contact US",
            page_slug:"contact-us",
            page_status:true,
        },
        {
            id:5,
            page_name:"FAQs",
            page_slug:"faqs",
            page_status:true,
        },
        {
            id:6,
            page_name:"Order Tracking",
            page_slug:"track-order",
            page_status:true,
        },
        {
            id:7,
            page_name:"Privacy Policy",
            page_slug:"privacy-policy",
            page_status:true,
        },
        {
            id:8,
            page_name:"Product List Page",
            page_slug:"product-list",
            page_status:true,
        },
        {
            id:9,
            page_name:"Refund Policy",
            page_slug:"refund-policy",
            page_status:true,
        },
    ])

    
    const toggleValue = (id, key) => {
    setPages((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, [key]: !item[key] }
          : item
      )
    )
  }

    const colomn=[
        {label:"PAGE NAME",key:"page_name"},
        {label:"PAGE SLUG",key:"page_slug"},

        {
            label:"PAGE STATUS",
            key:"page_status",


            render: (row) => (
    <div
      onClick={() => toggleValue(row.id, 'page_status')}
      className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer
        ${row.page_status ? 'bg-(--primary)' : 'bg-(--bs-gray-300)'}`}
    >
      <div
        className={`bg-(--bs-white) w-4 h-4 rounded-full transition-transform
          ${row.page_status ? 'translate-x-5' : ''}`}
      />
    </div>
  ),
        },

       {
  label: "Action",
  key: "action",
  render: (row) => (
    row.id === 9 ? (
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
    ) : null
  ),
}

    ]
  return (
    <div>
         <div className="flex items-center justify-between mb-6 ">
                              
                              {/* LEFT SIDE */}
                              <div>
                                <h1 className="text-2xl font-semibold app-text">Pages</h1>
                                <div className="flex items-center gap-1">
                                
                                    <button className="text-sm text-(--primary) cursor-pointer">Home &gt;</button>
                                 
                                  <span className="text-(--bs-gray-500) text-sm">Pages</span>
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
        columns={colomn}
        data={pages}
        />
    </div>
  )
}

export default CmsPages