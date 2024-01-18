import React from 'react';
import Avatar from "./avatar";
import TweetEditorForm from "./tweet-editor-form.jsx";


function TweetEditor() {
    return (
        <>
            <div className="tweet-editor">
                <Avatar />
                <TweetEditorForm />
                
            </div>
        </>
    )
}

export default TweetEditor;