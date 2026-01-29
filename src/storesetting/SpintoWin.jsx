import { Plus, TrashIcon } from 'lucide-react'
import React, { useState } from 'react'
import DataTable from '../component/Datatable'
import { PencilSquareIcon } from '@heroicons/react/24/outline'

const SpintoWin = () => {

const [spinner]=useState([
  {
    id:1,
    name:"Better Luck Next Time",

  },
  {
    id:2,
    name:"Almost there",
  },
  {
    id:3,
    name:"So Close",
  },
  {
    id:4,
    name:"No Luck Today",
  },
  {
    id:5,
    name:"Next Time",
  },
  {
    id:6,
    name:"Not Lucky",
  },
])

const colummns=[
  {label:"NAME",key:"name"},

  {
  label: 'ACTION',
  key: 'action',
  render: (row) => (
    <div className="flex items-center gap-2 flex-nowrap whitespace-nowrap">
      <button
        onClick={() => console.log('Edit', row)}
        className="p-2 bg-[#d1f3f9] text-[#0dcaf0] rounded-lg"
      >
        <PencilSquareIcon className="h-4 w-4" />
      </button>

      <button
        onClick={() => console.log('Delete', row)}
        className="p-2 bg-[#ffd5e0] text-[#ff3a6e] rounded-lg"
      >
        <TrashIcon className="h-4 w-4" />
      </button>
    </div>
  ),
}

]

  return (
    <div className="p-6 bg-white rounded-xl shadow-2xl shadow-gray-300 mt-5">

      {/* Header */}
      <div className="flex items-center  justify-between">
        <h3 className="text-lg font-semibold border-l-4 border-green-500 pl-3">
  Spin To Win Label
        </h3>
         <button className="bg-(--primary) p-1 rounded-lg text-white">
                                <Plus  size={22} />
                              </button>
</div>
<DataTable
columns={colummns}
data={spinner}
/>

</div>
  )
}

export default SpintoWin