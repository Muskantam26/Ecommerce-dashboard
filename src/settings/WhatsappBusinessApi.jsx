import React from 'react'
import { SaveButton } from '../dashboardbtn/StoreBtn'
import Btn from '../dashboardbtn/Btn'

const WhatsappBusinessApi = () => {
  return (
    <div>
        <div>
            <h3 className='text-lg font-normal mb-8 border-l-4 border-(--bg-border) pl-3'>WhatsApp Business API</h3>
        </div>
               
               <hr className='border border-(--bg-border-color) mt-5'/>
        <div className='grid grid-cols-2 gap-5'>
            <div>
            <h4 className='font-medium'>WhatsApp Phone number ID</h4>
            <input type="text" 
            placeholder='WhatsApp Phone Number ID'
            className='input'/>
            </div>
            <div>
                <h4 className='font-medium'>WhatsApp Access Token</h4>
                <input type="text"
                placeholder='WhatsApp Access Token'
                className='input' />
            </div>
        </div>
        <hr className='border border-(--bg-border-color) mt-5'/>

              <div className='flex justify-between p-5'>
              <Btn
    label="Send Test Massage"
    variant="primary" 
    size="md"          
    
  />
                <SaveButton/>
              </div>

    </div>
  )
}

export default WhatsappBusinessApi