import React, { useState } from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch';
import { SaveButton } from '../dashboardbtn/StoreBtn';

const FreeShipping = () => {

  
      const [shippingSettings, setShippinhSettings] = useState({
        shipping: true,
      
      });
    
      
      const handleToggle = (key) => {
        setShippinhSettings((prev) => ({
          ...prev,
          [key]: !prev[key],
        }));
      };
  return (
     <div className="bg-(--card-bg) rounded-xl shadow border border-(--bg-border-color) mt-5">

      {/* ---------- HEADER ---------- */}
      <div className="flex items-center justify-between p-6">
        <h3 className="text-lg font-semibold border-l-4 border-(--bg-border) pl-3">
          Free Shipping Pop-Up Settings
        </h3>

        <ToggleSwitch
         checked={shippingSettings.shipping}
            onChange={() => handleToggle("shipping")}
        />
      </div>

      <hr className="border-(--bg-border-color)" />

      <div className='p-5'>
        <h3 className='font-semibold'>Free Shipping Apply Price</h3>
        <input type="number" 
        defaultValue={100}
        className='input mt-5 '
         />
         <p className='text-(--text-muted) text-sm'>Note: Enter the minimum price from which you want the free shipping price to apply.</p>
      </div>

      <hr className='border-(--bg-border-color) mt-5'/>
     
     <div className='flex justify-end-safe p-4'>
      <SaveButton/>
  </div>
</div>
  )
}

export default FreeShipping