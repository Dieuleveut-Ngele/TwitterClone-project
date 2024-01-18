import React from 'react';
import TweetEditorInput from './tweet-editor-input';
import TweetEditorButtons from './tweet-editor-buttons';

function TweetEditorForm() {
    return (
        <>
            <div className="tweet-editor-form">
                <TweetEditorInput />
                <TweetEditorButtons />
            </div>
        </>
    )
}
export default TweetEditorForm;