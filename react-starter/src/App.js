import Testcomponent from "./Testcomponent";
import Tweet from "./component/tweet";
import CreateTweet from "./component/CreateTweet";
import TweetList from "./component/TweetList";
import { useState, useEffect } from "react";
import "./style/app.css";
{
  /*use classname to add classes to element tags*/
}
function App() {
  //name is the state, setName is the special function to change the state
  const [name, setName] = useState("John Foo");
  //State lifting, so components can have access
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  //making a function for onclick event
  const sayHelloHandler = (user) => {
    console.log(`Hello there ${user}`);
    setName("Mike Foo");
  };

  //useEffect
  useEffect(() => {
    console.log(textInput);
  }, [textInput]);
  return (
    <div className="App">
      {/* <Testcomponent /> */}
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      {/*adding props, a way for variables to get paseed down into components*/}
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
      {/*Events , onclick*/}
      {/*When we have a function with a paramter 
      we want to invoke, we must use a callback function*/}
      <button onClick={() => sayHelloHandler("Mike")}>Hello</button>
      {/*States, when the value of a variable changes, the UI updates synchronously*/}
      {/*To do so, import useState*/}
    </div>
  );
}

export default App;
