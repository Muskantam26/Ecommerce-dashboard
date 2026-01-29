import React, { useState } from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch'
import { SaveButton } from '../dashboardbtn/StoreBtn'

const BoostSale = () => {

  const [boostSale, setBoostSale] = useState({
    boostSaleEnabled: true,
    displayType: "default",
  })

  const radioOptions = [
    { label: "Default product", value: "default" },
    { label: "Selected product", value: "selected" },
    { label: "Both", value: "both" },
  ]

  const handleToggle = () => {
    setBoostSale(prev => ({
      ...prev,
      boostSaleEnabled: !prev.boostSaleEnabled,
    }))
  }

  const handleRadioChange = (value) => {
    setBoostSale(prev => ({
      ...prev,
      displayType: value,
    }))
  }


  return (
     <div className="mt-6 bg-(--card-bg) rounded-xl p-6 shadow">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className='text-lg font-semibold mb-8 border-l-4 border-(--bg-border) pl-3 mt-5'>
          Boost Sale Settings
        </h3>

        <ToggleSwitch
          checked={boostSale.boostSaleEnabled}
          onChange={handleToggle}
        />
      </div>

      <hr className='border-(--bg-border-color) mt-6' />

    
      <div className='mt-5'>
        <h3 className='font-semibold mb-4'>
          Which data you want to show ?
        </h3>

        <div className='flex gap-10'>
          {radioOptions.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="boostSaleType"
                value={option.value}
                checked={boostSale.displayType === option.value}
                onChange={() => handleRadioChange(option.value)}
                className="hidden"
              />

             
              <span
                className={`w-5 h-5 rounded-full border-4 flex items-center justify-center
                  ${
                    boostSale.displayType === option.value
                      ? "border-(--bg-border)"
                      : "border-(--bg-border-color)"
                  }`}
              >
                {boostSale.displayType === option.value && (
                  <span className="w-2.5 h-2.5 rounded-full"></span>
                )}
              </span>

              <span className="font-semibold">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <hr className='border-(--bg-border-color) mt-5' />

     
      <div className="flex gap-2 justify-end mt-5">
        <SaveButton/>
      </div>

    </div>
  )
}

export default BoostSale
