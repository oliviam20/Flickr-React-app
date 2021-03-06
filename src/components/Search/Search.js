import React, { memo, useEffect, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { store } from '../../store/store';
import { clearImages } from '../../actions/index';
import debounce from 'lodash/debounce';
import Button from '../Button/Button';
import InputText from '../InputText/InputText';
import './Search.scss';

const Search = memo(({
  onHandleTagChange,
  onHandleSearch,
  query
}) => {
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) onHandleSearch();
  };

  const globalState = useContext(store);
  const { dispatch } = globalState;

  // Update the function only when query updates
  const delayedQuery = useCallback(debounce(onHandleSearch, 500), [query]);

  const handleChange = (e) => {
    onHandleTagChange(e);
    if (!e.currentTarget.value) {
      clearImages()
        .then(res => dispatch(res));
    };
  };

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
      <Button
        className="search-button"
        onClick={onHandleSearch}
      >
        <i className="fa fa-search" />
      </Button>
    </div>
  )
});

Search.defaultProps = {
  query: ''
};

Search.propTypes = {
  onHandleTagChange: PropTypes.func.isRequired,
  onHandleSearch: PropTypes.func.isRequired,
  query: PropTypes.string
};

export default Search;
