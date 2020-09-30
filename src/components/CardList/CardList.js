import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Card from '../Card/Card';
import './CardList.scss';

const CardList = ({ images }) => {
  const cardsArr = images.map(img => (
    <Card
      key={`${img.date_taken}${img.title}`}
      author={img.author}
      date={img.date_taken}
      thumbnail={img.media.m}
      tags={img.tags}
      title={img.title}
      fullImage={img.link}
    />
  ));
  return (
    <div className="card-list-wrapper">
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={200}
      >
        {cardsArr.length && cardsArr}
      </ReactCSSTransitionGroup>
    </div>
  )
};

CardList.defaultProps = {
  images: []
}

CardList.propTypes = {
  images: PropTypes.array
}

export default CardList;
