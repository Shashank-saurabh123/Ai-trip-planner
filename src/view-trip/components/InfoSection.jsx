import { Button } from '@/components/ui/button'
import { GetPlaceDetails } from '@/service/GlobalApi';

import React, { useEffect, useState } from 'react'
import { IoIosSend } from "react-icons/io";


const PHOTO_REF_URL = `https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=768&maxWidthPx=1024&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`;

function InfoSection({trip}) {
 

  const [photoUrl, setPhotoUrl] = useState();
  useEffect(()=>{
    trip && GetPlacePhoto();
  },[trip])

  const GetPlacePhoto = async () => {
   const data={
    textQuery:trip?.userSelection?.location?.label
   }

    const result=await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data.places[0].photos[3].name)

      const photoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name)
    
      setPhotoUrl(photoUrl)
    })
  }








  return (
    <div>
      <img src={photoUrl} className='h-[340px]  object-cover  w-full bg-slate-200 animate-none rounded-xl hover:scale-105 transition-all' />
      <div className='flex justify-between items-center'>
        <div className='my-5 flex flex-col gap-2'>
          <h2 className='font-bold text-xl'>{trip?.userSelection?.location?.label}</h2>
          <div className='flex gap-5'>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'> 🗓️ {trip?.userSelection?.noOfDays} Day</h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'> 💰{trip?.userSelection?.budget}Budget</h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'> 🥂No. Of Traveler:{trip?.userSelection?.travelar} </h2>
          </div>
        </div>
        <Button><IoIosSend /></Button>
      </div>
    </div>
  )
}

export default InfoSection;
