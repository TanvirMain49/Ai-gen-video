"use client"
import {  FileVideo, PanelsTopLeft, ShieldPlus, UserCircle } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function SideNav() {

    const menuItems = [
        {
            id:1,
            name:'Dashboard',
            path:'/dashboard',
            icon: PanelsTopLeft
        },
        {
            id:2,
            name:'Create New',
            path:'/dashboard/create-new',
            icon: FileVideo
        },
        {
            id:3,
            name:'Upgrade',
            path:'/upgrade',
            icon: ShieldPlus
        },
        {
            id:4,
            name:'User',
            path:'/user',
            icon: UserCircle
        },
        
    ]

    const path = usePathname();

  return (
    <div className='p-5 w-64 shadow-md h-screen'>
      <div className='grid gap-3'>
      {
        menuItems.map((menu, idx)=>(
            <Link href={menu.path} key={idx}>
            <div className={`flex gap-3 items-center p-3 hover:bg-[#3D2C8D] hover:text-white cursor-pointer transition-all ease-in-out duration-300 rounded-md ${path === menu.path && 'bg-[#3D2C8D] text-white'} `}>
                <menu.icon/>
                <h2>{menu.name}</h2>
            </div>
            </Link>
        ))
      }
      </div>
    </div>
  )
}
