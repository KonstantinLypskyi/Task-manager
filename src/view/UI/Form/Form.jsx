import React from 'react';
import PropTypes from 'prop-types';

export const Form = ({ children, onSubmit, className }) => (
  <form
    className={className}
    noValidate
    onSubmit={event => {
      event.preventDefault();
      onSubmit();
    }}
  >
    {children}
  </form>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string
}

