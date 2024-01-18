import React from 'react';
import TweetActions from "./tweet-actions";
import TweetButton from "./tweet-button";

function TweetEditorButtons() {
    return (
        
            <div className="tweet-editor-buttons">
                <TweetActions />
                <TweetButton style={"button"}/>
            </div>
    )
}
export default TweetEditorButtons;