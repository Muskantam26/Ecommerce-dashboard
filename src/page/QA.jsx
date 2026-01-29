import React from 'react'
import DataTable from '../component/Datatable'
import {  TrashIcon } from '@heroicons/react/24/outline';
import { IoIosShareAlt } from "react-icons/io";


const QA = () => {

     const data = [
    {
      user: 'Zayan Trellis',
      question: 'Is this fabric comfortable for daily wear?',
      status: 'Pending',
    },
    {
      user: 'Thomas Zamora',
      question: 'Is the material stretchable?',
      status: 'Answered',
    },
     {
      user: 'Zayan Trellis',
      question: 'Is this fabric comfortable for daily wear?',
      status: 'Pending',
    },
    {
      user: 'Thomas Zamora',
      question: 'Is the material stretchable?',
      status: 'Answered',
    },
     {
      user: 'Zayan Trellis',
      question: 'Is this fabric comfortable for daily wear?',
      status: 'Pending',
    },
    {
      user: 'Thomas Zamora',
      question: 'Is the material stretchable?',
      status: 'Answered',
    },
     {
      user: 'Zayan Trellis',
      question: 'Is this fabric comfortable for daily wear?',
      status: 'Pending',
    },
    {
      user: 'Thomas Zamora',
      question: 'Is the material stretchable?',
      status: 'Answered',
      
    },
  ]

  const columns = [
    { key: 'user', label: 'User' },
    { key: 'question', label: 'Question' },
    {
      key: 'status',
      label: 'Status',
      render: (row) =>
        row.status === 'Answered' ? (
          <span
            className="px-3 py-1 rounded text-(--text-invert) text-xs"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            Answered
          </span>
        ) : (
          <span className="px-3 py-1 rounded bg-pink-100 text-(--bs-pink) text-xs">
            Pending
          </span>
        ),
    }, 
    {
      label: 'ACTION',
      key: 'action',
      render: (row) => (
        <div className="flex items-center gap-2 flex-nowrap whitespace-nowrap">
          <button
            onClick={() => console.log('Share', row)}
            className="p-2 bg-(--primary) text-(--text-invert) rounded-lg cursor-pointer"
          >
            <IoIosShareAlt className="h-4 w-4" />
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
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Question Answer</h1>
         <button className="text-sm text-(--text-color) mt-1">Home &gt; </button><span className='text-gray-500 text-sm mt-1'>Question Answer</span>
        </div>
      <DataTable
        columns={columns}
        data={data}
       
      />
    </div>
  )
}

export default QA
