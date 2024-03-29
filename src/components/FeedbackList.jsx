import React from "react";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion"; //add fade animation
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from './shared/Spinner'

function FeedbackList() {
  // if use context, dont need feedback props anymore
  //we pass it from context api

  const { feedback, isLoading } = useContext(FeedbackContext); //pass context from global api FeedbackContext
  //and use "feedback" state that created in context file
  // isLoading boolean state

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No data yet ...</p>;
  }

  // make cheking for loading data to return feedbacks
  return isLoading ? (
    <Spinner/> //spinner gif if data loading
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div //fades in and out animation
            key={item.id}
            initial={{ opacity: 0 }} //start like invisible
            animate={{ opacity: 1 }} // animate full visible
            exit={{ opacity: 0 }} //out insisible
          >
            <FeedbackItem
              key={item.id}
              id={item.id}
              rating={item.rating}
              text={item.text}
              item={item}
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

export default FeedbackList;
