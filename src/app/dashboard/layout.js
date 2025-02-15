import React from 'react'
import Header from './_component/Header'
import SideNav from './_component/SideNav'

export default function DashLayout({children}) {
  return (
    <div>
        <div className='hidden md:block shadow-md bg-white fixed mt-16 w-64'>
            <SideNav></SideNav>
        </div>
      <div>
        <Header></Header>
        <div className='md:ml-64 p-10'>
        {children}
        </div>
      </div>
    </div>
  )
}
