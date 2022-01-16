import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTweet = ({ textInput, setTextInput, tweets, setTweets }) => {
  //synchronously updates the state value to match textarea
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitTweetHandler = (e) => {
    e.preventDefault();
    //creating an objects for each tweet, so we can
    //incorporate the UUID for identification later
    setTweets([...tweets, { message: textInput, id: uuidv4() }]);
    setTextInput("");
  };
  return (
    <form onSubmit={submitTweetHandler}>
      {/*make sure to assign value = state so that it resets the state when submit button is pressed*/}
      <textarea
        value={textInput}
        onChange={userInputHandler}
        cols="50"
        rows="5"
      ></textarea>
      <h2 onClick={() => setTextInput("")}>Text area displays {textInput}</h2>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
