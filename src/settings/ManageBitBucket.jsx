import React, { useState } from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch'
import { FaRegCopy } from "react-icons/fa"
import { SaveButton } from '../dashboardbtn/StoreBtn'

const ManageBitBucket = () => {



  const [bitbucketData, setBitbucketData] = useState({
    clientId: '123456786',
    clientSecret: '23456765434',
    callbackUrl: 'https://ecom-demo.workdo.io/greentic/auth/bitbucket/callback'
  })

  const handleChange = (field, value) => {
    setBitbucketData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(bitbucketData.callbackUrl)
  }

  
  return (
    <div>

      {/* Header */}
      <div className='flex justify-between'>
        <h3 className='text-lg font-semibold border-l-4 border-(--bg-border) pl-3'>
          Bitbucket Setting
        </h3>

        <ToggleSwitch/>
      </div>

      <hr className='border border-(--bg-border-color) mt-5' />

      <div className='grid grid-cols-2 mt-5 gap-5'>
        <div>
          <h4 className='font-semibold'>Bitbucket Client Id</h4>
          <input
            type="password"
            className='input'
            value={bitbucketData.clientId}
            onChange={(e) => handleChange('clientId', e.target.value)}
            
          />
        </div>

        <div>
          <h4 className='font-semibold'>Bitbucket Client Secret</h4>
          <input
            type="password"
            className='input'
            value={bitbucketData.clientSecret}
            onChange={(e) => handleChange('clientSecret', e.target.value)}
          
          />
        </div>
      </div>

      {/* Callback URL */}
      <div className='mt-5'>
        <h4 className='font-semibold'>Bitbucket Callback URL</h4>
        <div className='flex gap-2'>
          <input
            type="url"
            className='input'
            value={bitbucketData.callbackUrl}
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

export default ManageBitBucket
