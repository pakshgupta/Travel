
import axios from 'axios';



export const getPlacesData=async(type,sw,ne)=>{
    try{
        const {data:{data}}=await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
 
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': 'ecae94480emsh4b732de8e41ef53p1b6a66jsn0c7440917c03',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
        return data;
    }catch(error){
        console.log(error);
    }
}
export const getWeatherData = async (lat,lng) => {
  console.log(lat,lng);
  
  try {
    
      const { data } = await axios.get(`https://open-weather13.p.rapidapi.com/city/latlon/${lat}/${lng}`,{
        params:{
          lat:lat,
          lon:lng,
        },
        headers: {
        'X-RapidAPI-Key': 'ecae94480emsh4b732de8e41ef53p1b6a66jsn0c7440917c03',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      }
    });
    console.log(data);
    console.log(`${data.weather[0].icon}.png`);
      return data;
}
  catch (error) {
    console.log(error);
  }
};