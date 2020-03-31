import React from "react";
import emojipedia from "../emojipedia";

function Emoji(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );

  {
    /* <div className="term">
        <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
            💪 
            </span>
            <span>Tense Biceps</span>
        </dt>
        <dd>
            “You can do that!” or “I feel strong!” Arm with tense biceps. Also
            used in connection with doing sports, e.g. at the gym.
        </dd>
        </div>
        <div className="term">
        <dt>
            <span className="emoji" role="img" aria-label="Folded Hands">
            🙏
            </span>
            <span>Person With Folded Hands</span>
        </dt>
        <dd>
            Two hands pressed together. Is currently very introverted, saying a
            prayer, or hoping for enlightenment. Is also used as a “high five”
            or to say thank you.
        </dd>
        </div>
        <div className="term">
        <dt>
            <span className="emoji" role="img" aria-label="Winking Face">
            😉
            </span>
            <span>Winking Face</span>
        </dt>
        <dd>
        A yellow face with a slight smile shown winking, usually its left eye.
        May signal a joke, flirtation, hidden meaning, or general positivity.
        Tone varies, including playful, affectionate, suggestive, or ironic..
        </dd>
        </div> */
  }
}

export default Emoji;
