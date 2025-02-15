'use client'
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import Duration from './_components/Duration';
import { Button } from '@/components/ui/button';

export default function CreateNew() {

  const [fromData, setFromData] = useState();
  const handleInputChange = (fieldName, fieldValue)=>{
    setFromData(prev=>({
      ...prev,
      [fieldName]: fieldValue
    }))
  }

  return (
    <div className='md:px-20'>
      <h2 className='text-4xl font-bold text-primary text-center'>Create New</h2>

      <div className='shadow-md p-10'>
        {/* Select Topic */}
        <SelectTopic onUserSelect={handleInputChange}/>

        {/* Select Style */}
        <SelectStyle onUserSelect={handleInputChange}/>

        {/* Duration */}
        <Duration onUserSelect={handleInputChange} />

        {/* Create video */}
        <Button className="mt-10 py-5 w-full">Create Short Video</Button>
      </div>
    </div>
  )
}
