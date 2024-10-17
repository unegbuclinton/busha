import React, { useEffect, useState } from 'react'
import { Cancel } from '../../assets/icons/Cancel'
import { TiHome } from 'react-icons/ti'
import { RiExchangeBoxFill } from 'react-icons/ri'
import { FaWallet } from 'react-icons/fa6'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'
import { FaFileAlt } from 'react-icons/fa'
import { TbCodeCircleFilled } from 'react-icons/tb'
import { IoSettingsSharp } from 'react-icons/io5'
import ProfileAccordion from '../profile-accordion/ProfileAccordion'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Sidebar = ({ isOpenHamburger, onCloseHamburger, setActiveSidebar }) => {
  const [currentPath, setCurrentPath] = useState('Home')
  const links = [
    { title: 'Home', icon: <TiHome size={22} /> },
    { title: 'Balances', icon: <RiExchangeBoxFill size={22} /> },
    { title: 'Payments', icon: <FaWallet size={22} /> },
    { title: 'Transfers', icon: <BsFillArrowUpSquareFill size={22} /> },
    { title: 'Compliance', icon: <FaFileAlt size={22} /> },
    { title: 'Developers', icon: <TbCodeCircleFilled size={22} /> },
    { title: 'Settings', icon: <IoSettingsSharp size={22} /> },
  ]

  const onCloseSidebar = () => {
    onCloseHamburger(false)
    setActiveSidebar(false)
  }

  useEffect(() => {
    const fullURL = window.location.href
    const pathAfterSlash = fullURL.split('/').pop()
    setCurrentPath(pathAfterSlash)
  }, [window.location.href])

  return (
    <aside
      className={`absolute top-0 left-0 w-[85%] h-screen px-4 py-3 bg-white z-10 ${
        !isOpenHamburger ? '-translate-x-full' : 'translate-x-0'
      } transition-all duration-200`}
    >
      <span onClick={onCloseSidebar}>
        <Cancel />
      </span>

      <ProfileAccordion />
      <ul className=' border-b border-[#F2F2F2] mb-3'>
        {links.map(({ icon, title }, index) => (
          <a
            href={`#${title}`}
            onClick={onCloseSidebar}
            className={`flex gap-2 items-center py-2 px-2 my-2 rounded-md ${
              `#${title}` === currentPath
                ? 'bg-light-grey font-semibold'
                : 'text-text-color'
            }`}
            key={index}
          >
            <span>{icon}</span> {title}
          </a>
        ))}
      </ul>

      <div className='px-2 text-[#666666]'>
        <p className='flex justify-between items-center mb-5'>
          Docs
          <MdOutlineArrowOutward />
        </p>
        <p>Help</p>
      </div>
    </aside>
  )
}

export default Sidebar
