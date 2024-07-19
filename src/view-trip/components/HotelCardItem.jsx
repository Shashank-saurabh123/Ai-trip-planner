import { GetPlaceDetails, } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const PHOTO_REF_URL = `https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=768&maxWidthPx=1024&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`;

function HotelCardItem({ hotel }) {
    // const [photoUrl, setPhotoUrl] = useState('/placeholder.jpg');

    // useEffect(() => {
    //     hotel && GetPlacePhoto();
    // }, [hotel]);

    // const GetPlacePhoto = async () => {
    //     const data = {
    //         textQuery: hotel?.hotelName,
           
    //     };

    //     try {
    //         const result = await GetPlaceDetails(data);
    //         const photoName = result.data.places[0].photos[0].name;  // Use the first photo if available
    //         const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
    //         setPhotoUrl(PhotoUrl);
    //     } catch (error) {
    //         console.log('Error fetching place details:', error);
    //     }
    // };

    const [photoUrl, setPhotoUrl] = useState('/placeholder.jpg');
    useEffect(()=>{
      hotel && GetPlacePhoto();
    },[hotel])
  
    const GetPlacePhoto = async () => {
     const data={
      textQuery:hotel?.name
     }
  
      const result=await GetPlaceDetails(data).then(resp=>{
        console.log(resp.data.places[0].photos[3].name)
  
        const photoUrl=PHOTO_REF_URL.replace('{NAME}',resp?.data?.places[0]?.photos[3]?.name)
      
        setPhotoUrl(photoUrl)
      })
    }
  

    return (
        <Link to={`https://www.google.com/maps/search/?api=1&query=${hotel.hotelName},${hotel?.address}`} target='_blank'>
            <div className='hover:scale-105 transition-all cursor-pointer'>
                <img src={photoUrl?photoUrl:'/placeholder.jpg'} className='rounded-xl h-[180px] w-full object-cover' alt={hotel?.hotelName} />
                <div >
                    <h2 className='font-medium'>{hotel?.name}</h2>
                    <h2 className='text-xs text-gray-500'>📍{hotel?.address}</h2>
                    <h2 className='text-sm'>💰{hotel?.price}$ per night</h2>
                    <h2 className='text-sm'>⭐{hotel?.rating}</h2>
                </div>
            </div>
        </Link>
    );
}

export default HotelCardItem;
