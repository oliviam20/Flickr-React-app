import React, { useState, useContext } from 'react';
import { store } from './store/store';
import { fetchImages, loadImages } from './actions/index';
import CardList from './components/CardList/CardList';
import Loader from './components/Loader/Loader';
import './App.scss';

import Search from './components/Search/Search';

const App = () => {
  const globalState = useContext(store);
  const {
    dispatch,
    state
  } = globalState;

  const [tag, setTag] = useState('');

  const handleTagChange = (e) => {
    setTag(e.currentTarget.value);
  }

  const getImages = (e, selectedTag = '') => {
    e.preventDefault();
    if (selectedTag) setTag(selectedTag)
    loadImages()
      .then(res => {
        dispatch(res)
      });
    fetchImages(selectedTag || tag)
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
        searchTerm={tag}
      />
      {state.loading && <Loader />}
      <CardList
        images={state.images}
        handleGetImages={getImages}
      />
    </div>
  );
}

export default App;
