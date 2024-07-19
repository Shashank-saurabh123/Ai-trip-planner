import React from 'react';
import PlaceCardItem from './PlaceCardItem';
function PlacesToVisit({ trip }) {
//console.log("PlacesToVisit trip prop:", trip);

  if (!trip || !trip.tripData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className="font-bold text-lg mt-3">Places to Visit</h2>
      <div>
        {trip.tripData?.itinerary?.map((item, index) => (
          <div className='mt-2' key={index}>
            
            
            
            <h2 className='font-medium text-lg'>{item.day}</h2>
            <div className='grid md:grid-cols-2 gap-5'>
             {item.plan.map((place,index)=>(
                <div className=''>
                  <h2 className='font-semibold text-sm text-orange-600'>{place.bestTime}</h2>
                <PlaceCardItem place={place}/>
                </div>

             ))}
               </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default PlacesToVisit;
