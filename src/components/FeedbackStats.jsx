import React from "react";
import PropTypes from "prop-types";

function FeedbackStats({ feedbackStat }) {
  //calculate avarage rating showed feedbacks
  //'acc' - is free variable to plus rating of all items, using cur.rating
  // 0 for default state of 'acc'
  let avarage =
    feedbackStat.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbackStat.length;

  avarage = avarage.toFixed(1).replace(/[.,]0$/, "");
  // (/[.,]0$/, '') - regular expression to replace 0 if number without . or ,

  return (
    <div className="feedback-stats">
      <h4>{feedbackStat.length} Reviews</h4>
      <h4>Avarage rating: {isNaN(avarage) ? "0" : avarage}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedbackStat: PropTypes.array.isRequired,
};

export default FeedbackStats;
