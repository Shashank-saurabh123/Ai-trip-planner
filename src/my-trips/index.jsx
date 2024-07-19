import { db } from '@/service/firebaseConfig';
import { collection, getDocs, where, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserTripCardItem from './components/UserTripCardItem';

function MyTrips() {
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(true);  // Added loading state

  useEffect(() => {
    GetUserTrips();
  }, []);

  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/');
      return;
    }

    const q = query(collection(db, 'AiTrips'), where('userEmail', '==', user?.email));
    const querySnapshot = await getDocs(q);
    const trips = [];
    querySnapshot.forEach((doc) => {
      trips.push(doc.data());
    });
    setUserTrips(trips);
    setLoading(false);  // Set loading to false after fetching data
  };

  return (
    <div className='px-5 mt-10 sm:px-10 md:px-20 lg:px-32 xl:px-40'>
      <h2 className='font-bold text-3xl'>My Trips</h2>
      <div className='grid grid-cols-2 mt-10 md:grid-cols-3 gap-5'>
        {loading ? (
          [1, 2, 3, 4,5,6].map((item, index) => (
            <div key={index} className='h-[200px] w-full bg-slate-200 animate-pulse rounded-xl hover:scale-105 transition-all'>
            </div>
          ))
        ) : (
          userTrips.map((trip, index) => (
            <UserTripCardItem trip={trip} key={index} />
          ))
        )}
      </div>
    </div>
  );
}

export default MyTrips;
