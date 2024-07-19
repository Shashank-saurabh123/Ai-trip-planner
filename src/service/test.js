
// import { GoogleGenerativeAI } from "@google/generative-ai";
  
// const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });
  
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 64,
//     maxOutputTokens: 8192,
//     responseMimeType: "application/json",
//   };
  

//    export const chatSession = model.startChat({
//       generationConfig,
   
//       history: [
//         {
//           role: "user",
//           parts: [
//             {text: "Generate travel Plan for Location: Las VeGas , for 1  Days for Couple with a Cheap budget,Give me a Hotels options list with Hotel Name, Hotel address, Price ,Hotel image url,geo cordinates,rating, descriptions and suggest itenerary with placeName,place Details,place image url,geo Cordinates,ticket pricing,rating,Time travel each of the location for 1 day with each day plan with beast time to visit in JSON format. make sure that itineray comes as an array not in object"},
//           ],
//         },
//         {
//           role: "model",
//           parts: [
//             {text: "```json\n{\n  \"hotels\": [\n    {\n      \"name\": \"The D Las Vegas\",\n      \"address\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"from $39 per night\",\n      \"imageUrl\": \"https://images.trvl-media.com/media/hotels/1000000/900000/899000/898200/898196/898196_106_b.jpg\",\n      \"geoCoordinates\": \"36.1698,-115.1396\",\n      \"rating\": 4.0,\n      \"description\": \"A budget-friendly casino hotel on Fremont Street, known for its lively atmosphere and proximity to attractions.\"\n    },\n    {\n      \"name\": \"The Golden Nugget\",\n      \"address\": \"129 E Fremont St, Las Vegas, NV 89101\",\n      \"price\": \"from $49 per night\",\n      \"imageUrl\": \"https://images.trvl-media.com/media/hotels/1000000/900000/899000/898200/898193/898193_106_b.jpg\",\n      \"geoCoordinates\": \"36.1693,-115.1424\",\n      \"rating\": 4.5,\n      \"description\": \"A historic hotel with a lively casino, a shark tank, and a variety of dining options.\"\n    },\n    {\n      \"name\": \"Circus Circus Hotel & Casino\",\n      \"address\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"from $30 per night\",\n      \"imageUrl\": \"https://images.trvl-media.com/media/hotels/1000000/900000/899000/898200/898184/898184_106_b.jpg\",\n      \"geoCoordinates\": \"36.1177,-115.1716\",\n      \"rating\": 3.5,\n      \"description\": \"A budget-friendly hotel known for its circus-themed entertainment and midway.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"plan\": [\n        {\n          \"time\": \"9:00 AM\",\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"A pedestrian mall with a canopy of lights and free live entertainment.\",\n          \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Fremont_Street_Experience_at_night.jpg/1280px-Fremont_Street_Experience_at_night.jpg\",\n          \"geoCoordinates\": \"36.1693,-115.1424\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"bestTimeToVisit\": \"Evening for the light show\"\n        },\n        {\n          \"time\": \"11:00 AM\",\n          \"placeName\": \"The Mob Museum\",\n          \"placeDetails\": \"A museum dedicated to the history of organized crime in the United States.\",\n          \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/The_Mob_Museum_Exterior_2015.jpg/1280px-The_Mob_Museum_Exterior_2015.jpg\",\n          \"geoCoordinates\": \"36.1698,-115.1405\",\n          \"ticketPricing\": \"From $29.95\",\n          \"rating\": 4.0,\n          \"bestTimeToVisit\": \"Morning or afternoon\"\n        },\n        {\n          \"time\": \"1:00 PM\",\n          \"placeName\": \"Heart Attack Grill\",\n          \"placeDetails\": \"A restaurant known for its extreme burgers and unhealthy food.\",\n          \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Heart_Attack_Grill_Las_Vegas_2009.jpg/1280px-Heart_Attack_Grill_Las_Vegas_2009.jpg\",\n          \"geoCoordinates\": \"36.1689,-115.1412\",\n          \"ticketPricing\": \"From $10\",\n          \"rating\": 3.5,\n          \"bestTimeToVisit\": \"Lunch or dinner\"\n        },\n        {\n          \"time\": \"4:00 PM\",\n          \"placeName\": \"The LINQ Promenade\",\n          \"placeDetails\": \"An outdoor shopping and dining promenade with the High Roller observation wheel.\",\n          \"imageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/The_LINQ_Promenade_2016.jpg/1280px-The_LINQ_Promenade_2016.jpg\",\n          \"geoCoordinates\": \"36.1292,-115.1733\",\n          \"ticketPricing\": \"From $30\",\n          \"rating\": 4.0,\n          \"bestTimeToVisit\": \"Afternoon or evening\"\n        },\n        {\n          \"time\": \"7:00 PM\",\n          \"placeName\": \"Free show on the Strip\",\n          \"placeDetails\": \"Enjoy a free show at one of the casinos on the Strip, such as the Bellagio fountains or the Mirage volcano.\",\n          \"imageUrl\": \"https://www.bellagio.com/images/default-source/attractions/bellagio-fountains.jpg?sfvrsn=56058b33_0\",\n          \"geoCoordinates\": \"36.1170,-115.1743\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"bestTimeToVisit\": \"Evening\"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Please note:**\n\n* This itinerary is just a suggestion and can be customized to fit your interests and preferences.\n* The prices for hotels and attractions are approximate and may vary depending on the time of year and availability.\n* It's always a good idea to book your hotel and attractions in advance, especially during peak season.\n* Consider using public transportation or ride-sharing services to get around Las Vegas, as parking can be expensive.\n* Don't forget to bring comfortable shoes and sunscreen, as you'll be doing a lot of walking. \n\nEnjoy your trip to Las Vegas! \n"},
//           ],
//         },
//       ],
//     });
  









