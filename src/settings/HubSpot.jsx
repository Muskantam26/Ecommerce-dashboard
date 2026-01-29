import React, { useState } from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch'
import { SaveButton } from '../dashboardbtn/StoreBtn'

const HubSpot = () => {

  
  const [accessToken, setAccessToken] = useState('')

  

  return (
    <div>

      {/* Header */}
      <div className='flex justify-between'>
        <h3 className='text-lg font-semibold border-l-4 border-(--bg-border) pl-3'>
          Hubspot
        </h3>

        <ToggleSwitch/>
      </div>

      <hr className='border border-(--bg-border-color) mt-5' />

      {/* Access Token */}
      <div>
        <h4 className='font-medium'>Access Token</h4>
        <input
          type="text"
          placeholder='Enter Access Token'
          className='input'
          value={accessToken}
          onChange={(e) => setAccessToken(e.target.value)}
          
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

export default HubSpot
