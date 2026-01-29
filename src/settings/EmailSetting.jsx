import React, { useState } from "react";
import { SaveButton } from "../dashboardbtn/StoreBtn";
import Btn from "../dashboardbtn/Btn";

const EmailSetting = () => {
  
  const [formData, setFormData] = useState({
    email_setting: "smtp",
    mail_driver: "smtp",
    mail_host: "sandbox.smtp.mailtrap.io",
    mail_port: "587",
    mail_username: "",
    mail_password: "",
    mail_encryption: "tls",
    mail_from_address: "hello@ecommerce.com",
    mail_from_name: "eCommerceGo SaaS",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 



  return (
    <div>
      {/* HEADER */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold border-l-4 border-(--bg-border) pl-3">
          Email Settings
        </h3>
      </div>

      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Email Setting */}
        <div className="md:col-span-3">
          <label className="text-sm font-medium">Email Setting</label>
          <select
            name="email_setting"
            value={formData.email_setting}
            onChange={handleChange}
            className="w-full mt-1 border input rounded-lg px-3 py-2 input"
          >
            <option value="smtp">SMTP</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Mail Driver</label>
          <input
            type="text"
            name="mail_driver"
            value={formData.mail_driver}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Mail Host</label>
          <input
            type="text"
            name="mail_host"
            value={formData.mail_host}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Mail Port</label>
          <input
            type="text"
            name="mail_port"
            value={formData.mail_port}
            onChange={handleChange} 
            className="input"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Mail Username</label>
          <input
            type="text"
            name="mail_username"
            value={formData.mail_username}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Mail Password</label>
          <input
            type="password"
            name="mail_password"
            value={formData.mail_password}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Mail Encryption</label>
          <input
            type="text"
            name="mail_encryption"
            value={formData.mail_encryption}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Mail From Address</label>
          <input
            type="email"
            name="mail_from_address"
            value={formData.mail_from_address}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Mail From Name</label>
          <input
            type="text"
            name="mail_from_name"
            value={formData.mail_from_name}
            onChange={handleChange}
            className="input"
          />
        </div>
      </div>

<div className="flex justify-between mt-8">
  <Btn
    label="Send Test Mail"
    variant="primary" 
    size="md"          
    
  />

  
</div>
<div className="flex justify-end-safe ">
    
      <SaveButton /> 

</div>

     
      </div>
  
  );
};

export default EmailSetting;
