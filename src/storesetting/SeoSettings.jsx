import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SaveButton } from '../dashboardbtn/StoreBtn';
const SeoSettings = () => {
  return (
     <div className="mt-6 bg-white rounded-xl p-6 shadow">
    <h3 className='font-semibold'>SEO Settings</h3>

<div className='mt-10 flex gap-6'>
  
  {/* Google */}
  <div className='flex-1'>
    <div className='flex gap-2 mb-3 items-center'>
      <FaGoogle className='text-2xl' />
      <h3 className='font-semibold'>Google Analytic</h3>
    </div>

    <input
      type="text"
     
      placeholder='UA-XXXXXXXXX-X'
      className='border border-gray-300 p-3 w-full rounded-xl'
    />
  </div>

  {/* Facebook */}
  <div className='flex-1'>
    <div className='flex gap-2 mb-3 items-center'>
      <FaFacebookF className='text-2xl' />
      <h3 className='font-semibold'>Facebook Pixel</h3>
    </div>

    <input
      type="text"
      placeholder='UA-0000000-0'
      className='border border-gray-300 p-3 w-full rounded-xl'
    />
  </div>

</div>

<div className='flex gap-6 mt-6'>
  {/* Left side inputs */}
  <div className='flex-1'>
    <div className='mb-4'>
      <h3 className='font-semibold'>Meta Keywords</h3>
      <input
        type="text"
        placeholder='Meta Keyword'
        className='border border-gray-300 p-4 w-full rounded-xl text-left'
      />
    </div>

    <div>
      <h3 className='font-semibold'>Meta Description</h3>
      <input
        type="text"
        placeholder='Meta Description'
        className='border border-gray-300 p-4 w-full rounded-xl text-left'
      />
    </div>
  </div>

 
 {/* Right side meta image */}
<div className='flex-1'>
  <h3 className='font-semibold mb-2'>Meta Image</h3>

 
    
    {/* Image Preview */}
    <div className=' w-80 border border-gray-500 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center'>
      <img
        src="https://ecom-demo.workdo.io/themes/stylique/theme_img/img_1.png"
        alt="Meta Preview"
        className='object-contain h-full'
      />
    </div>

<div className='flex mr-10 justify-end'>
 {/* Upload Button */}
    <label className='cursor-pointer text-xs bg-(--primary) text-white px-4 py-2 rounded-lg  '>
       Choose File Here
      <input
        type="file"
        accept="image/*"
        className='hidden'
      />
    </label>

</div>
   

  
</div>

<div className='flex gap-2 items-end justify-end-safe mt-10'>
       <SaveButton/>
     
     </div>

</div>


</div>


  
  )
}

export default SeoSettings