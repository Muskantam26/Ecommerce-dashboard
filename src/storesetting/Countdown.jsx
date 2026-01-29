import React from 'react'
import { SaveButton } from '../dashboardbtn/StoreBtn'
import DataTable from '../component/Datatable'
import { Plus } from 'lucide-react';

const Countdown = () => {

  const columns = [
  { label: "TITLE", key: "title" },
  { label: "THEME LAYOUT", key: "theme_layout" },
  { label: "START DATE", key: "start_date" },
  { label: "START TIME", key: "start_time" },
  { label: "STATUS", key: "status" },
  { label: "ACTION", key: "action" },
];

  
  return (
    <>
      <div className="mt-6 bg-(--card-bg) rounded-xl p-6 shadow-2xl">
    <div>
       <div className="text-lg font-semibold mb-8 border-l-4 border-(--bg-border) pl-3">
        <h3>Count-Down Days Settings</h3>
      </div>
      <hr className='border-(--bg-border-color)'/>
      <div>
        <h3 className='font-semibold'>Count-Down Days</h3>
        <input type="number"
        placeholder='Count-Down Days'
        className='input mt-5'
        />
        <p className='text-(--text-muted) '>Note: Enter the number of days before you want the count-down to show.</p>
      </div>
      <hr className='border-(--bg-border-color) mt-5'/>

      {/* Save Button */}
            <div className="flex gap-2 justify-end mt-10">
              <SaveButton />
            </div>
        </div>

       
        </div>


           <div className="mt-6 bg-(--card-bg) rounded-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold  border-l-4 border-(--bg-border) pl-3">Count-Down List</h3>

          <button className="bg-(--primary) text-(--text-invert) p-2 rounded-lg">
            <Plus className="h-5 w-5" />
          </button>
        
      </div>
            <DataTable
            columns={columns}
            data={[]}
            />
           </div>

      

    </>
  )
}

export default Countdown