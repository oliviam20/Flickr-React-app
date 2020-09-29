import axios from 'axios';

const API_URL = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tags=';

const LOAD_IMAGES = 'LOAD_IMAGES';

export const fetchImages = (tag) => {
  const tags = tag.split(' ');
  const formattedTags = tags.map(tag => tag.replace(/[^0-9a-z]/gi, '')).filter(tag => tag !== '').join(',');
  const url = API_URL + `${formattedTags}`;
  return axios.get(url)
    .then(res => ({
      type: LOAD_IMAGES,
      result: res.data
    }))
    .catch(err => console.log(err))
}
