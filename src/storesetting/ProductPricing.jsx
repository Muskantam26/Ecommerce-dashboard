import React from 'react'
import DataTable from '../component/Datatable'
import { Plus } from 'lucide-react'

const ProductPricing = () => {
  const columns=[
    {label:"PRICING METHOD",key:"pricing-method"},
    {label:"CONDITION",key:"condition"},
    {label:"ACTION",key:"action"},
  ]
  return (
        <div className="mt-6 bg-(--card-bg) rounded-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold  border-l-4 border-(--bg-border) pl-3">Product Pricing Rules</h3>
            
           <button className="bg-(--primary) text-(--text-invert) p-2 rounded-lg">
            <Plus className="h-5 w-5" />
          </button>
        
      </div>
            <DataTable
            columns={columns}
            data={[]}
            />
           </div>

  )
}

export default ProductPricing