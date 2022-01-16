import React from "react";
//Props
// a way for passing information into components
//Only one way

//using deconstruction to pass in values
//no need for extracting info using props.name
const Tweet = ({ name, tweet, setTweets, tweets }) => {
  //delete a tweet based on matching tweet message
  //Problem: if 2 tweets have the same tweet message,
  //both will get deleted
  //Solution : Use UUID , unique id

  const deleteTweet = () => {
    setTweets(tweets.filter((state) => state.id !== tweet.id));
  };
  return (
    <div className="tweet">
      <h2 className="tweet-title">Name {name}</h2>
      <h3>{tweet.message}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
