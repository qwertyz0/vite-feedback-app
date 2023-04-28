import { createContext, useState } from "react";
// context api for get access to all components without using props
// for state changes and etc.
// Need "Provider" for connect all components

const FeedbackContext = createContext();

/* wrap all components as children */
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "this item from context",
      rating: 10,
    },
  ]);

  /*pass all states in value object "value={{...}}" */
  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
