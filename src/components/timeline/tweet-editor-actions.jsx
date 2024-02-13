import MediaTopTweets from "./images/icons/Media-Top-Tweets.png";
import GifTopTweets from "./images/icons/Gif-Top-Tweets.png";
import PollTopTweets from "./images/icons/Poll-Top-Tweets.png";
import ImageTopTweets from "./images/icons/Image-Top-Tweets.png";
import ScheduleTopTweets from "./images/icons/Schedule-Top-Tweets.png";

function TweetEditorActions() {
    return (
        <>
            <div className="tweet-editor-actions">
                <img src={MediaTopTweets}  alt="icon-media" />
                <img src={GifTopTweets} alt="icon-gif" />
                <img src={PollTopTweets} alt="icon-poll" />
                <img src={ImageTopTweets} alt="icon-emoji" />
                <img src={ScheduleTopTweets} alt="icon-schedule" />
            </div>
        </>
    );
}

export default  TweetEditorActions;