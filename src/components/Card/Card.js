import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({
  author,
  date,
  thumbnail,
  tags,
  title,
  fullImage,
}) => {
  console.log('card');

  return (
    <div className="card-wrapper">
      <img src={thumbnail} alt={title} />
      <div className="details-wrapper">
        <p>By {author.match(/"(.*?)"/)[1]}</p>
      </div>
    </div>
  )
}

export default Card;
