import React from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch'
import { SaveButton } from '../dashboardbtn/StoreBtn'

const StoreLocate = () => {
  return (
    <div>
        <div className='flex justify-between'>
            <h3 className='text-lg font-semibold border-l-4 border-(--bg-border) pl-4'>Store Locator Settings</h3>
            <ToggleSwitch/>
        </div>

        <hr className='border border-(--bg-border-color) mt-5'/>
        <div className='mt-5'>
            <h4 className='font-semibold'>API Key</h4>
            <input type="text"
            placeholder='API Key' 
            className='input'/>
        </div>
        <hr className='border border-(--bg-border-color) mt-10'/>

        <div className='flex justify-end-safe p-5'>
            <SaveButton/>
        </div>
    </div>
  )
}

export default StoreLocate