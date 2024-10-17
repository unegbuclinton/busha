import React, { useState } from 'react'
import { Dropdown } from '../../assets/icons/Dropdown'
import { IoAdd } from 'react-icons/io5'
import { HiOutlineLogout } from 'react-icons/hi'
import { IoCheckmark } from 'react-icons/io5'

const ProfileAccordion = () => {
  const users = [
    { name: 'Busha', active: true },
    { name: 'Orange', active: false },
  ]
  const [openProfile, setOpenProfile] = useState(false)

  const handleProfileVisibility = () => {
    setOpenProfile((prev) => !prev)
  }

  return (
    <div className='relative'>
      <div
        onClick={handleProfileVisibility}
        className='mt-6 py-3 flex justify-between items-center pr-4 border-b border-[#F2F2F2]'
      >
        <div className='flex gap-3 items-center'>
          <p className='flex justify-center items-center px-3 py-1 rounded-lg bg-light-grey w-fit font-semibold'>
            B
          </p>
          <p className='text-xl font-bold'>Busha</p>
        </div>
        <Dropdown />
      </div>
      <div
        className={`absolute w-full bg-white  p-2 rounded-md shadow-card-shadow transition-all duration-700 ease-in-out ${
          openProfile
            ? 'max-h-[500px] opacity-100 -bottom-[175px]'
            : 'max-h-0 opacity-0 -bottom-0'
        } overflow-hidden`}
      >
        <div className=''>
          {users.map(({ name, active }, index) => {
            const initials = name[0]
            return (
              <div
                key={index}
                className='flex items-center justify-between gap-2 mb-2'
                onClick={handleProfileVisibility}
              >
                <div className='flex items-center gap-2'>
                  <p className='text-xl px-3 py-1.5 rounded-lg bg-light-grey w-fit font-semibold'>
                    {initials}
                  </p>
                  <p className='text-base font-normal'>{name} </p>
                </div>
                {active && <IoCheckmark />}
              </div>
            )
          })}
        </div>
        <div className='border-b border-light-grey'></div>
        <p
          onClick={handleProfileVisibility}
          className='mt-2 flex gap-2 items-center'
        >
          <span>
            <IoAdd size={20} />
          </span>
          Create new account
        </p>
        <p
          onClick={handleProfileVisibility}
          className='mt-2 flex gap-2 items-center'
        >
          <span>
            <HiOutlineLogout size={20} />
          </span>
          Log out
        </p>
      </div>
    </div>
  )
}

export default ProfileAccordion
