import React, { useState } from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import DataTable from '../component/Datatable';
import { TrashIcon } from 'lucide-react';

const Abandon = () => {
  const[abandon]=useState([
    {
      id:1,
      customer:"",
      email:"",
      product:
      {
        show_product:"Show Product",
        number:"1",
      },


    },
    {
        id:2,
        customer:"Techzonix Example",
        email:"techzonix@example.com",
        product:
      {
        show_product:"Show Product",
        number:"8",
      },

    }
  ])
  const colomns=[
    {label:"CUSTOMER",key:"customer"},
    {label:"EMAIL",key:"email"},
  {
    label: "PRODUCT",
    key: "product",
    render: (row) => (
      <div className="flex items-center gap-2">
        
        {/* Show Product Button */}
        <button className="px-3 py-1 text-sm font-medium text-(--primary) border border-(--bg-border) hover:bg-(--primary) hover:text-(--text-invert) rounded-md ">
          {row.product.show_product}
        </button>

        {/* Number Badge */}
        <span className="px-2 py-0.5 text-sm text-(--bs-cyan) bg-(--bs-white) rounded-full">
          {row.product.number}
        </span>
      </div>
    ),
  },
    {
      label: "ACTION",
      key: "action",
      render: (row) => (

       
<div className="flex items-center gap-2 flex-nowrap whitespace-nowrap">

   <button
            onClick={() => console.log('Edit', row)}
            className="p-2 bg-(--bg-main) text-(--bs-cyan) rounded-lg cursor-pointer hover:bg-(--primary) hover:text-(--text-invert)"
          >
            <IoIosSend size={20} />
          </button>
          <button
            onClick={() => console.log('Edit', row)}
            className="p-2 bg-(--primary) text-(--text-invert) rounded-lg cursor-pointer hover:text-(--text-color) hover:border-(--bg-border) hover:bg-(--bg-main)"
          >
            <FaWhatsapp size={20} />
          </button>
    
          <button
            onClick={() => console.log('Delete', row)}
            className="p-2 bg-(--btn-color-bg) text-(--bs-red) rounded-lg cursor-pointer hover:bg-(--primary) hover:text-(--text-invert)"
          >
           
          <TrashIcon size={20} />
            
          </button>
        </div>
      ),
    },
  ]
  return (
    <div>
    
                   
                 
                   <div>
                     <h1 className="text-2xl font-semibold app-text">Abandon Cart</h1>
                     <div className="flex items-center gap-1">
                       <button>
                         <button className="text-sm text-(--primary) cursor-pointer">Home &gt;</button>
                       </button>
                       <span className="text-(--text-muted) text-sm">Abandon Cart</span>
                     </div>
   
                    </div>

                    <div className=' shadow-(--bs-gray-500) mt-10 rounded-2xl'>

                    <DataTable
                    columns={colomns}
                    data={abandon}
                    />
                    </div>
                    </div>
  )
}

export default Abandon