import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { images } from '../constants';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/mohamed-abdelfattah-65b984247" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href="https://github.com/MohamedAbdelfattah022" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://codeforces.com/profile/Mohamed_Abdelfattah_" target="_blank" rel="noopener noreferrer">
        <img src={images.codeforces} alt="Codeforces" /> {/* This can represent Codeforces */}
      </a>
    </div>
    <div>
      <a href="https://leetcode.com/u/Mohamed_Abdelfattah/" target="_blank" rel="noopener noreferrer">
        <img src={images.leetcode} alt="LeetCode" /> {/* This can represent LeetCode */}
      </a>
    </div>
  </div>
);

export default SocialMedia;
