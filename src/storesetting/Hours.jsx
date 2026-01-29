import React, { useState } from "react";
import { SaveButton } from "../dashboardbtn/StoreBtn";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Hours = () => {
  const [hours, setHours] = useState({
    Sunday: { enabled: true, start: "09:39", end: "21:39" },
    Monday: { enabled: true, start: "10:39", end: "22:39" },
    Tuesday: { enabled: true, start: "12:39", end: "14:44" },
    Wednesday: { enabled: true, start: "10:40", end: "14:44" },
    Thursday: { enabled: false, start: "", end: "" },
    Friday: { enabled: false, start: "", end: "" },
    Saturday: { enabled: false, start: "", end: "" },
  });

  const handleChange = (day, field, value) => {
    setHours({
      ...hours,
      [day]: {
        ...hours[day],
        [field]: value,
      },
    });
  };

 

  return (
    <div className="bg-(--card-bg) rounded-xl shadow border border-(--bg-border-color) mt-5 p-5">
      {/* Title */}
      <h3 className="text-lg font-semibold border-l-4 border-(--bg-border) pl-3">
        Hours Settings
      </h3>

      <hr className="border-(--bg-border-color) mt-5" />

      {/* Header */}
      <div className="grid grid-cols-3 font-semibold text-(--bs-gray-700) mt-6 mb-4">
        <span>Day</span>
        <span>Start Time</span>
        <span>End Time</span>
      </div>

      {/* Rows */}
      {DAYS.map((day) => (
        <div
          key={day}
          className="grid grid-cols-3 items-center gap-6 mb-5"
        >
          {/* Day Checkbox */}
          <label className="flex items-center gap-3 text-(--bs-gray-800)">
            <input
              type="checkbox"
              className="w-4 h-4 accent-(--primary)"
              checked={hours[day].enabled}
              onChange={(e) =>
                handleChange(day, "enabled", e.target.checked)
              }
            />
            {day}
          </label>

          {/* Start Time */}
          <input
            type="time"
            enabled={hours[day]}
            value={hours[day].start}
            onChange={(e) =>
              handleChange(day, "start", e.target.value)
            }
            className="border border-(--bg-border-color) rounded-lg px-4 py-3 text-(bs-gray-700) disabled:bg-(--bs-gray-100)"
          />

          {/* End Time */}
          <input
            type="time"
            enabled={hours[day]}
            value={hours[day].end}
            onChange={(e) =>
              handleChange(day, "end", e.target.value)
            }
            className="border input rounded-lg px-4 py-3 text-(--bs-gray-700) disabled:bg-(--bs-gray-100)"
          />
        </div>
      ))}

      {/* Save Button */}
      <div className="flex justify-end mt-8">
       <SaveButton/>
      </div>
    </div>
  );
};

export default Hours;
