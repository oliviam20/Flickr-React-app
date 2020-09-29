import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
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
        <p className="date">{dayjs(date).format('D MMMM YYYY')}</p>
        <a href={fullImage} rel="noopener noreferrer" target="_blank">Link to full image</a>
      </div>
    </div>
  )
}

export default Card;
