import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { FaAlignLeft, FaArrowLeft } from 'react-icons/fa'

export default function AiToolCard({image, text, paragraph}) {
  return (
    <div className='w-11/12 flex justify-center items-center gap-24 relative'>
       <Image src={image} alt='Ai-Image' width={1600} height={1600} className='w-7/12 object-cover rounded-xl' />
        <div>
        <h1 className='text-5xl font-bold text-primary'>{text}</h1>
        <p className=' mt-4 text-base'>{paragraph}</p>
        <Button className='w-full mt-3'>Create Ai-Short</Button>
        </div>
        <div className='bg-black rounded-full py-3 px-2 text-white absolute right-0 top-3'><FaArrowLeft/></div>
    </div>
  )
}
