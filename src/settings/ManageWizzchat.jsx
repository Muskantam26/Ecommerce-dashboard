import React from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch'
import { SaveButton } from '../dashboardbtn/StoreBtn'

const ManageWizzchat = () => {
  return (
    <div>
        <div className='flex justify-between'>
            <div>
            <h3 className='text-lg font-semibold border-l-4 border-(--bg-border) pl-4'>Wizzchat Setting</h3>
            <p className='text-xs text-(--text-muted) ml-4'>Copy widget code from wizzchat website and add here to set up Wizzchat live Support setting for customer <button className='text-green-500 cursor-pointer'>click here   </button></p>
            </div>

            <ToggleSwitch/>
        </div>

        <hr className='border border-(--bg-border-color) mt-5'/>

        <div className='mt-5'>
            <input type="text"
            placeholder='"<script type="text/javascript> </script>"'
            className='input' />
        </div>

        <hr className='border border-gray-100 mt-5'/>

        <div className='flex justify-end-safe p-5'>
            <SaveButton/>
        </div>
           
    </div>



  )
}

export default ManageWizzchat