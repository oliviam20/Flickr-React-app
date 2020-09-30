import React from 'react';
import PropTypes from 'prop-types';
import './Search.scss';

const Search = ({
  onHandleTagChange,
  onHandleClick,
  searchTerm
}) => {
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) onHandleClick(e)
  }

  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        name="search"
        className="search-bar"
        onChange={onHandleTagChange}
        onKeyDown={handleKeyPress}
      />
      <button
        type="submit"
        name="search"
        className="search-button"
        onClick={onHandleClick}
      >
        <i className="fa fa-search" />
      </button>
    </div>
  )
};

Search.propTypes = {
  onHandleTagChange: PropTypes.func.isRequired,
  onHandleClick: PropTypes.func.isRequired
};

export default Search;
