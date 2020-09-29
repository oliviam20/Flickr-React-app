import React from 'react';
import PropTypes from 'prop-types';
import './Search.scss';

const Search = ({
  onHandleTagChange,
  onHandleClick
}) => {
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) onHandleClick(e)
  }

  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search..."
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
        <i className="fa fa-search"></i>
      </button>
    </div>
  )
};

Search.propTypes = {
  onHandleTagChange: PropTypes.func.isRequired,
  onHandleClick: PropTypes.func.isRequired
};

export default Search;
