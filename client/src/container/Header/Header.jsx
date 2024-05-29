import React from 'react';
import { motion } from 'framer-motion';
import './Header.scss';
import { images } from '../../constants'; // Ensure you have this path correct for your images
import { AppWrap } from '../../wrapper';

const Header = () => (
  <div className="container">
    <div className="content">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="title">Hello, I am Mohamed</h1>
        <p className="description">Backend Developer | Data Scientist</p>
        <a href="#contact" className="contactBtn">Contact Me</a>
      </motion.div>
    </div>

    <motion.div
      className="heroImg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="img-container">
        <img src={images.profile} alt="profile" />
      </div>
    </motion.div>

    <div className="topBlur" />
    <div className="bottomBlur" />
  </div>
);
export default AppWrap(Header, 'home');
