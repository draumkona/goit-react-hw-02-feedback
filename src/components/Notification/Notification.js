import React from 'react';
import PropTypes from 'prop-types';

export const Notification = props => {
  const { message } = props;
  return <p>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
