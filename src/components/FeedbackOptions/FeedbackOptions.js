import React from 'react';
import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;
  const optionKeys = Object.keys(options);

  return (
    <ul className={css.optionList}>
      {optionKeys.map((option, index) => {
        return (
          <li key={index}>
            <button type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