/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");

// const apiKey = process.env.GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 64,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// async function run() {
//   const chatSession = model.startChat({
//     generationConfig,
//  // safetySettings: Adjust safety settings
//  // See https://ai.google.dev/gemini-api/docs/safety-settings
//     history: [
//       {
//         role: "user",
//         parts: [
//           {text: "Generate travel Plan for Location: Las VeGas , for 2  Days for Couple with a Cheap budget,Give me a Hotels options list with Hotel Name, Hotel address, Price ,Hotel image url,geo cordinates,rating, descriptions and suggest itenerary with placeName, place Details , place image url, geo Cordinates, ticket pricing, rating, Time travel  for each of the location from near famous places (eg:30 minutes fro Hawa mehal) for 2 day with each day plan with best time to visit (eg:5pm to 7pm) \ngive me all responses in JSON format. make sure that itineray comes as an array not in object"},
//         ],
//       },
//       {
//         role: "model",
//         parts: [
//           {text: "```json\n{\n  \"hotels\": [\n    {\n      \"name\": \"The D Las Vegas\",\n      \"address\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$50-$100 per night\",\n      \"imageUrl\": \"https://www.theD.com/images/hotel/the-d-las-vegas-exterior.jpg\",\n      \"geoCoordinates\": \"36.1699° N, 115.1423° W\",\n      \"rating\": 4.0,\n      \"description\": \"A budget-friendly hotel located in the heart of Fremont Street Experience, offering a retro vibe with a casino and restaurants.\"\n    },\n    {\n      \"name\": \"Golden Nugget Las Vegas\",\n      \"address\": \"129 E Fremont St, Las Vegas, NV 89101\",\n      \"price\": \"$70-$150 per night\",\n      \"imageUrl\": \"https://www.goldennugget.com/las-vegas/media/images/hotel-exterior-day.jpg\",\n      \"geoCoordinates\": \"36.1695° N, 115.1404° W\",\n      \"rating\": 4.5,\n      \"description\": \"A historic hotel known for its luxurious amenities, including a shark tank, multiple pools, and a casino.\"\n    },\n    {\n      \"name\": \"Circus Circus Hotel & Casino\",\n      \"address\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$40-$80 per night\",\n      \"imageUrl\": \"https://www.circuscircus.com/images/hotel/circus-circus-exterior.jpg\",\n      \"geoCoordinates\": \"36.1045° N, 115.1721° W\",\n      \"rating\": 3.5,\n      \"description\": \"A family-friendly hotel with a carnival theme, offering affordable rooms, circus acts, and a variety of dining options.\"\n    },\n    {\n      \"name\": \"The Strat Hotel, Casino & SkyPod\",\n      \"address\": \"2000 S Las Vegas Blvd, Las Vegas, NV 89104\",\n      \"price\": \"$60-$120 per night\",\n      \"imageUrl\": \"https://www.thestrat.com/images/hotel/the-strat-exterior.jpg\",\n      \"geoCoordinates\": \"36.1067° N, 115.1718° W\",\n      \"rating\": 4.0,\n      \"description\": \"A unique hotel with a 108-story tower offering incredible views from the SkyPod observation deck and a variety of dining and entertainment options.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"plan\": [\n        {\n          \"time\": \"10:00 AM - 12:00 PM\",\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"A pedestrian-friendly street with a canopy of LED lights, street performers, and various shops and restaurants.\",\n          \"imageUrl\": \"https://www.vegasexperience.com/media/images/hero-images/Fremont-Street-Experience.jpg\",\n          \"geoCoordinates\": \"36.1699° N, 115.1423° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"Walkable from most downtown hotels\"\n        },\n        {\n          \"time\": \"12:00 PM - 2:00 PM\",\n          \"placeName\": \"Heart Attack Grill\",\n          \"placeDetails\": \"A unique and controversial restaurant known for its unhealthy and high-calorie meals.\",\n          \"imageUrl\": \"https://www.heartattackgrill.com/images/slideshow/Slide_3.jpg\",\n          \"geoCoordinates\": \"36.1700° N, 115.1421° W\",\n          \"ticketPricing\": \"Prices vary depending on the meal\",\n          \"rating\": 3.5,\n          \"timeTravel\": \"Located on Fremont Street, a short walk from the Experience.\"\n        },\n        {\n          \"time\": \"2:00 PM - 4:00 PM\",\n          \"placeName\": \"The Mob Museum\",\n          \"placeDetails\": \"A museum dedicated to the history of organized crime in the United States.\",\n          \"imageUrl\": \"https://www.themobmuseum.org/images/hero-images/mob-museum-exterior.jpg\",\n          \"geoCoordinates\": \"36.1687° N, 115.1432° W\",\n          \"ticketPricing\": \"$25-$30 per person\",\n          \"rating\": 4.0,\n          \"timeTravel\": \"A short walk from Fremont Street Experience.\"\n        },\n        {\n          \"time\": \"4:00 PM - 7:00 PM\",\n          \"placeName\": \"Sunset at the Stratosphere\",\n          \"placeDetails\": \"Enjoy breathtaking views of Las Vegas from the observation deck at the top of the Stratosphere tower.\",\n          \"imageUrl\": \"https://www.thestrat.com/images/hero-images/skypod-sunset.jpg\",\n          \"geoCoordinates\": \"36.1067° N, 115.1718° W\",\n          \"ticketPricing\": \"$20-$30 per person\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"Located about 30 minutes from downtown by car.\"\n        },\n        {\n          \"time\": \"7:00 PM - 9:00 PM\",\n          \"placeName\": \"Dinner at a Food Truck Park\",\n          \"placeDetails\": \"Explore various food truck options offering a diverse range of cuisines at affordable prices.\",\n          \"imageUrl\": \"https://www.visitlasvegas.com/media/images/food-trucks-las-vegas.jpg\",\n          \"geoCoordinates\": \"36.1699° N, 115.1423° W\",\n          \"ticketPricing\": \"Prices vary depending on the food truck\",\n          \"rating\": 4.0,\n          \"timeTravel\": \"Located in various areas of Las Vegas, including downtown.\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"plan\": [\n        {\n          \"time\": \"10:00 AM - 12:00 PM\",\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"A beautiful and free attraction featuring a stunning display of flowers and plants.\",\n          \"imageUrl\": \"https://www.bellagio.com/images/attractions/conservatory/conservatory-fountains-winter-2023.jpg\",\n          \"geoCoordinates\": \"36.1170° N, 115.1725° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"Located on the Las Vegas Strip, a short walk from the Bellagio hotel.\"\n        },\n        {\n          \"time\": \"12:00 PM - 2:00 PM\",\n          \"placeName\": \"The LINQ Promenade\",\n          \"placeDetails\": \"A pedestrian-friendly outdoor shopping and dining area with a giant observation wheel.\",\n          \"imageUrl\": \"https://www.thelinq.com/images/hero-images/linq-promenade-day.jpg\",\n          \"geoCoordinates\": \"36.1098° N, 115.1723° W\",\n          \"ticketPricing\": \"Free to walk around, prices vary for the observation wheel.\",\n          \"rating\": 4.0,\n          \"timeTravel\": \"Located on the Las Vegas Strip, near the LINQ hotel.\"\n        },\n        {\n          \"time\": \"2:00 PM - 4:00 PM\",\n          \"placeName\": \"Neon Museum\",\n          \"placeDetails\": \"A museum showcasing the historic neon signs of Las Vegas.\",\n          \"imageUrl\": \"https://www.neonmuseum.org/images/hero-images/neon-museum-exterior.jpg\",\n          \"geoCoordinates\": \"36.1727° N, 115.1347° W\",\n          \"ticketPricing\": \"$20-$25 per person\",\n          \"rating\": 4.0,\n          \"timeTravel\": \"Located about 15 minutes from the Strip by car.\"\n        },\n        {\n          \"time\": \"4:00 PM - 6:00 PM\",\n          \"placeName\": \"Free Show at the Bellagio Fountains\",\n          \"placeDetails\": \"A spectacular water and music show that takes place in front of the Bellagio hotel.\",\n          \"imageUrl\": \"https://www.bellagio.com/images/attractions/fountains/bellagio-fountains-night-2023.jpg\",\n          \"geoCoordinates\": \"36.1170° N, 115.1725° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"Located on the Las Vegas Strip, in front of the Bellagio hotel.\"\n        },\n        {\n          \"time\": \"6:00 PM - 8:00 PM\",\n          \"placeName\": \"Dinner at a Buffet\",\n          \"placeDetails\": \"Many hotels offer affordable buffets with a wide selection of cuisines.\",\n          \"imageUrl\": \"https://www.caesars.com/content/dam/caesars/images/hotels/paris-las-vegas/restaurants/buffets/paris-las-vegas-buffet-food.jpg\",\n          \"geoCoordinates\": \"36.1170° N, 115.1725° W\",\n          \"ticketPricing\": \"Prices vary depending on the hotel and buffet\",\n          \"rating\": 3.5,\n          \"timeTravel\": \"Located in various hotels on the Strip and downtown.\"\n        }\n      ]\n    }\n  ]\n}\n```"},
//         ],
//       },
//     ],
//   });

//   const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//   console.log(result.response.text());
// }

// run();





    

// infosection.jsx
 
  // const [photoUrl, setPhotoUrl] = useState('/placeholder.jpg');
  // useEffect(()=>{
  //   trip && GetPlacePhoto();
  // },[trip])

  // const GetPlacePhoto = async () => {
  //   const data = {
  //     textQuery: trip?.userSelection?.location?.label
  //   }

  //   try {
  //     const result = await getPlaceDetails(data);
  //     const photoName = result.data.places[0].photos[3].name;
  //     const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
  //     setPhotoUrl(PhotoUrl);
  //   } catch (error) {
  //     console.error('Error fetching place details:', error);
  //   }
  // }

