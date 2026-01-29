import React, { useState } from 'react'
import DataTable from '../component/Datatable'
import { TrashIcon } from 'lucide-react'
import { IoIosShareAlt } from 'react-icons/io'

const Supportticket = () => {
    const[supportticket]=useState([
        {
            id:1,
            ticket_id:"#1749209085",
            order_id:"#02026010615502765",
            title:"For Refund",
            date:"2025-06-06 11:24:45",
            user:"greentic Example",
            status:"open"
        },
        {
            id:2,
            ticket_id:"#1749189504",
            order_id:"#-",
            title:"where is delever my order",
            date:"2025-06-06 05:58:24",
            user:"Claire Howe",
            status:"open",
        },
        {
            id:3,
            ticket_id:"#1749188996",
            order_id:"#020260155026875",
            title:"Julian@gmail.com",
            date:"2025-06-06 05:49:56",
            user:"Julian Collier",
            status:"open",
        },
        {
            id:4,
            ticket_id:"#1749188950",
            order_id:"#020260106155026875",
            title:"For my extra order",
            date:"2025-06-06 05:49:10",
            user:"Julian Collier",
            status:"open",
        },
    ])

    const colomns=[
        {label:"TICKET ID",key:"ticket_id",
            render:(row)=>(
                <button className='px-3 py-1 text-sm font-medium text-(--primary) border border-(--bg-border) hover:bg-(--primary) hover:text-(--text-invert) rounded-md cursor-pointer'>
                    {row.ticket_id}
                </button>

            )

        },
        {label:"ORDER ID",key:"order_id",
            render:(row)=>(
                <button className='px-3 py-1 text-sm font-medium text-(--primary) border border-(--bg-border) hover:bg-(--primary) hover:text-(--text-invert) rounded-md cursor-pointer' >
                    {row.order_id}
                </button>
            )
        },
        {label:"TITLE",key:"title"},
        {label:"DATE",key:"date"},
        {label:"USER",key:"user"},
        {label:"STATUS",key:"status",
            render:(row)=>(
                <span className='px-8 py-1 text-xs  text-(--text-invert) bg-(--primary)  rounded-sm'>
                    {row.status}
                </span>
            )
        },
         {
      label: 'ACTION',
      key: 'action',
      render: (row) => (
        <div className="flex items-center gap-2 flex-nowrap whitespace-nowrap">
          <button
            onClick={() => console.log('Share', row)}
            className="p-2 bg-(--primary) text-(--text-invert) rounded-lg"
          >
            <IoIosShareAlt className="h-4 w-4" />
          </button>
    
          <button
            onClick={() => console.log('Delete', row)}
            className="p-2 bg-[#ffd5e0] text-(--bs-red) rounded-lg"
          >
            <TrashIcon className="h-4 w-4" />
          </button>
        </div>
      ),
    },
    ]

  return (
    <div>
        <div>
             <h1 className="text-2xl font-semibold app-text">Support Ticket</h1>
                     <div className="flex items-center gap-1 p-2">
                       
                         <button className="text-sm text-(--primary) cursor-pointer">Home &gt;</button>
                      
                       <span className="text-(--bs-gray-500) text-sm">Support Ticket</span>
                     </div>
                   </div>

                <div className='shadow-2xl mt-5'>
                   <DataTable
                   columns={colomns}
                   data={supportticket}
                   />
                   </div>
        </div>
  
  )
}

export default Supportticket