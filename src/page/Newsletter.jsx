import React, { useState } from 'react'
import DataTable from '../component/Datatable'
import { TrashIcon } from 'lucide-react'
import { LuFileOutput } from 'react-icons/lu'

const Newsletter = () => {
    const [news]=useState([
        {
            id:1,
            email:"	meher.vora@shoppermail.in",
            created_at:"2025-06-05 10:07:42",

        },
        {
            id:2,
            email:"ishaan.patel@elecmail.tech",
            created_at:"2025-06-05 10:07:42",

        },
        {
            id:3,
            email:"anaya.joshi@quickinbox.co",
            created_at:"2025-06-05 10:07:42",
        },
        {
            id:4,
            email:"reyansh.verma@newmail.store",
            created_at:"2025-06-05 10:07:42",
        },
        {
            id:5,
            email:"diya.chauhan@fastinbox.com",
            created_at:"2025-06-05 10:07:42",
        },
        {
            id:5,
            email:"	vivaan.khanna@webdrop.io",
            created_at:"2025-06-05 10:07:42",
        },
        {
            id:6,
            email:"	kavya.desai@userbox.org",
            created_at:"2025-06-05 10:07:42",
        },
        {
            id:7,
            email:"	rohan.malhotra@zonixmail.com",
            created_at:"2025-06-05 10:07:42",
        },
        {
            id:8,
            email:"	saanvi.shah@emailhub.net",
            created_at:"2025-06-05 10:07:42",
        },
        {
            id:9,
            email:"	aryan.mehta@techmail.com",
            created_at:"2025-06-05 10:07:42",
        },
    ])
    const coloumn=[
        {label:"EMAIL",key:"email"},
        {label:"CREATED AT",key:"created_at"},
       
{
  label: 'ACTION',
  key: 'action',
  render: (row) => (
    <div className="flex items-center gap-2 flex-nowrap whitespace-nowrap">
     

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
                             <h1 className="text-2xl font-semibold app-text">Product Brand</h1>
                             <div className="flex items-center gap-1">
                               
                                 <button className="text-sm text-(--primary) cursor-pointer">Home &gt;</button>
                            
                               <span className="text-(--bs-gray-500) text-sm">Product Brand</span>
                             </div>
                           </div>
                     <div className="flex gap-2">
        
                           {/* RIGHT SIDE */}
                           
                           <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert) cursor-pointer">
                            <LuFileOutput size={22} />
                           </button>
                          
                           </div>
                     
                         </div>
        <DataTable
        columns={coloumn}
        data={news}
        />
    </div>
  )
}

export default Newsletter