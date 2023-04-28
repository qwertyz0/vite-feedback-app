import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext); // same with all context use

  //calculate avarage rating showed feedbacks
  //'acc' - is free variable to plus rating of all items, using cur.rating
  // 0 for default state of 'acc'
  let avarage =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  avarage = avarage.toFixed(1).replace(/[.,]0$/, "");
  // (/[.,]0$/, '') - regular expression to replace 0 if number without . or ,

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Avarage rating: {isNaN(avarage) ? "0" : avarage}</h4>
    </div>
  );
}

export default FeedbackStats;
