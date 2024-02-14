import React from 'react';
import Header from '../components/timeline/header';
import TweetEditor from '../components/timeline/tweet-editor';
import Tweets from '../components/timeline/tweets';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <TweetEditor />
      <Tweets />
    </main>
  );
}

export default Home;