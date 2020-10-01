import axios from 'axios';

const API_URL = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tags=';

const CLEAR_IMAGES = 'CLEAR_IMAGES';
const LOAD_IMAGES = 'LOAD_IMAGES';
const LOAD_IMAGES_SUCESS = 'LOAD_IMAGES_SUCESS';

export const clearImages = async () => {
  return {
    type: CLEAR_IMAGES
  }
}

export const loadImages = async () => {
  return {
    type: LOAD_IMAGES
  }
};

export const fetchImages = (tag) => {
  const tags = tag.split(' ');
  const formattedTags = tags.map(tag => tag.replace(/[^0-9a-z]/gi, '')).filter(tag => tag !== '').join(',');
  const url = API_URL + `${formattedTags}`;
  return axios.get(url)
    .then(res => ({
      type: LOAD_IMAGES_SUCESS,
      result: res.data
    }))
    .catch(err => console.log(err))
};
