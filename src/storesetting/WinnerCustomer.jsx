import React, { useState } from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch';
import EmailEditor from './editor/EmailEditor';
import { SaveButton } from '../dashboardbtn/StoreBtn';

const WinnerCustomer = () => {
  
const LANGUAGES = [
  { label: "EN", value: "en" },
  { label: "Arabic", value: "ar" },
  { label: "Danish", value: "da" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "French", value: "fr" },
  { label: "Italian", value: "it" },
  { label: "Japanese", value: "ja" },
  { label: "Dutch", value: "nl" },
  { label: "Polish", value: "pl" },
  { label: "Portuguese", value: "pt" },
  { label: "Portuguese (Brazil)", value: "pt-br" },
  { label: "Russian", value: "ru" },
  { label: "Turkish", value: "tr" },
  { label: "Chinese", value: "zh" },
  { label: "Hebrew", value: "he" },
];


const Winnerdata=[
  {
    id:1,
    Store_Name:"{store_name}",
  Coupon_Code:"{coupon_code}",
    Expiry_Date :"{coupon_expire_date}",
    Customer_Name:"{customer_name}",
    
  }
]
  
 
  const [emailBody, setEmailBody] = useState(
    `Dear {customer_name},
We are thrilled to announce that you have been selected as our lucky winner! As a token of our appreciation, we are delighted to offer you an exclusive coupon code that you can use during checkout to unlock special savings on your next purchase.

Coupon Code: {coupon_code}


Expiration Date: {coupon_expire_date}

Hurry, this offer is valid for a limited time only, so make sure to use your coupon code before it expires. Visit our website {store_name} and explore our exciting range of products.Thank you for participating, and congratulations once again on your win!`
  );
  return (
   <div className="p-6 bg-white rounded-xl shadow-2xl shadow-gray-300 mt-5">

      {/* Header */}
      <div className="flex items-center  justify-between">
        <h3 className="text-lg font-semibold border-l-4 border-green-500 pl-3">
   Winner Customer Email Setting
        </h3>

     <div className="flex gap-5"> <select className=" bg-blue-100 rounded-lg p-2 w-15 text-center border border-gray-300 appearance-center">
  {LANGUAGES.map(lang => (
    <option 
    className="text-black bg-white" 
    key={lang.value} value={lang.value}>
      {lang.label}
    </option>
  ))}
</select>



        <ToggleSwitch /></div>
      </div>

      <hr className="border-gray-200 mt-5" />



     
 <div className="p-6 bg-white rounded-xl shadow-2xl shadow-gray-300 mt-5">
  

  {Winnerdata.length === 0 ? (
    <p className="text-gray-500">No transactions yet.</p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Winnerdata.map(tx => (
        <div
          key={tx.id}
          className="p-4 transition"
        >
          <p className="text-(--primary)">
            <span className="text-gray-800">Store Name:</span> {tx.Store_Name}
          </p>
          <p className="text-(--primary)">
            <span className="text-gray-800">Coupon Code:</span> {tx.Coupon_Code}
          </p  >
          <p className="text-(--primary)">
            <span className="text-gray-800">Expiry Date:</span> {tx.Expiry_Date}
          </p>
           <p className="text-(--primary)">
            <span className="text-gray-800">Customer Name:</span> {tx.Customer_Name}
          </p>
         
        </div>
      ))}
    </div>
  )}


  

      


</div>

 {/* ---------- FORMATTED EMAIL EDITOR ---------- */}
        <div className="mt-10">

           <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-2">Subject</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              defaultValue={"Lucky Customer"}
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">From</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              defaultValue={"EcommerceGo-Saas"}
            />
          </div>
        </div>
          <label className="block font-semibold mb-2">Email Message</label>

          <div className="border border-gray-300 rounded-lg overflow-hidden">
<EmailEditor
  value={emailBody}
  onChange={setEmailBody}
/>



          </div>
        </div>

        <div className="flex justify-end mt-8">
          <SaveButton />
        </div>

            </div> 
  )
}

export default WinnerCustomer;