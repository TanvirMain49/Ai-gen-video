'use client'
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import Duration from './_components/Duration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import CustomLoading from './_components/Custom-loading';

export default function CreateNew() {

  const [fromData, setFromData] = useState();
  const [loading, setLoading] = useState(false);
  const [videoScript, setVideoScript] = useState();
  const handleInputChange = (fieldName, fieldValue)=>{
    setFromData(prev=>({
      ...prev,
      [fieldName]: fieldValue
    }))
  }

  const handleGenVideo = ()=>{
    getVideoScript();
  }

  //! get video script
  const getVideoScript = async()=>{
    setLoading(true)
    const prompt = 'Write a script to generate '+fromData.duration+' second video on topic: '+fromData.topic+' along with Ai image prompt: '+fromData.image+' format for each scene and give me result in JSON format  with imagePrompt and ContentText as a field '

    const result = await axios.post('/api/get-video-script',{ prompt:prompt})
    .then(res=>{
      console.log(res.data.result);
      setVideoScript(res.data.result);
    })
    setLoading(false)
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
        <Button
        onClick={handleGenVideo} 
        className="mt-10 py-5 w-full">Create Short Video</Button>
      </div>

      <CustomLoading loading={loading} />
    </div>
  )
}
