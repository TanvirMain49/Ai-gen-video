import React from 'react'
import SideNav from './_component/SideNav'

export default function DashLayout({children}) {
  return (
    <div>
        <div className='hidden md:block shadow-md bg-white fixed pt-4 w-64'>
            <SideNav></SideNav>
        </div>
      <div>
        <div className='md:ml-64 p-6'>
        {children}
        </div>
      </div>
    </div>
  )
}
