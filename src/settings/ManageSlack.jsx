import React, { useState } from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch'
import { SaveButton } from '../dashboardbtn/StoreBtn'
import { FaRegCopy } from 'react-icons/fa'

const ManageSlack = () => {

 
  const [clientId, setClientId] = useState('3456787654')
  const [clientSecret, setClientSecret] = useState('2345678oiuytre')
  const callbackUrl = 'https://ecom-demo.workdo.io/greentic/auth/slack/call-back'

  const handleCopy = () => {
    navigator.clipboard.writeText(callbackUrl)
  }

  

  return (
    <div>

      {/* Header */}
      <div className='flex justify-between'>
        <h3 className='text-lg font-semibold border-l-4 border-(--bg-border) pl-5'>
          Slack Setting
        </h3>
        <ToggleSwitch/>
      </div>

      <hr className='border border-(--bg-border-color) mt-5' />

      {/* Client Credentials */}
      <div className='grid grid-cols-2 gap-5 mt-5'>
        <div>
          <h4 className='font-semibold'>Slack Client Id</h4>
          <input
            type="password"
            className='input'
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            
          />
        </div>

        <div>
          <h4 className='font-semibold'>Slack Client Secret</h4>
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
        <h4 className='font-semibold'>Slack Callback URL</h4>
        <div className='flex gap-2'>
          <input
            type="url"
            value={callbackUrl}
            readOnly
            className='input'
          />
          <button
            onClick={handleCopy}
            className='flex border border-(--bg-border) text-(--text-color) text-sm rounded-sm px-5 items-center font-semibold hover:bg-(--primary) hover:text-(--text-invert)'
          >
            <FaRegCopy size={20} /> Copy Link
          </button>
        </div>
      </div>

      <hr className='border border-(--bg-border-color) mt-5' />

      {/* Save */}
      <div className='flex justify-end p-5'>
        <SaveButton/>
      </div>

    </div>
  )
}

export default ManageSlack
