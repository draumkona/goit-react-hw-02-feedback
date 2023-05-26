import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = props => {
  const { good, neutral, bad } = props;

  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
    </ul>
  );
};

// Statistics.PropTypes = {
//     good: PropTypes.number.isRequired,
// };
