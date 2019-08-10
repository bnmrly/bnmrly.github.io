import axios from 'axios';
import { apiKey } from './config/Config';

const url = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&photoset_id=72157709722406487&user_id=7631378@N04&format=json&nojsoncallback=1`;

export const getPhotos = async () => {
  try {
    const data = await axios.get(`${url}`);
    const { photo } = data.data.photoset;

    // gets thumbnails
    const urls = photo.map(
      photo =>
        `https://live.staticflickr.com/${photo.server}/${photo.id}_${
          photo.secret
        }_q.jpg`
    );
    return urls;
  } catch (error) {
    console.log(error);
  }
};
