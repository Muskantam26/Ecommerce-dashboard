import React from "react";
import { SaveButton } from "../dashboardbtn/StoreBtn";
import { FaRegCopy } from "react-icons/fa";

const CustomSettings = () => {
  return (
    <>
  <div className="mt-6 bg-(--card-bg) rounded-xl p-6 shadow">
      {/* Header */}
      <h3 className="text-lg font-semibold mb-8 border-l-4  border-(--bg-border) pl-3">
        Custom Settings
      </h3>

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

        {/* Store Link */}
        <div>
          <label className="block font-semibold mb-2">Store Link</label>

          <div className="flex">
            <input
              type="text"
              name="storeLink"
              defaultValue="https://ecom-demo.workdo.io/stylique/home"
              className=" input"
            />

            <button
              type="button"
              className="border border-(--bg-border) text-(--primary) h-10 w-40 px-4  rounded-lg flex  items-center font-normal text-sm gap-2 hover:bg-(--bs-white) cursor-pointer"
            >
              <FaRegCopy size={20} />

              Copy Link
            </button>
          </div>
        </div>

        {/* Store Custom JS */}
        <div>
          <label className="block font-semibold mb-2">Store Custom JS</label>

          <textarea
            name="customJs"
            placeholder="console.log(hello);"
            rows={4}
            className="border border-(--bg-border-color) p-3 rounded-lg w-full resize-none"
          />
        </div>
      </div>

      {/* Store Custom CSS */}
      <div className="mb-10">
        <label className="block font-semibold mb-2">Store Custom CSS</label>

        <textarea
          name="customCss"
          placeholder="Custom CSS"
          rows={5}
          className="border border-(--bg-border-color) p-2 w-full rounded-lg  "
        />
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <SaveButton />
      </div>
      </div>
    </>
  );
};

export default CustomSettings;
