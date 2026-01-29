import React from 'react'
import { SaveButton } from '../dashboardbtn/StoreBtn'

const TaxOption = () => {
  return (
    <div>
        <div><h3 className='text-lg font-semibold border-l-4 border-(--primary) pl-3'>
            Tax Option Settings</h3>
            <p className='ml-5 text-xs'>Edit your Tax Option Settings</p>
            </div>

            <hr className='border border-(--bg-border-color) mt-5'/>
 
               <div className='grid grid-cols-2'>
                <h4 className='font-medium  p-4'>Prices entered with tax</h4>

                <div>        
              <label className="flex items-center gap-2 text-sm font-medium">
            <input
              type="checkbox"
              name="notifyLowStock"
             />
          Yes, I will enter prices inclusive of tax
          </label>

          <label className="flex items-center gap-2 text-sm mt-2 font-medium">
            <input
              type="checkbox"
              name="notifyOutOfStock"
             
             
            />
           No, I will enter prices exclusive of tax
          </label>
          </div>
                </div>

                <div className='grid grid-cols-3 gap-3  '>
                     <div>
                     <h4 className='font-medium'>Tax Class</h4>
                     <select name="" id="" className='input'>
                        
                        <option value="future">Shipping text based on cart items</option>
                        <option value="now">GST</option>
                     </select>
                     </div>

                     <div>
                        <h4 className='font-medium'>Display prices in the shop</h4>
                        <select name="" id="" className='input'>
                            <option value="future">Exclusive Tax</option>
                            <option value="now">Including Tax</option>
                        </select>
                     </div>

                     <div>
                        <h4 className='font-medium'>Display prices during cart and checkout</h4>
                        <select name="" id="" className='input'>
                            <option value="future">Exclusive Tax</option>
                            <option value="now">Including Tax</option>
                        </select>
                     </div>

                     <div>
                        <h4 className='font-medium'>Display tax totals</h4>
                        <select name="" id="" className='input'>
                            <option value="future">As a single total</option>
                            <option value="now">Itemized</option>
                        </select>
                     </div>

                     <div>
                        <h4 className='font-medium'>Price Display Suffix</h4>
                        <input type="text"
                        placeholder='Price Display Suffix'
                        className='input' />
                     </div>
                </div>
                <hr className='border border-(--bg-border-color) mt-5'/>
             <div className='flex justify-end-safe p-5'>
                <SaveButton/>
             </div>
    </div>
  )
}

export default TaxOption