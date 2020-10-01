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

  const [query, setQuery] = useState('');

  const handleTagChange = (e) => {
    setQuery(e.currentTarget.value);
  }

  const getImages = (e, selectedTag = '') => {
    if (selectedTag) setQuery(selectedTag);

    const searchTerm = selectedTag || query;

    if (searchTerm) {
      loadImages()
        .then(res => {
          dispatch(res)
        });

      fetchImages(searchTerm)
        .then(res => {
          if (res.result.items.length) {
            dispatch(res)
          }
        })
    }
  }

  return (
    <div className="App">
      <h1>Flickr</h1>
      <Search
        onHandleTagChange={handleTagChange}
        onHandleSearch={getImages}
        loadImages={loadImages}
        query={query}
      />
      {state.loading && <Loader />}
      <CardList
        images={state.images}
        onHandleSearch={getImages}
      />
    </div>
  );
}

export default App;
