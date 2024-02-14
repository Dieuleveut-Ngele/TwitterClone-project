import React from 'react';
import { NavLink } from "react-router-dom";
import TweetActions from "../timeline/tweet-actions"

function Tweet({ title, value, text, image, tweetProfile }) {

  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <NavLink to='/profile'> 
        <img src={tweetProfile} alt="profil" /></NavLink> </div>
      <div className="tweet-content">
        <div className="tweet-body">
          <div className="tweet-title">
            <h2 className='tweet-title-author'> {title} </h2>
            <img src="src/components/timeline/images/groupverified.png" alt="valided" className="tweet-title-author" />
            <p className="tweet-title-details"> {value} </p>
          </div>
          <p className="tweet-text"> {text} </p>
          <div className="tweet-image">
            <img src={image} />
          </div>
        </div>
        <div className="tweet-actions">
          <TweetActions />
          </div>
          <div className='tweet-icon3'>

            <img src="" alt="" />  
            
          </div> 
        </div>
      </div>

  )

}
export default Tweet;