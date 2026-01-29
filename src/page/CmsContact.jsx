import React, { useState } from 'react'
import DataTable from '../component/Datatable'
import { TrashIcon } from 'lucide-react'
import { PencilSquareIcon } from '@heroicons/react/24/outline'

const CmsContact = () => {
     const [contacts]=useState([
        {
            id:1,
            first_name:"Ritu",
            last_name:"Chawla",
            email:"ritu.chawla2@example.com",
            contact:"8888555511",
            subject:"Wrong Product",
            description:"Received a different brand item.",

        },
        {
            id:2,
            first_name:"Manish",
            last_name:"Jain",
            email:"manish.jain2@example.com",
            contact:"9990001111",
            subject:"Store Location",
            description:"Is there an offline store in Delhi?",
        },
        {
            id:3,
            first_name:"Anjali",
            last_name:"Mishra",
            email:"anjali.mishra2@example.com",
            contact:"9811122233",
            subject:"Exchange Request",
            description:"Want to exchange item size",
        },
        {
            id:4,
            first_name:"Priya",
            last_name:"Singh",
            email:"	priya.singh2@example.com",
            contact:"9898989898",
            subject:"Refund Status",
            description:"Still waiting for my refund.",

        },
        {
            id:5,
            first_name:"Vikas",
            last_name:"Reddy",
            email:"	vikas.reddy2@example.com",
            contact:"9112345678",
            subject:"Delivery Delay",
            description:"Order delayed beyond expected date.",
        },
        {
            id:6,
            first_name:"Neha",
            last_name:"Verma",
            email:"neha.verma2@example.com",
            contact:"70000000001",
            subject:"Discount Inquiry",
            description:"Coupon code not working.",
        },

        {
            id:7,
            first_name:"Deepak",
            last_name:"Joshi",
            email:"	deepak.joshi2@example.com",
            contact:"8899776655",
            subject:"Account Help",
            description:"Can’t login to my account.",

        },
        {
            id:8,
            first_name:"Kiran",
            last_name:"Patel",
            email:"	kiran.patel2@example.com",
            contact:"9876512345",
            subject:"Feedback",
            description:"Amazing experience, thank you!",
        },
        {
            id:9,
            first_name:"Sneha",
            last_name:"Kapoor",
            email:"	sneha.kapoor2@example.com",
            contact:"9999999999",
            subject:"Return Request",
            description:"How to return a damaged item",
        },
        {
            id:10,
            first_name:"Rahul",
            last_name:"Mehta",
            email:"rahul.mehta2@example.com",
            contact:"9123456780",
            subject:"Payment",
            description:"Payment deducted but not reflected.",
        },
     ])

     const column=[
        {label:"FIRST NAME" , key:"first_name"},
        {label:"LAST NAME",key:"last_name"},
        {label:"EMAIL",key:"email"},
        {label:"CONTACT",key:"contact"},
        {label:"SUBJECT",key:"subject"},
        {label:"DESCRIPTION",key:"description"},
             
        
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
}

     ]

  return (
    <div>
         <div className="flex items-center justify-between mb-6 ">
                   
                   {/* LEFT SIDE */}
                   <div>
                     <h1 className="text-2xl font-semibold app-text">Contact Us</h1>
                     <div className="flex items-center gap-1">
                      
                         <button className="text-sm text-(--primary) cursor-pointer">Home &gt;</button>
                      
                       <span className="text-(--bs-gray-500) text-sm">Contact Us</span>
                     </div>
                   </div>
           
             
                 </div>
        <DataTable
        columns={column}
        data={contacts}
        />
    </div>
  )
}

export default CmsContact