import axios from 'axios'

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://youtube138.p.rapidapi.com"

const options = {
	headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

export const fetchData=async(url)=>{
  try{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }catch(error){
    console.error("error fetching api data: ",error);
    throw error;
  }
}

// cbbcb1aa48mshb7cb45ec615a844p1e17d0jsn88390099e369