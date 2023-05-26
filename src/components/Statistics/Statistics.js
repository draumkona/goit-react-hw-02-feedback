import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = props => {
  const { good, neutral, bad, total, positive } = props;

  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positive}%</li>
    </ul>
  );
};

// Statistics.PropTypes = {
//     good: PropTypes.number.isRequired,
// };
