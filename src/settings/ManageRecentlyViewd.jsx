import React, { useState } from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch'
import { SaveButton } from '../dashboardbtn/StoreBtn'

const ManageRecentlyViewed = () => {


  const [defaultTime, setDefaultTime] = useState('')

 

  return (
    <div>

      {/* Header */}
      <div className='flex justify-between'>
        <h3 className='text-lg font-semibold border-l-4 border-(--bg-border) pl-3'>
          Recently Viewed Setting
        </h3>

        <ToggleSwitch/>
      </div>

      <hr className='border border-(--bg-border-color) mt-5' />

      {/* Default Time */}
      <div className='mt-5'>
        <h4 className='font-medium'>Default Time</h4>
        <input
          type="number"
          placeholder='Recently Viewed Time (in days)'
          className='input'
          value={defaultTime}
          onChange={(e) => setDefaultTime(e.target.value)}
         
        />
      </div>

      <hr className='border border-(--bg-border-color) mt-5' />

      {/* Save */}
      <div className='flex justify-end p-5'>
        <SaveButton />
      </div>

    </div>
  )
}

export default ManageRecentlyViewed
