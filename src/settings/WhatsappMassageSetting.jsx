import React, { useState } from 'react'
import { SaveButton } from '../dashboardbtn/StoreBtn'

const ORDER_VARIABLES = [
  { label: 'Store Name', key: '{store_name}' },
  { label: 'Order No', key: '{order_no}' },
  { label: 'Customer Name', key: '{customer_name}' },
  { label: 'Billing Address', key: '{billing_address}' },
  { label: 'Billing Country', key: '{billing_country}' },
  { label: 'Billing City', key: '{billing_city}' },
  { label: 'Billing Postalcode', key: '{billing_postalcode}' },
  { label: 'Shipping Address', key: '{shipping_address}' },
  { label: 'Shipping Country', key: '{shipping_country}' },
  { label: 'Shipping City', key: '{shipping_city}' },
  { label: 'Shipping Postalcode', key: '{shipping_postalcode}' },
  { label: 'Item Variable', key: '{item_variable}' },
  { label: 'Qty Total', key: '{qty_total}' },
  { label: 'Sub Total', key: '{sub_total}' },
  { label: 'Discount Amount', key: '{discount_amount}' },
  { label: 'Shipping Amount', key: '{shipping_amount}' },
  { label: 'Total Tax', key: '{total_tax}' },
  { label: 'Final Total', key: '{final_total}' },
]

const ITEM_VARIABLES = [
  { label: 'Sku', key: '{sku}' },
  { label: 'Quantity', key: '{quantity}' },
  { label: 'Product Name', key: '{product_name}' },
  { label: 'Variant Name', key: '{variant_name}' },
  { label: 'Item Tax', key: '{item_tax}' },
  { label: 'Item Total', key: '{item_total}' },
]

const WhatsappMessageSetting = () => {

  const [form, setForm] = useState({
    itemFormat:
      '{quantity} x {product_name} - {variant_name} + {item_tax} = {item_total}',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

 
  return (
    <div className="bg-(--card-bg) rounded-lg">

      {/* Header */}
      <div>
        <h3 className="text-lg font-normal border-l-4 border-(--primary) pl-3">
          Whatsapp Message Settings
        </h3>
      </div>

      <hr className="my-6 border-(--bg-border-color)" />

   
      <div className="grid grid-cols-2 gap-10">

       
        <div>
          <h4 className="font-semibold mb-3">Order Variable</h4>

          <ul className="space-y-2 text-sm">
            {ORDER_VARIABLES.map((item, index) => (
              <li key={index}>
                {item.label} :
                <span className="text-(--text-color) ml-1">{item.key}</span>
              </li>
            ))}
          </ul>
        </div>

     
        <div>

          <h4 className="font-semibold mb-3">Item Variable</h4>
          <ul className="space-y-2 text-sm mb-4">
            {ITEM_VARIABLES.map((item, index) => (
              <li key={index}>
                {item.label} :
                <span className="text-(--text-color) ml-1">{item.key}</span>
              </li>
            ))}
          </ul>

          
          <label className="block text-sm font-semibold mb-1">
            {'{item_variable}'}
          </label>
          <input
            type="text"
            name="itemFormat"
            value={form.itemFormat}
            onChange={handleChange}
            className="input w-full mb-6 text-(--text-muted)"
          />

          <label className="block text-sm font-semibold mb-1">
            Whatsapp Message
          </label>
          <textarea
            name="message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            className="input w-full resize-none"
            
          />
        </div>
      </div>

      <hr className="my-6 border-(--bg-border-color)" />

      <div className="flex justify-end">
        <SaveButton />
      </div>
    </div>
  )
}

export default WhatsappMessageSetting
