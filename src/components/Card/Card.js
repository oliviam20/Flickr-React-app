import React from 'react';
import PropTypes from 'prop-types';
import FormattedDate from '../FormattedDate/FormattedDate';
import FormattedText from '../FormattedText/FormattedText';
import Image from '../Image/Image';
import Tag from '../Tag/Tag';
import './Card.scss';

const Card = ({
  author,
  date,
  thumbnail,
  tags,
  title,
  fullImage,
}) => {
  const tagsArr = tags && tags.split(' ').map(tag => <Tag key={`${tag}${date}`} tag={tag} />);
  return (
    <figure className="card-wrapper">
      <Image
        thumbnail={thumbnail}
        title={title}
      />
      <figcaption>
        {author && <FormattedText text={author} />}
        {date && <FormattedDate date={date} />}
        <a href={fullImage} rel="noopener noreferrer" target="_blank">Link to full image</a>
      </figcaption>
      {tags && <ul>
        {tagsArr}
      </ul>}
    </figure>
  )
}

Card.defaultProps = {
  author: '',
  date: '',
  thumbnail: '',
  tags: '',
  title: '',
  fullImage: ''
}

Card.propTypes = {
  author: PropTypes.string,
  date: PropTypes.string,
  thumbnail: PropTypes.string,
  tags: PropTypes.string,
  title: PropTypes.string,
  fullImage: PropTypes.string
}

export default Card;
