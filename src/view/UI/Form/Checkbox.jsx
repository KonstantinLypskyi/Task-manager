import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './assets/styles.scss';

export const Checkbox = ({ checked, onChange, className }) => (
  <Fragment>
    <input
      className={classNames(className, 'form-checkbox')}
      type="checkbox"
      id="checkbox"
      checked={checked}
      onChange={() => null}
    />
    <label onClick={onChange} htmlFor="checkbox" />
  </Fragment>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
}