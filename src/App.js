import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import { store } from './store/store';
import { fetchImages } from './actions/index';
import CardList from './components/CardList/CardList';
import './App.scss';

import Search from './components/Search/Search';

const API_KEY = 'bf923637108559554c103c964060517c';
const SECRET = '763d45c09f0daec1';
const API_URL = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tagmode=any&tags=';

const LOAD_IMAGES = 'LOAD_IMAGES';

function App() {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const [tag, setTag] = useState('');
  const [images ,setImages] = useState([]);

  const handleTagChange = (e) => {
    setTag(e.currentTarget.value);
  }

  const getImages = (e) => {
    e.preventDefault();
    fetchImages(tag)
      .then(res => {
        console.log('ressss', res);
        dispatch(res)
      })

    // const tags = tag.split(' ');
    // const formattedTags = tags.map(tag => tag.replace(/[^0-9a-z]/gi, '')).filter(tag => tag !== '').join(',');
    // const url = API_URL + `${formattedTags}`;
    // axios.get(url)
    //   .then(res => {
    //     console.log('sdkfj', res.data);
    //     setImages(res.data);
    //   })
  }

  return (
    <div className="App">
      <h1>Flickr</h1>
      <Search
        onHandleTagChange={handleTagChange}
        onHandleClick={getImages}
      />
      <CardList
        // images={images.items}
        images={globalState.state.images}
      />
    </div>
  );
}

export default App;
