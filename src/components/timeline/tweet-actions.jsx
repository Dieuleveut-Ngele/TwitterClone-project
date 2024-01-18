import React from 'react';
import iconButonOne from './images/icons/Buton.png';
import iconButonTwo from './images/icons/Butontwo.png';
import iconButonThree from './images/icons/Butonthree.png';
import iconButonForth from './images/icons/Butonforth.png';

function TweetActions () {
    return (
        <>
            <div className="tweet-actions">
                        <div className="tweet-action">
                            <img src={iconButonOne} alt="" />
                            <p>0</p>
                        </div>
                        <div className="tweet-action">
                            <img src={iconButonTwo} alt="" />
                            <p>0</p>
                        </div>
                        <div className="tweet-action">
                            <img src={iconButonThree} alt="" />
                            <p>0</p>
                        </div>
                        <div className="tweet-action">
                            <img src={iconButonForth} alt="" />
                        </div>
                    </div>
        </>
    )
}

export default TweetActions;