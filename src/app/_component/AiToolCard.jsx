import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function AiToolCard() {
  return (
    <div className='w-10/12 flex justify-center items-center gap-24'>
       <Image src='/Tool-1.jpg' alt='Ai-Image' width={1600} height={1600} className='w-7/12 object-cover rounded-xl' />
        <div>
        <h1 className='text-5xl font-bold text-primary'>Text to Image</h1>
        <p className=' mt-4 text-base'> Ignite your creative spark with Imagine AI Image Generator. Describe your vision with words, and watch the powerful tool translate them into captivating artwork. Catalyze a flurry of ideas and conquer creative roadblocks.</p>
        <Button className='w-full mt-3'>Create Ai-Short</Button>
        </div>
    </div>
  )
}
