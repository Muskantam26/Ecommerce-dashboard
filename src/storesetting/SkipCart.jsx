import React from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch'
import { SaveButton } from '../dashboardbtn/StoreBtn'

const SkipCart = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-2xl shadow-gray-300 mt-5">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold border-l-4 border-green-500 pl-3">
          Skip Cart Settings
        </h3>
        <ToggleSwitch />
      </div>

      <hr className='border border-gray-200 mt-5'/>

      <div className='grid grid-cols-3 p-5 mt-5 gap-5'>
        <div>
          <h3 className='font-medium'>Checkout Setting</h3>
          <select name="" id=""
          className='border mt-5 border-gray-400 rounded-sm p-2 w-full'
          >
            <option value="future">Single Tape Checkout</option>
            <option value="now">On Page Checkout</option>
            <option value="now">Sticky Cart</option>
          </select>
        </div>

         <div>
          <h3 className='font-medium'>Add to Cart Button Text</h3>
       <input type="text"
       defaultValue={"Place Order"}
       className='border border-gray-400 mt-5 rounded-sm p-2 w-full'
       />
         
        </div>

        <div>
          <h3 className='font-medium'>Button Link</h3>
          <select name="" id=""
          className='border border-gray-400 mt-5 rounded-sm p-2 w-full'
          >
            <option value="future">On cart Page</option>
            <option value="now">On Checkout Page</option>
         
          </select>
        </div>

          

      </div>
      <div className='flex justify-end-safe p-5'>
            <SaveButton/>
          </div>
</div>
  )
}

export default SkipCart