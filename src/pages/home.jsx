import React from 'react';
import Header from '../components/timeline/header';
import TweetEditor from '../components/timeline/tweet-editor';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <TweetEditor />
    </main>
  );
}

export default Home;