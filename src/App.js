import React, { useContext, useState } from 'react';
import { store } from './store/store';
import { fetchImages, loadImages } from './actions/index';
import { formatTags } from './helpers/index';
import CardList from './components/CardList/CardList';
import Heading from './components/Heading/Heading';
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

      const formattedTags = formatTags(searchTerm);
      fetchImages(formattedTags)
        .then(res => {
          if (res.result.items.length) {
            dispatch(res)
          }
        })
    }
  }

  return (
    <div className="App">
      <div className="background" />
      <Heading text="flickr" />
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
