import { GoogleGenerativeAI } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
   export const chatSession = model.startChat({
      generationConfig,
   
      history: [
        {
          role: "user",
          parts: [
            {
                text: "Generate Travel Plan for Location : Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo cordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo  Cordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.\n\n"},
          ],
        },
        {
          role: "model",
          parts: [
         {
          text: "```json\n{\n  \"hotels\": [\n    {\n      \"name\": \"The D Las Vegas\",\n      \"address\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": 40,\n      \"imageUrl\": \"https://images.trvl-media.com/media/content/dam/hotels/images/hotels/3555377/3555377_107677046.jpg\",\n      \"geoCoordinates\": \"36.1699,-115.1423\",\n      \"rating\": 4.0,\n      \"description\": \"A budget-friendly hotel located in the heart of Fremont Street Experience, offering a lively atmosphere with a casino, dining options, and entertainment.\"\n    },\n    {\n      \"name\": \"Golden Nugget Las Vegas\",\n      \"address\": \"129 E Fremont St, Las Vegas, NV 89101\",\n      \"price\": 60,\n      \"imageUrl\": \"https://images.trvl-media.com/media/content/dam/hotels/images/hotels/3555375/3555375_107677025.jpg\",\n      \"geoCoordinates\": \"36.1697,-115.1403\",\n      \"rating\": 4.5,\n      \"description\": \"A historic hotel with a casino, multiple restaurants, and a unique shark tank aquarium. It's known for its lively atmosphere and proximity to Fremont Street.\"\n    },\n    {\n      \"name\": \"Plaza Hotel & Casino\",\n      \"address\": \"1 Main St, Las Vegas, NV 89101\",\n      \"price\": 50,\n      \"imageUrl\": \"https://images.trvl-media.com/media/content/dam/hotels/images/hotels/3555386/3555386_107677055.jpg\",\n      \"geoCoordinates\": \"36.1705,-115.1399\",\n      \"rating\": 4.0,\n      \"description\": \"A classic hotel on Fremont Street with a casino, dining options, and entertainment venues. It's known for its vintage charm and central location.\"\n    },\n    {\n      \"name\": \"The Strat Hotel, Casino & SkyPod\",\n      \"address\": \"2000 S Las Vegas Blvd, Las Vegas, NV 89104\",\n      \"price\": 70,\n      \"imageUrl\": \"https://images.trvl-media.com/media/content/dam/hotels/images/hotels/3555376/3555376_107677027.jpg\",\n      \"geoCoordinates\": \"36.1012,-115.1741\",\n      \"rating\": 4.0,\n      \"description\": \"A hotel with a casino, dining options, and an observation deck offering panoramic views of Las Vegas. It's known for its affordable rates and unique attractions.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": \"Day 1\",\n      \"plan\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"A vibrant pedestrian mall with a canopy of lights, live music, street performers, and casinos.  Enjoy the free nightly light show.\",\n          \"placeImageUrl\": \"https://www.vegasexperience.com/images/featured/fremont-street-experience-live-music-vegas.jpg\",\n          \"geoCoordinates\": \"36.1699,-115.1423\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"5 minutes\",\n          \"bestTime\": \"6:00 PM - 10:00 PM\"\n        },\n        {\n          \"placeName\": \"The Neon Museum\",\n          \"placeDetails\": \"A museum showcasing iconic neon signs from Las Vegas' history. Take a guided tour to learn about the city's neon legacy.\",\n          \"placeImageUrl\": \"https://www.neonmuseum.org/sites/default/files/styles/banner_image/public/field/image/NeonMuseum_Banner_03_1.jpg\",\n          \"geoCoordinates\": \"36.1770,-115.1395\",\n          \"ticketPricing\": \"$25\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"10 minutes\",\n          \"bestTime\": \"10:00 AM - 4:00 PM\"\n        },\n        {\n          \"placeName\": \"The LINQ Promenade\",\n          \"placeDetails\": \"A pedestrian-friendly outdoor shopping, dining, and entertainment district featuring the High Roller observation wheel. \",\n          \"placeImageUrl\": \"https://www.thelinq.com/wp-content/uploads/2022/07/LINQ-Promenade-Aerial-02.jpg\",\n          \"geoCoordinates\": \"36.1041,-115.1727\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"timeTravel\": \"15 minutes\",\n          \"bestTime\": \"5:00 PM - 9:00 PM\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 2\",\n      \"plan\": [\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"A stunning indoor garden showcasing elaborate floral displays, changing seasonally. It's free to enter.\",\n          \"placeImageUrl\": \"https://www.bellagio.com/content/dam/mgmresorts/bellagio/images/conservatory-botanical-garden/conservatory-botanical-garden-hero.jpg\",\n          \"geoCoordinates\": \"36.1127,-115.1742\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"5 minutes\",\n          \"bestTime\": \"10:00 AM - 5:00 PM\"\n        },\n        {\n          \"placeName\": \"Fountains of Bellagio\",\n          \"placeDetails\": \"A spectacular water and light show set to music, synchronized with the Bellagio's architecture. Free to watch.\",\n          \"placeImageUrl\": \"https://www.bellagio.com/content/dam/mgmresorts/bellagio/images/fountains-of-bellagio/fountains-of-bellagio-hero.jpg\",\n          \"geoCoordinates\": \"36.1127,-115.1742\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"5 minutes\",\n          \"bestTime\": \"7:00 PM - 9:00 PM\"\n        },\n        {\n          \"placeName\": \"The Strip\",\n          \"placeDetails\": \"The iconic Las Vegas Strip is home to world-renowned casinos, hotels, restaurants, and entertainment venues. Explore the vibrant atmosphere, check out the casinos, and enjoy people-watching.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/sites/default/files/styles/hero_image/public/images/hero_images/las_vegas_strip_night_landscape_hero.jpg\",\n          \"geoCoordinates\": \"36.1146,-115.1729\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 5.0,\n          \"timeTravel\": \"10 minutes\",\n          \"bestTime\": \"7:00 PM - 11:00 PM\"\n        }\n      ]\n    }\n  ]\n}\n```"},

          ],
        },
      ],
    });
  
    
  
  