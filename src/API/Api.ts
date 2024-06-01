import axios from "axios";

export const searchVideo = async () => {

  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      channelId: 'UCBVjMGOIkavEAhyqpxJ73Dw',
      part: 'snippet,id',
      order: 'date',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '5fa11521b0msh53007bf7e4d9cf9p12d40ejsnba3f88897e75',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.get('https://youtube-v31.p.rapidapi.com/search', {
      
      headers : {
        'X-RapidAPI-Key': '5fa11521b0msh53007bf7e4d9cf9p12d40ejsnba3f88897e75',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      },
      params: {
        relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }


};
