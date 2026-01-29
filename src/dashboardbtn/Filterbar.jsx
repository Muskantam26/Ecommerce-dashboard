import React from 'react'

const Filterbar = () => {
  return (
    
       <div className="flex items-center justify-between mb-4 gap-3">
      <div className="flex items-center gap-2">
        <select
          className="
            border border-(--bg-border-color-input)
            rounded-md px-3 py-2 text-sm
            bg-(--bg-main)
          "
        >
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>
        <span className="text-sm">entries per page</span>
      </div>

    </div>
  )
}

export default Filterbar;
