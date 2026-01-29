import React, { useState } from 'react'
import { SaveButton } from '../dashboardbtn/StoreBtn'

const ManageFrequently = () => {

  const [productLimit, setProductLimit] = useState(2)

 

  return (
    <div>

      {/* Header */}
      <div>
        <h3 className='text-lg font-normal mb-8 border-l-4 border-(--bg-border) pl-3'>
          Frequently Product Setting
        </h3>
      </div>

      <hr className='border border-(--bg-border-color) mt-5' />

      {/* Product Limit */}
      <div className='mt-5'>
        <h4 className='font-medium'>Frequently Product Limit</h4>
        <input
          type="number"
          min={1}
          className='input'
          value={productLimit}
          onChange={(e) => setProductLimit(e.target.value)}
        />
      </div>

      <hr className='border border-(--bg-border-color) mt-5' />

      {/* Save */}
      <div className='flex justify-end p-5'>
        <SaveButton/>
      </div>

    </div>
  )
}

export default ManageFrequently
