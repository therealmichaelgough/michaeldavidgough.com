import React from 'react';
import PropTypes from 'prop-types';
import Reveal from '../Reveal/Reveal';

const Title = ({ title }) => (
  <Reveal bottom duration={1000} delay={300} distance="0px">
    <h2 className="section-title">{title}</h2>
  </Reveal>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
