import React from "react";
import { SaveButton } from "../dashboardbtn/StoreBtn";

const ShippingLabel = () => {
  return (
     <div className="mt-6 bg-white rounded-xl p-6 shadow">
      <div className="text-lg font-semibold mb-8 border-l-4 border-green-500 pl-3">
        <h3>Shipping Label Settings</h3>
      </div>

      <hr className="border-gray-200" />

      <div className="mt-10 space-y-6">

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold">Address</h3>
            <input
              type="text"
              placeholder="Address"
              className="border border-gray-300 rounded-sm p-2 w-full"
            />
          </div>

          <div>
            <h3 className="font-semibold">City</h3>
            <input
              type="text"
              placeholder="City"
              className="border border-gray-300 rounded-sm p-2 w-full"
            />
          </div>

          <div>
            <h3 className="font-semibold">State</h3>
            <input
              type="text"
              placeholder="State"
              className="border border-gray-300 rounded-sm p-2 w-full"
            />
          </div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Country</h3>
            <input
              type="text"
              placeholder="Country"
              className="border border-gray-300 rounded-sm p-2 w-full"
            />
          </div>

          <div>
            <h3 className="font-semibold">Zipcode</h3>
            <input
              type="text"
              placeholder="Zipcode"
              className="border border-gray-300 rounded-sm p-2 w-full"
            />
          </div>
        </div>

      </div>
 
            <div className="flex gap-2 justify-end mt-10">
                   <SaveButton />
                 </div>

    </div>
  );
};

export default ShippingLabel;
