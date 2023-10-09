'use client'
import { Image } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import {FcBusinessContact, FcFeedback, FcHome, FcSettings} from 'react-icons/fc'
import { RiLogoutBoxRLine, RiQuillPenFill } from 'react-icons/ri'
import {SlUserFollow} from 'react-icons/sl'
function Sidebar() {
const iconClasses = "w-5 h-5"
    const Menu = [
        {title: 'Dashboard', href:'/dashboard', icon: <FcHome className={iconClasses}/>},
        {title: 'Write an Article', href:'/dashboard/write', icon: <RiQuillPenFill className={iconClasses}/>},
        {title: 'Followers', href:'/followers', icon: <SlUserFollow className={iconClasses}/>},
    ]
     const UserMenu = [
        {title: 'Profile', href:'/dashboard/profile', icon: <Image src={'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'} className='w-5 h-5 rounded' /> },
        {title: 'Settings', href:'/', icon: <FcSettings className={iconClasses}/>},
        {title: 'Log out', href: '/', icon: <RiLogoutBoxRLine className={iconClasses}/>}
     ]
     const OtherMenu = [
        {title: 'Feedback', href:'/feedback', icon: <FcFeedback className={iconClasses}/>},
        {title: 'Contact', href:'/direct/contact', icon: <FcBusinessContact className={iconClasses}/>},
     ]
  return (
<div className="flex flex-col top-0 left-0 w-64 bg-white min-h-screen border-r">

  <div className="overflow-y-auto overflow-x-hidden flex-grow">
    <ul className="flex flex-col py-4 space-y-1">
      <li className="px-5">
        <div className="flex flex-row items-center h-8">
          <div className="text-sm font-light tracking-wide text-gray-500">Menu</div>
        </div>
      </li>

      {Menu.map((menuItem, index) => 
      <li key={index}>
        <Link href={menuItem.href} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
          <span className="inline-flex justify-center items-center ml-4">
          {menuItem.icon}
          </span>
          <span className="ml-2 text-sm tracking-wide truncate">{menuItem.title}</span>
        </Link>
      </li>
      )}
     

      <li className="px-5">
        <div className="flex flex-row items-center h-8">
          <div className="text-sm font-light tracking-wide text-gray-500">Other</div>
        </div>
      </li>
      {OtherMenu.map((menuItem, index)=> 
      <li key={index}>
        <Link href={menuItem.href} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
          <span className="inline-flex justify-center items-center ml-4">
{menuItem.icon}
          </span>
          <span className="ml-2 text-sm tracking-wide truncate">{menuItem.title}</span>
        </Link>
      </li>

      )}
      <li className="px-5">
        <div className="flex flex-row items-center h-8">
          <div className="text-sm font-light tracking-wide text-gray-500">Settings</div>
        </div>
      </li>

      {UserMenu.map((menuItem, index)=>
      <li key={index}>
        <Link href={menuItem.href} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
          <span className="inline-flex justify-center items-center ml-4">
{menuItem.icon}
          </span>
          <span className="ml-2 text-sm tracking-wide truncate">{menuItem.title}</span>
        </Link>
      </li>
      )}
     
    </ul>
  </div>
</div>
  )
}

export default Sidebar