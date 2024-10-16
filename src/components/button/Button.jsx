import React from 'react'

const Button = ({ children }) => {
  return (
    <button className='bg-black text-white rounded-md px-4 py-2 text-sm'>
      {children}
    </button>
  )
}

export default Button
