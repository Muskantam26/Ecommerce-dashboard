import React, { useState } from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch'
import { SaveButton } from '../dashboardbtn/StoreBtn';

const ManageDuo = () => {

  
      const [manageduoSettings, setManageduoSettings] = useState({
        manage: false,
      
      });
    
    
      const handleToggle = (key) => {
        setManageduoSettings((prev) => ({
          ...prev,
          [key]: !prev[key],
        }));
      };

  return (
    <div className='bg-(--card-bg)  rounded-2xl shadow-2xl  mt-5'>
     <div className="flex items-center justify-between p-6">
        <h3 className="text-lg font-semibold border-l-4 border-(--bg-border) pl-3">
          DUO2FA Settings
        </h3>

        <ToggleSwitch
         checked={manageduoSettings.manage}
            onChange={() => handleToggle("manage")}
        />
      </div>
  <hr className='border-(--bg-border-color)'/>

  <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5 justify-between' >
    <div>
    <h3>Duo API host  name</h3>
    <input type="text"
    placeholder='Enter here...'
    className='input p-2 w-full'
    />
      </div>

      <div>
    <h3>Duo Secret Key</h3>
    <input type="password"
    placeholder='**********'
    className='input p-2 w-full'
     />
     </div>
  </div>
  <div className='p-5'>
    <h3>Duo Integration Key</h3>
    <input type="password"
    placeholder='**********'
    className='input w-96'
    />
  </div>
  <hr className='border border-(--bg-border-color)'/>

  <div className='flex justify-end-safe p-5'>
    <SaveButton/>
  </div>
    </div>
  )
}

export default ManageDuo