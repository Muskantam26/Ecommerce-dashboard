import React, { useRef, useState } from 'react'

const BrandSetting = () => {

 const [darkLogo, setDarkLogo] = useState("https://ecom-demo.workdo.io/storage/uploads/logo/logo-dark.png?timestamp=1769236540");
  const [lightLogo, setLightLogo] = useState("https://ecom-demo.workdo.io/storage/uploads/logo/logo-light.png?timestamp=1769236540");
  const [fevIcon,setFavIcon]=useState("https://ecom-demo.workdo.io/storage/uploads/logo/favicon.png?timestamp=1769236540");


  
  const darkInputRef = useRef(null);
  const lightInputRef = useRef(null);
  const fevInputRef = useRef(null);


 const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      if (type === 'dark') setDarkLogo(imageUrl);
      if (type === 'light') setLightLogo(imageUrl);
      if(type=='fav')setFavIcon(imageUrl);
      
    }
  };

  return (
    <div>
        <div className="mb-6">
        <h3 className="text-lg font-semibold border-l-4 border-(--primary) pl-3">
          Brand Settings
        </h3>
      </div>

      <div className='grid grid-cols-3 p-3 items-center justify-between gap-10'>
        <div className='w-full shadow-2xl rounded-2xl flex-col p-3 '>
            <h3 className='text-lg font-normal border-l-4 border-(--primary) pl-3 '>Logo dark</h3>

                  <hr  className='border border-(--bg-border-color) mt-5'/>
                    <div className='h-40  flex items-center'>
             <img src={darkLogo} alt="Invoice Logo" className="mb-4  object-contain " />
            </div>
             <input 
                type="file" 
                ref={darkInputRef} 
                className="hidden" 
                accept="image/*"
                onChange={(e) => handleFileChange(e, 'dark')} 
             />
             <div className='flex justify-center'>
             <button 
                onClick={() => darkInputRef.current.click()}
                className="bg-(--primary) text-(--text-invert) px-4 py-2 rounded-md text-sm flex items-center  gap-2 hover:bg-(--primary-hover) transition-colors"
             >
               <span>↑</span> Choose File Here
             </button>
             </div>
        </div>
        <div className='w-full shadow-2xl rounded-2xl p-3'>
            <h3 className='text-lg font-normal border-l-4 border-(--primary) pl-3'>Logo Light</h3>

   <hr  className='border border-(--bg-border-color) mt-5'/>

                  <div className='h-40 flex items-center'>
             <img src={lightLogo} alt="Invoice Logo" className="mb-4  object-contain " />
            </div>
             <input 
                type="file" 
                ref={lightInputRef} 
                className="hidden" 
                accept="image/*"
                onChange={(e) => handleFileChange(e, 'light')} 
             />
             
             <div className='flex justify-center'>
               <button 
                onClick={() => lightInputRef.current.click()}
                className="bg-(--primary) text-(--text-invert) px-4 py-2 rounded-md text-sm flex items-center  gap-2 hover:bg-green-600 transition-colors"
             >
               <span>↑</span> Choose File Here
             </button>
             </div>
             

        </div>
        <div className='w-full shadow-2xl rounded-2xl p-3'>
            <h3 className='text-lg font-normal border-l-4 border-(--primary) pl-3'>Favicon</h3>

             <hr  className='border border-(--bg-border-color) mt-5'/>
                  <div className='h-40 flex items-center justify-center'>
             <img src={fevIcon} alt=" favicon" className="mb-4  object-contain bg-(--primary) " />
             </div>
             <input 
                type="file" 
                ref={fevInputRef} 
                className="hidden" 
                accept="image/*"
                onChange={(e) => handleFileChange(e, 'fev')} 
             />
             <div className='flex justify-center'>
             <button 
                onClick={() => fevInputRef.current.click()}
                className="bg-(--primary) text-(--text-invert) px-4 py-2 rounded-md text-sm flex items-center  gap-2 hover:bg-(--primary) transition-colors"
             >
               <span>↑</span> Choose File Here
             </button>
             </div>
        </div>
      </div>
    </div>
  )
}

export default BrandSetting