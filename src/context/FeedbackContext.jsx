import { createContext, useState } from "react";
// context api for get access to all components without using props
// for state changes and etc.
// Need "Provider" for connect all components
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

/* wrap all components as children in App.jsx */
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feedback item 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is feedback item 2",
      rating: 9,
    },
    {
      id: 3,
      text: "This is feedback item 3",
      rating: 7,
    },
  ]);

  const deleteFeedback = (id) => {
    //function to delete feedback (used props chain)
    if (window.confirm("Are you sure to delete this feedback ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    //console.log(newFeedback)
  };


  /*pass all states in value object "value={{...}}" */
  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback, // feedback state
        deleteFeedback: deleteFeedback, // funnction to delete item
        addFeedback: addFeedback, // funnction to add item
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
