import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './CardList.scss';

const CardList = ({ images }) => {
  const cardsArr = images.map((img, idx) => (
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
  console.log('cardlist', images)
  // console.log('cardsArrr', cardsArr);
  
  if (!cardsArr.length) {
    return (
      <p>nothing here</p>
    )
  }
  return (
    <div className="card-list-wrapper">
      {cardsArr}
    </div>
  )
};

export default CardList;
