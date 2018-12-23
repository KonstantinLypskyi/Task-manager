import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './assets/styles.scss';

export const Input = ({
  value,
  type,
  onChange,
  placeholder,
  onFocus,
  onBlur,
  required,
  className
}) => (
  <input
    className={classNames(className, 'form-input')}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    onFocus={onFocus}
    onBlur={onBlur}
    required={required}
  />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool
}