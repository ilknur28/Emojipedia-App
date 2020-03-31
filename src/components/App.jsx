import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";

function createEmoji(singleEmoji){
  return <Emoji 
  key={singleEmoji.id}
  name={singleEmoji.name}
  emoji={singleEmoji.emoji}
  meaning={singleEmoji.meaning}

  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
    {emojipedia.map(createEmoji)}

      {/* <Emoji
      emoji="💪"
      name="Tense Biceps"
      meaning="You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
       /> */}
       </dl>

      
    </div>
  );
}

export default App;
