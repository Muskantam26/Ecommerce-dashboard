import React from 'react'

export const SaveButton = () => {
  return (
    <button type='submit' className="bg-(--primary) p-3 rounded-xl text-(--text-invert) font-semibold cursor-pointer">
      Save Changes
    </button>
  )
}


export const DeleteButton = () => {
  return (
    <button type='submit' className="bg-(--bs-pink) p-3 rounded-xl hover:bg-(--bs-red) text-(text-black) font-semibold hover:text-(--text-invert) cursor-pointer">
      Delete Store
    </button>
  )
}