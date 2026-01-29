import React, { useState } from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch'
import { SaveButton } from '../dashboardbtn/StoreBtn'

const WhatsappSetting = () => {

  const [settings, setSettings] = useState({
    isEnabled: false,
    contactNumber: ''
  })

  

  const handleChange = (e) => {
    const { value } = e.target
    setSettings(prev => ({
      ...prev,
      contactNumber: value
    }))
  }

 

  return (
    <div className="bg-(--card-bg) rounded-lg">

      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-normal border-l-4 border-(--primary) pl-3">
            WhatsApp Settings
          </h3>
          <p className="text-xs text-(--text-muted) pl-5">
            WhatsApp live support setting for customers
          </p>
        </div>

        <ToggleSwitch/>
      </div>

      <hr className="border-(--bg-border-color) mt-6" />

      {/* Form */}
      <div className="p-4">
        <label className="block font-semibold mb-2">
          Contact Number
        </label>

        <input
          type="text"
          placeholder="+91XXXXXXXXXX"
          value={settings.contactNumber}
          onChange={handleChange}
          className="input w-full"
          disabled={!settings.isEnabled}
        />

        <p className="text-xs text-(--bs-red) mt-2">
          Note : Enter your WhatsApp number along with your country code (with the '+' symbol). For instance, if your country code is +91 and your WhatsApp number is 7878787878, then type +917878787878.
        </p>
      </div>

      <hr className="border-(--bg-border-color) mt-4" />

      {/* Action */}
      <div className="flex justify-end p-5">
        <SaveButton />
      </div>
    </div>
  )
}

export default WhatsappSetting
