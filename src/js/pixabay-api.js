import axios from "axios";

const API_KEY = "39672558-e125406c0fdedac43d7f74e3f";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data.hits;
}