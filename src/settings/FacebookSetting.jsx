import React, { useState } from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch'
import { FaRegCopy } from "react-icons/fa"
import { SaveButton } from '../dashboardbtn/StoreBtn'

const FacebookSetting = () => {

  const [isEnabled, setIsEnabled] = useState(false)

  const [facebookData, setFacebookData] = useState({
    clientId: '2345678643',
    clientSecret: '9965445678',
    callbackUrl: 'https://ecom-demo.workdo.io/greentic/auth/facebook/callback'
  })

  const handleChange = (field, value) => {
    setFacebookData(prev => ({
      ...prev,
      [field]: value
    }))
  }

 
  

  return (
    <div>

      {/* Header */}
      <div className='flex justify-between'>
        <h3 className='text-lg font-semibold border-l-4 border-(--bg-border) pl-5'>
          Facebook Setting
        </h3>

        <ToggleSwitch
          checked={isEnabled}
          onChange={(value) => setIsEnabled(value)}
        />
      </div>

      <hr className='border border-(--bg-border-color) mt-5' />

      {/* Inputs */}
      <div className='grid grid-cols-2 gap-5 mt-5'>
        <div>
          <h4 className='font-medium'>Facebook Client Id</h4>
          <input
            type="password"
            className='input'
            value={facebookData.clientId}
            onChange={(e) => handleChange('clientId', e.target.value)}
         
          />
        </div>

        <div>
          <h4 className='font-semibold'>Facebook Client Secret</h4>
          <input
            type="password"
            className='input'
            value={facebookData.clientSecret}
            onChange={(e) => handleChange('clientSecret', e.target.value)}
         
          />
        </div>
      </div>

      {/* Callback URL */}
      <div className='mt-5'>
        <h4 className='font-semibold'>Facebook Callback URL</h4>
        <div className='flex gap-2'>
          <input
            type="url"
            className='input'
            value={facebookData.callbackUrl}
            readOnly
          />

          <button
          
            className='flex border border-(--bg-border) text-(--text-color) text-sm rounded-sm px-5 items-center font-semibold hover:bg-(--primary) hover:text-(--text-invert)'
          >
            <FaRegCopy size={20} className='mr-2' />
            Copy Link
          </button>
        </div>
      </div>

      <hr className='border border-(--bg-border-color) mt-10' />

      {/* Save */}
      <div className='flex justify-end p-5'>
        <SaveButton  />
      </div>

    </div>
  )
}

export default FacebookSetting
