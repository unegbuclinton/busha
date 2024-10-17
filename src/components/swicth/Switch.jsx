import React, { useState } from 'react'

const Switch = ({ setIsChecked, isChecked }) => {
  const handleToggle = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className='flex items-center gap-2'>
      <label
        htmlFor='toggle'
        className='text-xs text-black font-medium whitespace-nowrap'
      >
        Test Mode
      </label>
      <div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
        <input
          type='checkbox'
          name='toggle'
          id='toggle'
          checked={isChecked}
          onChange={handleToggle}
          className='toggle-checkbox absolute ml-[2px] mt-[0.5px] top-[1px] block w-4 h-4 rounded-full bg-white appearance-none cursor-pointer'
        />
        <label
          htmlFor='toggle'
          className='toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer'
        ></label>
      </div>
    </div>
  )
}

export default Switch
