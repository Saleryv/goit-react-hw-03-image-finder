import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31781871-78b182e3a98bc4056c0cec328';

const getImagesInstance = axios.create({
    baseURL: BASE_URL,
    params: {
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: '12',
    },
  });
  
  export const getPixabayImages = async (query, page) => {
    const { data } = await getImagesInstance.get('', { params: { q: query, page } });
    return data;
  };