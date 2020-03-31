import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(singleEmoji => (
          <Emoji
            key={singleEmoji.id}
            name={singleEmoji.name}
            emoji={singleEmoji.emoji}
            meaning={singleEmoji.meaning}
          />
        ))}
      </dl>
    </div>
  );
}
export default App;