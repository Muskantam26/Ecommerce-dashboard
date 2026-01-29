import React, { useState } from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch'
import { SaveButton } from '../dashboardbtn/StoreBtn'

const FIELDS = [
  {
    label: 'Twilio SID',
    name: 'sid',
    placeholder: 'Twilio SID'
  },
  {
    label: 'Twilio Token',
    name: 'token',
    placeholder: 'Twilio Token'
  },
  {
    label: 'Twilio From',
    name: 'from',
    placeholder: 'Twilio consumer secret'
  },
  {
    label: 'Notification Number',
    name: 'notification_number',
    placeholder: 'twilio consumer secret'

  }
]

const TwilioSettings = () => {

  const [settings, setSettings] = useState({
    enabled: false,
    sid: '',
    token: '',
    from: '',
    notification_number: ''
  })

  const handleToggle = (value) => {
    setSettings(prev => ({
      ...prev,
      enabled: value
    }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setSettings(prev => ({
      ...prev,
      [name]: value
    }))
  }

  
  return (
    <div className="bg-(--card-bg) rounded-lg">

      {/* Header */}
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-normal border-l-4 border-(--primary) pl-3">
          Twilio Settings
        </h3>

        <ToggleSwitch
          checked={settings.enabled}
          onChange={handleToggle}
        />
      </div>

      <hr className="border-(--bg-border-color) mt-6" />

    
      <div className="grid grid-cols-2 gap-5 p-4">
        {FIELDS.map((field) => (
  <div key={field.name}>
    <h4 className="font-semibold mb-1">
      {field.label}
    </h4>

    <input
      type="text"
      name={field.name}
      placeholder={field.placeholder}
      value={settings[field.name]}
      onChange={handleChange}
      disabled={!settings.enabled}
      className="input w-full"
    />

    {field.name === 'notification_number' && (
      <p className="text-xs text-(--text-muted) mt-1">
        * Use country code with your number
      </p>
    )}
  </div>
))}

      </div>

      <hr className="border-(--bg-border-color) mt-6" />

    
      <div className="flex justify-end p-5">
        <SaveButton  />
      </div>
    </div>
  )
}

export default TwilioSettings
