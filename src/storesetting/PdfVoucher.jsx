import React, { useState } from "react";


import { SaveButton } from "../dashboardbtn/StoreBtn";
import DataTable from "../component/Datatable";
import EmailEditor from "./editor/EmailEditor";

const PdfVoucher = () => {

  const [emailBody, setEmailBody] = useState(
    `Dear Customer,<br/><br/>
     We are pleased to inform you that your coupon request has been approved.
     Please find your discount voucher attached as a PDF.<br/><br/>
     Thank you for choosing us!<br/><br/>
     <strong>Best regards,</strong><br/>
     The Team`
  );

  const columns = [
    { label: "TITLE", key: "title" },
    { label: "EMAIL", key: "email" },
    { label: "DETAILS", key: "details" },
    { label: "ACTION", key: "action" },
  ];

  
  return (
    <>
      {/* ---------- MAIL SETTINGS ---------- */}
      <div className="p-6 bg-(--card-bg) rounded-xl shadow-2xl  mt-5">
        <h3 className="text-lg font-semibold border-l-4 border-(--bg-border) pl-3">
          Mail Settings
        </h3>

        <hr className="border-(--bg-border-color) mt-5 mb-6" />

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

        {/* ---------- FORMATTED EMAIL EDITOR ---------- */}
        <div>
          <label className="block font-semibold mb-2">Email Message</label>

          <div className="border border-(--bs-gray-300) rounded-lg overflow-hidden">
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

      <div className="mt-6 bg-(--card-bg) rounded-xl p-6 shadow-2xl">
        <h3 className="text-lg font-semibold border-l-4 border-(--bg-border) pl-3 mb-4">
          Request Of Coupon Code
        </h3>

        <hr className="border-(--bg-border-color) mb-4" />

        <DataTable columns={columns} data={[]} />
      </div>
    </>
  );
};

export default PdfVoucher;
