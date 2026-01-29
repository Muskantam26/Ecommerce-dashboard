import React, { useState, useRef } from 'react';
import { DeleteButton, SaveButton } from '../dashboardbtn/StoreBtn';
import ToggleSwitch from '../dashboardbtn/ToggleSwitch';

const StoreSetting = () => {

  const [settings, setSettings] = useState({
    enableAdditionalField: true,
    enableAuctionProduct: true,
    enableBundleProduct: true,
    cartQuantityControl: true,
    enableCheckoutAttachment: true,
    enableCouponEmail: true,
    enableCouponList: true,
    enableDigitalProduct: true,
    enableLotteryPrizes: true,
    enableMarketPlace: true,
    enableAffiliateProduct: true,
    enableProductBarcode: true,
    enableProductCSV: true,
    enableProductCatalog: true,
    enableProductCompare: true,
    enableProductEnquiry: true,
    enableImageZoomSetting: true,
    enableProductQuickView: true,
    enableProductReview: true,
    enableProductPDF: true,
    enableSpamPrevent: true,
    enableSpinToWin: true,
    enableSubscribePopup: true,
  });


  const [invoiceLogo, setInvoiceLogo] = useState("https://ecom-demo.workdo.io/storage/uploads/logo/logo.png");
  const [storeImage, setStoreImage] = useState("https://ecom-demo.workdo.io/themes/stylique/assets/images/logo.png");

  
  const invoiceInputRef = useRef(null);
  const storeInputRef = useRef(null);

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      if (type === 'invoice') setInvoiceLogo(imageUrl);
      if (type === 'store') setStoreImage(imageUrl);
      
    }
  };

  const formatLabel = (key) => {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
  };

  return (
    <>
          <div className="mt-6 bg-white rounded-xl p-6 shadow">
      <p className="text-xl font-semibold mb-6">Store Settings</p>

      {/* Basic Inputs */}
      <div className='flex justify-between'>
      <div>
        <h3 className='font-semibold'>Store Name</h3>
        <input type="text" 
        defaultValue={"stylique"}

        className='border border-gray-400 rounded-sm p-2 w-full ring-(--primary) focus:outline-none focus:ring-1 focus:ring-(--primary)'
        />
      </div>

       <div>
        <h3 className='font-semibold'>Store Email</h3>
        <input type="email" 
        defaultValue={"admin@example.com"}

        className='border border-gray-400 rounded-sm p-2 w-full focus:outline-none focus:ring-1 focus:ring-(--primary)'
        />
      </div>

       <div>
        <h3 className='font-semibold'>Store Slug</h3>
        <input type="text" 
        defaultValue={"admin@example.com"}

        className='border border-gray-400 rounded-sm p-2 w-full focus:outline-none focus:ring-1 focus:ring-(--primary)'
        />
      </div>

       <div>
        <h3 className='font-semibold'>Store Language</h3>
        <input type="text" 
        defaultValue={"English"}

        className='border border-gray-400 rounded-sm p-2  w-full focus:outline-none focus:ring-1 focus:ring-(--primary)'
        />
      </div>
     </div>


    

      {/* Toggles Grid */}
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
        {Object.keys(settings).map((key) => (
          <ToggleSwitch
            key={key}
            label={formatLabel(key)}
            checked={settings[key]}
            onChange={() => handleToggle(key)}
          />
        ))}
      </div>

 

      {/* Logo Upload Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[50%] mt-10">
        
        {/* Invoice Logo Card */}
        <div className="border border-gray-100 rounded-xl p-4 shadow-xl shadow-gray-200 bg-gray-50/30">
          <div className="flex items-center gap-2 mb-4">
             <div className="w-1 h-6 bg-green-500 rounded-full"></div>
             <h3 className="font-bold">Invoice Logo</h3>
          </div>
          <div className="flex flex-col items-center justify-center border-gray-200 rounded-lg p-6 bg-white">
             <img src={invoiceLogo} alt="Invoice Logo" className="mb-4 h-12 object-contain" />
            
             <input 
                type="file" 
                ref={invoiceInputRef} 
                className="hidden" 
                accept="image/*"
                onChange={(e) => handleFileChange(e, 'invoice')} 
             />
             
             <button 
                onClick={() => invoiceInputRef.current.click()}
                className="bg-(--primary) text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-green-600 transition-colors"
             >
               <span>↑</span> Choose File Here
             </button>
          </div>
        </div>

        {/* Store Image Card */}
        <div className="border border-gray-100 rounded-xl p-4 shadow-xl shadow-gray-200 bg-gray-50/30">
          <div className="flex items-center gap-2 mb-4">
             <div className="w-1 h-6 bg-green-500 rounded-full"></div>
             <h3 className="font-bold">Store Image</h3>
          </div>
          <div className="flex flex-col items-center justify-center  border-gray-200 rounded-lg p-6 bg-white">
             <img src={storeImage} alt="Store Logo" className="mb-4 h-12 object-contain" />
             
          
             <input 
                type="file" 
                ref={storeInputRef} 
                className="hidden" 
                accept="image/*"
                onChange={(e) => handleFileChange(e, 'store')} 
             />

             <button 
                onClick={() => storeInputRef.current.click()}
                className="bg-(--primary) text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-green-600 transition-colors"
             >
               <span>↑</span> Choose File Here
             </button>
          </div>
        </div>

      </div>
     <div className='flex gap-2 items-end justify-end-safe mt-10'>
       <SaveButton/>
       <DeleteButton/>
     </div>
     </div>
  </>
  );
};

export default StoreSetting;