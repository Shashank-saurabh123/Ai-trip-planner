import { GetPlaceDetails } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const PHOTO_REF_URL = `https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=768&maxWidthPx=1024&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`;
function UserTripCardItem({trip}) {
  
    const [photoUrl, setPhotoUrl] = useState(null);
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
        <Link to={'/view-trip/'+trip?.id}> 
        <div className='hover:scale-105 transition-all '>
        <img src={photoUrl?photoUrl:'/placeholder.jpg'} 
        //className=' w-[200px] h-[200px] rounded-xl object-cover'
         className='w-[200px] h-[200px] rounded-xl object-cover'
        />
        <div>
            <h2 className='font-bold text-lg'>
            {trip?.userSelection?.location?.label}  
            </h2>
            <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays}Days trip with {trip?.userSelection?.budget}</h2>
        </div>
        </div>
    </Link> 
  )
}

export default UserTripCardItem
