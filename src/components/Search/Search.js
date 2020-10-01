import React, { useEffect, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { store } from '../../store/store';
import { loadImages, clearImages } from '../../actions/index';
import debounce from 'lodash/debounce';
import InputText from '../InputText/InputText';
import './Search.scss';

const Search = ({
  onHandleTagChange,
  onHandleSearch,
  query
}) => {
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) onHandleSearch()
  }

  // const delayedQuery = useCallback(debounce(() => onHandleSearch(), 500), [])

  const globalState = useContext(store);
  const { dispatch } = globalState;

  // Update the function only when query updates
  const delayedQuery = useCallback(debounce(onHandleSearch, 500), [query]);

  const handleChange = (e) => {
    loadImages()
      .then(res => {
        dispatch(res)
      });
    onHandleTagChange(e);
    if (!e.currentTarget.value) {
      clearImages()
        .then(res => dispatch(res))
    }
    // delayedQuery()
  }

  useEffect(() => {
    delayedQuery();

    // cancel the debounce on useEffect cleanup
    return delayedQuery.cancel;
  }, [query, delayedQuery])

  return (
    <div className="search-wrapper">
      <InputText
        query={query}
        onHandleChange={handleChange}
        onHandleKeyPress={handleKeyPress}
      />
      <button
        type="submit"
        name="search"
        className="search-button"
        onClick={onHandleSearch}
      >
        <i className="fa fa-search" />
      </button>
    </div>
  )
};

Search.defaultProps = {
  query: ''
};

Search.propTypes = {
  onHandleTagChange: PropTypes.func.isRequired,
  onHandleSearch: PropTypes.func.isRequired,
  query: PropTypes.string
};

export default Search;
