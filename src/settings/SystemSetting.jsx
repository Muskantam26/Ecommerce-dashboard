import React, { useState } from "react";
import { SaveButton } from "../dashboardbtn/StoreBtn";

const SystemSetting = () => {
 
  const [settings, setSettings] = useState({
    language: "en",
    timezone: "Asia/Kolkata",
    dateFormat: "DD MMM, YYYY",
    timeFormat: "hh:mm A",
  });


  const languageOptions = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
  ];

  const timezoneOptions = [
    { label: "Asia/Kolkata (IST)", value: "Asia/Kolkata" },
    { label: "UTC", value: "UTC" },
  ];

  const dateFormats = [
    { label: "Jan 1, 2015", value: "DD MMM, YYYY" },
    { label: "01/01/2015", value: "DD/MM/YYYY" },
  ];

  const timeFormats = [
    { label: "10:30 PM", value: "hh:mm A" },
    { label: "22:30", value: "HH:mm" },
  ];

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 

  return (
    <div>
      <div>
        <h3 className="text-lg font-semibold border-l-4 border-(--primary) pl-3">
          System Settings
        </h3>

        <div className="grid grid-cols-2 gap-10 mt-10">
          {/* Language */}
          <div>
            <h4 className="font-semibold">Default Language</h4>
            <select
              name="language"
              value={settings.language}
              onChange={handleChange}
              className="w-full border p-2 input"
            >
              {languageOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* Timezone */}
          <div>
            <h4 className="font-semibold">Default Timezone</h4>
            <select
              name="timezone"
              value={settings.timezone}
              onChange={handleChange}
              className="w-full border p-2 input"
            >
              {timezoneOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* Date Format */}
          <div>
            <h4 className="font-semibold">Date Format</h4>
            <select
              name="dateFormat"
              value={settings.dateFormat}
              onChange={handleChange}
              className="w-full border p-2 input"
            >
              {dateFormats.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* Time Format */}
          <div>
            <h4 className="font-semibold">Time Format</h4>
            <select
              name="timeFormat"
              value={settings.timeFormat}
              onChange={handleChange}
              className="w-full border p-2 input"
            >
              {timeFormats.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-end p-5 mt-10">
        <SaveButton />
      </div>
    </div>
  );
};

export default SystemSetting;
