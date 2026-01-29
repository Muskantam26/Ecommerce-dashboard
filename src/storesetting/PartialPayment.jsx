import React, { useState } from "react";
import ToggleSwitch from "../dashboardbtn/ToggleSwitch";
import { SaveButton } from "../dashboardbtn/StoreBtn";
import EmailEditor from "./editor/EmailEditor";


const ALL_METHODS = [
  "Aamarpay","Authorizenet","Bank_transfer","Benefit","Braintree",
  "Cashfree","Cod","Coingate","Cybersource","Easebuzz","Esewa",
  "Fedpay","Flutterwave","Iyzipay","Khalti","Mercado","Midtrans",
  "Mollie","Myfatoorah","Nepalste","Nmi","Senangpay","Ozow",
  "Paystack","Payfast","Payhere","Paypal"
];


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


const Transaction=[
  {
    id:1,
    customer_name:"{customer_name}",
    Paid_Amount:"{amount}",
    Date:"{date}",
    Pending_Amount:"{remaining_amount}",
    Remaining_Date:"{remaining_date}",
  }
]

const PaymentMultiSelect = ({ value, onChange }) => {
  return (
    <div className="border border-(--bg-border-color) rounded-lg p-3">

      {/* Selected chips */}
      <div className="flex flex-wrap gap-2 mb-2">
        {value.map(item => (
          <span
            key={item}
            className="bg-(--primary) text-(--text-invert) px-3 py-1 rounded-sm text-sm flex items-center gap-2"
          >
            {item}
            <button
              type="button"
              onClick={() => onChange(value.filter(v => v !== item))}
              className="font-bold"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      {/* Dropdown */}
      <select
        className="text-sm text-(--text-muted) input" 
        value=""
        onChange={e => {
          if (e.target.value && !value.includes(e.target.value)) {
            onChange([...value, e.target.value]);
          }
        }}
      >
        <option value="">Please Select</option>
        {ALL_METHODS.map(method => (
          <option key={method} value={method}>
            {method}
          </option>
        ))}
      </select>

    </div>
  );
};


const PartialPayment = () => {
const [emailBody, setEmailBody] = useState(
  `Dear Customer,<br/><br/>
   We are pleased to inform you that your coupon request has been approved.<br/><br/>
   <strong>Best regards,</strong><br/>
   The Team`
);

 
    
  const [form, setForm] = useState({
    forceDeposit: false,
    depositType: "flat",
    depositAmount: 50,
    depositSelection: "pay",
    manageStatus: false,

    tax: "future",
    shipping: "future",
    coupon: "future",

    depositMethods: [],
    partialMethods: [],

    durationType: "month",
    durationPeriod: 1,
  });

  return (
    <>
    <div className="p-6 bg-(--card-bg) rounded-xl shadow-2xl  mt-5">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold border-l-4 border-(--bg-border) pl-3">
          Partial Payment Settings
        </h3>
        <ToggleSwitch />
      </div>

      <hr className="border-(--bg-border-color) mt-5" />

      {/* Force / Type / Amount */}
      <div className="grid grid-cols-3 gap-6 mt-5">
        <div>
          <label className="font-semibold">Force Deposit</label>
          <div className="mt-2">
            <ToggleSwitch
              checked={form.forceDeposit}
              onChange={() =>
                setForm(p => ({ ...p, forceDeposit: !p.forceDeposit }))
              }
            />
          </div>
        </div>

        <div>
          <label className="font-semibold">Deposit Type</label>
          <select
            className=" p-2 mt-2 input"
            value={form.depositType}
            onChange={e =>
              setForm({ ...form, depositType: e.target.value })
            }
          >
            <option value="flat">Flat</option>
            <option value="percentage">Percentage</option>
          </select>
        </div>

        <div>
          <label className="font-semibold">Deposit Amount</label>
          <input
            type="number"
            className="input mt-2 "
            value={form.depositAmount}
            onChange={e =>
              setForm({ ...form, depositAmount: Number(e.target.value) })
            }
          />
        </div>
      </div>

      {/* Deposit selection */}
      <div className="grid grid-cols-2 gap-6 mt-5">
        <div>
          <label className="font-semibold">Deposit Selection</label>
          <select
            className=" mt-2 input"
            value={form.depositSelection}
            onChange={e =>
              setForm({ ...form, depositSelection: e.target.value })
            }
          >
            <option value="pay">Pay Deposit</option>
            <option value="full">Full Payment</option>
          </select>
        </div>

        <div>
          <label className="font-semibold">Manage Status</label>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              className="text-(--text-muted) border-gray-400"
              checked={form.manageStatus}
              onChange={e =>
                setForm({ ...form, manageStatus: e.target.checked })
              }
            />
            <span className="text-sm font-semibold">
              Adjust orders with partial payment status.
            </span>
          </div>
        </div>
      </div>

      {/* Manage Calculation */}
      <h4 className="font-semibold mt-6">Manage Calculation</h4>
      <div className="grid grid-cols-3 gap-6 mt-2">
        {["tax", "shipping", "coupon"].map(key => (
          <div key={key}>
            <label className="font-semibold capitalize">
              Manage {key}
            </label>
            <select
              className="input mt-2 "
              value={form[key]}
              onChange={e =>
                setForm({ ...form, [key]: e.target.value })
              }
            >
              <option value="future">Count in Future Payment</option>
              <option value="now">Divide in proportion</option>
              <option value="deposit">Count in deposit</option>
            </select>
          </div>
        ))}
      </div>

      {/* Manage Payments (THIS IS WHAT YOU WANTED) */}
      <h4 className="font-semibold mt-6">Manage Payments</h4>
          
        <div className="grid grid-cols-2 gap-5">
    <div>
  <h3 className="font-semibold mt-5 mb-2">
    Payment Methods for Deposit
  </h3>

  <PaymentMultiSelect
    value={form.depositMethods}
    onChange={val =>
      setForm(p => ({ ...p, depositMethods: val }))
    }
  />
</div>


          
      <div>
  <h3 className="font-semibold mt-5 mb-2 ">
    Payment Methods for Partial Payment
  </h3>

  <PaymentMultiSelect
    value={form.partialMethods}
    onChange={val =>
      setForm(p => ({ ...p, partialMethods: val }))
    }
  />
</div>
</div>


 <h4 className="font-semibold mb-4">Reminder Mail Setting</h4>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="font-semibold">Duration Type</label>
          <select
            className="input "
            value={form.durationType}
            onChange={e =>
              setForm({ ...form, durationType: e.target.value })
            }
          >
            <option value="day">Year</option>
            <option value="month">Month</option>
          </select>
        </div>

        <div>
          <label className="font-semibold">Duration Period</label>
          <input
            type="number"
            className="input"
            value={form.durationPeriod}
            onChange={e =>
              setForm({ ...form, durationPeriod: Number(e.target.value) })
            }
          />
        </div>
      </div>
   <hr  className="border-(--bg-border-color) mt-5"/>

      <div className="flex justify-end-safe p-4">
        <SaveButton/>
      </div>


      </div>

         <div className="p-6 bg-(--card-bg) rounded-xl shadow-2xl mt-5">

      {/* Header */}
      <div className="flex items-center  justify-between">
        <h3 className="text-lg font-semibold border-l-4 border-(--bg-border) pl-3">
        Payment Remainder Settings
        </h3>

     <div className="flex gap-5"> <select className=" bg-blue-100 rounded-lg p-2 w-15 text-center border border-(--bs-gray-300) appearance-center">
  {LANGUAGES.map(lang => (
    <option 
    className="text-(--text-black) bg-(--bs-white)" 
    key={lang.value} value={lang.value}>
      {lang.label}
    </option>
  ))}
</select>



        <ToggleSwitch /></div>
      </div>

      <hr className="border-(--bg-border-color) mt-5" />



     
 <div className="p-6 bg-(--card-bg) rounded-xl shadow-2xl mt-5">
  

  {Transaction.length === 0 ? (
    <p className="text-(--text-muted)">No transactions yet.</p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Transaction.map(tx => (
        <div
          key={tx.id}
          className="p-4 transition"
        >
          <p className="text-(--primary)">
            <span className="text-(--bg-main)">Customer:</span> {tx.customer_name}
          </p>
          <p className="text-(--primary)">
            <span className="text-(--bg-main)">Paid Amount:</span> {tx.Paid_Amount}
          </p  >
          <p className="text-(--primary)">
            <span className="text-(--bg-main)">Date:</span> {tx.Date}
          </p>
          <p className="text-(--primary)">
            <span className="text-(--bg-main)">Pending Amount:</span> {tx.Pending_Amount}
          </p>
          <p className="text-(--primary)">
            <span className="text-(--bg-main)">Remaining Date:</span> {tx.Remaining_Date}
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
              placeholder="Enter subject"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">From</label>
            <input
              type="email"
              className="input px-4 py-3"
              placeholder="from@email.com"
            />
          </div>
        </div>
          <label className="block font-semibold mb-2">Email Message</label>

          <div className="border border-(--card-bg) rounded-lg overflow-hidden">
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
      </>




    
  );
};

export default PartialPayment;
