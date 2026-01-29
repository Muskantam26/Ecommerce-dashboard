import React, { useState } from 'react'
import DataTable from '../component/Datatable'
import { Trash2Icon, TrashIcon } from 'lucide-react'

const Plan = () => {
    const[plans]=useState([
        {
            id:1,
            order_id:"#1628Df8522345678945",
            date:"2025-11-19 04:02:20",
            user_name:"Admin",
            plan_name:"Free Plan",
            price:"$0",
            payment_type:"Manually",
            status:"Succeeded",
            coupon:"-",
            invoice:"Manually plan upgraded by super admin",
        },
        {
            id:2,
            order_id:"#8255GH2345679876543",
            date:"2025-06-04 06:19:25",
            user_name:"Admin",
            plan_name:"Gold",
            price:"$2500",
            payment_type:"Manually",
            status:"Succeeded",
            coupon:"-",
            invoice:"Manually plan upgraded by super admin",
        },
        {
            id:3,
            order_id:"#89DR876543456756756",
            date:"2025-06-04 06:18:34",
            user_name:"Admin",
            plan_name:"Free plan",
            price:"$0",
            payment_type:"Manually",
            status:"Succeeded",
            coupon:"-",
            invoice:"Manually plan upgraded by super admin",

        },
        {
            id:4,
            order_id:"#865KL345678987654556",
            date:"2025-06-04 06:18:28",
            user_name:"Admin",
            plan_name:"Gold",
            price:"$2500",
            payment_type:"Manually",
            status:"Succeeded",
            coupon:"-",
            invoice:"Manually plan upgraded by super admin"
        },
         

    ])

    const colomns=[
        {label:"ORDER ID",key:"order_id",
            render:(row)=>(
                <button className='p-1 text-(--text-invert) bg-(--primary) rounded-sm'>
                    {row.order_id}
                </button>
            )
        },
        {label:"DATE",key:"date"},
        {label:"USER NAME",key:"user_name"},
        {label:"PLAN NAME",key:"plan_name"},
        {label:"PRICE",key:"price"},
        {label:"PAYMENT TYPE",key:"payment_type"},
        {label:"STATUS",key:"status"},
        {label:"COUPON",key:"coupon"},
        {label:"INVOICE",key:"invoice"},

    {
      label: 'ACTION',
      key: 'action',
      render: (row) => (
        
         
    
          <button
            onClick={() => console.log('Delete', row)}
            className="p-2 bg-[#ffd5e0] text-(--bs-red) rounded-lg cursor-pointer"
          >
            <Trash2Icon className="h-4 w-4" />
          </button>
      
      ),
    },
    ]
  return (

    <div>

                <div>
                   <h1 className="text-2xl font-semibold app-text">Plan</h1>
                     <div className="flex items-center gap-1">
                       
                         <button className="text-sm text-(--primary) cursor-pointer">Home &gt;</button>
                       
                       <span className="text-(--bs-gray-500) text-sm">Plan</span>
                     </div>
                </div>

                      

                      <div className='shadow-2xl mt-5'>
                      <DataTable
                      columns={colomns}
                      data={plans}
                      />
                      </div>


                </div>
  )
}

export default Plan