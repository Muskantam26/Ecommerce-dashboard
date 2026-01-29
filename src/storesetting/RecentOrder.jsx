import React, { useState } from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch'
import { SaveButton } from '../dashboardbtn/StoreBtn'

const RecentOrder = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="bg-(--card-bg) rounded-2xl shadow-2xl mt-5">

      {/* ===== HEADER ===== */}
      <div className="flex items-center justify-between p-6">
        <h3 className="text-lg font-semibold border-l-4 border-(--bg-border) pl-3">
          Recent Orders Settings
        </h3>

        <ToggleSwitch
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
        />
      </div>

      <hr className="border border-(--bg-border)" />

      {/* ===== CONTROLLED AREA ===== */}
      <div
        className={`transition-all duration-200 ${
          !enabled ? 'pointer-events-none opacity-40 grayscale' : ''
        }`}
      >
        <div className="p-6">
          <h3
            className={`font-medium ${
              enabled ? 'text-gray-600' : 'text-(--text-muted)'
            }`}
          >
            Recent Orders
          </h3>

          <input
            type="number"
            placeholder="Recent Orders"
            disabled={!enabled}
            className="input mt-5"
          />
        </div>
      </div>

      <hr className="border border-(--bg-border-color)" />

      {/* ===== SAVE BUTTON ===== */}
      <div className="flex justify-end p-6">
        <SaveButton />
      </div>

    </div>
  )
}

export default RecentOrder
