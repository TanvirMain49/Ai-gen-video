"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import EmptyState from './_component/EmptyState';
import Link from 'next/link';

export default function Dashboard() {
  const [videoList, setVideoList] = useState([]);
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h2 className='text-primary text-2xl font-bold'>Dashboard</h2>
        <Link href='/dashboard/create-new'><Button>+ Create new</Button></Link>
      </div>
      {videoList.length===0 &&<div>
        <EmptyState/>
      </div>}
    </div>
  )
}
