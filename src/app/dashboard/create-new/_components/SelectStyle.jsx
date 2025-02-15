import Image from 'next/image'
import React, { useState } from 'react'

export default function SelectStyle({onUserSelect}) {

    const optionStyle = [
        {
            name:'Realistic',
            image:'/Realisitc.jpg'
        },
        {
            name:'Cartoon',
            image:'/Carton.jpg'
        },
        {
            name:'Comic',
            image:'/Comic.jpg'
        },
        {
            name:'WaterColor',
            image:'/WaterColor.jpg'
        },
        {
            name:'GTA',
            image:'/GTA.jpg'
        },
    ]
    const [select, setSelect] = useState(); 
  return (
    <div className='mt-8'>
      <h2 className="text-2xl font-bold text-primary">Select Style</h2>
      <p className="text-gray-500">What's the Style of your video?</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 mt-4'>
        {
            optionStyle.map((item, idx)=>(
                <div key={idx} className={`relative rounded-2xl cursor-pointer
                ${select === item.name && 'border-8 border-[#3D2C8D]'}
                `}>
                    <Image src={item.image} alt={item.name} width={200} height={300}
                    className='h-52 object-cover rounded-lg w-full'
                    onClick={()=>{
                        setSelect(item.name)
                        onUserSelect('image', item.name)
                    }}
                    />
                    <h2 className={`absolute p-1 bg-black text-center font-semibold rounded-b-lg text-white bottom-0 w-full`}>{item.name}</h2>
                </div>
            ))
        }
      </div>
    </div>
  )
}
