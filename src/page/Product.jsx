import React, { useState } from 'react'
import DataTable from '../component/Datatable'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { TbFileImport } from 'react-icons/tb';
import { LuFileOutput } from 'react-icons/lu';
import { Plus } from 'lucide-react';
import { CiGrid41 } from 'react-icons/ci';


const Product = () => {
  const [products] = useState([
    {
      id: 1,
      name: "	Raffia Wide Brim Hat Cap",
      category: "Hats",
      brand: "NIKE",
      label: "Today’s Special",
      cover_image: "https://ecom-demo.workdo.io/uploads/2/12_1749031192_3.png",
      varient: "Has varient",
      review: "0",
      price: "$75.0",
      stock_status: "in varient",
      stock_quantity: "-"
    },
    {
      id: 2,
      name: "Classic Unisex Straw Boater cap",
      category: "Hats",
      brand: "NIKE",
      label: "Today’s Special",
      cover_image: "https://ecom-demo.workdo.io/uploads/2/62_1749022339_2.png",
      varient: "no varient",
      review: "0",
      price: "$59.0",
      stock_status: "in stock",
      stock_quantity: "-"
    },
     {
      id: 3,
      name: "Dakota Cashmere Men's Scarf",
      category: "Scarf",
      brand: "GILDAN",
      label: "Limited Edition",
      cover_image: "https://ecom-demo.workdo.io/uploads/2/23_1749021926_2.png",
      varient: "Has varient",
      review: "0",
      price: "In Varient",
      stock_status: "in varient",
      stock_quantity: "-"
    },
     {
      id: 4,
      name: "Classic Suiting organic cotton coats",
      category: "Coats",
      brand: "BURMERRY",
      label: "Today’s Special",
      cover_image: "https://ecom-demo.workdo.io/uploads/2/26_1749201062_67_1749021664_4.png",
      varient: "Has varient",
      review: "0",
      price: "In Varient",
      stock_status: "in varient",
      stock_quantity: "-"
    },
     {
      id: 5,
      name: "	Linen-Blend Plainfront Short",
      category: "Mens Store",
      brand: "NIKE",
      label: "Limited Edition",
      cover_image: "https://ecom-demo.workdo.io/uploads/2/75_1749021436_1-1.png",
      varient: "no varient",
      review: "0",
      price: "$35.0",
      stock_status: "in stock",
      stock_quantity: "-"
    },
     {
      id: 6,
      name: "	Woven-Textured Shirt",
      category: "Mens Store",
      brand: "NIKE",
      label: "Limmited Eddtion",
      cover_image: "https://ecom-demo.workdo.io/uploads/2/87_1749204252_Dresses.png",
      varient: "Has varient",
      review: "0",
      price: "In Varient",
      stock_status: "in varient",
      stock_quantity: "-"
    },
     {
      id: 7,
      name: "Spykar Women's Denim Jacket",
      category: "Hats",
      brand: "NIKE",
      label: "Today’s Special",
      cover_image: "https://ecom-demo.workdo.io/uploads/2/47_1749020431_32.png",
      varient: "no varient",
      review: "0",
      price: "$75.0",
      stock_status: "in stock",
      stock_quantity: "-"
    },
     {
      id: 8,
      name: "	Short-Sleeve Crochet-Style Polo",
      category: "Hats",
      brand: "NIKE",
      label: "Today’s Special",
      cover_image: "https://ecom-demo.workdo.io/uploads/2/14_1749019781_3.png",
      varient: "no varient",
      review: "0",
      price: "$75.0",
      stock_status: "in stock",
      stock_quantity: "-"
    },
     {
      id: 9,
      name: "Linen-Blend Apron Jumpsuit",
      category: "Hats",
      brand: "NIKE",
      label: "Today’s Special",
      cover_image: "https://ecom-demo.workdo.io/uploads/2/18_1749019474_5.png",
      varient: "no varient",
      review: "0",
      price: "$75.0",
      stock_status: "in stock",
      stock_quantity: "-"
    },
     {
      id: 10,
      name: "Summer Floral Dress",
      category: "Hats",
      brand: "NIKE",
      label: "Today’s Special",
      cover_image: "https://ecom-demo.workdo.io/uploads/2/19_1749019041_1.png",
      varient: "no varient",
      review: "0",
      price: "$45.0",
      stock_status: "in stock",
      stock_quantity: "-"
    },
     
     
  ])

  
  const columns = [
    { label: 'NAME', key: 'name' },
    { label: 'CATEGORY', key: 'category' },
    { label: 'BRAND', key: 'brand' },
    { label: 'LABEL', key: 'label' },
    {
      label: 'COVER IMAGE',
      key: 'cover_image',
      render: (row) => (
        <img src={row.cover_image} className="h-15 w-15 object-cover rounded" alt={row.name} />
      )
    },
    { label: 'VARIENT', key: 'varient' },
    { label: 'REVIEW', key: 'review' },
    { label: 'PRICE', key: 'price' },
    {
      label: 'STOCK STATUS',
      key: 'stock_status',
      render: (row) => {
       
        const bgColor = row.stock_status === 'in stock' ? 'bg-(--primary) text-(--text-invert)' : 'bg-pink-100 text-pink-700'
        return (
          <button className={`px-4 py-1 text-sm rounded ${bgColor}`}>
            {row.stock_status}
          </button>
        )
      }
    },
    { label: 'STOCK QUANTITY', key: 'stock_quantity' },
    
    {
      label: 'ACTION',
      key: 'action',
      render: (row) => (
        <div className="flex items-center gap-2 flex-nowrap whitespace-nowrap">
          <button
            onClick={() => console.log('Edit', row)}
            className="p-2 bg-[#d1f3f9] text-(--bs-info) rounded-lg cursor-pointer"
          >
            <PencilSquareIcon className="h-4 w-4" />
          </button>
    
          <button
            onClick={() => console.log('Delete', row)}
            className="p-2 bg-[#ffd5e0] text-(--bs-red) rounded-lg cursor-pointer"
          >
            <TrashIcon className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ]

  return (
    <div>
     <div className="flex items-center justify-between mb-6 ">
                       
                       {/* LEFT SIDE */}
                       <div>
                         <h1 className="text-2xl font-semibold app-text">Product</h1>
                         <div className="flex items-center gap-1">
                          
                             <button className="text-sm text-(--primary) cursor-pointer">Home &gt;</button>
                         
                           <span className="text-(--bs-gray-500) text-sm">Product</span>
                         </div>
                       </div>
                 <div className="flex gap-2">
    
                       {/* RIGHT SIDE */}
                        <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert)">
                        <TbFileImport size={22} />
                       </button>
                       <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert)">
                        <LuFileOutput size={22} />
                       </button>
                       <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert)">
                                      <CiGrid41  size={22} />
                                    </button>
                       <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert) cursor-pointer">
                         <Plus  size={22} />
                       </button>
                       </div>
                 
                     </div>

          <DataTable
            columns={columns}
            data={products}
            onEdit={(row) => console.log('Edit', row)}
            onDelete={(row) => console.log('Delete', row)}
          />
    </div>
  )
}

export default Product
