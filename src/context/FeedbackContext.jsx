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
  const [feedbackEdit, setFeedbackEdit] = useState({ //create state object for add edited item
    item: {},
    edit: false,
  });

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };

  // update feedbackitem (functionality of submit button in form when editing text)
  const updateFeedback = (idOfEdit, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === idOfEdit ? { ...item, ...updItem } : item))
    );

    // FIX: this fixes being able to add a feedback after editing
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  const deleteFeedback = (id) => {
    //function to delete feedback (used context)
    if (window.confirm("Are you sure to delete this feedback ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  /*pass all states in value object "value={{...}}" */
  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback, // feedback state
        deleteFeedback: deleteFeedback, // funnction to delete item
        addFeedback: addFeedback, // funnction to add item
        editFeedback: editFeedback, // funnction run when click edit
        feedbackEdit: feedbackEdit, // variable of state that hold item boolean
        updateFeedback: updateFeedback, // function update item
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
