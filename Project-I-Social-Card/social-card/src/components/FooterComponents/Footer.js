import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-div">
      <div className = "footer">
        <p className = 'comment'><i class="far fa-comment"></i></p>
        <p className = 'retweet'><i class="fas fa-retweet"></i></p>
        <p className = 'heart'><i class="far fa-heart"></i></p>
        <p className = 'envelope'><i class="far fa-envelope"></i></p>
      </div>
    </div>
  );
};

export default Footer;
