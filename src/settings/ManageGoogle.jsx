import React, { useState } from 'react'
import { FaRegCopy } from "react-icons/fa"
import { SaveButton } from '../dashboardbtn/StoreBtn'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch'

const ManageGoogle = () => {

  

  const [googleData, setGoogleData] = useState({
    clientId: '34565434567',
    clientSecret: '7654567890876',
    callbackUrl: 'https://ecom-demo.workdo.io/greentic/auth/google/call-back'
  })

  const handleChange = (field, value) => {
    setGoogleData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(googleData.callbackUrl)
  }

  

  return (
    <div>

      {/* Header */}
      <div className='flex justify-between'>
        <h3 className='text-lg font-normal mb-8 border-l-4 border-(--bg-border) pl-3'>
          Google Login Setting
        </h3>

        <ToggleSwitch/>
      </div>

      <hr className='border border-(--bg-border-color) mt-5' />

      {/* Client ID & Secret */}
      <div className='grid grid-cols-2 mt-5 gap-5'>
        <div>
          <h4 className='font-medium'>Google Client ID</h4>
          <input
            type="password"
            className='input'
            value={googleData.clientId}
            onChange={(e) => handleChange('clientId', e.target.value)}
            
          />
        </div>

        <div>
          <h4 className='font-medium'>Google Client Secret</h4>
          <input
            type="password"
            className='input'
            value={googleData.clientSecret}
            onChange={(e) => handleChange('clientSecret', e.target.value)}
            
          />
        </div>
      </div>

      {/* Callback URL */}
      <div className='mt-5'>
        <h4 className='font-medium'>Google Callback URL</h4>
        <div className='flex gap-2'>
          <input
            type="url"
            className='input'
            value={googleData.callbackUrl}
            readOnly
          />

          <button
            onClick={handleCopy}
            className='flex border border-(--bg-border) text-(--text-color) text-sm rounded-sm px-5 items-center font-semibold hover:bg-(--primary) hover:text-(--text-invert)'
          >
            <FaRegCopy size={20} className='mr-2' />
            Copy Link
          </button>
        </div>
      </div>

      <hr className='border border-(--bg-border-color) mt-5' />

      {/* Save */}
      <div className='flex justify-end p-5'>
        <SaveButton  />
      </div>

    </div>
  )
}

export default ManageGoogle
