import React from 'react';
import TweetEditorActions from "./tweet-editor-actions";
import TweetButton from "./tweet-button";

function TweetEditorButtons() {
    return (
        
            <div className="tweet-editor-buttons">
                <TweetEditorActions />
                <TweetButton style={"button"}/>
            </div>
    )
}
export default TweetEditorButtons;