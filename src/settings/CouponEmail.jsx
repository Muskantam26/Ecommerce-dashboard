import React from 'react'
import { SaveButton } from '../dashboardbtn/StoreBtn'

const CouponEmail = () => {
  return (
    <div>
        <div>
            <h3 className='text-lg font-normal mb-8 border-l-4 border-(--bg-border) pl-3'>Coupon Email Settings</h3>
        </div>

        <hr className='border border-(--bg-border-color) mt-5'/>

        <div>
            <h4 className='font-medium'>Select Coupon Email</h4>
            <select name="" id="" className='input'>
                <option value="future">User Registration</option>
                <option value="now">First Purchase</option>
                <option value="now">Specific Order Thresold</option>
            </select>
        </div>
        <hr className='border border-(--bg-border-color) mt-5'/>

        <div className='flex justify-end-safe p-5'>
            <SaveButton/>
        </div>

    </div>
  )
}

export default CouponEmail