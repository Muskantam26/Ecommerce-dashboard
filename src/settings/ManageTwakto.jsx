import React, { useState } from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch'
import { SaveButton } from '../dashboardbtn/StoreBtn'

const ManageTawkto = () => {

  
  const [widgetCode, setWidgetCode] = useState('')

 

  return (
    <div>

      
      <div className='flex justify-between'>
        <div>
          <h3 className='text-lg font-semibold border-l-4 border-(--bg-border) pl-4'>
            Tawk.to Messenger Setting
          </h3>
          <p className='text-(--text-muted) text-xs ml-5 mt-1'>
            Copy widget code from Tawk.to website and paste it here to enable live support.
          </p>
        </div>

        <ToggleSwitch/>
      </div>

      <hr className='border border-(--bg-border-color) mt-10' />

     
      <div>
        <textarea
          rows={5}
          placeholder='<script type="text/javascript"> ... </script>'
          className='input resize-none'
          value={widgetCode}
          onChange={(e) => setWidgetCode(e.target.value)}
          
        />
      </div>

      <hr className='border border-(--bg-border-color) mt-10' />

      
      <div className='flex justify-end p-5'>
        <SaveButton  />
      </div>

    </div>
  )
}

export default ManageTawkto
