import React, { useState } from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch'
import { SaveButton } from '../dashboardbtn/StoreBtn'

const Purchase = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="p-6 bg-(--card-bg) rounded-xl shadow-2xl mt-5">

      {/* ===== HEADER ===== */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold border-l-4 border-(--bg-border) pl-3">
          Purchase Notification Settings
        </h3>

        <ToggleSwitch
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
        />
      </div>

      {/* ===== CONTROLLED AREA ===== */}
      <div
        className={`transition-all duration-200 ${
          !enabled ? 'pointer-events-none opacity-40 grayscale' : ''
        }`}
      >

        {/* ===== PRODUCT SETTINGS ===== */}
        <div className="p-10 bg-(--card-bg) rounded-xl shadow-2xl mt-5">
          <h3
            className={`text-lg font-semibold border-l-4 pl-3 ${
              enabled
                ? 'border-green-200 text-(--bs-gray-700)'
                : 'border-gray-200 text-(--text-muted)'
            }`}
          >
            Product Settings
          </h3>

          <div className="mt-10 grid grid-cols-2 gap-5">

            {/* Select Product */}
            <div>
              <h3
                className={`text-sm font-semibold pl-3 ${
                  enabled ? 'text-(--text-muted)' : 'text-(--text-muted)'
                }`}
              >
                Select Product
              </h3>

              <select
                disabled={!enabled}
                className="border border-(--bg-border-color) w-full p-2 rounded-sm mt-5 bg-(--bs-white)"
              >
                <option>Please Select</option>
              </select>
            </div>

            {/* Open Product Page */}
            <div>
              <h3
                className={`text-sm font-semibold pl-3 ${
                  enabled ? 'text-gray-600' : 'text-(--text-invert)'
                }`}
              >
                Open Product Page
              </h3>

              <div className="mt-5">
                <ToggleSwitch />
              </div>
            </div>

          </div>
        </div>

        {/* ===== TIME SETTINGS ===== */}
        <div className="p-10 bg-(--card-bg) rounded-xl shadow  mt-5">
          <h3
            className={`text-lg font-semibold border-l-4 pl-3 ${
              enabled
                ? 'border-green-200 text-(--text-main)'
                : 'border-gray-200 text-(--text-muted)'
            }`}
          >
            Time Setting
          </h3>

          <div className="mt-10 grid grid-cols-2 gap-5">

            {/* Next Time Display */}
            <div>
              <h3
                className={`text-sm font-semibold pl-3 ${
                  enabled ? 'text-gray-600' : 'text-(--text-muted)'
                }`}
              >
                Next Time Display
              </h3>

              <input
                type="text"
                placeholder="Next time display"
                disabled={!enabled}
                className="input mt-5"
              />
            </div>

            {/* Display Time */}
            <div>
              <h3
                className={`text-sm font-semibold pl-3 ${
                  enabled ? 'text-gray-600' : 'text-(--text-muted)'
                }`}
              >
                Display Time
              </h3>

              <input
                type="text"
                placeholder="Display time"
                disabled={!enabled}
                className="input mt-5"
              />
            </div>

          </div>
        </div>

      </div>

      {/* ===== SAVE BUTTON ===== */}
      <div className="flex justify-end p-2">
        <SaveButton />
      </div>

    </div>
  )
}

export default Purchase
