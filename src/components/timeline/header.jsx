import React from 'react';
import imgTopTweets from './images/Top-Tweets.png';

function Header() {
  return (
    <header className="header">
       <p className="page-title"></p>
       <img src={imgTopTweets} className="top-tweets"/>
    </header>  
  )  
};

export default Header;