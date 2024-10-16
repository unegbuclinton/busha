import React, { useState } from 'react'
import { Hambuger } from '../../assets/icons/Hambuger'
import Search from '../search/Search'
import Switch from '../swicth/Switch'
import { IoNotifications } from 'react-icons/io5'
import Sidebar from '../sidebar/Sidebar'

const Navbar = ({ setIsChecked, isChecked, setActiveSidebar }) => {
  const [openHamburger, setOpeneHamburger] = useState(false)
  return (
    <nav className='flex gap-2 items-center justify-between px-4 py-3 border-b-2 border-gray-500/45'>
      <div className='flex gap-2 items-center mr-2'>
        <span
          onClick={() => {
            setOpeneHamburger(true)
            setActiveSidebar(true)
          }}
        >
          <Hambuger />
        </span>
        <Search />
      </div>
      <div className='flex gap-2 items-center'>
        <Switch setIsChecked={setIsChecked} isChecked={isChecked} />
        <IoNotifications size={20} />
      </div>
      <Sidebar
        isOpenHamburger={openHamburger}
        onCloseHamburger={setOpeneHamburger}
        setActiveSidebar={setActiveSidebar}
      />
    </nav>
  )
}

export default Navbar
