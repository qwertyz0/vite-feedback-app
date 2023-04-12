import React from "react";
import { motion, AnimatePresence } from "framer-motion"; //add fade animation
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No data yet ...</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
            <motion.div //fades in and out animation
              key={item.id}
              initial={{ opacity: 0 }} //start like invisible 
              animate={{ opacity: 1 }}// animate full visible
              exit={{ opacity: 0 }}//out insisible
            >
              <FeedbackItem
                key={item.id}
                id={item.id}
                rating={item.rating}
                text={item.text}
                handleDelete={handleDelete}
              />
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );

  /*version without animation */

  // return (
  // <div className="feedback-list">
  //   {feedback.map((item, index) => {
  //     return (
  //       <FeedbackItem
  //         key={index}
  //         id={item.id}
  //         rating={item.rating}
  //         text={item.text}
  //         handleDelete={handleDelete}
  //       />
  //     );
  //   })}
  // </div>
  // );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        // add two types for id (bcs uuidv4 make string id)
        PropTypes.number.isRequired,
        PropTypes.string.isRequired,
      ]),
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
