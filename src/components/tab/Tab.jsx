import React, { useState } from 'react'

export const Tab = () => {
  const [activeTab, setActiveTab] = useState('30 days')
  const options = [{ value: '30 days' }, { value: 'All time' }]
  return (
    <div className='bg-light-grey py-1 px-1.5 rounded-md w-fit '>
      <div className='flex items-center gap-2'>
        {options.map(({ value, index }) => (
          <p
            className={`${
              activeTab === value ? ' font-bold bg-white rounded-lg' : ''
            } px-2.5 py-1.5`}
            key={index}
            onClick={() => setActiveTab(value)}
          >
            {value}
          </p>
        ))}
      </div>
    </div>
  )
}
