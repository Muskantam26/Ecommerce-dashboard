import React, { useState } from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch';
import EmailEditor from './editor/EmailEditor';
import { SaveButton } from '../dashboardbtn/StoreBtn';

const ReviewReminder = () => {
  
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


const Storedata=[
  {
    id:1,
    Store_Name:"{store_name}",
   Review_URL:"{review_url}",
    App_Name:"{app_name}",
    Customer_Name:"{customer_name}",
    
  }
]
  
 
  const [emailBody, setEmailBody] = useState(
    `Dear {customer_name},
Thank you for choosing {store_name}. We hope you were satisfied with your {store_name}.

Please leave your feedback here: {review_url}

Thank you, and we look forward to seeing you again at {app_name}.`
  );
  return (
   <div className="p-6 bg-(--card-bg) rounded-xl shadow-2xl mt-5">

      {/* Header */}
      <div className="flex items-center  justify-between">
        <h3 className="text-lg font-semibold border-l-4 border-(--bg-border) pl-3">
   Review Reminder Settings
        </h3>

     <div className="flex gap-5"> <select className=" bg-blue-100 rounded-lg p-2 w-15 text-center border border-(--bg-border-color-input) appearance-center">
  {LANGUAGES.map(lang => (
    <option 
    className="text-(text-black) bg-(--bs-white)" 
    key={lang.value} value={lang.value}>
      {lang.label}
    </option>
  ))}
</select>



        <ToggleSwitch /></div>
      </div>

      <hr className="border-(--bg-border-color) mt-5" />



     
 <div className="p-6 bg-(--card-bg) rounded-xl shadow-2xl mt-5">
  

  {Storedata.length === 0 ? (
    <p className="text-(--text-muted)">No transactions yet.</p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Storedata.map(tx => (
        <div
          key={tx.id}
          className="p-4 transition"
        >
          <p className="text-(--primary)">
            <span className="text-(--text-main)">Store Name:</span> {tx.Store_Name}
          </p>
          <p className="text-(--primary)">
            <span className="text-(--text-main)">Review URL:</span> {tx.Review_URL}
          </p  >
          <p className="text-(--primary)">
            <span className="text-(--text-main)">App Name :</span> {tx.App_Name}
          </p>
           <p className="text-(--primary)">
            <span className="text-(--text-main)">Customer Name:</span> {tx.Customer_Name}
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
              className="input px-4 py-3"
              defaultValue={"Order Review"}
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">From</label>
            <input
              type="email"
              className="input px-4 py-3"
              defaultValue={"EcommerceGo-Saas"}
            />
          </div>
        </div>
          <label className="block font-semibold mb-2">Email Message</label>

          <div className="border border-(--bg-border-color-input) rounded-lg overflow-hidden">
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

export default ReviewReminder;