import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import DataTable from '../component/Datatable'

const WebhookhSetting = () => {
 
    const [webhooks]=useState([
        {
            id:1,
            module:"New Order",
            url:"http://localhost/ecommercego-saas",
            method:"GET",

        },
        {
            id:2,
            module:"New Product",
            url:"http://localhost/ecommercego-saas/new-product",
            method:"POST",
        },
    ])

    const colomns=[
        {label:"MODULE",key:"module"},
        {label:"URL",key:"url"},
        {label:"METHOD",key:"method"},
    ]

  return (
    <div>
          <div className="flex justify-between items-center">
        <h3 className="text-lg font-normal border-l-4 border-(--primary) pl-3">
          Webhook Settings
        </h3>

          <button className="bg-(--primary) p-2 rounded-lg text-(--text-invert)">
        <Plus size={22} />
      </button>
        
      </div>

      <DataTable
      columns={colomns}
      data={webhooks}
      />
    </div>
  )
}

export default WebhookhSetting