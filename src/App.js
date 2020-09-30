import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { store } from './store/store';
import { fetchImages, loadImages } from './actions/index';
import CardList from './components/CardList/CardList';
import Loader from './components/Loader/Loader';
import './App.scss';

import Search from './components/Search/Search';

function App() {
  const globalState = useContext(store);
  const {
    dispatch,
    state
  } = globalState;

  const [tag, setTag] = useState('');

  const handleTagChange = (e) => {
    setTag(e.currentTarget.value);
  }

  const getImages = (e) => {
    e.preventDefault();
    loadImages()
      .then(res => {
        dispatch(res)
      });
    fetchImages(tag)
      .then(res => {
        if (res.result.items.length) {
          dispatch(res)
        }
      })
  }

  return (
    <div className="App">
      <h1>Flickr</h1>
      <Search
        onHandleTagChange={handleTagChange}
        onHandleClick={getImages}
      />
      {state.loading && <Loader />}
      <CardList
        images={state.images}
      />
    </div>
  );
}

export default App;
