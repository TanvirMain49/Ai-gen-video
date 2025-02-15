import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

export default function Header() {
  return (
    <div className='p-3 px-5 flex items-center justify-between shadow-lg'>
      <div>
        <h2 className='text-xl font-bold'>Ai-Short-Gen</h2>
      </div>
      <div className='flex items-center gap-3'>
        <Button>Dashboard</Button>
        <UserButton></UserButton>
      </div>
    </div>
  )
}
