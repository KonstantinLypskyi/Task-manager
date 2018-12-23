import React from 'react';
import PropTypes from 'prop-types';

import './assets/styles.scss';

export const Wrapper = ({ children }) => (
    <div className="wrapper">{children}</div>
);

Wrapper.propTypes = {
    children: PropTypes.element.isRequired
}