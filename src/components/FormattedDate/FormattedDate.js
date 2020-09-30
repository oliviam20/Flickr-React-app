import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const FormattedDate = ({ date }) => (
  <p className="date">{dayjs(date).format('D MMMM YYYY')}</p>
);

FormattedDate.propTypes = {
  date: PropTypes.string.isRequired
};

export default FormattedDate;
