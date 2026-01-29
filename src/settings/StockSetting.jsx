import React, { useState } from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch'
import { SaveButton } from '../dashboardbtn/StoreBtn'

const StockSetting = () => {

  const [settings, setSettings] = useState({
    lowStockThreshold: 10,
    outOfStockThreshold: 0,
    stockManagementEnabled: false,
    notifyLowStock: true,
    notifyOutOfStock: true,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : Number(value)
    }))
  }

  const handleToggle = (value) => {
    setSettings(prev => ({
      ...prev,
      stockManagementEnabled: value
    }))
  }

 
  return (
    <div className="bg-(--card-bg) rounded-lg">

      {/* Header */}
      <div>
        <h3 className="text-lg font-normal border-l-4 border-(--bg-border) pl-3">
          Stock Settings
        </h3>
      </div>

      <hr className="border-(--bg-border-color) mt-5" />

      {/* Form */}
      <div className="mt-5 grid grid-cols-2 gap-5">

        <div>
          <h4 className="font-medium mb-1">Low Stock Threshold</h4>
          <input
            type="number"
            name="lowStockThreshold"
            value={settings.lowStockThreshold}
            onChange={handleChange}
            className="input w-full"
          />
        </div>

        <div>
          <h4 className="font-medium mb-1">Out of Stock Threshold</h4>
          <input
            type="number"
            name="outOfStockThreshold"
            value={settings.outOfStockThreshold}
            onChange={handleChange}
            className="input w-full"
          />
        </div>

        <div>
          <h4 className="font-medium mb-2">Enable Stock Management</h4>
          <ToggleSwitch
            checked={settings.stockManagementEnabled}
            onChange={handleToggle}
          />
        </div>

        <div>
          <h4 className="font-medium mb-2">Notifications</h4>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="notifyLowStock"
              checked={settings.notifyLowStock}
              onChange={handleChange}
             
            />
            Low stock notifications
          </label>

          <label className="flex items-center gap-2 text-sm mt-2">
            <input
              type="checkbox"
              name="notifyOutOfStock"
              checked={settings.notifyOutOfStock}
              onChange={handleChange}
             
            />
            Out of stock notifications
          </label>
        </div>

      </div>

      <hr className="border-(--bg-border-color) mt-5" />

      {/* Save */}
      <div className="flex justify-end p-5">
        <SaveButton  />
      </div>
    </div>
  )
}

export default StockSetting
