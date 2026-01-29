import React, { useState } from 'react'
import ToggleSwitch from '../dashboardbtn/ToggleSwitch';
import EmailEditor from './editor/EmailEditor';
import { SaveButton } from '../dashboardbtn/StoreBtn';

const ProductCatelog = () => {
  
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


const Appdata=[
  {
    id:1,
    App_Name:"{app_name}",
    APP_URL:"{app_url}",
    PDF_VIEW:"{pdf_view}",
    
  }
]
  
 
  const [emailBody, setEmailBody] = useState(
    `Dear Customer,<br/><br/>
     We are pleased to inform you that your coupon request has been approved.<br/><br/>
     <strong>Best regards,</strong><br/>
     The Team`
  );
  return (
   <div className="p-6 bg-(--card-bg) rounded-xl shadow-2xl mt-5">

      {/* Header */}
      <div className="flex items-center  justify-between">
        <h3 className="text-lg font-semibold border-l-4 border-(--bg-border) pl-3">
       Catelog Request Email Template
        </h3>

     <div className="flex gap-5"> <select className=" bg-(--bg-border-color-input) rounded-lg p-2 w-15 text-center border border-(--bs-gray-300) appearance-center">
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
  

  {Appdata.length === 0 ? (
    <p className="text-(--text-muted)">No transactions yet.</p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Appdata.map(tx => (
        <div
          key={tx.id}
          className="p-4 transition"
        >
          <p className="text-(--primary)">
            <span className="text-(--text-main)">APP NAME:</span> {tx.App_Name}
          </p>
          <p className="text-(--primary)">
            <span className="text-(--text-main)">APP URL:</span> {tx.APP_URL}
          </p  >
          <p className="text-(--primary)">
            <span className="text-(--text-main)">PDF VIEW:</span> {tx.PDF_VIEW}
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
              placeholder="Enter subject"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">From</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              placeholder="from@email.com"
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

export default ProductCatelog;