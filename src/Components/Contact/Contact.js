import React from 'react';
import PropTypes from 'prop-types';

import './Contact.scss';

const Contact = ({ name, number }) => (
  <>
    <span className="name">{name}:</span>
    <span className="name">{number}</span>
  </>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
