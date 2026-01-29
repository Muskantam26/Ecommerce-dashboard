import React, { useState } from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch'
import { SaveButton } from '../dashboardbtn/StoreBtn'
import { FaRegCopy } from 'react-icons/fa'

const ManageTwitter = () => {

  const [clientId, setClientId] = useState('123456789')
  const [clientSecret, setClientSecret] = useState('23456789')
  const callbackUrl = 'https://ecom-demo.workdo.io/greentic/auth/twitter/callback'

  const handleCopy = () => {
    navigator.clipboard.writeText(callbackUrl)
  }

 

  return (
    <div>

      {/* Header */}
      <div className='flex justify-between'>
        <h3 className='text-lg font-semibold border-l-4 border-(--bg-border) pl-5'>
          Twitter Setting
        </h3>
        <ToggleSwitch/>
      </div>

      <hr className='border border-(--bg-border-color) mt-5' />

      {/* Client Credentials */}
      <div className='grid grid-cols-2 gap-5 mt-5'>
        <div>
          <h4 className='font-semibold'>Twitter Client Id</h4>
          <input
            type="password"
            className='input'
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
           
          />
        </div>
        <div>
          <h4 className='font-semibold'>Twitter Client Secret</h4>
          <input
            type="password"
            className='input'
            value={clientSecret}
            onChange={(e) => setClientSecret(e.target.value)}
           
          />
        </div>
      </div>

      {/* Callback URL */}
      <div className='mt-5'>
        <h4 className='font-semibold'>Twitter Callback URL</h4>
        <div className='flex gap-2'>
          <input
            type="url"
            className='input'
            value={callbackUrl}
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

   
      <div className='flex justify-end p-5'>
        <SaveButton />
      </div>

    </div>
  )
}

export default ManageTwitter
