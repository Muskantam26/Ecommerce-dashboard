
import { useState } from 'react';
import ToggleSwitch from '../dashboardbtn/ToggleSwitch'
import { SaveButton } from '../dashboardbtn/StoreBtn';

const Donation = () => {

  
    const [donationSettings, setDonationSettings] = useState({
      donation: false,
    
    });
  
    //  Toggle handler
    const handleToggle = (key) => {
      setDonationSettings((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    };
  


  return (
    <div className="bg-(--card-bg) rounded-xl shadow border border-(--bg-border-white) mt-5">

   
      <div className="flex items-center justify-between p-6">
        <h3 className="text-lg font-semibold border-l-4 border-(--bg-border) pl-3">
          Donation Settings
        </h3>

        <ToggleSwitch
         checked={donationSettings.donation}
            onChange={() => handleToggle("donation")}
        />
      </div>

      <hr className="border-(--bg-border-color)" />

     
      <div className="p-6">
        <h4 className="font-semibold mb-2">Payment Methods</h4>

        <select
          
        
          className="w-105 border border-(--bg-border-color) rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-(--primary)"
         
        >
          <option value="">Please Select</option>
          <option value="razorpay">Razorpay</option>
          <option value="stripe">Stripe</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>

      <hr className="border-(--bg-border-color)" />

     
      <div className="flex justify-end p-6">
        <SaveButton/>
      </div>
    </div>
  )
}

export default Donation
