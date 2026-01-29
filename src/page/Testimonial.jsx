import React, { useState } from 'react'
import DataTable from '../component/Datatable'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { FaStar, FaRegStar } from 'react-icons/fa'
import { Plus } from 'lucide-react';


const Testimonial = () => {

  const [testimonials] = useState([
    {
      id: 1,
      avatar: 'https://ecom-demo.workdo.io/uploads/2/testimonial/36_1749029493_sigmund-jzz_3jWMzHA-unsplash.jpg',
      user_name: 'Sneha P.',
      category: 'Dresses',
      product: 'Summer Floral Dress',
      rating: 2,
      description:
        "wore one of your dresses to a friend’s wedding, and everyone asked where I got it from! The design was unique and the stitching top-notch.",
    },
    {
      id: 2,
      avatar: 'https://ecom-demo.workdo.io/uploads/2/testimonial/80_1749029287_jake-nackos-IF9TK5Uy-KI-unsplash.jpg',
      user_name: 'Kiran B.',
      category: 'Jackets',
      product: "Spykar Women's Denim Jacket",
      rating: 3,
      description:
        'This jacket is lightweight, stylish, and surprisingly warm. I’ve taken it on hikes and road trips — it’s comfortable and looks great in photos too!',
    },
    {
      id: 3,
      avatar: 'https://ecom-demo.workdo.io/uploads/2/testimonial/93_1749029014_brooke-cagle-pJqfhKUpCh8-unsplash.jpg',
      user_name: 'Anannya D.',
      category: 'Womens Store',
      product: "Linen-Blend Apron Jumpsuit",
      rating: 3,
      description:
        'This store has become my go-to for trendy outfits. I love how affordable everything is without compromising on quality. Each piece adds charm to my wardrobe!”',
    },
    {
      id: 4,
      avatar: 'https://ecom-demo.workdo.io/uploads/2/testimonial/28_1749028726_nicolas-horn-MTZTGvDsHFY-unsplash.jpg',
      user_name: 'Aarav M.',
      category: 'Mens Store ',
      product: "Linen-Blend Plainfront Short",
      rating: 2,
      description:
        'Shopping for men’s clothes has never been this easy. The materials are top-quality, and everything fits just right — from casual tees to formal shirts. I’m a loyal customer now!”',
    },
    {
      id: 5,
      avatar: 'https://ecom-demo.workdo.io/uploads/2/testimonial/27_1749028618_aiony-haust-3TLl_97HNJo-unsplash.jpg',
      user_name: 'Riya S.',
      category: 'Coats',
      product: "Spykar Women's Denim Jacket",
      rating: 2,
      description:
        'I was looking for a coat that’s both cozy and fashionable, and I found it here. The fabric is warm, and the design is just perfect for winter outings.',
    },
  ])
  const columns = [

    {
      label: 'Avatar',
      key: 'avatar',
      render: (row) => (
        <img
          src={row.avatar}
          alt={row.user_name}
          className="w-15 h-15 rounded-xl object-cover"
        />
      )
    },

    {
      label: 'User Name',
      key: 'user_name',
    },

    {
      label: 'Category',
      key: 'category',
    },

    {
      label: 'Product',
      key: 'product',
    },

    {
  label: 'Rating',
  key: 'rating',
  render: (row) => (
    <div className="flex gap-1 text-(--bs-orange)">
      {[...Array(5)].map((_, index) =>
        index < row.rating ? (
          <FaStar key={index} className="text-lg" />
        ) : (
          <FaRegStar key={index} className="text-lg" />
        )
      )}
    </div>
  ),
},


    {
      label: 'Description',
      key: 'description',
      render: (row) => (
        <p className="max-w-md text-(--bs-gray-600)">
          {row.description}
        </p>
      )
    },
    
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
    <div className=''>
             
    <div className="flex items-center justify-between mb-6">
      
      {/* LEFT SIDE */}
      <div>
        <h1 className="text-2xl font-semibold app-text">Testimonial</h1>
        <div className="flex items-center gap-1">
         
            <button className="text-sm text-(--primary)">Home &gt;</button>
         
          <span className="text-(--bs-gray-600) text-sm">Testimonial</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <button className="bg-(--primary) p-1 rounded-lg text-(--text-invert)">
        <Plus size={22} />
      </button>

    </div>
    <DataTable
      columns={columns}
      data={testimonials}
     
    />
    </div>

  )
}

export default Testimonial
