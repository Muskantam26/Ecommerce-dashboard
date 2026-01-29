import React from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch'
import { SaveButton } from '../dashboardbtn/StoreBtn'

const QuickCheckout = () => {
  return (
     <div className='bg-(--card-bg)  rounded-2xl shadow-2xl mt-5'>
     <div className="flex items-center justify-between p-6">
        <h3 className="text-lg font-semibold border-l-4 border-(--bg-border) pl-3">
          Quick Checkout Settings
        </h3>

        <ToggleSwitch />

   
      </div>
           <hr className='border border-(--bg-border-color)'/>
           <div className='p-6'>
            <h3 className='font-medium'>Add button title</h3>
            <input type="text"
            defaultValue={"Buy Now"}
            className='input mt-5'
            />

           </div>
           <hr className='border border-(--bg-border-color)'/>
           <div className='flex justify-end-safe p-6'>
            <SaveButton/>
           </div>
      </div>
  )
}

export default QuickCheckout