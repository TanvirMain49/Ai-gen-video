import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function EmptyState() {
  return (
    <div className='p-10 py-24 mt-10 flex flex-col items-center justify-center border-2 border-dashed  gap-y-2'>
      <h2 className='text-lg font-bold text-primary'>You don't have any short video created</h2>
      <Link href='/dashboard/create-new'><Button>+ Create new</Button></Link>
    </div>
  )
}
