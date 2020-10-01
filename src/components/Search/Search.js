import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
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

  // Update the function only when query updates
  const delayedQuery = useCallback(debounce(onHandleSearch, 500), [query]);

  const handleChange = (e) => {
    onHandleTagChange(e)
    // delayedQuery()
  }

  useEffect(() => {
    delayedQuery();

    // cancel the debounce on useEffect cleanup
    return delayedQuery.cancel;
  }, [query, delayedQuery])

  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        name="search"
        className="search-bar"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
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
